<template>
    <span> {{ timeFormatted }} </span>
    <RangeSlider v-model="pomodoroTimeInSeconds" />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { storeToRefs } from 'pinia';

import RangeSlider from '../../components/atoms/RangeSlider.vue';

import { useTimeStore } from '../../store/time.ts';

// Store
const timeStore = useTimeStore();
const { pomodoroTimeInSeconds, timeFormatted } = storeToRefs(timeStore);
</script>
