import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

import { useCountdownService, COUNTDOWN_LIMIT_IN_SECONDS } from '../composables/useCountdownService';

import lofiSong from '../assets/audio/background_lofi.mp3';

const STARTING_POMODORO_TIME_IN_SECONDS = 300;

export const useTimeStore = defineStore('time', () => {
    // State
    const pomodoroTimeInSeconds = ref(STARTING_POMODORO_TIME_IN_SECONDS);
    const isCountingDown = ref(false);
    const musicTrack = new Audio(lofiSong);

    // Composable
    const countdownService = useCountdownService();

    // Getters
    const pomodoroFormatted = computed(() => countdownService.formatToMinutesAndSeconds(pomodoroTimeInSeconds.value));

    // Actions
    const startPomodoro = () => {
        isCountingDown.value = true;
        countdownService.startCountdown(pomodoroTimeInSeconds.value, (updatedValue) => {
            pomodoroTimeInSeconds.value = updatedValue;
            console.log('updatedValue', updatedValue);
            if (updatedValue === COUNTDOWN_LIMIT_IN_SECONDS) {
                stopPomodoro();
            }
        });
    };

    const stopPomodoro = () => {
        countdownService.stopCountdown();
        resetPomodoro();
        isCountingDown.value = false;
    };

    const resetPomodoro = () => {
        pomodoroTimeInSeconds.value = STARTING_POMODORO_TIME_IN_SECONDS;
    };

    const playMusic = () => {
        musicTrack.volume = 1.0;
        musicTrack.play().catch((e) => {
            console.warn('There was a problem playing sound', e);
        });
    };

    const pauseMusic = () => {
        musicTrack.pause();
    };

    return {
        pomodoroTimeInSeconds,
        isCountingDown,
        countdownService,
        pomodoroFormatted,
        startPomodoro,
        stopPomodoro,
        resetPomodoro,
        playMusic,
        pauseMusic,
    };
});
