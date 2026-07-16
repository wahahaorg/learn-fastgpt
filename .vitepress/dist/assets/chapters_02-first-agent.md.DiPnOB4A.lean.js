import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, a2 as createStaticVNode, b as createBlock, w as withCtx, a as createTextVNode, E as createVNode, a3 as Suspense } from "./chunks/framework.BT7OAQ9U.js";
const __pageData = JSON.parse('{"title":"02 第一个可运行 Agent","description":"","frontmatter":{},"headers":[],"relativePath":"chapters/02-first-agent.md","filePath":"chapters/02-first-agent.md","lastUpdated":1783444472000}');
const _sfc_main = { name: "chapters/02-first-agent.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Mermaid = resolveComponent("Mermaid");
  return openBlock(), createElementBlock("div", null, [
    _cache[3] || (_cache[3] = createStaticVNode("", 17)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-57",
          class: "mermaid",
          graph: "flowchart%20LR%0A%20%20%20%20subgraph%20%E8%BE%93%E5%85%A5%0A%20%20%20%20%20%20%20%20SP%5BSystem%20Prompt%5D%0A%20%20%20%20%20%20%20%20UI%5BUser%20Input%5D%0A%20%20%20%20end%0A%0A%20%20%20%20subgraph%20%E6%A0%B8%E5%BF%83%0A%20%20%20%20%20%20%20%20AC%5BAgent%20%E5%BE%AA%E7%8E%AF%3Cbr%3ErunAgent%5D%0A%20%20%20%20%20%20%20%20MM%5BModel%20%E8%B0%83%E7%94%A8%3Cbr%3EcallModel%5D%0A%20%20%20%20%20%20%20%20TR%5BTool%20%E6%89%A7%E8%A1%8C%E5%99%A8%3Cbr%3Etool.run%5D%0A%20%20%20%20end%0A%0A%20%20%20%20subgraph%20%E5%AE%9A%E4%B9%89%0A%20%20%20%20%20%20%20%20TL%5BTool%20%E5%88%97%E8%A1%A8%3Cbr%3Ename%20%2B%20schema%20%2B%20run%5D%0A%20%20%20%20%20%20%20%20TP%5B%E7%B1%BB%E5%9E%8B%E5%AE%9A%E4%B9%89%3Cbr%3EMessage%20%2F%20ToolCall%5D%0A%20%20%20%20end%0A%0A%20%20%20%20SP%20--%3E%20AC%0A%20%20%20%20UI%20--%3E%20AC%0A%20%20%20%20AC%20--%3E%20MM%0A%20%20%20%20AC%20--%3E%20TR%0A%20%20%20%20TL%20--%3E%20TR%0A%20%20%20%20TP%20---%20AC%0A%20%20%20%20TP%20---%20TL%0A%0A%20%20%20%20style%20AC%20fill%3A%23e3f2fd%0A%20%20%20%20style%20MM%20fill%3A%23bbdefb%0A%20%20%20%20style%20TR%20fill%3A%23ffccbc%0A%20%20%20%20style%20TL%20fill%3A%23e8f5e9%0A"
        })
      ]),
      fallback: withCtx(() => [..._cache[0] || (_cache[0] = [
        createTextVNode(" Loading... ", -1)
      ])]),
      _: 1
    })),
    _cache[4] || (_cache[4] = createStaticVNode("", 16)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-128",
          class: "mermaid",
          graph: "flowchart%20TD%0A%20%20%20%20subgraph%20%E5%88%9D%E5%A7%8B%E5%8C%96%0A%20%20%20%20%20%20%20%20M0%5BSystem%20Prompt%20%2B%20User%20Input%20%E2%86%92%20messages%5D%0A%20%20%20%20end%0A%0A%20%20%20%20subgraph%20%E6%89%A7%E8%A1%8C%E5%BE%AA%E7%8E%AF%0A%20%20%20%20%20%20%20%20M1%5B%E8%B0%83%E7%94%A8%E6%A8%A1%E5%9E%8B%3Cbr%3Emessages%20%2B%20tools%5D%0A%20%20%20%20%20%20%20%20M2%7B%E6%A8%A1%E5%9E%8B%E8%BE%93%E5%87%BA%E7%B1%BB%E5%9E%8B%3F%7D%0A%20%20%20%20%20%20%20%20M3%5B%E6%8F%90%E5%8F%96%E6%9C%80%E7%BB%88%E7%AD%94%E6%A1%88%5D%0A%20%20%20%20%20%20%20%20M4%7B%E9%81%8D%E5%8E%86%E6%AF%8F%E4%B8%AA%3Cbr%3Etool_call%7D%0A%20%20%20%20%20%20%20%20M5%7B%E5%B7%A5%E5%85%B7%E6%98%AF%E5%90%A6%E5%AD%98%E5%9C%A8%3F%7D%0A%20%20%20%20%20%20%20%20M6%5B%E6%89%A7%E8%A1%8C%E5%B7%A5%E5%85%B7%20run%5D%0A%20%20%20%20%20%20%20%20M7%5B%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E8%AF%B4%E6%98%8E%5D%0A%0A%20%20%20%20%20%20%20%20M1%20--%3E%20M2%0A%20%20%20%20%20%20%20%20M2%20--%3E%7Canswer%7C%20M3%20--%3E%20End(%5B%E8%BF%94%E5%9B%9E%E7%BB%93%E6%9E%9C%5D)%0A%20%20%20%20%20%20%20%20M2%20--%3E%7Ctool_call%7C%20M4%0A%20%20%20%20%20%20%20%20M4%20--%3E%20M5%0A%20%20%20%20%20%20%20%20M5%20--%3E%7C%E6%98%AF%7C%20M6%20--%3E%20M8%5B%E5%B7%A5%E5%85%B7%E7%BB%93%E6%9E%9C%E5%8A%A0%E5%85%A5%20messages%5D%0A%20%20%20%20%20%20%20%20M5%20--%3E%7C%E5%90%A6%7C%20M7%20--%3E%20M8%0A%20%20%20%20%20%20%20%20M8%20--%3E%20M1%0A%20%20%20%20end%0A%0A%20%20%20%20M0%20--%3E%20M1%0A%0A%20%20%20%20style%20M0%20fill%3A%23e3f2fd%0A%20%20%20%20style%20M1%20fill%3A%23bbdefb%0A%20%20%20%20style%20M2%20fill%3A%23fff9c4%0A%20%20%20%20style%20M3%20fill%3A%23c8e6c9%0A%20%20%20%20style%20M5%20fill%3A%23fff9c4%0A%20%20%20%20style%20M6%20fill%3A%23ffccbc%0A%20%20%20%20style%20M7%20fill%3A%23ffcdd2%0A%20%20%20%20style%20End%20fill%3A%23c8e6c9%0A"
        })
      ]),
      fallback: withCtx(() => [..._cache[1] || (_cache[1] = [
        createTextVNode(" Loading... ", -1)
      ])]),
      _: 1
    })),
    _cache[5] || (_cache[5] = createStaticVNode("", 6)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-143",
          class: "mermaid",
          graph: "flowchart%20LR%0A%20%20%20%20subgraph%20%E6%AD%A3%E5%B8%B8%E6%B5%81%E7%A8%8B%0A%20%20%20%20%20%20%20%20M1%5B%E6%A8%A1%E5%9E%8B%E8%B0%83%E7%94%A8%5D%20--%3E%20M2%7Banswer%3F%7D%0A%20%20%20%20%20%20%20%20M2%20--%3E%7C%E6%98%AF%7C%20End1(%5B%E6%AD%A3%E5%B8%B8%E7%BB%93%E6%9D%9F%5D)%0A%20%20%20%20%20%20%20%20M2%20--%3E%7C%E5%90%A6%20%E2%86%92%20tool_call%7C%20T1%5B%E6%89%A7%E8%A1%8C%E5%B7%A5%E5%85%B7%5D%20--%3E%20M1%0A%20%20%20%20end%0A%0A%20%20%20%20subgraph%20%E6%AD%BB%E5%BE%AA%E7%8E%AF%E9%A3%8E%E9%99%A9%0A%20%20%20%20%20%20%20%20D1%5B%E6%A8%A1%E5%9E%8B%E8%B0%83%E7%94%A8%5D%20--%3E%20D2%7Btool_call%7D%0A%20%20%20%20%20%20%20%20D2%20--%3E%20D3%5B%E5%B7%A5%E5%85%B7%E8%BF%94%E5%9B%9E%E7%A9%BA%E7%BB%93%E6%9E%9C%5D%0A%20%20%20%20%20%20%20%20D3%20--%3E%20D4%5B%E6%A8%A1%E5%9E%8B%E7%BB%A7%E7%BB%AD%E5%B0%9D%E8%AF%95%5D%0A%20%20%20%20%20%20%20%20D4%20--%3E%20D2%0A%20%20%20%20end%0A%0A%20%20%20%20subgraph%20%E5%AE%89%E5%85%A8%E5%88%B9%E8%BD%A6%0A%20%20%20%20%20%20%20%20S1%5B%E8%BD%AE%E6%95%B0%20%E2%89%A5%20maxTurns%5D%0A%20%20%20%20%20%20%20%20S2%5B%E8%B6%85%E6%97%B6%5D%0A%20%20%20%20%20%20%20%20S3%5B%E8%B6%85%E8%BF%87%E9%A2%84%E7%AE%97%5D%0A%20%20%20%20end%0A%0A%20%20%20%20style%20End1%20fill%3A%23c8e6c9%0A%20%20%20%20style%20D4%20fill%3A%23ffcdd2%0A%20%20%20%20style%20S1%20fill%3A%23fff9c4%0A%20%20%20%20style%20S2%20fill%3A%23fff9c4%0A%20%20%20%20style%20S3%20fill%3A%23fff9c4%0A"
        })
      ]),
      fallback: withCtx(() => [..._cache[2] || (_cache[2] = [
        createTextVNode(" Loading... ", -1)
      ])]),
      _: 1
    })),
    _cache[6] || (_cache[6] = createStaticVNode("", 37))
  ]);
}
const _02FirstAgent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _02FirstAgent as default
};
