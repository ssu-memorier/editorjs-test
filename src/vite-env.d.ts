/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "@editorjs/header" {
  import Header from "@editorjs/header";
  export = Header;
}

declare module "@editorjs/nested-list" {
  import NestedList from "@editorjs/nested-list";
  export = NestedList;
}

declare module "editorjs-undo" {
  import Undo from "editorjs-undo";
  export = Undo;
}

declare module "editorjs-toggle-block" {
  import ToggleBlock from "editorjs-toggle-block";
  export = ToggleBlock;
}

declare module "@/modules/editorjs-latex" {
  import LaTeX from "@/modules/editorjs-latex";
  export = LaTeX;
}

declare module "@editorjs/simple-image" {
  import SimpleImage from "@editorjs/simple-image";
  export = SimpleImage;
}

declare module "editorjs-drag-drop" {
  import DragDrop from "editorjs-drag-drop";
  export = DragDrop;
}
