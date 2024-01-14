<template>
    <slider
        id="vue3Slider"
        v-model="model"
        :color="sliderColor"
        :track-color="sliderTrackColor"
        orientation="circular"
        :min="0"
        :max="3600"
        :step="10"
        :height="10"
        width="160px"
    />
</template>

<script setup lang="ts">
import slider from 'vue3-slider';

import styles from 'tailwindcss/colors';

const sliderColor = styles.yellow[600];
const sliderTrackColor = styles.gray[300];

const model = defineModel();

const emit = defineEmits(['update:modelValue']);
</script>

<style>
#vue3Slider circle:first-of-type {
    stroke-width: 3;
}
</style>
