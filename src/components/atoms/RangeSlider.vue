<template>
  <slider
    v-model="model"
    color="#FB278D"
    track-color="#333333"
    orientation="circular"
    :min="0"
    :max="3600"
    :step="300"
    :height="15"
    width="160px"
  />
</template>

<script setup lang="ts">
import slider from "vue3-slider";

const model = defineModel();

const emit = defineEmits(["update:modelValue"]);
</script>
