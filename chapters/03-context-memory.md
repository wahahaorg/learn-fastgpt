# 03 消息、上下文与记忆

## 本章目标

Agent 的能力不只来自模型，还来自它能看到什么。上下文决定 Agent 当下能理解什么，记忆决定 Agent 未来能延续什么。

本章会讲：

- messages 应该如何组织。
- 上下文窗口为什么会成为瓶颈。
- 短期记忆和长期记忆的区别。
- 如何避免错误记忆污染系统。

## messages 是运行时的时间线

模型看到的不是“真实世界”，而是一组消息：

```ts
type Message = {
  role: 'system' | 'user' | 'assistant' | 'tool';
  content: string;
};
```

这些消息构成了 Agent 的时间线：

```txt
system: 你是一个任务助手
user: 帮我查今天的会议安排
assistant: 我需要调用日历工具
tool: 今天 15:00 有项目评审会
assistant: 你今天 15:00 有项目评审会
```

如果消息顺序错了，Agent 的理解也会错。

## system 消息

system 消息定义角色、边界和规则。它应该回答：

- Agent 是谁？
- 可以做什么？
- 不可以做什么？
- 什么时候需要调用工具？
- 什么时候必须询问用户？
- 输出应该是什么格式？

不要把大量业务资料塞进 system。资料应该通过知识库或上下文注入，而不是让 system 变成垃圾桶。

## user 消息

user 消息是用户目标。要尽量保留原文，因为用户措辞里常常包含重要意图。

如果你做了意图改写，最好同时保留：

- 原始输入。
- 改写后的任务。
- 改写原因。

这样出错时更容易调试。

## assistant 消息

assistant 消息记录模型已经说过什么。它有两个用途：

- 让对话连续。
- 让 Agent 知道自己之前做过哪些判断。

如果 assistant 消息里包含错误结论，后续模型可能继续沿着错误方向走。所以生产系统要允许修正、裁剪或总结历史。

## tool 消息

tool 消息是外部世界的观察结果。它应该尽量结构化：

```json
{
  "ok": true,
  "data": {
    "orderId": "A1001",
    "status": "shipped"
  }
}
```

比起一段自然语言，结构化结果更稳定。模型可以读自然语言，但程序更容易检查 JSON。

## 上下文窗口

模型一次能看到的 token 有上限。对话越长，越容易超过窗口。

常见处理方式：

| 方法 | 优点 | 风险 |
| --- | --- | --- |
| 保留最近 N 轮 | 简单 | 可能丢失早期关键信息 |
| 摘要历史 | 节省 token | 摘要可能出错 |
| 重要事实记忆 | 长期有效 | 写错会长期污染 |
| RAG 检索历史 | 精准 | 需要检索质量 |

实际系统通常组合使用。

## 短期记忆

短期记忆属于当前任务。比如：

```ts
type WorkingMemory = {
  currentGoal: string;
  plan: string[];
  completedSteps: string[];
  toolResults: unknown[];
};
```

短期记忆适合保存：

- 当前目标。
- 当前计划。
- 已完成步骤。
- 待确认问题。
- 临时工具结果。

任务结束后，短期记忆可以清理或摘要。

## 长期记忆

长期记忆跨任务保存。比如：

```ts
type LongTermMemory = {
  userId: string;
  kind: 'preference' | 'fact' | 'skill' | 'summary';
  content: string;
  confidence: number;
  updatedAt: string;
};
```

长期记忆一定要有置信度和更新时间。不要把模型随口推断的内容永久保存。

## 记忆写入规则

建议只在满足这些条件时写入长期记忆：

1. 用户明确表达了偏好或事实。
2. 信息对未来任务有复用价值。
3. 不涉及敏感隐私，或者用户授权保存。
4. 可以被用户查看和删除。
5. 不与已有记忆冲突。

错误示例：

```txt
用户：这次报告写得短一点。
系统记忆：用户永远喜欢短报告。
```

正确做法：

```txt
短期记忆：本次报告要求简洁。
长期记忆候选：用户可能偏好简洁输出，需后续确认。
```

## 上下文构建器

不要在业务代码里到处拼 prompt。应该有一个上下文构建器：

```ts
type ContextBuilderInput = {
  systemPrompt: string;
  userInput: string;
  recentMessages: Message[];
  workingMemory?: WorkingMemory;
  retrievedMemories?: LongTermMemory[];
  toolResults?: unknown[];
};

function buildMessages(input: ContextBuilderInput): Message[] {
  return [
    { role: 'system', content: input.systemPrompt },
    ...formatMemories(input.retrievedMemories),
    ...input.recentMessages,
    { role: 'user', content: input.userInput }
  ];
}
```

上下文构建器是 Agent 系统的核心模块之一。它决定模型看到什么，也决定模型看不到什么。

## 本章练习

给上一章的 Agent 增加短期记忆：

1. 保存当前目标。
2. 保存每次工具调用结果。
3. 当超过 10 条消息时，把旧消息摘要成一条 summary。
4. 让 Agent 在最终回答里说明自己用了哪些工具结果。

完成后，你的 Agent 就不再只是无状态循环，而是有了任务连续性。
