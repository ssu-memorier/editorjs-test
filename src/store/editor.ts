import EditorJS, { EditorConfig } from "@editorjs/editorjs";

let clearJson = {};

export default {
  createEditor(config: EditorConfig) {
    return new EditorJS(config);
  },
  getClearJson() {
    return clearJson;
  },
  setClearJson(json: object) {
    clearJson = json;
  },
};
