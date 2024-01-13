<template>
    <span> {{ pomodoroFormatted }} - {{ pomodoroTimeInSeconds }} </span>
    <RangeSlider v-model="pomodoroTimeInSeconds" />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { storeToRefs } from 'pinia';

import { useTimeStore } from '../../store/time.ts';

import RangeSlider from '../../components/atoms/RangeSlider.vue';

// Store
const timeStore = useTimeStore();
const { pomodoroTimeInSeconds, pomodoroFormatted } = storeToRefs(timeStore);
</script>
