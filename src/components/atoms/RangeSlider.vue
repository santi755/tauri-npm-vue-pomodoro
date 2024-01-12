<template>
  <input
    v-model="props.modelValue"
    type="range"
    class="transparent h-[4px] w-full cursor-pointer appearance-none border-transparent bg-yellow-200 dark:bg-neutral-800"
    min="0"
    max="3600"
    step="60"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);
</script>
