import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, a2 as createStaticVNode, b as createBlock, w as withCtx, a as createTextVNode, E as createVNode, a3 as Suspense } from "./chunks/framework.BT7OAQ9U.js";
const __pageData = JSON.parse('{"title":"06 RAG 知识库","description":"","frontmatter":{},"headers":[],"relativePath":"chapters/06-rag-knowledge-base.md","filePath":"chapters/06-rag-knowledge-base.md","lastUpdated":1783444472000}');
const _sfc_main = { name: "chapters/06-rag-knowledge-base.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Mermaid = resolveComponent("Mermaid");
  return openBlock(), createElementBlock("div", null, [
    _cache[3] || (_cache[3] = createStaticVNode("", 13)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-75",
          class: "mermaid",
          graph: "flowchart%20LR%0A%20%20%20%20subgraph%20%E5%86%99%E5%85%A5%E9%93%BE%E8%B7%AF%0A%20%20%20%20%20%20%20%20UP%5B%E4%B8%8A%E4%BC%A0%E6%96%87%E6%A1%A3%5D%20--%3E%20PS%5B%E8%A7%A3%E6%9E%90%E6%96%87%E6%9C%AC%5D%0A%20%20%20%20%20%20%20%20PS%20--%3E%20CH%5B%E5%88%87%E5%9D%97%20Chunk%5D%0A%20%20%20%20%20%20%20%20CH%20--%3E%20IDX%5B%E5%BB%BA%E7%B4%A2%E5%BC%95%5D%0A%20%20%20%20%20%20%20%20IDX%20--%3E%20EM%5Bembedding%20%E5%90%91%E9%87%8F%E5%8C%96%5D%0A%20%20%20%20%20%20%20%20EM%20--%3E%20ST%5B(%E5%90%91%E9%87%8F%E6%95%B0%E6%8D%AE%E5%BA%93)%5D%0A%20%20%20%20%20%20%20%20IDX%20--%3E%20KW%5B%E5%85%B3%E9%94%AE%E8%AF%8D%E7%B4%A2%E5%BC%95%5D%0A%20%20%20%20%20%20%20%20KW%20--%3E%20ST%0A%20%20%20%20end%0A%0A%20%20%20%20subgraph%20%E6%9F%A5%E8%AF%A2%E9%93%BE%E8%B7%AF%0A%20%20%20%20%20%20%20%20Q%5B%E7%94%A8%E6%88%B7%E9%97%AE%E9%A2%98%5D%20--%3E%20QE%5B%E6%9F%A5%E8%AF%A2%E6%94%B9%E5%86%99%5D%0A%20%20%20%20%20%20%20%20QE%20--%3E%20SR%5B%E5%90%91%E9%87%8F%E6%A3%80%E7%B4%A2%5D%0A%20%20%20%20%20%20%20%20QE%20--%3E%20KR%5B%E5%85%B3%E9%94%AE%E8%AF%8D%E6%A3%80%E7%B4%A2%5D%0A%20%20%20%20%20%20%20%20SR%20--%3E%20MR%5B%E6%B7%B7%E5%90%88%E6%8E%92%E5%BA%8F%5D%0A%20%20%20%20%20%20%20%20KR%20--%3E%20MR%0A%20%20%20%20%20%20%20%20MR%20--%3E%20RR%5Brerank%20%E9%87%8D%E6%8E%92%E5%BA%8F%5D%0A%20%20%20%20%20%20%20%20RR%20--%3E%20CT%5B%E8%A3%81%E5%89%AA%20topK%5D%0A%20%20%20%20%20%20%20%20CT%20--%3E%20CI%5B%E6%B3%A8%E5%85%A5%E4%B8%8A%E4%B8%8B%E6%96%87%5D%0A%20%20%20%20%20%20%20%20CI%20--%3E%20LLM%5B%E6%A8%A1%E5%9E%8B%E7%94%9F%E6%88%90%E5%9B%9E%E7%AD%94%5D%0A%20%20%20%20end%0A%0A%20%20%20%20ST%20-.-%3E%20SR%0A%20%20%20%20ST%20-.-%3E%20KR%0A%0A%20%20%20%20style%20%E5%86%99%E5%85%A5%E9%93%BE%E8%B7%AF%20fill%3A%23e8f5e9%0A%20%20%20%20style%20%E6%9F%A5%E8%AF%A2%E9%93%BE%E8%B7%AF%20fill%3A%23e3f2fd%0A%20%20%20%20style%20ST%20fill%3A%23f3e5f5%0A"
        })
      ]),
      fallback: withCtx(() => [..._cache[0] || (_cache[0] = [
        createTextVNode(" Loading... ", -1)
      ])]),
      _: 1
    })),
    _cache[4] || (_cache[4] = createStaticVNode("", 8)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-148",
          class: "mermaid",
          graph: "flowchart%20TD%0A%20%20%20%20Doc%5B%E5%8E%9F%E5%A7%8B%E6%96%87%E6%A1%A3%5D%20--%3E%20Strategy%7B%E5%88%87%E5%9D%97%E7%AD%96%E7%95%A5%7D%0A%0A%20%20%20%20Strategy%20--%3E%7C%E6%8C%89%E6%AE%B5%E8%90%BD%E5%88%87%7C%20P%5B%E6%AE%B5%E8%90%BD%E7%BA%A7%20chunk%3Cbr%3E%E6%AF%8F%E6%AE%B5%E7%8B%AC%E7%AB%8B%3Cbr%3E%E9%80%82%E5%90%88%3A%20%E7%BB%93%E6%9E%84%E6%B8%85%E6%99%B0%E7%9A%84%E6%96%87%E6%A1%A3%5D%0A%20%20%20%20Strategy%20--%3E%7C%E6%8C%89%E6%A0%87%E9%A2%98%E5%88%87%7C%20H%5B%E6%A0%87%E9%A2%98%E7%BA%A7%20chunk%3Cbr%3E%E4%BF%9D%E7%95%99%E6%A0%87%E9%A2%98%E5%B1%82%E7%BA%A7%3Cbr%3E%E9%80%82%E5%90%88%3A%20Markdown%2F%E6%8A%80%E6%9C%AF%E6%96%87%E6%A1%A3%5D%0A%20%20%20%20Strategy%20--%3E%7C%E5%9B%BA%E5%AE%9A%20token%20%E5%88%87%7C%20F%5B%E5%9B%BA%E5%AE%9A%20N%20tokens%3Cbr%3Eoverlap%20%E4%BF%9D%E7%95%99%E8%BE%B9%E7%95%8C%3Cbr%3E%E9%80%82%E5%90%88%3A%20%E6%A0%BC%E5%BC%8F%E6%B7%B7%E4%B9%B1%E7%9A%84%E9%95%BF%E6%96%87%E6%9C%AC%5D%0A%20%20%20%20Strategy%20--%3E%7C%E6%BB%91%E5%8A%A8%E7%AA%97%E5%8F%A3%E5%88%87%7C%20SW%5B%E7%AA%97%E5%8F%A3%E6%BB%91%E5%8A%A8%20N%2C%20overlap%20M%3Cbr%3E%E4%B8%8A%E4%B8%8B%E6%96%87%E8%BF%9E%E7%BB%AD%3Cbr%3E%E9%80%82%E5%90%88%3A%20%E9%9C%80%E8%A6%81%E8%BE%B9%E7%95%8C%E8%AF%AD%E4%B9%89%E4%BF%9D%E7%95%99%5D%0A%20%20%20%20Strategy%20--%3E%7C%E9%97%AE%E7%AD%94%E5%AF%B9%E5%88%87%7C%20QA%5BFAQ%20%E6%A0%BC%E5%BC%8F%3Cbr%3E%E4%B8%80%E9%97%AE%E4%B8%80%E7%AD%94%3Cbr%3E%E9%80%82%E5%90%88%3A%20%E5%AE%A2%E6%9C%8D%E7%9F%A5%E8%AF%86%E5%BA%93%5D%0A%0A%20%20%20%20Doc%20--%3E%20M%5BMetadata%5D%0A%20%20%20%20M%20--%3E%20Source%5B%E6%9D%A5%E6%BA%90%20sourceId%5D%0A%20%20%20%20M%20--%3E%20Title%5B%E6%A0%87%E9%A2%98%20title%5D%0A%20%20%20%20M%20--%3E%20Section%5B%E7%AB%A0%E8%8A%82%20section%5D%0A%20%20%20%20M%20--%3E%20Page%5B%E9%A1%B5%E7%A0%81%20page%5D%0A%0A%20%20%20%20style%20Doc%20fill%3A%23e3f2fd%0A%20%20%20%20style%20Strategy%20fill%3A%23fff9c4%0A%20%20%20%20style%20P%20fill%3A%23e8f5e9%0A%20%20%20%20style%20H%20fill%3A%23e8f5e9%0A%20%20%20%20style%20F%20fill%3A%23e8f5e9%0A%20%20%20%20style%20SW%20fill%3A%23e8f5e9%0A%20%20%20%20style%20QA%20fill%3A%23e8f5e9%0A"
        })
      ]),
      fallback: withCtx(() => [..._cache[1] || (_cache[1] = [
        createTextVNode(" Loading... ", -1)
      ])]),
      _: 1
    })),
    _cache[5] || (_cache[5] = createStaticVNode("", 49)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-725",
          class: "mermaid",
          graph: "sequenceDiagram%0A%20%20%20%20participant%20U%20as%20%E7%94%A8%E6%88%B7%0A%20%20%20%20participant%20A%20as%20Agent%0A%20%20%20%20participant%20KB%20as%20%E7%9F%A5%E8%AF%86%E5%BA%93%0A%20%20%20%20participant%20LLM%20as%20%E6%A8%A1%E5%9E%8B%0A%0A%20%20%20%20U-%3E%3EA%3A%20%E9%80%80%E6%AC%BE%E8%A7%84%E5%88%99%E6%98%AF%E4%BB%80%E4%B9%88%EF%BC%9F%0A%20%20%20%20A-%3E%3EKB%3A%20%E6%A3%80%E7%B4%A2%22%E9%80%80%E6%AC%BE%E8%A7%84%E5%88%99%22%0A%20%20%20%20KB--%3E%3EA%3A%20%5B%E8%B5%84%E6%96%991%3A%20%E9%80%80%E6%AC%BE%E6%94%BF%E7%AD%96%5D%2C%20%5B%E8%B5%84%E6%96%992%3A%20%E6%9C%89%E6%95%88%E6%9C%9F%E8%AF%B4%E6%98%8E%5D%0A%20%20%20%20A-%3E%3ELLM%3A%20System%3A%20%E5%9F%BA%E4%BA%8E%E8%B5%84%E6%96%99%E5%9B%9E%E7%AD%94%20%2B%20%E8%B5%84%E6%96%99%E4%B8%8A%E4%B8%8B%E6%96%87%0A%20%20%20%20LLM--%3E%3EA%3A%20%E9%80%80%E6%AC%BE%E9%9C%80%E8%A6%81%E6%BB%A1%E8%B6%B3%E4%BB%A5%E4%B8%8B%E6%9D%A1%E4%BB%B6...%0A%20%20%20%20A-%3E%3EU%3A%20%E7%AD%94%E6%A1%88%20%2B%20%E5%BC%95%E7%94%A8%20%5B1%5D%5B2%5D%0A"
        })
      ]),
      fallback: withCtx(() => [..._cache[2] || (_cache[2] = [
        createTextVNode(" Loading... ", -1)
      ])]),
      _: 1
    })),
    _cache[6] || (_cache[6] = createStaticVNode("", 31))
  ]);
}
const _06RagKnowledgeBase = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _06RagKnowledgeBase as default
};
