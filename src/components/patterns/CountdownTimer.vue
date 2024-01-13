<template>
    <p>pomodoroFormatted: {{pomodoroFormatted}}</p>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { useTimeStore } from '../../store/time.ts';

const timeStore = useTimeStore();
const { pomodoroFormatted } = storeToRefs(timeStore);
</script>