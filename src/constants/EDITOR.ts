import Header from "@editorjs/header";

const HEADER_OPS = {
  class: Header,
  config: {
    placeholder: "제목을 입력하세요",
    levels: [1, 2, 3, 4, 5, 6],
    defaultLevel: 2,
  },
};

const TOOL_CONFIG = {
  header: HEADER_OPS,
};

export default { HEADER_OPS, TOOL_CONFIG };
