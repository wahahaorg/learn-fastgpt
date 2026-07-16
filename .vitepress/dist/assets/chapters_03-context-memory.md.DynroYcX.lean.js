import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, a2 as createStaticVNode, b as createBlock, w as withCtx, a as createTextVNode, E as createVNode, a3 as Suspense } from "./chunks/framework.BT7OAQ9U.js";
const __pageData = JSON.parse('{"title":"03 消息、上下文与记忆","description":"","frontmatter":{},"headers":[],"relativePath":"chapters/03-context-memory.md","filePath":"chapters/03-context-memory.md","lastUpdated":1783444472000}');
const _sfc_main = { name: "chapters/03-context-memory.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Mermaid = resolveComponent("Mermaid");
  return openBlock(), createElementBlock("div", null, [
    _cache[3] || (_cache[3] = createStaticVNode("", 5)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-34",
          class: "mermaid",
          graph: "flowchart%20LR%0A%20%20%20%20subgraph%20Agent%20%E8%A7%86%E8%A7%92%0A%20%20%20%20%20%20%20%20S%5BSystem%3A%20%E8%A7%92%E8%89%B2%E4%B8%8E%E8%A7%84%E5%88%99%5D%20--%3E%20U%5BUser%3A%20%E7%94%A8%E6%88%B7%E7%9B%AE%E6%A0%87%5D%0A%20%20%20%20%20%20%20%20U%20--%3E%20A%5BAssistant%3A%20%E6%A8%A1%E5%9E%8B%E5%9B%9E%E5%A4%8D%5D%0A%20%20%20%20%20%20%20%20A%20--%3E%20T%5BTool%3A%20%E5%B7%A5%E5%85%B7%E7%BB%93%E6%9E%9C%5D%0A%20%20%20%20%20%20%20%20T%20--%3E%20A2%5BAssistant%3A%20%E5%9F%BA%E4%BA%8E%E7%BB%93%E6%9E%9C%E5%9B%9E%E5%A4%8D%5D%0A%20%20%20%20end%0A%0A%20%20%20%20subgraph%20%E4%B8%8A%E4%B8%8B%E6%96%87%E6%9E%84%E5%BB%BA%E5%99%A8%0A%20%20%20%20%20%20%20%20Input%5B%E7%94%A8%E6%88%B7%E8%BE%93%E5%85%A5%5D%20--%3E%20CB%7B%E4%B8%8A%E4%B8%8B%E6%96%87%E6%9E%84%E5%BB%BA%E5%99%A8%7D%0A%20%20%20%20%20%20%20%20Mem%5B%E8%AE%B0%E5%BF%86%E6%9F%A5%E8%AF%A2%5D%20--%3E%20CB%0A%20%20%20%20%20%20%20%20Hist%5B%E5%8E%86%E5%8F%B2%E6%B6%88%E6%81%AF%5D%20--%3E%20CB%0A%20%20%20%20%20%20%20%20KB%5B%E7%9F%A5%E8%AF%86%E5%BA%93%E7%BB%93%E6%9E%9C%5D%20--%3E%20CB%0A%20%20%20%20%20%20%20%20CB%20--%3E%20Output%5B%E6%9C%80%E7%BB%88%20messages%5D%0A%20%20%20%20end%0A%0A%20%20%20%20style%20S%20fill%3A%23e3f2fd%0A%20%20%20%20style%20U%20fill%3A%23fff3e0%0A%20%20%20%20style%20A%20fill%3A%23e8f5e9%0A%20%20%20%20style%20T%20fill%3A%23f3e5f5%0A%20%20%20%20style%20CB%20fill%3A%23fff9c4%0A"
        })
      ]),
      fallback: withCtx(() => [..._cache[0] || (_cache[0] = [
        createTextVNode(" Loading... ", -1)
      ])]),
      _: 1
    })),
    _cache[4] || (_cache[4] = createStaticVNode("", 26)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-159",
          class: "mermaid",
          graph: "flowchart%20TD%0A%20%20%20%20subgraph%20%E4%B8%8A%E4%B8%8B%E6%96%87%E5%8E%8B%E7%BC%A9%E7%AD%96%E7%95%A5%0A%20%20%20%20%20%20%20%20C1%5B%E4%BF%9D%E7%95%99%E6%9C%80%E8%BF%91%20N%20%E8%BD%AE%5D%20--%3E%20%7C%E4%BC%98%E7%82%B9%3A%20%E7%AE%80%E5%8D%95%7C%20C1Pro%5B%E9%A3%8E%E9%99%A9%3A%20%E4%B8%A2%E5%A4%B1%E6%97%A9%E6%9C%9F%E5%85%B3%E9%94%AE%E4%BF%A1%E6%81%AF%5D%0A%20%20%20%20%20%20%20%20C2%5B%E6%91%98%E8%A6%81%E5%8E%86%E5%8F%B2%E6%B6%88%E6%81%AF%5D%20--%3E%20%7C%E4%BC%98%E7%82%B9%3A%20%E8%8A%82%E7%9C%81%20token%7C%20C2Pro%5B%E9%A3%8E%E9%99%A9%3A%20%E6%91%98%E8%A6%81%E5%8F%AF%E8%83%BD%E5%87%BA%E9%94%99%5D%0A%20%20%20%20%20%20%20%20C3%5B%E6%8F%90%E5%8F%96%E5%85%B3%E9%94%AE%E4%BA%8B%E5%AE%9E%5D%20--%3E%20%7C%E4%BC%98%E7%82%B9%3A%20%E9%95%BF%E6%9C%9F%E6%9C%89%E6%95%88%7C%20C3Pro%5B%E9%A3%8E%E9%99%A9%3A%20%E9%94%99%E8%AF%AF%E4%BA%8B%E5%AE%9E%E9%95%BF%E6%9C%9F%E6%B1%A1%E6%9F%93%5D%0A%20%20%20%20%20%20%20%20C4%5BRAG%20%E6%A3%80%E7%B4%A2%E5%8E%86%E5%8F%B2%5D%20--%3E%20%7C%E4%BC%98%E7%82%B9%3A%20%E7%B2%BE%E5%87%86%7C%20C4Pro%5B%E9%A3%8E%E9%99%A9%3A%20%E4%BE%9D%E8%B5%96%E6%A3%80%E7%B4%A2%E8%B4%A8%E9%87%8F%5D%0A%20%20%20%20end%0A%0A%20%20%20%20subgraph%20%E5%86%B3%E7%AD%96%0A%20%20%20%20%20%20%20%20M%7B%E9%80%89%E6%8B%A9%E7%AD%96%E7%95%A5%7D%0A%20%20%20%20%20%20%20%20M%20--%3E%20C1%0A%20%20%20%20%20%20%20%20M%20--%3E%20C2%0A%20%20%20%20%20%20%20%20M%20--%3E%20C3%0A%20%20%20%20%20%20%20%20M%20--%3E%20C4%0A%20%20%20%20end%0A%0A%20%20%20%20Trigger%5B%E4%B8%8A%E4%B8%8B%E6%96%87%E8%B6%85%E9%99%90%5D%20--%3E%20M%0A%0A%20%20%20%20style%20C1%20fill%3A%23e3f2fd%0A%20%20%20%20style%20C2%20fill%3A%23e3f2fd%0A%20%20%20%20style%20C3%20fill%3A%23e3f2fd%0A%20%20%20%20style%20C4%20fill%3A%23e3f2fd%0A%20%20%20%20style%20Trigger%20fill%3A%23ffccbc%0A"
        })
      ]),
      fallback: withCtx(() => [..._cache[1] || (_cache[1] = [
        createTextVNode(" Loading... ", -1)
      ])]),
      _: 1
    })),
    _cache[5] || (_cache[5] = createStaticVNode("", 22)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-371",
          class: "mermaid",
          graph: "flowchart%20LR%0A%20%20%20%20subgraph%20%E6%B6%88%E6%81%AF%E6%B5%81%0A%20%20%20%20%20%20%20%20Messages%5B%E6%B6%88%E6%81%AF%E5%BA%8F%E5%88%97%5D%20--%3E%20WM%5B%E7%9F%AD%E6%9C%9F%E8%AE%B0%E5%BF%86%3Cbr%3EWorking%20Memory%5D%0A%20%20%20%20end%0A%0A%20%20%20%20subgraph%20%E7%9F%AD%E6%9C%9F%E8%AE%B0%E5%BF%86%0A%20%20%20%20%20%20%20%20WM%20--%3E%20CG%5B%E5%BD%93%E5%89%8D%E7%9B%AE%E6%A0%87%20currentGoal%5D%0A%20%20%20%20%20%20%20%20WM%20--%3E%20PL%5B%E5%BD%93%E5%89%8D%E8%AE%A1%E5%88%92%20plan%5D%0A%20%20%20%20%20%20%20%20WM%20--%3E%20CS%5B%E5%B7%B2%E5%AE%8C%E6%88%90%E6%AD%A5%E9%AA%A4%20completedSteps%5D%0A%20%20%20%20%20%20%20%20WM%20--%3E%20TR%5B%E5%B7%A5%E5%85%B7%E7%BB%93%E6%9E%9C%20toolResults%5D%0A%20%20%20%20%20%20%20%20WM%20--%3E%20PQ%5B%E5%BE%85%E7%A1%AE%E8%AE%A4%E9%97%AE%E9%A2%98%5D%0A%20%20%20%20end%0A%0A%20%20%20%20subgraph%20%E8%AE%B0%E5%BF%86%E8%BD%AC%E6%8D%A2%0A%20%20%20%20%20%20%20%20WM%20--%3E%7C%E4%BB%BB%E5%8A%A1%E5%AE%8C%E6%88%90%7C%20Summary%5B%E6%91%98%E8%A6%81%2F%E6%B8%85%E7%90%86%5D%0A%20%20%20%20%20%20%20%20WM%20--%3E%7C%E7%94%A8%E6%88%B7%E6%98%8E%E7%A1%AE%E8%A1%A8%E8%BE%BE%7C%20LTM%5B%E9%95%BF%E6%9C%9F%E8%AE%B0%E5%BF%86%E5%80%99%E9%80%89%5D%0A%20%20%20%20%20%20%20%20LTM%20--%3E%7C%E7%A1%AE%E8%AE%A4%E5%90%8E%7C%20Store%5B(%E6%8C%81%E4%B9%85%E5%8C%96%E5%AD%98%E5%82%A8)%5D%0A%20%20%20%20end%0A%0A%20%20%20%20subgraph%20%E9%95%BF%E6%9C%9F%E8%AE%B0%E5%BF%86%0A%20%20%20%20%20%20%20%20Store%20--%3E%20P%5B%E5%81%8F%E5%A5%BD%20preference%5D%0A%20%20%20%20%20%20%20%20Store%20--%3E%20F%5B%E4%BA%8B%E5%AE%9E%20fact%5D%0A%20%20%20%20%20%20%20%20Store%20--%3E%20S%5B%E6%8A%80%E8%83%BD%20skill%5D%0A%20%20%20%20%20%20%20%20Store%20--%3E%20SM%5B%E6%91%98%E8%A6%81%20summary%5D%0A%20%20%20%20end%0A%0A%20%20%20%20Store%20--%3E%7C%E6%A3%80%E7%B4%A2%7C%20CBK%5B%E4%B8%8A%E4%B8%8B%E6%96%87%E6%9E%84%E5%BB%BA%E5%99%A8%5D%0A%0A%20%20%20%20style%20WM%20fill%3A%23fff9c4%0A%20%20%20%20style%20LTM%20fill%3A%23ffccbc%0A%20%20%20%20style%20Store%20fill%3A%23e8f5e9%0A%20%20%20%20style%20CBK%20fill%3A%23e3f2fd%0A"
        })
      ]),
      fallback: withCtx(() => [..._cache[2] || (_cache[2] = [
        createTextVNode(" Loading... ", -1)
      ])]),
      _: 1
    })),
    _cache[6] || (_cache[6] = createStaticVNode("", 25))
  ]);
}
const _03ContextMemory = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _03ContextMemory as default
};
