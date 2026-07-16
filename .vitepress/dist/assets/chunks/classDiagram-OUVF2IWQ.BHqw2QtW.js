import { s as styles_default, c as classRenderer_v3_unified_default, a as classDiagram_default, C as ClassDB } from "./chunk-V7JOEXUC.Dmh_1FJO.js";
import { _ as __name } from "../app.kAMR529G.js";
import "./chunk-5VM5RSS4.r_1rfvhJ.js";
import "./chunk-XXDRQBXY.DuihicGl.js";
import "./chunk-VR4S4FIN.BHw4QJqS.js";
import "./chunk-32BRIVSS.Cgmq_Je-.js";
import "./framework.BT7OAQ9U.js";
import "./theme.Cv8wVEIk.js";
var diagram = {
  parser: classDiagram_default,
  get db() {
    return new ClassDB();
  },
  renderer: classRenderer_v3_unified_default,
  styles: styles_default,
  init: /* @__PURE__ */ __name((cnf) => {
    if (!cnf.class) {
      cnf.class = {};
    }
    cnf.class.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
  }, "init")
};
export {
  diagram
};
