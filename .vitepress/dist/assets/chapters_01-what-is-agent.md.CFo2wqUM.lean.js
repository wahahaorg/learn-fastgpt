import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, a2 as createStaticVNode, b as createBlock, w as withCtx, a as createTextVNode, E as createVNode, a3 as Suspense } from "./chunks/framework.BT7OAQ9U.js";
const __pageData = JSON.parse('{"title":"01 什么是 Agent","description":"","frontmatter":{},"headers":[],"relativePath":"chapters/01-what-is-agent.md","filePath":"chapters/01-what-is-agent.md","lastUpdated":1783444472000}');
const _sfc_main = { name: "chapters/01-what-is-agent.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Mermaid = resolveComponent("Mermaid");
  return openBlock(), createElementBlock("div", null, [
    _cache[3] || (_cache[3] = createStaticVNode("", 6)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-37",
          class: "mermaid",
          graph: "flowchart%20TD%0A%20%20%20%20A%5B%E5%A4%A7%E6%A8%A1%E5%9E%8B%E5%BA%94%E7%94%A8%E5%BD%A2%E6%80%81%5D%20--%3E%20B%5B%E8%81%8A%E5%A4%A9%E6%9C%BA%E5%99%A8%E4%BA%BA%5D%0A%20%20%20%20A%20--%3E%20C%5B%E5%B7%A5%E4%BD%9C%E6%B5%81%5D%0A%20%20%20%20A%20--%3E%20D%5BAgent%5D%0A%0A%20%20%20%20B%20--%3E%20B1%5B%E8%BE%93%E5%85%A5%3A%20%E6%B6%88%E6%81%AF%5D%0A%20%20%20%20B%20--%3E%20B2%5B%E8%BE%93%E5%87%BA%3A%20%E6%96%87%E6%9C%AC%5D%0A%20%20%20%20B%20--%3E%20B3%5B%E8%A1%8C%E4%B8%BA%E7%94%B1%E7%A8%8B%E5%BA%8F%E6%8E%A7%E5%88%B6%5D%0A%20%20%20%20B%20--%3E%20B4%5B%E9%80%82%E5%90%88%3A%20%E9%97%AE%E7%AD%94%2F%E6%80%BB%E7%BB%93%2F%E5%88%86%E7%B1%BB%5D%0A%0A%20%20%20%20C%20--%3E%20C1%5B%E6%AD%A5%E9%AA%A4%E7%94%B1%E5%BC%80%E5%8F%91%E8%80%85%E9%A2%84%E5%AE%9A%E4%B9%89%5D%0A%20%20%20%20C%20--%3E%20C2%5B%E6%89%A7%E8%A1%8C%E8%B7%AF%E5%BE%84%E5%9B%BA%E5%AE%9A%5D%0A%20%20%20%20C%20--%3E%20C3%5B%E9%80%82%E5%90%88%3A%20%E5%AE%A1%E6%89%B9%2F%E8%AE%A2%E5%8D%95%E6%9F%A5%E8%AF%A2%2F%E5%90%88%E5%90%8C%E5%AE%A1%E6%A0%B8%5D%0A%0A%20%20%20%20D%20--%3E%20D1%5B%E6%AD%A5%E9%AA%A4%E7%94%B1%E6%A8%A1%E5%9E%8B%E8%87%AA%E4%B8%BB%E5%86%B3%E5%AE%9A%5D%0A%20%20%20%20D%20--%3E%20D2%5B%E8%83%BD%E5%8A%9B%3A%20%E4%B8%8A%E4%B8%8B%E6%96%87%2B%E5%B7%A5%E5%85%B7%2B%E8%AE%B0%E5%BF%86%2B%E8%AE%A1%E5%88%92%5D%0A%20%20%20%20D%20--%3E%20D3%5B%E9%80%82%E5%90%88%3A%20%E6%95%B0%E6%8D%AE%E5%88%86%E6%9E%90%2F%E5%AE%A2%E6%9C%8D%2F%E7%A0%94%E5%8F%91%E5%8A%A9%E6%89%8B%5D%0A%0A%20%20%20%20style%20A%20fill%3A%23e1f5fe%0A%20%20%20%20style%20B%20fill%3A%23fff3e0%0A%20%20%20%20style%20C%20fill%3A%23e8f5e9%0A%20%20%20%20style%20D%20fill%3A%23fce4ec%0A"
        })
      ]),
      fallback: withCtx(() => [..._cache[0] || (_cache[0] = [
        createTextVNode(" Loading... ", -1)
      ])]),
      _: 1
    })),
    _cache[4] || (_cache[4] = createStaticVNode("", 14)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-114",
          class: "mermaid",
          graph: "flowchart%20TD%0A%20%20%20%20Start(%5B%E7%94%A8%E6%88%B7%E8%BE%93%E5%85%A5%5D)%20--%3E%20A%5B%E7%90%86%E8%A7%A3%E7%9B%AE%E6%A0%87%E4%B8%8E%E7%8A%B6%E6%80%81%5D%0A%20%20%20%20A%20--%3E%20B%7B%E6%98%AF%E5%90%A6%E8%B0%83%E7%94%A8%E5%B7%A5%E5%85%B7%3F%7D%0A%20%20%20%20B%20--%3E%7C%E5%90%A6%7C%20C%5B%E7%94%9F%E6%88%90%E6%9C%80%E7%BB%88%E7%AD%94%E6%A1%88%5D%0A%20%20%20%20C%20--%3E%20End(%5B%E8%BE%93%E5%87%BA%E5%9B%9E%E7%AD%94%5D)%0A%0A%20%20%20%20B%20--%3E%7C%E6%98%AF%7C%20D%5B%E6%89%A7%E8%A1%8C%E5%B7%A5%E5%85%B7%5D%0A%20%20%20%20D%20--%3E%20E%5B%E8%A7%82%E5%AF%9F%E5%B7%A5%E5%85%B7%E7%BB%93%E6%9E%9C%5D%0A%20%20%20%20E%20--%3E%20A%0A%0A%20%20%20%20subgraph%20%E5%86%B3%E7%AD%96%E5%BE%AA%E7%8E%AF%0A%20%20%20%20%20%20%20%20A%0A%20%20%20%20%20%20%20%20B%0A%20%20%20%20%20%20%20%20D%0A%20%20%20%20%20%20%20%20E%0A%20%20%20%20end%0A%0A%20%20%20%20style%20Start%20fill%3A%23c8e6c9%0A%20%20%20%20style%20End%20fill%3A%23c8e6c9%0A%20%20%20%20style%20A%20fill%3A%23e3f2fd%0A%20%20%20%20style%20B%20fill%3A%23fff9c4%0A%20%20%20%20style%20D%20fill%3A%23ffccbc%0A%20%20%20%20style%20E%20fill%3A%23e3f2fd%0A"
        })
      ]),
      fallback: withCtx(() => [..._cache[1] || (_cache[1] = [
        createTextVNode(" Loading... ", -1)
      ])]),
      _: 1
    })),
    _cache[5] || (_cache[5] = createStaticVNode("", 54)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-744",
          class: "mermaid",
          graph: "flowchart%20TD%0A%20%20%20%20Q1%7B%E6%AD%A5%E9%AA%A4%E6%98%AF%E5%90%A6%E5%9B%BA%E5%AE%9A%3F%7D%0A%20%20%20%20Q1%20--%3E%7C%E6%98%AF%7C%20Q2%7B%E6%98%AF%E5%90%A6%E9%9C%80%E8%A6%81%E5%A4%9A%E6%AD%A5%3Cbr%3E%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E5%A4%84%E7%90%86%3F%7D%0A%20%20%20%20Q1%20--%3E%7C%E5%90%A6%7C%20Q3%7B%E9%9C%80%E8%A6%81%E8%B0%83%E7%94%A8%3Cbr%3E%E5%A4%96%E9%83%A8%E5%B7%A5%E5%85%B7%E5%90%97%3F%7D%0A%0A%20%20%20%20Q2%20--%3E%7C%E6%98%AF%7C%20Workflow%5B%E5%B7%A5%E4%BD%9C%E6%B5%81%5D%0A%20%20%20%20Q2%20--%3E%7C%E5%90%A6%7C%20Chatbot%5B%E8%81%8A%E5%A4%A9%E6%9C%BA%E5%99%A8%E4%BA%BA%5D%0A%0A%20%20%20%20Q3%20--%3E%7C%E5%90%A6%7C%20Q4%7B%E4%B8%8A%E4%B8%8B%E6%96%87%E5%92%8C%3Cbr%3E%E8%AE%B0%E5%BF%86%E6%98%AF%E5%90%A6%E5%85%B3%E9%94%AE%3F%7D%0A%20%20%20%20Q3%20--%3E%7C%E6%98%AF%7C%20Agent%5BAgent%5D%0A%0A%20%20%20%20Q4%20--%3E%7C%E6%98%AF%7C%20Agent%0A%20%20%20%20Q4%20--%3E%7C%E5%90%A6%7C%20Workflow%0A%0A%20%20%20%20style%20Workflow%20fill%3A%23e8f5e9%0A%20%20%20%20style%20Chatbot%20fill%3A%23fff3e0%0A%20%20%20%20style%20Agent%20fill%3A%23fce4ec%0A%20%20%20%20style%20Q1%20fill%3A%23fff9c4%0A%20%20%20%20style%20Q2%20fill%3A%23fff9c4%0A%20%20%20%20style%20Q3%20fill%3A%23fff9c4%0A%20%20%20%20style%20Q4%20fill%3A%23fff9c4%0A"
        })
      ]),
      fallback: withCtx(() => [..._cache[2] || (_cache[2] = [
        createTextVNode(" Loading... ", -1)
      ])]),
      _: 1
    })),
    _cache[6] || (_cache[6] = createStaticVNode("", 11))
  ]);
}
const _01WhatIsAgent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _01WhatIsAgent as default
};
