import { invoke } from '@tauri-apps/api/tauri';

import { PomodoroSession } from '../store/pomodoroSession';

class timeApiService {
    async savePomodoroSessionStart(pomodoroSession: PomodoroSession) {
        try {
            const savingPomodoroStart = await invoke('save_pomodoro_session_start', {
                pomodoroSession: {
                    session_uuid: pomodoroSession.sessionUuid,
                    session_time: pomodoroSession.sessionTime,
                    session_type: pomodoroSession.sessionType,
                },
            });

            return savingPomodoroStart;
        } catch (e: any) {
            throw new Error(e);
        }
    }

    async savePomodoroSessionEnd(pomodoroSession: PomodoroSession) {
        try {
            const savingPomodoroEnd = await invoke('save_pomodoro_session_end', {
                pomodoroSession: {
                    session_uuid: pomodoroSession.sessionUuid,
                    session_time: pomodoroSession.sessionTime,
                    session_type: pomodoroSession.sessionType,
                },
            });

            return savingPomodoroEnd;
        } catch (e: any) {
            throw new Error(e);
        }
    }
}

export default new timeApiService();
