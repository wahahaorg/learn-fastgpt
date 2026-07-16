import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, a2 as createStaticVNode, b as createBlock, w as withCtx, a as createTextVNode, E as createVNode, a3 as Suspense } from "./chunks/framework.BT7OAQ9U.js";
const __pageData = JSON.parse('{"title":"09 评测与可观测性","description":"","frontmatter":{},"headers":[],"relativePath":"chapters/09-evaluation-observability.md","filePath":"chapters/09-evaluation-observability.md","lastUpdated":1783444472000}');
const _sfc_main = { name: "chapters/09-evaluation-observability.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Mermaid = resolveComponent("Mermaid");
  return openBlock(), createElementBlock("div", null, [
    _cache[2] || (_cache[2] = createStaticVNode("", 12)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-93",
          class: "mermaid",
          graph: "flowchart%20LR%0A%20%20%20%20subgraph%20%E8%AF%84%E6%B5%8B%E9%87%91%E5%AD%97%E5%A1%94%0A%20%20%20%20%20%20%20%20L1%5B%E5%8D%95%E5%85%83%E8%AF%84%E6%B5%8B%5D%20--%3E%20L2%5B%E9%93%BE%E8%B7%AF%E8%AF%84%E6%B5%8B%5D%0A%20%20%20%20%20%20%20%20L2%20--%3E%20L3%5B%E4%BB%BB%E5%8A%A1%E8%AF%84%E6%B5%8B%5D%0A%20%20%20%20%20%20%20%20L3%20--%3E%20L4%5B%E7%BA%BF%E4%B8%8A%E8%A7%82%E6%B5%8B%5D%0A%20%20%20%20end%0A%0A%20%20%20%20subgraph%20%E6%AF%8F%E5%B1%82%E5%85%B3%E6%B3%A8%0A%20%20%20%20%20%20%20%20L1%20--%3E%20L1D%5B%E5%B7%A5%E5%85%B7%E5%8F%82%E6%95%B0%E6%A0%A1%E9%AA%8C%3Cbr%3E%E5%87%BD%E6%95%B0%E6%AD%A3%E7%A1%AE%E6%80%A7%3Cbr%3E%E6%8F%90%E7%A4%BA%E8%AF%8D%E6%A0%BC%E5%BC%8F%5D%0A%20%20%20%20%20%20%20%20L2%20--%3E%20L2D%5BRAG%20%E6%A3%80%E7%B4%A2%2B%E5%9B%9E%E7%AD%94%3Cbr%3E%E5%B7%A5%E5%85%B7%E8%B0%83%E7%94%A8%E9%93%BE%3Cbr%3E%E5%B7%A5%E4%BD%9C%E6%B5%81%E6%89%A7%E8%A1%8C%5D%0A%20%20%20%20%20%20%20%20L3%20--%3E%20L3D%5B%E5%AE%8C%E6%95%B4%20Agent%20%E4%BB%BB%E5%8A%A1%3Cbr%3E%E7%94%A8%E6%88%B7%E7%9B%AE%E6%A0%87%E8%BE%BE%E6%88%90%E7%8E%87%3Cbr%3E%E7%AB%AF%E5%88%B0%E7%AB%AF%E8%B4%A8%E9%87%8F%5D%0A%20%20%20%20%20%20%20%20L4%20--%3E%20L4D%5B%E5%A4%B1%E8%B4%A5%E7%8E%87%2F%E5%BB%B6%E8%BF%9F%2F%E6%88%90%E6%9C%AC%3Cbr%3E%E4%BA%BA%E5%B7%A5%E6%8E%A5%E7%AE%A1%E7%8E%87%3Cbr%3E%E7%94%A8%E6%88%B7%E5%8F%8D%E9%A6%88%5D%0A%20%20%20%20end%0A%0A%20%20%20%20subgraph%20%E6%96%B9%E6%B3%95%0A%20%20%20%20%20%20%20%20L1%20--%3E%20L1M%5B%E8%87%AA%E5%8A%A8%E5%8C%96%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95%5D%0A%20%20%20%20%20%20%20%20L2%20--%3E%20L2M%5B%E9%BB%84%E9%87%91%E6%B5%8B%E8%AF%95%E9%9B%86%20%2B%20%E8%A7%84%E5%88%99%E5%88%A4%E5%88%86%5D%0A%20%20%20%20%20%20%20%20L3%20--%3E%20L3M%5B%E6%A8%A1%E5%9E%8B%E8%AF%84%E5%88%86%20%2B%20%E4%BA%BA%E5%B7%A5%E6%8A%BD%E6%A3%80%5D%0A%20%20%20%20%20%20%20%20L4%20--%3E%20L4M%5B%E7%9B%91%E6%8E%A7%E4%BB%AA%E8%A1%A8%E7%9B%98%20%2B%20%E5%91%8A%E8%AD%A6%5D%0A%20%20%20%20end%0A%0A%20%20%20%20style%20L1%20fill%3A%23c8e6c9%0A%20%20%20%20style%20L2%20fill%3A%23e8f5e9%0A%20%20%20%20style%20L3%20fill%3A%23fff9c4%0A%20%20%20%20style%20L4%20fill%3A%23ffccbc%0A"
        })
      ]),
      fallback: withCtx(() => [..._cache[0] || (_cache[0] = [
        createTextVNode(" Loading... ", -1)
      ])]),
      _: 1
    })),
    _cache[3] || (_cache[3] = createStaticVNode("", 58)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-466",
          class: "mermaid",
          graph: "flowchart%20TD%0A%20%20%20%20subgraph%20%E8%BF%AD%E4%BB%A3%E9%97%AD%E7%8E%AF%0A%20%20%20%20%20%20%20%20A%5B%E7%BA%BF%E4%B8%8A%E9%97%AE%E9%A2%98%5D%20--%3E%20B%5B%E4%BF%9D%E5%AD%98%E7%8E%B0%E5%9C%BA%3Cbr%3E%E8%BE%93%E5%85%A5%2B%E9%85%8D%E7%BD%AE%2Btrace%5D%0A%20%20%20%20%20%20%20%20B%20--%3E%20C%5B%E5%9B%9E%E6%94%BE%E9%97%AE%E9%A2%98%5D%0A%20%20%20%20%20%20%20%20C%20--%3E%20D%7B%E9%97%AE%E9%A2%98%E6%A0%B9%E5%9B%A0%7D%0A%0A%20%20%20%20%20%20%20%20D%20--%3E%7C%E6%8F%90%E7%A4%BA%E8%AF%8D%E9%97%AE%E9%A2%98%7C%20E1%5B%E4%BF%AE%E6%94%B9%E6%8F%90%E7%A4%BA%E8%AF%8D%5D%0A%20%20%20%20%20%20%20%20D%20--%3E%7C%E5%B7%A5%E5%85%B7%E9%97%AE%E9%A2%98%7C%20E2%5B%E4%BF%AE%E5%A4%8D%E5%B7%A5%E5%85%B7%5D%0A%20%20%20%20%20%20%20%20D%20--%3E%7C%E7%9F%A5%E8%AF%86%E5%BA%93%E7%BC%BA%E5%A4%B1%7C%20E3%5B%E8%A1%A5%E5%85%85%E6%96%87%E6%A1%A3%5D%0A%20%20%20%20%20%20%20%20D%20--%3E%7C%E6%A3%80%E7%B4%A2%E5%A4%B1%E8%B4%A5%7C%20E4%5B%E8%B0%83%E6%95%B4%E6%A3%80%E7%B4%A2%E5%8F%82%E6%95%B0%5D%0A%0A%20%20%20%20%20%20%20%20E1%20--%3E%20F%5B%E8%BF%90%E8%A1%8C%E8%AF%84%E6%B5%8B%E9%9B%86%5D%0A%20%20%20%20%20%20%20%20E2%20--%3E%20F%0A%20%20%20%20%20%20%20%20E3%20--%3E%20F%0A%20%20%20%20%20%20%20%20E4%20--%3E%20F%0A%0A%20%20%20%20%20%20%20%20F%20--%3E%20G%7B%E6%89%80%E6%9C%89%E6%B5%8B%E8%AF%95%E9%80%9A%E8%BF%87%3F%7D%0A%20%20%20%20%20%20%20%20G%20--%3E%7C%E6%98%AF%7C%20H%5B%E5%8F%91%E5%B8%83%5D%0A%20%20%20%20%20%20%20%20G%20--%3E%7C%E5%90%A6%7C%20C%0A%0A%20%20%20%20%20%20%20%20H%20--%3E%20A%0A%20%20%20%20end%0A%0A%20%20%20%20style%20A%20fill%3A%23ffcdd2%0A%20%20%20%20style%20B%20fill%3A%23e3f2fd%0A%20%20%20%20style%20C%20fill%3A%23fff9c4%0A%20%20%20%20style%20F%20fill%3A%23e8f5e9%0A%20%20%20%20style%20H%20fill%3A%23c8e6c9%0A"
        })
      ]),
      fallback: withCtx(() => [..._cache[1] || (_cache[1] = [
        createTextVNode(" Loading... ", -1)
      ])]),
      _: 1
    })),
    _cache[4] || (_cache[4] = createStaticVNode("", 8))
  ]);
}
const _09EvaluationObservability = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _09EvaluationObservability as default
};
