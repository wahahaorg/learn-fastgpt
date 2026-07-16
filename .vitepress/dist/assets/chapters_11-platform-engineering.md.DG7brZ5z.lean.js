import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, a2 as createStaticVNode, b as createBlock, w as withCtx, a as createTextVNode, E as createVNode, a3 as Suspense } from "./chunks/framework.BT7OAQ9U.js";
const __pageData = JSON.parse('{"title":"11 平台工程化","description":"","frontmatter":{},"headers":[],"relativePath":"chapters/11-platform-engineering.md","filePath":"chapters/11-platform-engineering.md","lastUpdated":1783444472000}');
const _sfc_main = { name: "chapters/11-platform-engineering.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Mermaid = resolveComponent("Mermaid");
  return openBlock(), createElementBlock("div", null, [
    _cache[2] || (_cache[2] = createStaticVNode("", 11)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-84",
          class: "mermaid",
          graph: "flowchart%20TD%0A%20%20%20%20subgraph%20%E7%94%A8%E6%88%B7%E5%B1%82%0A%20%20%20%20%20%20%20%20Auth%5B%E7%94%A8%E6%88%B7%E4%B8%8E%E6%9D%83%E9%99%90%5D%0A%20%20%20%20%20%20%20%20Tenant%5B%E5%A4%9A%E7%A7%9F%E6%88%B7%5D%0A%20%20%20%20end%0A%0A%20%20%20%20subgraph%20%E9%85%8D%E7%BD%AE%E5%B1%82%0A%20%20%20%20%20%20%20%20AC%5BAgent%20%E9%85%8D%E7%BD%AE%5D%0A%20%20%20%20%20%20%20%20MC%5B%E6%A8%A1%E5%9E%8B%E9%85%8D%E7%BD%AE%5D%0A%20%20%20%20%20%20%20%20PP%5B%E6%8F%90%E7%A4%BA%E8%AF%8D%E7%AE%A1%E7%90%86%5D%0A%20%20%20%20%20%20%20%20TR%5B%E5%B7%A5%E5%85%B7%E6%B3%A8%E5%86%8C%E8%A1%A8%5D%0A%20%20%20%20%20%20%20%20KB%5B%E7%9F%A5%E8%AF%86%E5%BA%93%5D%0A%20%20%20%20end%0A%0A%20%20%20%20subgraph%20%E6%89%A7%E8%A1%8C%E5%B1%82%0A%20%20%20%20%20%20%20%20WF%5B%E5%B7%A5%E4%BD%9C%E6%B5%81%E5%BC%95%E6%93%8E%5D%0A%20%20%20%20%20%20%20%20RT%5BAgent%20%E8%BF%90%E8%A1%8C%E6%97%B6%5D%0A%20%20%20%20end%0A%0A%20%20%20%20subgraph%20%E8%B4%A8%E9%87%8F%E5%B1%82%0A%20%20%20%20%20%20%20%20EV%5B%E8%AF%84%E6%B5%8B%E7%B3%BB%E7%BB%9F%5D%0A%20%20%20%20%20%20%20%20LOG%5B%E6%97%A5%E5%BF%97%E4%B8%8E%E7%9B%91%E6%8E%A7%5D%0A%20%20%20%20%20%20%20%20COST%5B%E8%AE%A1%E8%B4%B9%E4%B8%8E%E9%A2%84%E7%AE%97%5D%0A%20%20%20%20end%0A%0A%20%20%20%20Auth%20--%3E%20AC%0A%20%20%20%20Auth%20--%3E%20TR%0A%20%20%20%20Auth%20--%3E%20KB%0A%20%20%20%20Tenant%20--%3E%20AC%0A%20%20%20%20Tenant%20--%3E%20KB%0A%20%20%20%20Tenant%20--%3E%20COST%0A%0A%20%20%20%20AC%20--%3E%20RT%0A%20%20%20%20MC%20--%3E%20RT%0A%20%20%20%20PP%20--%3E%20RT%0A%20%20%20%20TR%20--%3E%20RT%0A%20%20%20%20KB%20--%3E%20RT%0A%0A%20%20%20%20RT%20--%3E%20WF%0A%20%20%20%20RT%20--%3E%20EV%0A%20%20%20%20RT%20--%3E%20LOG%0A%20%20%20%20RT%20--%3E%20COST%0A%0A%20%20%20%20style%20%E7%94%A8%E6%88%B7%E5%B1%82%20fill%3A%23e3f2fd%0A%20%20%20%20style%20%E9%85%8D%E7%BD%AE%E5%B1%82%20fill%3A%23e8f5e9%0A%20%20%20%20style%20%E6%89%A7%E8%A1%8C%E5%B1%82%20fill%3A%23fff9c4%0A%20%20%20%20style%20%E8%B4%A8%E9%87%8F%E5%B1%82%20fill%3A%23fce4ec%0A"
        })
      ]),
      fallback: withCtx(() => [..._cache[0] || (_cache[0] = [
        createTextVNode(" Loading... ", -1)
      ])]),
      _: 1
    })),
    _cache[3] || (_cache[3] = createStaticVNode("", 41)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-257",
          class: "mermaid",
          graph: "flowchart%20LR%0A%20%20%20%20Draft%5B%E8%8D%89%E7%A8%BF%5D%20--%3E%20Eval%5B%E8%87%AA%E5%8A%A8%E8%AF%84%E6%B5%8B%5D%0A%20%20%20%20Eval%20--%3E%7C%E9%80%9A%E8%BF%87%7C%20Review%7B%E4%BA%BA%E5%B7%A5%E5%AE%A1%E6%A0%B8%7D%0A%20%20%20%20Eval%20--%3E%7C%E5%A4%B1%E8%B4%A5%7C%20Fix%5B%E4%BF%AE%E5%A4%8D%5D%20--%3E%20Draft%0A%0A%20%20%20%20Review%20--%3E%7C%E9%80%9A%E8%BF%87%7C%20Publish%5B%E5%8F%91%E5%B8%83%20v2%5D%0A%20%20%20%20Review%20--%3E%7C%E9%A9%B3%E5%9B%9E%7C%20Draft%0A%0A%20%20%20%20Publish%20--%3E%20Online%5B%E7%BA%BF%E4%B8%8A%E8%BF%90%E8%A1%8C%5D%0A%20%20%20%20Online%20--%3E%7C%E5%8F%91%E7%8E%B0%E9%97%AE%E9%A2%98%7C%20A%7B%E7%AB%8B%E5%8D%B3%E5%9B%9E%E6%BB%9A%3F%7D%0A%20%20%20%20A%20--%3E%7C%E6%98%AF%7C%20Rollback%5B%E5%9B%9E%E6%BB%9A%E5%88%B0%20v1%5D%0A%20%20%20%20A%20--%3E%7C%E5%90%A6%7C%20Hotfix%5B%E7%83%AD%E4%BF%AE%E5%A4%8D%5D%0A%0A%20%20%20%20subgraph%20%E7%89%88%E6%9C%AC%E7%AE%A1%E7%90%86%0A%20%20%20%20%20%20%20%20V1%5Bv1%5D%20--%3E%20V2%5Bv2%5D%0A%20%20%20%20%20%20%20%20V2%20--%3E%20V3%5Bv3%5D%0A%20%20%20%20end%0A%0A%20%20%20%20Publish%20-.-%3E%20V2%0A%20%20%20%20Rollback%20-.-%3E%20V1%0A%0A%20%20%20%20style%20Draft%20fill%3A%23fff9c4%0A%20%20%20%20style%20Eval%20fill%3A%23e3f2fd%0A%20%20%20%20style%20Review%20fill%3A%23ffccbc%0A%20%20%20%20style%20Publish%20fill%3A%23c8e6c9%0A%20%20%20%20style%20Rollback%20fill%3A%23ffcdd2%0A"
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
const _11PlatformEngineering = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _11PlatformEngineering as default
};
