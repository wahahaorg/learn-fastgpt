import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, a2 as createStaticVNode, b as createBlock, w as withCtx, a as createTextVNode, E as createVNode, a3 as Suspense } from "./chunks/framework.BT7OAQ9U.js";
const __pageData = JSON.parse('{"title":"10 安全、权限与成本","description":"","frontmatter":{},"headers":[],"relativePath":"chapters/10-security-cost.md","filePath":"chapters/10-security-cost.md","lastUpdated":1783444472000}');
const _sfc_main = { name: "chapters/10-security-cost.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Mermaid = resolveComponent("Mermaid");
  return openBlock(), createElementBlock("div", null, [
    _cache[1] || (_cache[1] = createStaticVNode("", 10)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-83",
          class: "mermaid",
          graph: "flowchart%20TD%0A%20%20%20%20AgentRun%5BAgent%20%E8%BF%90%E8%A1%8C%5D%20--%3E%7C%E7%94%A8%E6%88%B7%E8%AF%B7%E6%B1%82%7C%20Auth%7B%E8%BA%AB%E4%BB%BD%E8%AE%A4%E8%AF%81%7D%0A%20%20%20%20Auth%20--%3E%7C%E9%80%9A%E8%BF%87%7C%20Budget%7B%E9%A2%84%E7%AE%97%E6%A3%80%E6%9F%A5%7D%0A%20%20%20%20Auth%20--%3E%7C%E4%B8%8D%E9%80%9A%E8%BF%87%7C%20Reject%5B%E6%8B%92%E7%BB%9D%E8%AE%BF%E9%97%AE%5D%0A%0A%20%20%20%20Budget%20--%3E%7C%E6%9C%AA%E8%B6%85%E9%99%90%7C%20ToolExec%7B%E5%B7%A5%E5%85%B7%E6%89%A7%E8%A1%8C%E9%93%BE%7D%0A%20%20%20%20Budget%20--%3E%7C%E8%B6%85%E9%99%90%7C%20StopCost%5B%E5%81%9C%E6%AD%A2%E6%89%A7%E8%A1%8C%3Cbr%3E%E8%BF%94%E5%9B%9E%E9%A2%84%E7%AE%97%E4%B8%8D%E8%B6%B3%5D%0A%0A%20%20%20%20ToolExec%20--%3E%20Role%7B%E7%94%A8%E6%88%B7%E8%A7%92%E8%89%B2%E6%98%AF%E5%90%A6%E6%9C%89%E6%9D%83%E9%99%90%3F%7D%0A%20%20%20%20Role%20--%3E%7C%E6%98%AF%7C%20Risk%7B%E5%B7%A5%E5%85%B7%E9%A3%8E%E9%99%A9%E7%AD%89%E7%BA%A7%7D%0A%20%20%20%20Role%20--%3E%7C%E5%90%A6%7C%20Deny%5B%E6%8B%92%E7%BB%9D%3A%20%E6%9D%83%E9%99%90%E4%B8%8D%E8%B6%B3%5D%0A%0A%20%20%20%20Risk%20--%3E%7C%E4%BD%8E%E9%A3%8E%E9%99%A9%20Read%7C%20Exec%5B%E6%89%A7%E8%A1%8C%E5%B7%A5%E5%85%B7%5D%0A%20%20%20%20Risk%20--%3E%7C%E4%B8%AD%E9%A3%8E%E9%99%A9%20Write%7C%20Confirm%7B%E7%94%A8%E6%88%B7%E7%A1%AE%E8%AE%A4%3F%7D%0A%20%20%20%20Risk%20--%3E%7C%E9%AB%98%E9%A3%8E%E9%99%A9%20Delete%7C%20StrictConfirm%7B%E4%BA%8C%E6%AC%A1%E7%A1%AE%E8%AE%A4%3Cbr%3E%E5%90%AB%E8%AF%A6%E7%BB%86%E5%86%85%E5%AE%B9%7D%0A%0A%20%20%20%20Confirm%20--%3E%7C%E7%A1%AE%E8%AE%A4%7C%20Exec%0A%20%20%20%20Confirm%20--%3E%7C%E6%8B%92%E7%BB%9D%7C%20Cancel%5B%E5%8F%96%E6%B6%88%E6%93%8D%E4%BD%9C%5D%0A%20%20%20%20StrictConfirm%20--%3E%7C%E7%A1%AE%E8%AE%A4%7C%20Exec%0A%20%20%20%20StrictConfirm%20--%3E%7C%E6%8B%92%E7%BB%9D%7C%20Cancel%0A%0A%20%20%20%20Exec%20--%3E%20Audit%5B%E8%AE%B0%E5%BD%95%E5%AE%A1%E8%AE%A1%E6%97%A5%E5%BF%97%5D%0A%0A%20%20%20%20style%20Reject%20fill%3A%23ffcdd2%0A%20%20%20%20style%20Deny%20fill%3A%23ffcdd2%0A%20%20%20%20style%20StopCost%20fill%3A%23ffccbc%0A%20%20%20%20style%20Cancel%20fill%3A%23ffe0b2%0A%20%20%20%20style%20Exec%20fill%3A%23c8e6c9%0A%20%20%20%20style%20Audit%20fill%3A%23e3f2fd%0A"
        })
      ]),
      fallback: withCtx(() => [..._cache[0] || (_cache[0] = [
        createTextVNode(" Loading... ", -1)
      ])]),
      _: 1
    })),
    _cache[2] || (_cache[2] = createStaticVNode("", 68))
  ]);
}
const _10SecurityCost = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _10SecurityCost as default
};
