import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, a2 as createStaticVNode, b as createBlock, w as withCtx, a as createTextVNode, E as createVNode, a3 as Suspense } from "./chunks/framework.BT7OAQ9U.js";
const __pageData = JSON.parse('{"title":"08 Agent 运行时","description":"","frontmatter":{},"headers":[],"relativePath":"chapters/08-agent-runtime.md","filePath":"chapters/08-agent-runtime.md","lastUpdated":1783444472000}');
const _sfc_main = { name: "chapters/08-agent-runtime.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Mermaid = resolveComponent("Mermaid");
  return openBlock(), createElementBlock("div", null, [
    _cache[2] || (_cache[2] = createStaticVNode("", 7)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-40",
          class: "mermaid",
          graph: "flowchart%20TD%0A%20%20%20%20subgraph%20%E8%BF%90%E8%A1%8C%E6%97%B6%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%0A%20%20%20%20%20%20%20%20Created%5Bcreated%5D%20--%3E%7C%E5%BC%80%E5%A7%8B%7C%20Running%5Brunning%5D%0A%20%20%20%20%20%20%20%20Running%20--%3E%7C%E5%AE%8C%E6%88%90%7C%20Completed%5Bcompleted%5D%0A%20%20%20%20%20%20%20%20Running%20--%3E%7C%E5%A4%B1%E8%B4%A5%7C%20Failed%5Bfailed%5D%0A%20%20%20%20%20%20%20%20Running%20--%3E%7C%E7%94%A8%E6%88%B7%E5%8F%96%E6%B6%88%7C%20Cancelled%5Bcancelled%5D%0A%20%20%20%20%20%20%20%20Running%20--%3E%7C%E7%AD%89%E5%BE%85%E7%A1%AE%E8%AE%A4%7C%20Paused%5Bpaused%5D%0A%20%20%20%20%20%20%20%20Paused%20--%3E%7C%E7%94%A8%E6%88%B7%E5%9B%9E%E5%A4%8D%7C%20Running%0A%20%20%20%20end%0A%0A%20%20%20%20subgraph%20%E6%AF%8F%E8%BD%AE%20Step%0A%20%20%20%20%20%20%20%20S1%5B%E6%9E%84%E9%80%A0%E4%B8%8A%E4%B8%8B%E6%96%87%5D%20--%3E%20S2%5B%E8%B0%83%E7%94%A8%E6%A8%A1%E5%9E%8B%5D%0A%20%20%20%20%20%20%20%20S2%20--%3E%20S3%7B%E8%BE%93%E5%87%BA%E7%B1%BB%E5%9E%8B%3F%7D%0A%20%20%20%20%20%20%20%20S3%20--%3E%7Canswer%7C%20S4%5B%E4%BF%9D%E5%AD%98%E7%BB%93%E6%9E%9C%3Cbr%3E%E6%A0%87%E8%AE%B0%E5%AE%8C%E6%88%90%5D%0A%20%20%20%20%20%20%20%20S3%20--%3E%7Ctool_call%7C%20S5%5B%E6%89%A7%E8%A1%8C%E5%B7%A5%E5%85%B7%5D%0A%20%20%20%20%20%20%20%20S5%20--%3E%20S6%5B%E5%B7%A5%E5%85%B7%E7%BB%93%E6%9E%9C%E5%8A%A0%E5%85%A5%E6%B6%88%E6%81%AF%5D%0A%20%20%20%20%20%20%20%20S6%20--%3E%20S1%0A%20%20%20%20%20%20%20%20S3%20--%3E%7Cask%7C%20S7%5B%E4%BF%9D%E5%AD%98%E6%9A%82%E5%81%9C%E7%8A%B6%E6%80%81%3Cbr%3E%E7%AD%89%E7%94%A8%E6%88%B7%E8%BE%93%E5%85%A5%5D%0A%20%20%20%20end%0A%0A%20%20%20%20Running%20--%3E%20S1%0A%0A%20%20%20%20style%20Created%20fill%3A%23e3f2fd%0A%20%20%20%20style%20Running%20fill%3A%23fff9c4%0A%20%20%20%20style%20Paused%20fill%3A%23ffccbc%0A%20%20%20%20style%20Completed%20fill%3A%23c8e6c9%0A%20%20%20%20style%20Failed%20fill%3A%23ffcdd2%0A%20%20%20%20style%20Cancelled%20fill%3A%23ffe0b2%0A"
        })
      ]),
      fallback: withCtx(() => [..._cache[0] || (_cache[0] = [
        createTextVNode(" Loading... ", -1)
      ])]),
      _: 1
    })),
    _cache[3] || (_cache[3] = createStaticVNode("", 13)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-120",
          class: "mermaid",
          graph: "sequenceDiagram%0A%20%20%20%20participant%20F%20as%20%E5%89%8D%E7%AB%AF%0A%20%20%20%20participant%20R%20as%20%E8%BF%90%E8%A1%8C%E6%97%B6%0A%20%20%20%20participant%20M%20as%20%E6%A8%A1%E5%9E%8B%0A%20%20%20%20participant%20T%20as%20%E5%B7%A5%E5%85%B7%0A%0A%20%20%20%20F-%3E%3ER%3A%20%E5%BC%80%E5%A7%8B%E8%BF%90%E8%A1%8C%0A%20%20%20%20R--%3E%3EF%3A%20run.started%0A%0A%20%20%20%20R-%3E%3EM%3A%20%E8%B0%83%E7%94%A8%E6%A8%A1%E5%9E%8B%0A%20%20%20%20M--%3E%3ER%3A%20tool_call%0A%20%20%20%20R--%3E%3EF%3A%20tool.started%20(%E6%9F%A5%E8%AF%A2%E8%AE%A2%E5%8D%95)%0A%0A%20%20%20%20R-%3E%3ET%3A%20%E6%89%A7%E8%A1%8C%E5%B7%A5%E5%85%B7%0A%20%20%20%20T--%3E%3ER%3A%20%E5%B7%A5%E5%85%B7%E7%BB%93%E6%9E%9C%0A%20%20%20%20R--%3E%3EF%3A%20tool.completed%0A%0A%20%20%20%20R-%3E%3EM%3A%20%E7%BB%A7%E7%BB%AD%E8%B0%83%E7%94%A8%E6%A8%A1%E5%9E%8B(%E5%90%AB%E5%B7%A5%E5%85%B7%E7%BB%93%E6%9E%9C)%0A%20%20%20%20M--%3E%3ER%3A%20answer%0A%20%20%20%20R--%3E%3EF%3A%20model.delta%20(%E6%B5%81%E5%BC%8F%E6%96%87%E5%AD%97)%0A%20%20%20%20R--%3E%3EF%3A%20run.completed%0A%0A%20%20%20%20Note%20over%20R%2CF%3A%20%E5%89%8D%E7%AB%AF%E5%AE%9E%E6%97%B6%E5%B1%95%E7%A4%BA%E6%AF%8F%E4%B8%80%E6%AD%A5%E7%8A%B6%E6%80%81%0A"
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
const _08AgentRuntime = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _08AgentRuntime as default
};
