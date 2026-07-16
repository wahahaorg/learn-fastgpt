import { s as styles_default, b as stateRenderer_v3_unified_default, a as stateDiagram_default, S as StateDB } from "./chunk-EX3LRPZG.nhxKlPhF.js";
import { _ as __name } from "../app.kAMR529G.js";
import "./chunk-XXDRQBXY.DuihicGl.js";
import "./chunk-VR4S4FIN.BHw4QJqS.js";
import "./chunk-32BRIVSS.Cgmq_Je-.js";
import "./framework.BT7OAQ9U.js";
import "./theme.Cv8wVEIk.js";
var diagram = {
  parser: stateDiagram_default,
  get db() {
    return new StateDB(2);
  },
  renderer: stateRenderer_v3_unified_default,
  styles: styles_default,
  init: /* @__PURE__ */ __name((cnf) => {
    if (!cnf.state) {
      cnf.state = {};
    }
    cnf.state.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
  }, "init")
};
export {
  diagram
};
