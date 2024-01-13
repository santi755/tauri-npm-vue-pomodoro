<template>
    <div class="h-screen w-screen bg-green-900 p-8">
        <h1 class="w-full text-white text-center mb-10">Start your pomodoro session!</h1>

        <!-- <Greet /> -->
        <div class="w-full text-center mb-6">
            <PomodoroTimer />
        </div>

        <div class="w-full text-center mb-6">
            <Tag tag="Coding" :tagType="4" />
        </div>
        <div class="w-full text-center">
            <Button text="Let's pomodoro!" />
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from '../../components/atoms/Button.vue'
import Tag from '../../components/atoms/Tag.vue'
import PomodoroTimer from '../../components/patterns/PomodoroTimer.vue'
// import Greet from "../../components/Greet.vue";
</script>
