# 05 工具调用

## 本章目标

工具调用是 Agent 开发的分水岭。没有工具，模型只能生成文本；有了工具，Agent 才能查询数据、调用系统、读写文件、执行代码。

本章会讲：

- 工具的设计原则。
- 工具 schema 应该怎么写。
- 如何执行工具并处理错误。
- 如何控制工具权限和副作用。

## 工具是什么

工具是 Agent 可以调用的外部能力。

```ts
type Tool = {
  name: string;
  description: string;
  parameters: JsonSchema;
  run: (args: unknown, context: ToolContext) => Promise<ToolResult>;
};
```

工具不是 prompt。工具必须有真实执行逻辑。

常见工具包括：

- 搜索知识库。
- 查询数据库。
- 调用 HTTP API。
- 读取文件。
- 写入文件。
- 执行代码。
- 发送消息。
- 创建任务。

## 工具描述决定调用质量

模型选择工具时，主要看工具名、描述和参数说明。

不好的工具描述：

```txt
name: query
description: 查询东西
```

好的工具描述：

```txt
name: search_knowledge_base
description: 当用户问题需要基于内部文档、产品说明、制度或历史资料回答时，检索知识库并返回相关片段。
```

工具名应该具体。描述应该说明什么时候用、什么时候不用。

## 参数 schema

参数应该尽量明确：

```ts
const searchKnowledgeBase = {
  name: 'search_knowledge_base',
  description: '检索知识库，返回与问题相关的资料片段',
  parameters: {
    type: 'object',
    properties: {
      query: {
        type: 'string',
        description: '用于检索的自然语言问题'
      },
      topK: {
        type: 'number',
        description: '最多返回多少条结果'
      }
    },
    required: ['query']
  }
};
```

不要把参数设计得太自由。参数越自由，越难校验，越容易误用。

## 工具结果

工具结果建议结构化：

```ts
type ToolResult = {
  ok: boolean;
  data?: unknown;
  error?: string;
  displayText?: string;
};
```

`data` 给程序和模型使用，`displayText` 给用户界面展示。两者可以不同。

比如知识库搜索结果：

```json
{
  "ok": true,
  "data": [
    {
      "title": "报销制度",
      "content": "单笔超过 5000 元需要部门负责人审批",
      "score": 0.82
    }
  ],
  "displayText": "找到 1 条相关资料"
}
```

## 工具执行器

不要让模型直接运行任意函数。应该有一个工具执行器：

```ts
class ToolRunner {
  constructor(private tools: Tool[]) {}

  async run(call: ToolCall, context: ToolContext) {
    const tool = this.tools.find((item) => item.name === call.name);
    if (!tool) {
      return { ok: false, error: `工具不存在：${call.name}` };
    }

    const validation = validate(tool.parameters, call.arguments);
    if (!validation.ok) {
      return { ok: false, error: validation.error };
    }

    return tool.run(call.arguments, context);
  }
}
```

工具执行器负责：

- 找工具。
- 校验参数。
- 检查权限。
- 处理超时。
- 捕获错误。
- 记录日志。

## 并行工具调用

有些工具可以并行：

```txt
同时搜索知识库、查询 CRM、读取订单系统。
```

有些不应该并行：

```txt
先创建订单，再支付订单。
```

判断原则：

- 读操作通常可以并行。
- 写操作通常要顺序执行。
- 有依赖关系的工具必须顺序执行。
- 高风险工具需要人工确认。

## 工具权限

每个工具都应该有权限边界：

```ts
type ToolContext = {
  userId: string;
  tenantId: string;
  permissions: string[];
  requestId: string;
};
```

执行前检查：

```ts
if (!context.permissions.includes('orders:read')) {
  return { ok: false, error: '没有读取订单的权限' };
}
```

不要只靠 prompt 告诉模型“不要调用”。权限必须由程序执行。

## 副作用工具

副作用工具会改变外部状态：

- 删除数据。
- 发邮件。
- 扣款。
- 创建订单。
- 更新权限。

这类工具要更严格：

1. 参数强校验。
2. 幂等设计。
3. 操作前确认。
4. 操作后审计。
5. 失败可恢复。

可以把工具分级：

| 等级 | 类型 | 是否需要确认 |
| --- | --- | --- |
| safe | 只读查询 | 通常不需要 |
| low-risk | 创建草稿 | 可按场景决定 |
| high-risk | 发出邮件、删除数据、支付 | 必须确认 |

## 工具调用记录

每次工具调用都应该记录：

```ts
type ToolTrace = {
  toolName: string;
  arguments: unknown;
  result: unknown;
  ok: boolean;
  startedAt: string;
  endedAt: string;
  durationMs: number;
};
```

没有工具记录，就无法调试 Agent。

用户问“为什么你这么回答”，你也无法解释。

## 本章练习

实现三个工具：

1. `get_current_time`：只读工具。
2. `search_notes`：从本地数组中搜索笔记。
3. `create_todo`：创建待办事项，但执行前必须让用户确认。

要求：

- 每个工具都有 schema。
- 参数必须校验。
- 每次调用都保存 trace。
- `create_todo` 必须先返回确认请求，不能直接执行。

做完这一章，你的 Agent 已经具备真实行动能力。
