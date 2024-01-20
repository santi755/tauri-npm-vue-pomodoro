import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

import { usePomodoroSessionStore } from './pomodoroSession';
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
    const pomodoroSessionStore = usePomodoroSessionStore();

    // Composable
    const countdownService = useCountdownService();

    // Getters
    const pomodoroFormatted = computed(() => countdownService.formatToMinutesAndSeconds(pomodoroTimeInSeconds.value));
    const session = computed(() => pomodoroSessionStore.pomodoroSession);

    // Actions
    const startPomodoro = async () => {
        isCountingDown.value = true;

        savePomodoroSessionStart();
        countdownService.startCountdown(pomodoroTimeInSeconds.value, (updatedValue) => {
            pomodoroTimeInSeconds.value = updatedValue;
            if (updatedValue === COUNTDOWN_LIMIT_IN_SECONDS) {
                stopPomodoro();
            }
        });
    };

    const stopPomodoro = () => {
        try {
            savePomodoroSessionEnd();
            countdownService.stopCountdown();
            resetPomodoro();
            isCountingDown.value = false;
        } catch (e) {
            console.warn('There was a problem stopping pomodoro', e);
        }
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

    const savePomodoroSessionStart = async () => {
        try {
            const session = pomodoroSessionStore.create(pomodoroTimeInSeconds.value, 'coding');
            const started = await timeApiService.savePomodoroSessionStart(session);
            console.log('Pomodoro session started => ', started);
        } catch (e) {
            console.warn('There was a problem saving pomodoro session', e);
        }
    };

    const savePomodoroSessionEnd = async () => {
        try {
            if (!session.value) {
                throw new Error('Pomodoro session is not defined');
            }

            const ended = await timeApiService.savePomodoroSessionEnd({
                sessionUuid: session.value.sessionUuid,
                sessionTime: pomodoroTimeInSeconds.value,
                sessionType: session.value.sessionType,
            });
            console.log('Pomodoro session ended => ', ended);
            pomodoroSessionStore.remove();
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
