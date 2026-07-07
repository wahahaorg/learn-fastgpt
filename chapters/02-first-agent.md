# 02 第一个可运行 Agent

## 本章目标

这一章写一个最小 Agent。它不需要知识库，不需要复杂 UI，也不需要数据库。目标只有一个：让模型在循环中决定“回答”还是“调用工具”。

我们先用 TypeScript 风格的伪代码描述。你可以用任何语言实现。

## 最小结构

一个 Agent 至少需要三类输入：

- 用户消息。
- 系统提示词。
- 工具列表。

```ts
type ToolCall = {
  name: string;
  arguments: Record<string, unknown>;
};

type ModelResult =
  | { type: 'answer'; content: string }
  | { type: 'tool_call'; calls: ToolCall[] };

type Tool = {
  name: string;
  description: string;
  parameters: Record<string, unknown>;
  run: (args: Record<string, unknown>) => Promise<string>;
};
```

这套类型表达了 Agent 的核心分支：模型要么回答，要么请求工具。

## 第一个工具

先写一个没有风险的工具：

```ts
const getCurrentTime: Tool = {
  name: 'get_current_time',
  description: '获取当前时间',
  parameters: {
    type: 'object',
    properties: {
      timezone: { type: 'string', description: '时区，例如 Asia/Shanghai' }
    },
    required: ['timezone']
  },
  async run(args) {
    return `当前时间是 ${new Date().toISOString()}，请求时区是 ${args.timezone}`;
  }
};
```

工具有两个面：

- 给模型看的描述：名字、用途、参数。
- 给程序执行的函数：`run`。

这两个面必须保持一致。描述写得越清楚，模型越容易在正确时候调用。

## Agent 循环

最小循环如下：

```ts
async function runAgent(input: {
  systemPrompt: string;
  userInput: string;
  tools: Tool[];
  maxTurns: number;
}) {
  const messages = [
    { role: 'system', content: input.systemPrompt },
    { role: 'user', content: input.userInput }
  ];

  for (let turn = 0; turn < input.maxTurns; turn++) {
    const result = await callModel({ messages, tools: input.tools });

    if (result.type === 'answer') {
      return result.content;
    }

    for (const call of result.calls) {
      const tool = input.tools.find((item) => item.name === call.name);
      if (!tool) {
        messages.push({
          role: 'tool',
          content: `工具不存在：${call.name}`
        });
        continue;
      }

      const output = await tool.run(call.arguments);
      messages.push({
        role: 'tool',
        content: output
      });
    }
  }

  return '任务没有在最大轮数内完成。';
}
```

这个循环已经是 Agent 的雏形。真正的系统会更复杂，但核心不会变。

## 为什么要有 maxTurns

Agent 可能陷入循环：

```txt
模型：我要调用搜索工具
工具：没有结果
模型：我要换个关键词再搜
工具：没有结果
模型：我要继续搜索
...
```

所以必须限制最大轮数。没有 `maxTurns` 的 Agent 不能上线。

常见限制包括：

- 最大模型调用次数。
- 最大工具调用次数。
- 最大运行时间。
- 最大 token 消耗。
- 最大费用。

工程上，任何循环都要有刹车。

## 错误如何返回给模型

工具失败时，不要直接让整个 Agent 崩溃。应该把错误变成模型可理解的观察结果：

```ts
try {
  const output = await tool.run(call.arguments);
  messages.push({ role: 'tool', content: output });
} catch (error) {
  messages.push({
    role: 'tool',
    content: `工具调用失败：${String(error)}`
  });
}
```

这样模型可以决定：

- 换一个工具。
- 修改参数重试。
- 向用户说明失败原因。
- 询问用户补充信息。

但注意，不是所有错误都应该让模型自己处理。支付、删除、权限等高风险动作失败，应该走业务错误处理，而不是交给模型猜。

## 最小系统提示词

Agent 的系统提示词应该包含边界：

```txt
你是一个任务助手。
你可以回答用户问题，也可以调用工具。
当需要实时信息或外部数据时，优先调用工具。
不要编造工具结果。
如果工具失败，说明失败原因并给出下一步建议。
如果信息不足，先询问用户，不要猜测。
```

提示词不是越长越好。第一版只写行为边界，后面再逐步加入格式、风格、权限和业务规则。

## 本章练习

给最小 Agent 增加第二个工具：`calculator`。

要求：

1. 参数包含 `expression`。
2. 只允许四则运算，不允许执行任意代码。
3. 工具失败时返回错误说明。
4. Agent 能回答：“帮我算一下 38 * 17，然后告诉我当前时间。”

完成后，你就有了一个可以多轮调用工具的最小 Agent。
