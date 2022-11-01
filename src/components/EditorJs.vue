<template>
  <div id="editorjs"></div>
</template>
<script setup lang="ts">
import EditorJS from "@editorjs/editorjs";
import editor from "@/store/editor";
import EDITOR from "@/constants/EDITOR";

const editorJs = editor.createEditor({
  holder: "editorjs",
  tools: EDITOR.TOOL_CONFIG,
});
</script>
<style>
#editorjs {
  font-family: "Nanum Gothic", "Roboto", sans-serif;
}
</style>
