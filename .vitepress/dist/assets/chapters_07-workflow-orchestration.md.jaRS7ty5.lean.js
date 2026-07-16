import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, a2 as createStaticVNode, b as createBlock, w as withCtx, a as createTextVNode, E as createVNode, a3 as Suspense } from "./chunks/framework.BT7OAQ9U.js";
const __pageData = JSON.parse('{"title":"07 工作流编排","description":"","frontmatter":{},"headers":[],"relativePath":"chapters/07-workflow-orchestration.md","filePath":"chapters/07-workflow-orchestration.md","lastUpdated":1783444472000}');
const _sfc_main = { name: "chapters/07-workflow-orchestration.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Mermaid = resolveComponent("Mermaid");
  return openBlock(), createElementBlock("div", null, [
    _cache[2] || (_cache[2] = createStaticVNode("", 5)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-34",
          class: "mermaid",
          graph: "flowchart%20TD%0A%20%20%20%20subgraph%20%E5%B7%A5%E4%BD%9C%E6%B5%81%0A%20%20%20%20%20%20%20%20N0%5B%E5%BC%80%E5%A7%8B%5D%20--%3E%20N1%7B%E4%B8%A5%E9%87%8D%E7%A8%8B%E5%BA%A6%E5%88%A4%E6%96%AD%7D%0A%0A%20%20%20%20%20%20%20%20N1%20--%3E%7C%E9%AB%98%7C%20N2%5B%E4%BA%BA%E5%B7%A5%E5%AE%A1%E6%89%B9%5D%0A%20%20%20%20%20%20%20%20N1%20--%3E%7C%E4%BD%8E%7C%20N3%5B%E6%9F%A5%E8%AF%A2%E8%AE%A2%E5%8D%95%5D%0A%0A%20%20%20%20%20%20%20%20N2%20--%3E%20N4%5B%E7%94%9F%E6%88%90%E5%A4%84%E7%90%86%E5%BB%BA%E8%AE%AE%5D%0A%20%20%20%20%20%20%20%20N3%20--%3E%20N4%0A%0A%20%20%20%20%20%20%20%20N4%20--%3E%20N5%7B%E9%9C%80%E8%A6%81%E5%88%9B%E5%BB%BA%E5%B7%A5%E5%8D%95%3F%7D%0A%20%20%20%20%20%20%20%20N5%20--%3E%7C%E6%98%AF%7C%20N6%5B%E5%88%9B%E5%BB%BA%E5%B7%A5%E5%8D%95%5D%20--%3E%20N7%5B%E9%80%9A%E7%9F%A5%E7%94%A8%E6%88%B7%5D%0A%20%20%20%20%20%20%20%20N5%20--%3E%7C%E5%90%A6%7C%20N7%0A%0A%20%20%20%20%20%20%20%20subgraph%20%E5%8F%98%E9%87%8F%E4%BC%A0%E9%80%92%0A%20%20%20%20%20%20%20%20%20%20%20%20V1%5Bclassify.level%20%E2%9E%94%20N2%2FN3%20%E6%9D%A1%E4%BB%B6%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20V2%5Bsearch.data%20%E2%9E%94%20N4%20%E4%B8%8A%E4%B8%8B%E6%96%87%5D%0A%20%20%20%20%20%20%20%20end%0A%20%20%20%20end%0A%0A%20%20%20%20subgraph%20Agent%20%E6%9B%BF%E4%BB%A3%E6%96%B9%E6%A1%88%0A%20%20%20%20%20%20%20%20A1%5B%E7%94%A8%E6%88%B7%E6%8A%95%E8%AF%89%5D%20--%3E%20A2%5BAgent%20%E8%87%AA%E7%94%B1%E5%A4%84%E7%90%86%5D%0A%20%20%20%20%20%20%20%20A2%20--%3E%20A3%5B%E5%8F%AF%E8%83%BD%3A%20%E4%B8%8D%E5%8F%AF%E6%8E%A7%2F%E4%B8%8D%E5%8F%AF%E5%AE%A1%E8%AE%A1%5D%0A%20%20%20%20end%0A%0A%20%20%20%20style%20N0%20fill%3A%23c8e6c9%0A%20%20%20%20style%20N1%20fill%3A%23fff9c4%0A%20%20%20%20style%20N5%20fill%3A%23fff9c4%0A%20%20%20%20style%20N6%20fill%3A%23ffccbc%0A%20%20%20%20style%20N7%20fill%3A%23c8e6c9%0A%20%20%20%20style%20A3%20fill%3A%23ffcdd2%0A"
        })
      ]),
      fallback: withCtx(() => [..._cache[0] || (_cache[0] = [
        createTextVNode(" Loading... ", -1)
      ])]),
      _: 1
    })),
    _cache[3] || (_cache[3] = createStaticVNode("", 6)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-70",
          class: "mermaid",
          graph: "flowchart%20LR%0A%20%20%20%20subgraph%20%E5%B7%A5%E4%BD%9C%E6%B5%81%E6%A0%B8%E5%BF%83%E6%A6%82%E5%BF%B5%0A%20%20%20%20%20%20%20%20N%5B%E8%8A%82%E7%82%B9%20Node%5D%20--%3E%7C%E6%9C%89%7C%20Input%5B%E8%BE%93%E5%85%A5%20inputs%5D%0A%20%20%20%20%20%20%20%20N%20--%3E%7C%E4%BA%A7%E5%87%BA%7C%20Output%5B%E8%BE%93%E5%87%BA%20outputs%5D%0A%20%20%20%20%20%20%20%20E%5B%E8%BE%B9%20Edge%5D%20--%3E%7C%E8%BF%9E%E6%8E%A5%7C%20N%0A%20%20%20%20%20%20%20%20E%20--%3E%7C%E5%8F%AF%E4%BB%A5%E6%9C%89%7C%20Cond%5B%E6%9D%A1%E4%BB%B6%20condition%5D%0A%20%20%20%20%20%20%20%20V%5B%E5%8F%98%E9%87%8F%20Variable%5D%20--%3E%7C%E5%9C%A8%E8%8A%82%E7%82%B9%E9%97%B4%7C%20Flow%5B%E4%BC%A0%E9%80%92%E6%95%B0%E6%8D%AE%5D%0A%20%20%20%20end%0A%0A%20%20%20%20subgraph%20%E7%A4%BA%E4%BE%8B%0A%20%20%20%20%20%20%20%20Start%20--%3E%7Cgo%7C%20A%5B%E7%9F%A5%E8%AF%86%E5%BA%93%E6%90%9C%E7%B4%A2%5D%0A%20%20%20%20%20%20%20%20A%20--%3E%7Cresults%7C%20B%5BAgent%20%E8%8A%82%E7%82%B9%5D%0A%20%20%20%20%20%20%20%20B%20--%3E%7Canswer%7C%20C%7B%E6%9D%A1%E4%BB%B6%E5%88%A4%E6%96%AD%7D%0A%20%20%20%20%20%20%20%20C%20--%3E%7C%E9%80%9A%E8%BF%87%7C%20D%5B%E8%BE%93%E5%87%BA%5D%0A%20%20%20%20%20%20%20%20C%20--%3E%7C%E4%B8%8D%E9%80%9A%E8%BF%87%7C%20E%5B%E4%BA%BA%E5%B7%A5%E7%A1%AE%E8%AE%A4%5D%0A%20%20%20%20end%0A%0A%20%20%20%20style%20N%20fill%3A%23e3f2fd%0A%20%20%20%20style%20E%20fill%3A%23fff9c4%0A%20%20%20%20style%20V%20fill%3A%23e8f5e9%0A"
        })
      ]),
      fallback: withCtx(() => [..._cache[1] || (_cache[1] = [
        createTextVNode(" Loading... ", -1)
      ])]),
      _: 1
    })),
    _cache[4] || (_cache[4] = createStaticVNode("", 54))
  ]);
}
const _07WorkflowOrchestration = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _07WorkflowOrchestration as default
};
