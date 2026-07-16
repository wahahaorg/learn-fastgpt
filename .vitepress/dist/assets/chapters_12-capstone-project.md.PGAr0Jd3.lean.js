import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, a2 as createStaticVNode, b as createBlock, w as withCtx, a as createTextVNode, E as createVNode, a3 as Suspense } from "./chunks/framework.BT7OAQ9U.js";
const __pageData = JSON.parse('{"title":"12 综合实战项目","description":"","frontmatter":{},"headers":[],"relativePath":"chapters/12-capstone-project.md","filePath":"chapters/12-capstone-project.md","lastUpdated":1783444472000}');
const _sfc_main = { name: "chapters/12-capstone-project.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Mermaid = resolveComponent("Mermaid");
  return openBlock(), createElementBlock("div", null, [
    _cache[2] || (_cache[2] = createStaticVNode("", 6)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-47",
          class: "mermaid",
          graph: "flowchart%20TD%0A%20%20%20%20subgraph%20%E5%89%8D%E7%AB%AF%E7%95%8C%E9%9D%A2%0A%20%20%20%20%20%20%20%20UI%5B%E8%81%8A%E5%A4%A9%E7%95%8C%E9%9D%A2%5D%20--%3E%7C%E7%94%A8%E6%88%B7%E8%BE%93%E5%85%A5%7C%20API%0A%20%20%20%20%20%20%20%20UI%20--%3E%7C%E5%B1%95%E7%A4%BA%E7%8A%B6%E6%80%81%7C%20Events%5B%E4%BA%8B%E4%BB%B6%E6%B5%81%E5%B1%95%E7%A4%BA%5D%0A%20%20%20%20%20%20%20%20UI%20--%3E%7Ctrace%20%E6%9F%A5%E7%9C%8B%7C%20Debug%5B%E8%B0%83%E8%AF%95%E9%9D%A2%E6%9D%BF%5D%0A%20%20%20%20end%0A%0A%20%20%20%20subgraph%20%E5%90%8E%E7%AB%AF%E6%9C%8D%E5%8A%A1%0A%20%20%20%20%20%20%20%20API%5BAPI%20%E8%B7%AF%E7%94%B1%5D%20--%3E%20Agent%5BAgent%20%E9%85%8D%E7%BD%AE%5D%0A%20%20%20%20%20%20%20%20API%20--%3E%20Run%5B%E8%BF%90%E8%A1%8C%E6%97%B6%E7%AE%A1%E7%90%86%5D%0A%20%20%20%20%20%20%20%20Run%20--%3E%20R%5BAgent%20%E8%BF%90%E8%A1%8C%E6%97%B6%5D%0A%20%20%20%20%20%20%20%20R%20--%3E%20KB%5B%E7%9F%A5%E8%AF%86%E5%BA%93%E6%A3%80%E7%B4%A2%5D%0A%20%20%20%20%20%20%20%20R%20--%3E%20TC%5B%E5%B7%A5%E5%85%B7%E8%B0%83%E7%94%A8%5D%0A%20%20%20%20%20%20%20%20R%20--%3E%20LLM%5B%E6%A8%A1%E5%9E%8B%E8%B0%83%E7%94%A8%5D%0A%20%20%20%20end%0A%0A%20%20%20%20subgraph%20%E5%AD%98%E5%82%A8%0A%20%20%20%20%20%20%20%20DB%5B(%E6%95%B0%E6%8D%AE%E5%BA%93)%5D%0A%20%20%20%20%20%20%20%20DB%20--%3E%20AgentConfig%5BAgent%20%E9%85%8D%E7%BD%AE%5D%0A%20%20%20%20%20%20%20%20DB%20--%3E%20Docs%5B%E6%96%87%E6%A1%A3%2FChunk%5D%0A%20%20%20%20%20%20%20%20DB%20--%3E%20Traces%5B%E8%BF%90%E8%A1%8C%E8%AE%B0%E5%BD%95%2FTrace%5D%0A%20%20%20%20end%0A%0A%20%20%20%20subgraph%20%E8%AF%84%E6%B5%8B%0A%20%20%20%20%20%20%20%20Eval%5B%E8%AF%84%E6%B5%8B%E9%9B%86%5D%20--%3E%20EvalRun%5B%E6%89%B9%E9%87%8F%E8%BF%90%E8%A1%8C%5D%0A%20%20%20%20%20%20%20%20EvalRun%20--%3E%20Report%5B%E6%B5%8B%E8%AF%84%E6%8A%A5%E5%91%8A%5D%0A%20%20%20%20end%0A%0A%20%20%20%20KB%20--%3E%20Docs%0A%20%20%20%20TC%20--%3E%20Tools%5B%E5%B7%A5%E5%85%B7%E5%AE%9E%E7%8E%B0%5D%0A%20%20%20%20Run%20--%3E%20Traces%0A%0A%20%20%20%20style%20%E5%89%8D%E7%AB%AF%E7%95%8C%E9%9D%A2%20fill%3A%23e3f2fd%0A%20%20%20%20style%20%E5%90%8E%E7%AB%AF%E6%9C%8D%E5%8A%A1%20fill%3A%23e8f5e9%0A%20%20%20%20style%20%E5%AD%98%E5%82%A8%20fill%3A%23f3e5f5%0A%20%20%20%20style%20%E8%AF%84%E6%B5%8B%20fill%3A%23fff9c4%0A"
        })
      ]),
      fallback: withCtx(() => [..._cache[0] || (_cache[0] = [
        createTextVNode(" Loading... ", -1)
      ])]),
      _: 1
    })),
    _cache[3] || (_cache[3] = createStaticVNode("", 51)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-277",
          class: "mermaid",
          graph: "gantt%0A%20%20%20%20title%20%E7%BB%BC%E5%90%88%E5%AE%9E%E6%88%98%E9%A1%B9%E7%9B%AE%E9%87%8C%E7%A8%8B%E7%A2%91%0A%20%20%20%20dateFormat%20%20YYYY-MM-DD%0A%20%20%20%20axisFormat%20%20%25m%2F%25d%0A%0A%20%20%20%20section%20%E5%9F%BA%E7%A1%80%0A%20%20%20%20%E8%B7%91%E9%80%9A%E6%99%AE%E9%80%9A%E9%97%AE%E7%AD%94%20%20%20%20%20%20%20%20%20%20%20%3Aa1%2C%202025-01-01%2C%203d%0A%20%20%20%20%E5%8A%A0%E5%85%A5%E6%96%87%E6%A1%A3%E5%88%87%E5%88%86%E5%92%8C%E6%A3%80%E7%B4%A2%20%20%20%20%20%20%20%3Aa2%2C%20after%20a1%2C%203d%0A%20%20%20%20%E8%AE%A9%E5%9B%9E%E7%AD%94%E5%B8%A6%E5%BC%95%E7%94%A8%20%20%20%20%20%20%20%20%20%20%20%20%3Aa3%2C%20after%20a2%2C%202d%0A%0A%20%20%20%20section%20%E5%B7%A5%E5%85%B7%0A%20%20%20%20%E5%8A%A0%E5%85%A5%E5%B7%A5%E5%85%B7%E6%B3%A8%E5%86%8C%E8%A1%A8%20%20%20%20%20%20%20%20%20%20%3Ab1%2C%20after%20a3%2C%202d%0A%20%20%20%20Agent%20%E8%B0%83%E7%94%A8%E6%9F%A5%E8%AF%A2%E5%B7%A5%E5%85%B7%20%20%20%20%20%20%3Ab2%2C%20after%20b1%2C%202d%0A%20%20%20%20%E9%AB%98%E9%A3%8E%E9%99%A9%E5%B7%A5%E5%85%B7%E7%A1%AE%E8%AE%A4%20%20%20%20%20%20%20%20%20%20%3Ab3%2C%20after%20b2%2C%202d%0A%0A%20%20%20%20section%20%E8%B4%A8%E9%87%8F%0A%20%20%20%20%E4%BF%9D%E5%AD%98%20trace%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ac1%2C%20after%20b3%2C%202d%0A%20%20%20%20%E5%81%9A%E8%B0%83%E8%AF%95%E9%A1%B5%E9%9D%A2%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ac2%2C%20after%20c1%2C%203d%0A%20%20%20%20%E5%A2%9E%E5%8A%A0%E8%AF%84%E6%B5%8B%E9%9B%86%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ac3%2C%20after%20c2%2C%202d%0A%20%20%20%20%E4%BC%98%E5%8C%96%E5%A4%B1%E8%B4%A5%E6%A1%88%E4%BE%8B%20%20%20%20%20%20%20%20%20%20%20%20%3Ac4%2C%20after%20c3%2C%203d%0A"
        })
      ]),
      fallback: withCtx(() => [..._cache[1] || (_cache[1] = [
        createTextVNode(" Loading... ", -1)
      ])]),
      _: 1
    })),
    _cache[4] || (_cache[4] = createStaticVNode("", 11))
  ]);
}
const _12CapstoneProject = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _12CapstoneProject as default
};
