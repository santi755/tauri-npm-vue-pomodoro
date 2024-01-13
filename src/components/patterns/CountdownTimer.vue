<template>
    <div class="relative flex justify-center h-full">
        <AtomH2 class="absolute text-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-300">
            {{ pomodoroFormatted }}
        </AtomH2>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { useTimeStore } from '../../store/time.ts';

const timeStore = useTimeStore();
const { pomodoroFormatted } = storeToRefs(timeStore);
</script>
