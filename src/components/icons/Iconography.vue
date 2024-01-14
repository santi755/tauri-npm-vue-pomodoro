<template>
    <div class="grid grid-cols-6 gap-4">
        <div
            v-for="(iconComponent, iconName) in iconComponentList"
            class="flex items-center justify-center w-full h-20 bg-slate-300 rounded-lg"
        >
            <div class="text-center">
                <component :is="iconComponent" class="h-6 block w-full" />
                <span class="block w-full">{{ iconName }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import IconPause from './IconPause.vue';
import IconPlay from './IconPlay.vue';

const iconComponentList = {
    Pause: IconPause,
    Play: IconPlay,
};
</script>
