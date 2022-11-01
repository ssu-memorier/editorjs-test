import EditorJS from "@editorjs/editorjs";
import EDITOR from "@/constants/EDITOR";

let clearJson = {};

export default {
  createEditor(holder = "editorjs") {
    return new EditorJS({
      holder: holder,
      tools: EDITOR.TOOL_CONFIG,
    });
  },
  getClearJson() {
    return clearJson;
  },
  setClearJson(json: object) {
    clearJson = json;
  },
};
