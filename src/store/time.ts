import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

import { useCountdownService } from '../composables/useCountdownService';

export const useTimeStore = defineStore('time', () => {
    // State
    const pomodoroTimeInSeconds = ref(300);
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
        pomodoroTimeInSeconds.value = 300;
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
