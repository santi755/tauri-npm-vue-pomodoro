import { defineStore } from 'pinia';

export type TimeStore = {
    pomodoroTimeInSeconds: number;
    isCountingDown: boolean;
};

export const useTimeStore = defineStore('time', {
    state: () =>
        ({
            pomodoroTimeInSeconds: 300 as number,
            isCountingDown: false,
        } as TimeStore),
    getters: {
        timeFormatted(state: TimeStore) {
            const minutes = Math.floor(state.pomodoroTimeInSeconds / 60);
            const seconds = state.pomodoroTimeInSeconds - minutes * 60;
            const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
            return `${minutes}:${formattedSeconds}`;
        },
    },
    actions: {
        startCountdown() {
            this.isCountingDown = true;
        },
        stopCountdown() {
            this.resetCountdown();
            this.isCountingDown = false;
        },
        resetCountdown() {
            this.pomodoroTimeInSeconds = 300;
        },
        tick() {
            if (this.pomodoroTimeInSeconds > 0) {
                this.pomodoroTimeInSeconds--;
            }
        },
    },
});
