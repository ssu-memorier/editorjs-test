import EditorJS from "@editorjs/editorjs";
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
  getClearJson() {
    return editor?.save();
  },
};
