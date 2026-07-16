import { c as createFlowDiagram, s as styles_default } from "./flowDiagram-23GEKE2U.BuBxwYrD.js";
import { _ as __name } from "../app.kAMR529G.js";
import "./chunk-5VM5RSS4.r_1rfvhJ.js";
import "./chunk-XXDRQBXY.DuihicGl.js";
import "./chunk-VR4S4FIN.BHw4QJqS.js";
import "./chunk-32BRIVSS.Cgmq_Je-.js";
import "./channel.D0_SsK4I.js";
import "./framework.BT7OAQ9U.js";
import "./theme.Cv8wVEIk.js";
var getStyles = /* @__PURE__ */ __name((options) => `${styles_default(options)}
  .swimlane.cluster rect {
    stroke: ${options.clusterBorder} !important;
  }
  [data-look="neo"].cluster rect {
    filter: none;
  }
`, "getStyles");
var styles_default2 = getStyles;
var diagram = createFlowDiagram({ defaultLayout: "swimlane", styles: styles_default2 });
export {
  diagram
};
