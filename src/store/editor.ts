import EditorJS, { OutputData } from "@editorjs/editorjs";
import EDITOR from "@/constants/EDITOR";
import Undo from "editorjs-undo";
import DragDrop from "editorjs-drag-drop";

let editor: EditorJS | null = null;
export default {
  createEditor(holder = "editorjs") {
    if (editor) return editor;

    return (editor = new EditorJS({
      holder: holder,
      onReady: () => {
        new Undo({ editor });
        new DragDrop(editor);
      },
      tools: EDITOR.TOOL_CONFIG,
      data: EDITOR.INIT_DATA,
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
