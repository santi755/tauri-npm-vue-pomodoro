import { invoke } from '@tauri-apps/api/tauri';

import { PomodoroSession } from '../store/pomodoroSession';

class timeApiService {
    async savePomodoroSession(pomodoroSession: PomodoroSession) {
        try {
            const savingPomodoroStart = await invoke('save_pomodoro_session_start', {
                sessionUuid: pomodoroSession.sessionUuid,
                sessionTime: pomodoroSession.sessionTime,
                sessionType: pomodoroSession.sessionType,
            });

            return savingPomodoroStart;
        } catch (e: any) {
            throw new Error(e);
        }
    }
}

export default new timeApiService();
