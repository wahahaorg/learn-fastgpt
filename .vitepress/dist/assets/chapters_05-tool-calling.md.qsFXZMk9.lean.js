import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, a2 as createStaticVNode, b as createBlock, w as withCtx, a as createTextVNode, E as createVNode, a3 as Suspense, j as createBaseVNode, t as toDisplayString } from "./chunks/framework.BT7OAQ9U.js";
const __pageData = JSON.parse('{"title":"05 工具调用","description":"","frontmatter":{},"headers":[],"relativePath":"chapters/05-tool-calling.md","filePath":"chapters/05-tool-calling.md","lastUpdated":1783444472000}');
const _sfc_main = { name: "chapters/05-tool-calling.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Mermaid = resolveComponent("Mermaid");
  return openBlock(), createElementBlock("div", null, [
    _cache[9] || (_cache[9] = createStaticVNode("", 6)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-37",
          class: "mermaid",
          graph: "flowchart%20LR%0A%20%20%20%20subgraph%20%E5%B7%A5%E5%85%B7%E5%AE%9A%E4%B9%89%0A%20%20%20%20%20%20%20%20T%5BTool%5D%0A%20%20%20%20%20%20%20%20T%20--%3E%20TN%5Bname%3A%20%E5%B7%A5%E5%85%B7%E5%90%8D%E7%A7%B0%5D%0A%20%20%20%20%20%20%20%20T%20--%3E%20TD%5Bdescription%3A%20%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E7%94%A8%5D%0A%20%20%20%20%20%20%20%20T%20--%3E%20TS%5Bparameters%3A%20%E5%8F%82%E6%95%B0%20schema%5D%0A%20%20%20%20%20%20%20%20T%20--%3E%20TR%5Brun%3A%20%E6%89%A7%E8%A1%8C%E5%87%BD%E6%95%B0%5D%0A%20%20%20%20end%0A%0A%20%20%20%20subgraph%20%E5%B7%A5%E5%85%B7%E9%9D%A2%0A%20%20%20%20%20%20%20%20T%20--%3E%7C%E7%BB%99%E6%A8%A1%E5%9E%8B%E7%9C%8B%7C%20ModelView%5B%E5%90%8D%E7%A7%B0%20%2B%20%E6%8F%8F%E8%BF%B0%20%2B%20%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E%5D%0A%20%20%20%20%20%20%20%20T%20--%3E%7C%E7%BB%99%E7%A8%8B%E5%BA%8F%E6%89%A7%E8%A1%8C%7C%20CodeView%5B%E5%8F%82%E6%95%B0%E6%A0%A1%E9%AA%8C%20%2B%20%E6%9D%83%E9%99%90%E6%A3%80%E6%9F%A5%20%2B%20%E6%89%A7%E8%A1%8C%20%2B%20%E8%AE%B0%E5%BD%95%5D%0A%20%20%20%20end%0A%0A%20%20%20%20subgraph%20%E5%B7%A5%E5%85%B7%E5%88%86%E7%B1%BB%0A%20%20%20%20%20%20%20%20READ%5B%E5%8F%AA%E8%AF%BB%3A%20%E6%9F%A5%E8%AF%A2%2F%E6%90%9C%E7%B4%A2%5D%20--%3E%20%7C%E4%BD%8E%E9%A3%8E%E9%99%A9%7C%20SAFE%0A%20%20%20%20%20%20%20%20WRITE%5B%E5%86%99%3A%20%E5%88%9B%E5%BB%BA%2F%E6%9B%B4%E6%96%B0%5D%20--%3E%20%7C%E4%B8%AD%E9%A3%8E%E9%99%A9%7C%20CONFIRM%0A%20%20%20%20%20%20%20%20DELETE%5B%E9%AB%98%E9%A3%8E%E9%99%A9%3A%20%E5%88%A0%E9%99%A4%2F%E6%94%AF%E4%BB%98%5D%20--%3E%20%7C%E9%AB%98%E9%A3%8E%E9%99%A9%7C%20CONFIRM%0A%20%20%20%20end%0A%0A%20%20%20%20style%20T%20fill%3A%23e3f2fd%0A%20%20%20%20style%20ModelView%20fill%3A%23e8f5e9%0A%20%20%20%20style%20CodeView%20fill%3A%23ffccbc%0A%20%20%20%20style%20SAFE%20fill%3A%23c8e6c9%0A%20%20%20%20style%20CONFIRM%20fill%3A%23fff9c4%0A"
        })
      ]),
      fallback: withCtx(() => [..._cache[0] || (_cache[0] = [
        createTextVNode(" Loading... ", -1)
      ])]),
      _: 1
    })),
    _cache[10] || (_cache[10] = createStaticVNode("", 16)),
    createBaseVNode("ul", null, [
      _cache[4] || (_cache[4] = createBaseVNode("li", null, [
        createBaseVNode("strong", null, "AbortController"),
        createTextVNode(" 实现超时控制，超时后释放连接")
      ], -1)),
      _cache[5] || (_cache[5] = createBaseVNode("li", null, [
        createBaseVNode("strong", null, "参数校验"),
        createTextVNode(" 用 zod 在运行时做，而不是假设模型参数正确")
      ], -1)),
      createBaseVNode("li", null, [
        _cache[1] || (_cache[1] = createBaseVNode("strong", null, "URL 模板", -1)),
        _cache[2] || (_cache[2] = createTextVNode(" 支持 ", -1)),
        createBaseVNode("code", null, toDisplayString(_ctx.variable), 1),
        _cache[3] || (_cache[3] = createTextVNode(" 语法，允许 workflow 变量注入", -1))
      ]),
      _cache[6] || (_cache[6] = createBaseVNode("li", null, [
        createBaseVNode("strong", null, "身份透传"),
        createTextVNode(" 通过 header 传递，不暴露给模型")
      ], -1))
    ]),
    _cache[11] || (_cache[11] = createStaticVNode("", 11)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-166",
          class: "mermaid",
          graph: "flowchart%20TD%0A%20%20%20%20Call%5B%E5%B7%A5%E5%85%B7%E8%B0%83%E7%94%A8%E8%AF%B7%E6%B1%82%3Cbr%3Ename%20%2B%20arguments%5D%20--%3E%20RC%7B%E5%B7%A5%E5%85%B7%E6%B3%A8%E5%86%8C%E8%A1%A8%E4%B8%AD%3Cbr%3E%E6%98%AF%E5%90%A6%E5%AD%98%E5%9C%A8%3F%7D%0A%0A%20%20%20%20RC%20--%3E%7C%E5%90%A6%7C%20R1%5B%E8%BF%94%E5%9B%9E%3A%20%E5%B7%A5%E5%85%B7%E4%B8%8D%E5%AD%98%E5%9C%A8%5D%0A%20%20%20%20RC%20--%3E%7C%E6%98%AF%7C%20PV%5B%E5%8F%82%E6%95%B0%E6%A0%A1%E9%AA%8C%5D%0A%0A%20%20%20%20PV%20--%3E%7C%E4%B8%8D%E9%80%9A%E8%BF%87%7C%20R2%5B%E8%BF%94%E5%9B%9E%3A%20%E5%8F%82%E6%95%B0%E9%94%99%E8%AF%AF%5D%0A%20%20%20%20PV%20--%3E%7C%E9%80%9A%E8%BF%87%7C%20PC%7B%E6%9D%83%E9%99%90%E6%A3%80%E6%9F%A5%7D%0A%0A%20%20%20%20PC%20--%3E%7C%E6%97%A0%E6%9D%83%E9%99%90%7C%20R3%5B%E8%BF%94%E5%9B%9E%3A%20%E6%9D%83%E9%99%90%E4%B8%8D%E8%B6%B3%5D%0A%20%20%20%20PC%20--%3E%7C%E6%9C%89%E6%9D%83%E9%99%90%7C%20TO%7B%E8%B6%85%E6%97%B6%E6%8E%A7%E5%88%B6%7D%0A%0A%20%20%20%20TO%20--%3E%7C%E8%B6%85%E6%97%B6%7C%20R4%5B%E8%BF%94%E5%9B%9E%3A%20%E5%B7%A5%E5%85%B7%E8%B6%85%E6%97%B6%5D%0A%20%20%20%20TO%20--%3E%7C%E6%AD%A3%E5%B8%B8%7C%20EX%5B%E6%89%A7%E8%A1%8C%E5%B7%A5%E5%85%B7%E5%87%BD%E6%95%B0%5D%0A%0A%20%20%20%20EX%20--%3E%7C%E6%88%90%E5%8A%9F%7C%20R5%5B%E8%BF%94%E5%9B%9E%3A%20%E5%B7%A5%E5%85%B7%E7%BB%93%E6%9E%9C%5D%0A%20%20%20%20EX%20--%3E%7C%E5%A4%B1%E8%B4%A5%7C%20R6%5B%E8%BF%94%E5%9B%9E%3A%20%E9%94%99%E8%AF%AF%E4%BF%A1%E6%81%AF%5D%0A%0A%20%20%20%20R5%20--%3E%20LOG%5B%E8%AE%B0%E5%BD%95%20Trace%5D%0A%20%20%20%20R6%20--%3E%20LOG%0A%0A%20%20%20%20style%20Call%20fill%3A%23e3f2fd%0A%20%20%20%20style%20RC%20fill%3A%23fff9c4%0A%20%20%20%20style%20PV%20fill%3A%23fff9c4%0A%20%20%20%20style%20PC%20fill%3A%23fff9c4%0A%20%20%20%20style%20TO%20fill%3A%23fff9c4%0A%20%20%20%20style%20EX%20fill%3A%23bbdefb%0A%20%20%20%20style%20LOG%20fill%3A%23f3e5f5%0A"
        })
      ]),
      fallback: withCtx(() => [..._cache[7] || (_cache[7] = [
        createTextVNode(" Loading... ", -1)
      ])]),
      _: 1
    })),
    _cache[12] || (_cache[12] = createStaticVNode("", 11)),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-244",
          class: "mermaid",
          graph: "flowchart%20TD%0A%20%20%20%20Calls%5B%E6%A8%A1%E5%9E%8B%E8%BF%94%E5%9B%9E%203%20%E4%B8%AA%20tool_call%5D%20--%3E%20Classify%7B%E5%88%86%E7%B1%BB%7D%0A%0A%20%20%20%20Classify%20--%3E%7C%E9%83%BD%E6%98%AF%E5%8F%AA%E8%AF%BB%7C%20Parallel%5B%E5%B9%B6%E8%A1%8C%E6%89%A7%E8%A1%8C%3Cbr%3EPromise.allSettled%5D%0A%20%20%20%20Classify%20--%3E%7C%E5%90%AB%E5%86%99%E6%93%8D%E4%BD%9C%7C%20Sequential%5B%E4%B8%B2%E8%A1%8C%E6%89%A7%E8%A1%8C%3Cbr%3E%E9%A1%BA%E5%BA%8F%20await%5D%0A%20%20%20%20Classify%20--%3E%7C%E6%9C%89%E4%BE%9D%E8%B5%96%E5%85%B3%E7%B3%BB%7C%20Ordered%5B%E6%8C%89%E4%BE%9D%E8%B5%96%E9%A1%BA%E5%BA%8F%5D%0A%0A%20%20%20%20Parallel%20--%3E%20Collect%5B%E6%B1%87%E6%80%BB%E7%BB%93%E6%9E%9C%5D%0A%20%20%20%20Sequential%20--%3E%20Collect%0A%20%20%20%20Ordered%20--%3E%20Collect%0A%0A%20%20%20%20Collect%20--%3E%20Merge%5B%E5%90%88%E5%B9%B6%E5%90%8E%E5%8A%A0%E5%85%A5%20messages%5D%0A"
        })
      ]),
      fallback: withCtx(() => [..._cache[8] || (_cache[8] = [
        createTextVNode(" Loading... ", -1)
      ])]),
      _: 1
    })),
    _cache[13] || (_cache[13] = createStaticVNode("", 32))
  ]);
}
const _05ToolCalling = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _05ToolCalling as default
};
