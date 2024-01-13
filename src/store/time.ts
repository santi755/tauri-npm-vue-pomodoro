import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

import { useCountdownService } from '../composables/useCountdownService';

const STARTING_POMODORO_TIME_IN_SECONDS = 300;

export const useTimeStore = defineStore('time', () => {
    // State
    const pomodoroTimeInSeconds = ref(STARTING_POMODORO_TIME_IN_SECONDS);
    const isCountingDown = ref(false);

    // Composable
    const countdownService = useCountdownService();

    // Getters
    const pomodoroFormatted = computed(() => countdownService.formatToMinutesAndSeconds(pomodoroTimeInSeconds.value));

    // Actions
    const startPomodoro = () => {
        isCountingDown.value = true;
        countdownService.startCountdown(pomodoroTimeInSeconds.value, (updatedValue) => {
            pomodoroTimeInSeconds.value = updatedValue;
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

    return {
        pomodoroTimeInSeconds,
        isCountingDown,
        countdownService,
        pomodoroFormatted,
        startPomodoro,
        stopPomodoro,
        resetPomodoro,
    };
});
