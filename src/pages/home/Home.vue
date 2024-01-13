<template>
    <div class="h-screen w-screen bg-green-900 p-8">
        <h1 class="w-full text-white text-center mb-10">Start your pomodoro session!</h1>

        <!-- <Greet /> -->
        <div class="w-full text-center mb-6">
            <CountdownTimer v-if="isCountingDown" />
            <PomodoroTimer v-else />
        </div>

        <div class="w-full text-center mb-6">
            <Tag tag="Coding" :tagType="4" />
        </div>
        <div class="w-full text-center">
            <Button v-if="isCountingDown" @click="stopCountdown" text="Stop pomodoro!" />
            <Button v-else @click="startCountdown" text="Let's pomodoro!" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

import Button from '../../components/atoms/Button.vue';
import Tag from '../../components/atoms/Tag.vue';
import PomodoroTimer from '../../components/patterns/PomodoroTimer.vue';
import CountdownTimer from '../../components/patterns/CountdownTimer.vue';
// import Greet from "../../components/Greet.vue";

import { useTimeStore } from '../../store/time.ts';

const timeStore = useTimeStore();
const { isCountingDown } = storeToRefs(timeStore);
const { startCountdown, stopCountdown } = timeStore;
</script>
