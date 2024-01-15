<template>
    <slider
        id="vue3Slider"
        v-model="model"
        :color="SLIDER_COLOR"
        :track-color="SLIDER_TRACK_COLOR"
        :orientation="SLIDER_ORIENTATION"
        :min="SLIDER_MIN_VALUE"
        :max="SLIDER_MAX_VALUE"
        :step="SLIDER_STEP"
        :height="SLIDER_HEIGHT"
        :width="SLIDER_WIDTH"
    />
</template>

<script setup lang="ts">
import slider from 'vue3-slider';

import styles from 'tailwindcss/colors';

const SLIDER_ORIENTATION = 'circular';
const SLIDER_MIN_VALUE = 0;
const SLIDER_MAX_VALUE = 3600;
const SLIDER_STEP = 10;
const SLIDER_HEIGHT = 10;
const SLIDER_WIDTH = '160px';
const SLIDER_COLOR = styles.yellow[600];
const SLIDER_TRACK_COLOR = styles.gray[300];

const model = defineModel();

const emit = defineEmits(['update:modelValue']);
</script>

<style>
#vue3Slider circle:first-of-type {
    stroke-width: 3;
}
</style>
