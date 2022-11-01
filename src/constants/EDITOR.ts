import NestedList from "@editorjs/nested-list";
import Header from "@editorjs/header";
import init from "@/assets/init.json";

const HEADER_OPS = {
  class: Header,
  config: {
    placeholder: "제목을 입력하세요",
    levels: [1, 2, 3, 4, 5, 6],
    defaultLevel: 2,
  },
};

const NESTED_LIST_OPS = {
  class: NestedList,
  inlineToolbar: true,
};
const TOOL_CONFIG = {
  header: HEADER_OPS,
  list: NESTED_LIST_OPS,
};

const INIT_DATA = init;
export default { HEADER_OPS, NESTED_LIST_OPS, TOOL_CONFIG, INIT_DATA };
