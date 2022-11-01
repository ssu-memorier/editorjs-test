<template>
  <menu><button @click="toJson">to json</button></menu>
  <div ref="$clearJson"></div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import editor from "@/store/editor";
const $clearJson = ref();

async function toJson() {
  const json = await editor.getClearJson();

  $clearJson.value.innerText = JSON.stringify(json);
}
</script>
<style scoped></style>
