---
layout: home

hero:
  name: Agent 开发教程
  text: 从聊天机器人到可执行任务的智能体系统
  tagline: 这是一套独立教程，不要求你先读任何开源项目。你会从最小模型调用开始，逐步学会上下文、记忆、工具、知识库、计划、编排、运行时、评测与安全，最后完成一个小型 Agent 平台。
  image:
    src: /logo.svg
    alt: Agent 开发教程
  actions:
    - theme: brand
      text: 从第一章开始
      link: /chapters/01-what-is-agent
    - theme: alt
      text: 直接进入实战
      link: /chapters/12-capstone-project

features:
  - title: 从浅入深
    details: 先理解 Agent 和普通聊天机器人的区别，再逐步加入上下文、工具、知识库、编排和运行时。
  - title: 工程视角
    details: 不只讲概念，也讲状态管理、错误恢复、权限、成本、评测、日志和可观测性。
  - title: 可动手练习
    details: 每章都有练习，最终完成一个支持 RAG、工具调用和工作流编排的小型 Agent 平台。
  - title: 不依赖特定项目
    details: 教程可以独立阅读。你可以用 TypeScript、Python 或任意后端语言实现其中的设计。
---

## 这本教程教什么

Agent 不是“会聊天的模型”。一个可用的 Agent 系统至少需要四种能力：

- **理解任务**：把用户目标转成可执行步骤。
- **使用上下文**：维护消息、文件、知识库结果、运行状态和用户偏好。
- **调用工具**：通过函数、HTTP、数据库、浏览器、代码执行器等外部能力改变世界。
- **自我约束**：在权限、预算、错误、评测和安全边界内完成任务。

这套教程会把这些能力拆成 12 章。前半部分讲单个 Agent 如何工作，后半部分讲如何把 Agent 做成一个稳定的平台。

## 适合谁

你适合阅读这本教程，如果你：

- 会写基本的后端接口。
- 知道大模型可以接收 messages 并返回文本。
- 想从 demo 走向真正可维护的 Agent 应用。
- 想学习知识库、工具调用、工作流编排和 Agent 运行时。

不需要你提前理解某个具体开源项目。教程里的概念和代码骨架可以迁移到任何技术栈。

## 学习路径

1. [什么是 Agent](/chapters/01-what-is-agent)：建立基本心智模型。
2. [第一个可运行 Agent](/chapters/02-first-agent)：完成最小循环。
3. [消息、上下文与记忆](/chapters/03-context-memory)：让 Agent 有连续性。
4. [任务拆解与计划](/chapters/04-planning)：让 Agent 学会分步骤做事。
5. [工具调用](/chapters/05-tool-calling)：让 Agent 能访问外部世界。
6. [RAG 知识库](/chapters/06-rag-knowledge-base)：让 Agent 基于资料回答。
7. [工作流编排](/chapters/07-workflow-orchestration)：让复杂任务可控、可视、可复用。
8. [Agent 运行时](/chapters/08-agent-runtime)：把模型、工具、记忆和事件串成稳定循环。
9. [评测与可观测性](/chapters/09-evaluation-observability)：知道系统为什么成功或失败。
10. [安全、权限与成本](/chapters/10-security-cost)：控制风险和花费。
11. [平台工程化](/chapters/11-platform-engineering)：把单个 Agent 做成多人可用的平台。
12. [综合实战项目](/chapters/12-capstone-project)：完成一个小型 Agent 平台。

## 最终你会做出什么

最后的实战项目是一个小型 Agent 平台，它支持：

- 创建知识库并导入文档。
- 把文档切块、索引、检索并给出引用。
- 配置 Agent 的模型、提示词、工具和知识库。
- 让 Agent 在循环中调用工具、读取知识、输出答案。
- 查看每一步执行记录、工具参数、知识库引用和错误信息。

这个项目不会追求大而全，而是把 Agent 开发最核心的骨架讲透。学完后，你可以继续扩展多用户、权限、沙箱、插件市场、复杂工作流和企业部署。
