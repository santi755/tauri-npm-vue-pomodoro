<template>
    <div class="h-screen w-screen bg-zinc-900 py-14">
        <AtomH1 class="mb-12">Pomodoro</AtomH1>

        <!-- <Greet /> -->
        <div class="w-full h-2/6 mb-6">
            <CountdownTimer v-if="isCountingDown" />
            <PomodoroTimer v-else />
        </div>

        <div class="w-full text-center mb-14">
            <AtomTag tag="Coding" :tagType="1" />
        </div>

        <div class="w-full text-center">
            <AtomButton v-if="isCountingDown" @click="stopPomodoro">
                <IconPause class="w-6 h-6" />
            </AtomButton>
            <AtomButton v-else @click="startPomodoro">
                <IconPlay class="w-6 h-6" />
            </AtomButton>
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

import IconPlay from '../../components/icons/IconPlay.vue';
import IconPause from '../../components/icons/IconPause.vue';

const timeStore = useTimeStore();
const { isCountingDown } = storeToRefs(timeStore);
const { startPomodoro: startPomodoroFromStore, stopPomodoro } = timeStore;

const startPomodoro = async () => {
    startPomodoroFromStore();
};
</script>
