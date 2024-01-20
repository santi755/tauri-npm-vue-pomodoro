import { invoke } from '@tauri-apps/api/tauri';

export interface PomodoroSession {
    sessionTime: number;
    sessionType: 'coding' | 'work out' | 'break';
}

class timeApiService {
    async savePomodoroSession(pomodoroSession: PomodoroSession) {
        try {
            const savingPomodoroStart = await invoke('save_pomodoro_session_start', {
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
