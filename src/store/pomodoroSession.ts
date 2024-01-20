import { ref } from 'vue';
import { defineStore } from 'pinia';

import { useUuidService } from '../composables/useUuidService';

export type PomodoroSessionType = 'coding' | 'work out' | 'break';

export interface PomodoroSession {
    sessionUuid: string;
    sessionTime: number;
    sessionType: PomodoroSessionType;
}

export const usePomodoroSessionStore = defineStore('session', () => {
    // State
    const pomodoroSession = ref<PomodoroSession>();

    // Composable
    const uuidService = useUuidService();

    // Actions
    const create = (time: number, type: PomodoroSessionType): PomodoroSession => {
        pomodoroSession.value = {
            sessionUuid: uuidService.generateUuid(),
            sessionTime: time,
            sessionType: type,
        };

        return pomodoroSession.value;
    };

    const remove = () => {
        pomodoroSession.value = undefined;
    };

    return {
        pomodoroSession,
        create,
        remove,
    };
});
