<template>
  <div id="editorjs"></div>
</template>
<script setup lang="ts">
import editor from "@/store/editor";

const editorJs = editor.createEditor("editorjs");
</script>
<style>
#editorjs {
  font-family: "Nanum Gothic", "Roboto", sans-serif;
}
</style>
