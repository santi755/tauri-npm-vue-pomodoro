<template>
  <span
    class="inline-block bg-green-800 rounded-full px-3 py-1 text-sm font-regular text-white"
  >
    <span
      class="inline-block rounded-full w-2 h-2 mr-1"
      :class="tagTypeColor[props.tagType]"
    ></span>
    <span> {{ props.tag }}</span>
  </span>
</template>

<script setup lang="ts">
const props = defineProps({
  tag: {
    type: String,
    required: true,
  },
  tagType: {
    type: Number,
    default: 1,
  },
});

const tagTypeColor = {
  1: "bg-red-500",
  2: "bg-green-500",
  3: "bg-blue-500",
  4: "bg-yellow-500",
  5: "bg-indigo-500",
  6: "bg-purple-500",
  7: "bg-pink-500",
};
</script>
