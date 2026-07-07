# 08 Agent 运行时

## 本章目标

前面的章节已经讲了消息、记忆、计划、工具、知识库和工作流。现在要把这些能力放进一个稳定运行的“运行时”里。

运行时不是模型，也不是某一个工具。它是负责驱动 Agent 持续运行的程序框架。

本章会讲：

- Agent 运行时要负责什么。
- 如何设计事件流和执行状态。
- 如何支持暂停、恢复、重试和中断。
- 如何把流式输出、工具调用和计划更新串起来。

## 什么是运行时

一个 Agent 不是调用一次大模型就结束。真实 Agent 往往会经历多轮循环：

```txt
读取任务 -> 构造上下文 -> 调用模型 -> 执行工具 -> 更新状态 -> 决定下一步
```

运行时负责管理这条循环。

可以把运行时理解成 Agent 的“操作系统”。模型负责思考和生成，工具负责行动，运行时负责调度。

## 运行时的职责

一个最小可用的 Agent 运行时通常需要负责：

- 保存会话状态。
- 构造模型输入。
- 调用模型。
- 解析模型输出。
- 执行工具。
- 记录每一步事件。
- 判断是否结束。
- 处理错误和重试。
- 支持暂停和恢复。

如果没有运行时，Agent 很容易变成一段不可控的脚本：出错后不知道停在哪一步，工具执行后不知道结果去了哪里，也无法复盘为什么给出某个答案。

## Run 和 Step

建议把一次完整执行称为 Run，把其中每一轮称为 Step：

```ts
type AgentRun = {
  id: string;
  userId: string;
  status: 'running' | 'paused' | 'completed' | 'failed' | 'cancelled';
  input: string;
  output?: string;
  createdAt: number;
  updatedAt: number;
};

type AgentStep = {
  id: string;
  runId: string;
  index: number;
  type: 'model' | 'tool' | 'plan' | 'memory' | 'final';
  status: 'running' | 'completed' | 'failed';
  input: unknown;
  output?: unknown;
  error?: string;
  startedAt: number;
  endedAt?: number;
};
```

Run 解决“这次任务整体是什么状态”，Step 解决“中间发生过什么”。

## 事件流

运行时最好把执行过程转换成事件：

```ts
type AgentEvent =
  | { type: 'run.started'; runId: string }
  | { type: 'model.delta'; text: string }
  | { type: 'tool.started'; toolName: string; args: unknown }
  | { type: 'tool.completed'; toolName: string; result: unknown }
  | { type: 'plan.updated'; steps: unknown[] }
  | { type: 'run.completed'; output: string }
  | { type: 'run.failed'; error: string };
```

事件流有三个好处：

- 前端可以实时展示进度。
- 后端可以持久化执行轨迹。
- 调试时可以按时间顺序复盘。

不要只保存最终回答。真正难排查的问题通常藏在中间步骤里。

## 最小运行循环

下面是一个简化的运行循环：

```ts
async function runAgent(input: string) {
  const state = createInitialState(input);

  emit({ type: 'run.started', runId: state.runId });

  while (!state.done) {
    const messages = buildMessages(state);
    const modelResult = await callModel(messages);

    if (modelResult.type === 'final') {
      state.output = modelResult.text;
      state.done = true;
      emit({ type: 'run.completed', output: modelResult.text });
      break;
    }

    if (modelResult.type === 'tool_call') {
      emit({
        type: 'tool.started',
        toolName: modelResult.toolName,
        args: modelResult.args
      });

      const toolResult = await runTool(modelResult.toolName, modelResult.args);

      emit({
        type: 'tool.completed',
        toolName: modelResult.toolName,
        result: toolResult
      });

      state.messages.push(toToolMessage(toolResult));
    }
  }

  return state.output;
}
```

这段代码只表达主干。真实工程里还需要超时、权限、重试、预算和日志。

## 停止条件

Agent 必须有明确停止条件，否则会无限循环。

常见停止条件：

- 模型返回最终答案。
- 达到最大轮数。
- 达到最大工具调用次数。
- 达到成本预算。
- 用户取消。
- 工具连续失败。
- 等待人工确认。

示例：

```ts
function shouldStop(state: AgentState) {
  if (state.done) return true;
  if (state.turns >= state.maxTurns) return true;
  if (state.toolCalls >= state.maxToolCalls) return true;
  if (state.cost >= state.maxCost) return true;
  if (state.cancelled) return true;
  return false;
}
```

停止条件不是附加功能，而是 Agent 安全性的基础。

## 暂停与恢复

真实 Agent 经常需要暂停：

- 等用户确认。
- 等外部系统回调。
- 等长任务完成。
- 等人工审批。

暂停时要保存：

- 当前 Run 状态。
- 已执行的 Step。
- 当前消息列表。
- 当前计划。
- 等待什么输入。

```ts
type PauseState = {
  runId: string;
  reason: 'human_confirmation' | 'external_callback' | 'rate_limited';
  resumeToken: string;
  payload: unknown;
};
```

恢复时不要从头再跑，而是从保存的状态继续。

## 重试策略

不是所有失败都应该重试。

适合重试：

- 网络超时。
- 临时限流。
- 工具服务短暂不可用。

不适合自动重试：

- 权限不足。
- 参数校验失败。
- 用户明确取消。
- 高风险写操作已经执行。

重试要有次数和退避：

```ts
async function withRetry<T>(fn: () => Promise<T>, maxRetries = 2) {
  let lastError: unknown;

  for (let i = 0; i <= maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      await sleep(500 * (i + 1));
    }
  }

  throw lastError;
}
```

对写操作尤其要谨慎。比如“发送邮件”“创建订单”“扣费”这类操作，必须设计幂等键，避免重试造成重复执行。

## 流式输出

用户不喜欢等待黑盒执行。流式输出能让 Agent 更像一个正在工作的助手。

前端通常需要展示：

- 正在理解任务。
- 正在搜索知识库。
- 正在调用某个工具。
- 正在生成最终答案。

后端可以通过事件流推送：

```txt
run.started
model.delta
tool.started
tool.completed
model.delta
run.completed
```

注意：不要把内部敏感参数直接推给前端。展示“正在查询订单”通常足够，不需要展示完整鉴权信息或内部请求体。

## 运行时状态机

建议把运行时状态设计成状态机：

```txt
created -> running -> paused -> running -> completed
created -> running -> failed
created -> running -> cancelled
```

状态机能避免很多混乱：

- 已完成的 Run 不能继续写入 Step。
- 已取消的 Run 不能恢复。
- 暂停中的 Run 只能等待指定输入。
- 失败的 Run 可以查看错误，但不能假装成功。

## 本章练习

实现一个最小 Agent 运行时：

1. 支持创建 Run。
2. 每轮执行保存 Step。
3. 支持工具调用事件。
4. 支持最大轮数停止。
5. 支持人工确认暂停。
6. 支持从暂停状态恢复。

完成后，你的 Agent 就不再只是一段脚本，而是一个可以被产品使用、可以被调试、可以被恢复的运行系统。
