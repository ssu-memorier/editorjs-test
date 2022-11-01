<template>
  <menu>
    <button @click="toJson">to json</button>
    <button @click="toEditor">to EditorJs</button>
  </menu>
  <textarea ref="$clearJson"></textarea>
</template>
<script setup lang="ts">
import { ref } from "vue";
import editor from "@/store/editor";
const $clearJson = ref();

async function toJson() {
  const data = await editor.getClearJson();

  $clearJson.value.value = JSON.stringify(data);
}
async function toEditor() {
  const text = $clearJson.value.value;
  const json = JSON.parse(text);

  editor.fromJson(json);
}
</script>
<style scoped>
textarea {
  width: 100%;
  height: 200px;
}
</style>
