# 12 综合实战项目

## 本章目标

最后一章把前面学到的内容合成一个完整项目：做一个“知识库客服 Agent 平台”的最小版本。

这个项目不依赖特定开源项目，也不要求你使用某个固定框架。你可以用自己熟悉的技术栈实现。重点是掌握 Agent 产品的核心结构。

你最终会完成：

- 一个可配置的客服 Agent。
- 一个简单知识库。
- 一个工具调用系统。
- 一个 Agent 运行时。
- 一个可查看 trace 的调试页面。
- 一组基础评测案例。

## 项目目标

用户可以上传几篇产品文档，然后向 Agent 提问。Agent 会检索知识库，必要时调用工具，并给出带引用的回答。

示例问题：

```txt
如何申请退款？
我的订单什么时候发货？
这个功能支持团队协作吗？
帮我写一封给客户的解释邮件。
```

## 功能范围

第一版只做这些：

- 创建一个 Agent。
- 配置系统提示词。
- 上传文档并切分。
- 基于关键词或向量检索文档。
- Agent 根据检索结果回答。
- 支持两个工具：查询订单、创建工单草稿。
- 高风险工具需要确认。
- 保存每次运行的 trace。
- 提供 20 个评测案例。

暂时不做：

- 复杂权限后台。
- 多模型路由。
- 多 Agent 协作。
- 复杂可视化工作流。
- 自动计费系统。

学习项目要克制范围。先跑通完整闭环，再逐步增强。

## 数据模型

从这些模型开始：

```ts
type AgentConfig = {
  id: string;
  name: string;
  systemPrompt: string;
  toolIds: string[];
  knowledgeBaseIds: string[];
  maxTurns: number;
};

type Document = {
  id: string;
  title: string;
  text: string;
  chunks: DocumentChunk[];
};

type DocumentChunk = {
  id: string;
  documentId: string;
  text: string;
};

type Run = {
  id: string;
  agentId: string;
  input: string;
  status: 'running' | 'paused' | 'completed' | 'failed';
  output?: string;
};

type TraceStep = {
  runId: string;
  index: number;
  type: 'retrieval' | 'model' | 'tool' | 'final';
  input: unknown;
  output: unknown;
  durationMs: number;
};
```

第一版可以用内存或本地文件保存。等流程稳定后，再换数据库。

## 第一步：实现知识库

先实现文档导入：

```ts
function splitText(text: string, chunkSize = 800) {
  const chunks: string[] = [];

  for (let i = 0; i < text.length; i += chunkSize) {
    chunks.push(text.slice(i, i + chunkSize));
  }

  return chunks;
}
```

再实现检索。第一版可以先用关键词匹配：

```ts
function searchDocuments(question: string, chunks: DocumentChunk[]) {
  const terms = question.toLowerCase().split(/\s+/);

  return chunks
    .map((chunk) => {
      const text = chunk.text.toLowerCase();
      const score = terms.filter((term) => text.includes(term)).length;
      return { chunk, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
}
```

向量检索可以放到第二版。先把 RAG 链路跑通更重要。

## 第二步：定义工具

实现两个工具：

```ts
type Tool = {
  name: string;
  description: string;
  riskLevel: 'low' | 'medium' | 'high';
  run: (args: unknown) => Promise<unknown>;
};
```

查询订单：

```ts
const getOrderTool: Tool = {
  name: 'get_order',
  description: '查询用户订单状态',
  riskLevel: 'medium',
  async run(args) {
    return {
      orderId: 'demo-order',
      status: 'shipped',
      estimatedDelivery: '3 days'
    };
  }
};
```

创建工单草稿：

```ts
const createTicketDraftTool: Tool = {
  name: 'create_ticket_draft',
  description: '创建客服工单草稿，不直接提交',
  riskLevel: 'high',
  async run(args) {
    return {
      draftId: 'draft-001',
      status: 'waiting_for_confirmation'
    };
  }
};
```

注意这里是草稿，不是直接提交。学习阶段先把高风险操作变成“准备动作”，再要求用户确认。

## 第三步：编写系统提示词

系统提示词可以这样开始：

