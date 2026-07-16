import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, a2 as createStaticVNode, b as createBlock, w as withCtx, a as createTextVNode, E as createVNode, a3 as Suspense } from "./chunks/framework.BT7OAQ9U.js";
const __pageData = JSON.parse('{"title":"04 任务拆解与计划","description":"","frontmatter":{},"headers":[],"relativePath":"chapters/04-planning.md","filePath":"chapters/04-planning.md","lastUpdated":1783444472000}');
const _sfc_main = { name: "chapters/04-planning.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Mermaid = resolveComponent("Mermaid");
  return openBlock(), createElementBlock("div", null, [
    _cache[2] || (_cache[2] = createStaticVNode("", 7)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-40",
          class: "mermaid",
          graph: "flowchart%20LR%0A%20%20%20%20subgraph%20ReAct%5BReAct%3A%20%E7%BA%AF%E5%8F%8D%E5%BA%94%E5%BC%8F%5D%0A%20%20%20%20%20%20%20%20R1%5B%E7%94%A8%E6%88%B7%E7%9B%AE%E6%A0%87%5D%20--%3E%20R2%5B%E6%A8%A1%E5%9E%8B%E5%86%B3%E5%AE%9A%E4%B8%8B%E4%B8%80%E6%AD%A5%5D%0A%20%20%20%20%20%20%20%20R2%20--%3E%20R3%7B%E5%B7%A5%E5%85%B7%2F%E5%9B%9E%E7%AD%94%3F%7D%0A%20%20%20%20%20%20%20%20R3%20--%3E%7C%E5%B7%A5%E5%85%B7%7C%20R4%5B%E6%89%A7%E8%A1%8C%E5%B7%A5%E5%85%B7%5D%0A%20%20%20%20%20%20%20%20R4%20--%3E%20R2%0A%20%20%20%20%20%20%20%20R3%20--%3E%7C%E5%9B%9E%E7%AD%94%7C%20R5%5B%E8%BE%93%E5%87%BA%5D%0A%20%20%20%20end%0A%0A%20%20%20%20subgraph%20PnE%5BPlan-and-Execute%3A%20%E5%85%88%E8%AE%A1%E5%88%92%E5%90%8E%E6%89%A7%E8%A1%8C%5D%0A%20%20%20%20%20%20%20%20P1%5B%E7%94%A8%E6%88%B7%E7%9B%AE%E6%A0%87%5D%20--%3E%20P2%5B%E7%94%9F%E6%88%90%E8%AE%A1%E5%88%92%5D%0A%20%20%20%20%20%20%20%20P2%20--%3E%20P3%7B%E8%AE%A1%E5%88%92%E5%8F%AF%E6%8E%A5%E5%8F%97%3F%7D%0A%20%20%20%20%20%20%20%20P3%20--%3E%7C%E5%90%A6%7C%20P4%5B%E4%BF%AE%E8%AE%A2%E8%AE%A1%E5%88%92%5D%0A%20%20%20%20%20%20%20%20P4%20--%3E%20P2%0A%20%20%20%20%20%20%20%20P3%20--%3E%7C%E6%98%AF%7C%20P5%5B%E6%8C%89%E8%AE%A1%E5%88%92%E6%89%A7%E8%A1%8C%5D%0A%20%20%20%20%20%20%20%20P5%20--%3E%20P6%7B%E9%9C%80%E8%A6%81%E8%B0%83%E6%95%B4%3F%7D%0A%20%20%20%20%20%20%20%20P6%20--%3E%7C%E6%98%AF%7C%20P7%5B%E6%9B%B4%E6%96%B0%E8%AE%A1%E5%88%92%5D%0A%20%20%20%20%20%20%20%20P7%20--%3E%20P5%0A%20%20%20%20%20%20%20%20P6%20--%3E%7C%E5%90%A6%7C%20P8%5B%E8%BE%93%E5%87%BA%5D%0A%20%20%20%20end%0A%0A%20%20%20%20style%20ReAct%20fill%3A%23feffd6%0A%20%20%20%20style%20PnE%20fill%3A%23e8f5e9%0A"
        })
      ]),
      fallback: withCtx(() => [..._cache[0] || (_cache[0] = [
        createTextVNode(" Loading... ", -1)
      ])]),
      _: 1
    })),
    _cache[3] || (_cache[3] = createStaticVNode("", 9)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-153",
          class: "mermaid",
          graph: "stateDiagram-v2%0A%20%20%20%20%5B*%5D%20--%3E%20pending%3A%20%E5%88%9B%E5%BB%BA%E6%AD%A5%E9%AA%A4%0A%20%20%20%20pending%20--%3E%20in_progress%3A%20%E5%BC%80%E5%A7%8B%E6%89%A7%E8%A1%8C%0A%20%20%20%20in_progress%20--%3E%20done%3A%20%E6%89%A7%E8%A1%8C%E6%88%90%E5%8A%9F%0A%20%20%20%20in_progress%20--%3E%20blocked%3A%20%E7%BC%BA%E5%B0%91%E4%BF%A1%E6%81%AF%0A%20%20%20%20in_progress%20--%3E%20failed%3A%20%E6%89%A7%E8%A1%8C%E5%A4%B1%E8%B4%A5%0A%20%20%20%20blocked%20--%3E%20in_progress%3A%20%E8%A1%A5%E5%85%85%E4%BF%A1%E6%81%AF%0A%20%20%20%20done%20--%3E%20%5B*%5D%0A%20%20%20%20failed%20--%3E%20%5B*%5D%0A"
        })
      ]),
      fallback: withCtx(() => [..._cache[1] || (_cache[1] = [
        createTextVNode(" Loading... ", -1)
      ])]),
      _: 1
    })),
    _cache[4] || (_cache[4] = createStaticVNode("", 52))
  ]);
}
const _04Planning = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _04Planning as default
};
