import { ref } from 'vue';
import { defineStore } from 'pinia';

import { useUuidService } from '../composables/useUuidService';

export type PomodoroSessionType = 'coding' | 'work out' | 'break';

export interface PomodoroSession {
    sessionUuid: string;
    sessionTime: number;
    sessionType: PomodoroSessionType;
    sessionRemainingTime: number;
    sessionCompleted: boolean;
}

const STARTING_POMODORO_COMPLETE = false;

export const usePomodoroSessionStore = defineStore('session', () => {
    // State
    const pomodoroSession = ref<PomodoroSession | null>(null);

    // Composable
    const uuidService = useUuidService();

    // Actions
    const create = (time: number, remainingTime: number, type: PomodoroSessionType): PomodoroSession => {
        pomodoroSession.value = {
            sessionUuid: uuidService.generateUuid(),
            sessionTime: time,
            sessionRemainingTime: remainingTime,
            sessionType: type,
            sessionCompleted: STARTING_POMODORO_COMPLETE,
        };

        return pomodoroSession.value;
    };

    const remove = () => {
        pomodoroSession.value = null;
    };

    return {
        pomodoroSession,
        create,
        remove,
    };
});
