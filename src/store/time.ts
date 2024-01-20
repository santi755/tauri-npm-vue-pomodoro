import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

import { usePomodoroSessionStore, PomodoroSession } from './pomodoroSession';
import { useCountdownService, COUNTDOWN_LIMIT_IN_SECONDS } from '../composables/useCountdownService';
import timeApiService from '../services/timeApiService';

import LOFI_SONG from '../assets/audio/background_lofi.mp3';

const STARTING_POMODORO_TIME_IN_SECONDS = 300;

export const useTimeStore = defineStore('time', () => {
    // State
    const isCountingDown = ref(false);
    const pomodoroTimeInSeconds = ref(STARTING_POMODORO_TIME_IN_SECONDS);
    const musicTrack = new Audio(LOFI_SONG);

    // Store
    const pomodoroSession = usePomodoroSessionStore();

    // Composable
    const countdownService = useCountdownService();

    // Getters
    const pomodoroFormatted = computed(() => countdownService.formatToMinutesAndSeconds(pomodoroTimeInSeconds.value));

    // Actions
    const startPomodoro = async () => {
        isCountingDown.value = true;

        savePomodoroSession();
        countdownService.startCountdown(pomodoroTimeInSeconds.value, (updatedValue) => {
            pomodoroTimeInSeconds.value = updatedValue;
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

    const savePomodoroSession = async () => {
        try {
            const session: PomodoroSession = pomodoroSession.create(pomodoroTimeInSeconds.value, 'coding');

            const started = await timeApiService.savePomodoroSession(session);
            console.log('Pomodoro session started => ', started);
        } catch (e) {
            console.warn('There was a problem saving pomodoro session', e);
        }
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
