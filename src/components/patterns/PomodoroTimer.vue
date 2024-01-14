<template>
    <div class="relative flex justify-center">
        <AtomH2 class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {{ pomodoroFormatted }}
        </AtomH2>
        <AtomRangeSlider v-model="pomodoroTimeInSeconds" />
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { useTimeStore } from '../../store/time.ts';

import AtomRangeSlider from '../../components/atoms/AtomRangeSlider.vue';
import AtomH2 from '../../components/atoms/AtomH2.vue';

// Store
const timeStore = useTimeStore();
const { pomodoroTimeInSeconds, pomodoroFormatted } = storeToRefs(timeStore);
</script>
