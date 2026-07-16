import { defineConfig } from 'vitepress';
import { withMermaid } from 'vitepress-plugin-mermaid';

export default withMermaid({
  vite: {
    optimizeDeps: {
      include: ['dayjs', 'debug', 'cytoscape', 'cytoscape-cose-bilkent', '@braintree/sanitize-url']
    }
  },
  title: 'Agent 开发教程',
  description: '从零学习 Agent、知识库、工具调用与工作流编排',
  lang: 'zh-CN',
  base: '/learn-fastgpt/',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '教程首页', link: '/' },
      { text: '入门', link: '/chapters/01-what-is-agent' },
      { text: '知识库', link: '/chapters/06-rag-knowledge-base' },
      { text: '实战项目', link: '/chapters/12-capstone-project' }
    ],
    sidebar: [
      {
        text: 'Agent 开发教程',
        items: [
          { text: '课程导读', link: '/' },
          { text: '01 什么是 Agent', link: '/chapters/01-what-is-agent' },
          { text: '02 第一个可运行 Agent', link: '/chapters/02-first-agent' },
          { text: '03 消息、上下文与记忆', link: '/chapters/03-context-memory' },
          { text: '04 任务拆解与计划', link: '/chapters/04-planning' },
          { text: '05 工具调用', link: '/chapters/05-tool-calling' },
          { text: '06 RAG 知识库', link: '/chapters/06-rag-knowledge-base' },
          { text: '07 工作流编排', link: '/chapters/07-workflow-orchestration' },
          { text: '08 Agent 运行时', link: '/chapters/08-agent-runtime' },
          { text: '09 评测与可观测性', link: '/chapters/09-evaluation-observability' },
          { text: '10 安全、权限与成本', link: '/chapters/10-security-cost' },
          { text: '11 平台工程化', link: '/chapters/11-platform-engineering' },
          { text: '12 综合实战项目', link: '/chapters/12-capstone-project' }
        ]
      }
    ],
    outline: {
      level: [2, 3],
      label: '本页目录'
    },
    search: {
      provider: 'local'
    },
    footer: {
      message: '一本从浅入深的 Agent 开发教程',
      copyright: 'Built with VitePress'
    }
  },
  markdown: {
    lineNumbers: true
  }
});
