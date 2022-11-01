import EditorJS, { OutputData } from "@editorjs/editorjs";
import EDITOR from "@/constants/EDITOR";

let editor: EditorJS | null = null;
export default {
  createEditor(holder = "editorjs") {
    if (editor) return editor;

    return (editor = new EditorJS({
      holder: holder,
      tools: EDITOR.TOOL_CONFIG,
    }));
  },
  async getClearJson() {
    if (!editor) return null;
    return await editor.save();
  },
  async fromJson(json: OutputData) {
    if (!editor) return;

    editor.render(json);
  },
};
