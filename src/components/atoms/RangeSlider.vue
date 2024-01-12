<template>
  <div>
    <span> {{ pomodoroTime }}:00 </span>
    <input
      v-model="pomodoroTime"
      type="range"
      class="transparent h-[4px] w-full cursor-pointer appearance-none border-transparent bg-yellow-200 dark:bg-neutral-800"
      min="0"
      max="60"
      step="5"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const pomodoroTime = ref(30);
</script>
