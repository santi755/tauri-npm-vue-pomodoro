<template>
    <div class="h-screen w-screen bg-zinc-900 p-8">
        <AtomH1 class="text-2xl">Set up the Pomodoro time!</AtomH1>

        <!-- <Greet /> -->
        <div class="w-full text-center mb-6">
            <CountdownTimer v-if="isCountingDown" />
            <PomodoroTimer v-else />
        </div>

        <div class="w-full text-center mb-6">
            <AtomTag tag="Coding" :tagType="4" />
        </div>
        <div class="w-full text-center">
            <AtomButton v-if="isCountingDown" @click="stopPomodoro" text="Stop pomodoro!" />
            <AtomButton v-else @click="startPomodoro" text="Let's pomodoro!" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { useTimeStore } from '../../store/time.ts';

import AtomButton from '../../components/atoms/AtomButton.vue';
import AtomH1 from '../../components/atoms/AtomH1.vue';
import AtomTag from '../../components/atoms/AtomTag.vue';
import PomodoroTimer from '../../components/patterns/PomodoroTimer.vue';
import CountdownTimer from '../../components/patterns/CountdownTimer.vue';
// import Greet from "../../components/Greet.vue";

const timeStore = useTimeStore();
const { isCountingDown } = storeToRefs(timeStore);
const { startPomodoro, stopPomodoro } = timeStore;
</script>