```txt
你是一个客服 Agent。

规则：
1. 优先根据知识库资料回答。
2. 如果资料不足，要说明不知道，不要编造。
3. 回答涉及订单状态时，可以调用 get_order。
4. 创建工单草稿前，要说明原因并等待用户确认。
5. 引用知识库时，给出资料标题。
```

提示词不要试图承担所有安全责任。权限、确认、预算这些事情要由代码控制。

## 第四步：实现运行时

运行时主流程：

```txt
接收用户问题
检索知识库
构造消息
调用模型
如果需要工具，执行工具
把工具结果放回上下文
继续调用模型
生成最终回答
保存 trace
```

伪代码：

```ts
async function runCustomerAgent(input: string, agent: AgentConfig) {
  const run = createRun(agent.id, input);
  const state = createRuntimeState(run);

  while (!shouldStop(state)) {
    const retrieval = searchDocuments(input, getChunks(agent.knowledgeBaseIds));
    recordTrace(run.id, 'retrieval', input, retrieval);

    const messages = buildMessages({
      systemPrompt: agent.systemPrompt,
      userInput: input,
      retrieval
    });

    const modelResult = await callModel(messages, getTools(agent.toolIds));
    recordTrace(run.id, 'model', messages, modelResult);

    if (modelResult.type === 'tool_call') {
      const tool = getTool(modelResult.toolName);

      if (tool.riskLevel === 'high') {
        pauseForConfirmation(run.id, modelResult);
        return;
      }

      const result = await tool.run(modelResult.args);
      recordTrace(run.id, 'tool', modelResult, result);
      state.messages.push(toToolMessage(result));
      continue;
    }

    completeRun(run.id, modelResult.text);
    return modelResult.text;
  }

  failRun(run.id, '达到最大执行轮数');
}
```

这段伪代码还有一个明显问题：每一轮都重新检索同一个问题。你可以在第一版接受它，第二版再优化成“只在需要时检索”。

## 第五步：做调试页面

调试页面至少显示：

- 用户输入。
- 最终回答。
- 检索命中的文档片段。
- 模型输入摘要。
- 工具调用记录。
- 每一步耗时。
- 错误信息。

一个好的调试页面比漂亮首页更重要。Agent 开发过程中，开发者每天都要看 trace。

## 第六步：加入评测

准备 20 个案例：

```ts
const evalCases = [
  {
    id: 'refund-basic',
    input: '怎么退款？',
    expected: {
      mustContain: ['退款'],
      citations: ['退款政策']
    }
  },
  {
    id: 'order-status',
    input: '我的订单到哪了？',
    expected: {
      toolCalls: ['get_order']
    }
  }
];
```

每次修改提示词、检索逻辑或工具说明后运行评测。

## 里程碑顺序

建议按这个顺序做：

1. 跑通普通问答。
2. 加入文档切分和检索。
3. 让回答带引用。
4. 加入工具注册表。
5. 让 Agent 能调用查询工具。
6. 加入高风险工具确认。
7. 保存 trace。
8. 做调试页面。
9. 增加评测集。
10. 优化失败案例。

不要一开始就做复杂画布和插件市场。Agent 平台的核心是运行闭环、可控行动和可验证质量。

## 验收清单

完成项目后，检查这些问题：

- Agent 能回答知识库中的问题吗？
- 资料不足时会承认不知道吗？
- 回答是否带引用？
- 订单问题是否调用工具？
- 高风险工具是否暂停确认？
- 每次运行是否保存 trace？
- 失败时能看出失败在哪一步吗？
- 评测案例是否能重复运行？
- 是否有限制最大轮数和成本？
- 是否避免把权限交给模型决定？

如果这些都能做到，你已经掌握了 Agent 开发的主干能力。

## 下一步

完成最小项目后，可以继续扩展：

- 把关键词检索换成向量检索。
- 加入 rerank。
- 支持多知识库。
- 支持工作流画布。
- 支持 Agent 版本发布。
- 加入用户反馈闭环。
- 加入线上指标和告警。
- 支持更多工具和权限策略。

从这里开始，你就可以根据业务场景继续深入：企业知识助手、客服 Agent、数据分析 Agent、研发助手、销售助手，底层结构都是相通的。
