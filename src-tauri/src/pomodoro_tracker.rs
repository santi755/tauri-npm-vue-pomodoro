use std::fs::OpenOptions;
use std::io::Write;

use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
pub struct PomodoroSession {
    session_uuid: String,
    session_time: u32,
    session_type: String,
    session_completed: bool,
}

#[tauri::command]
pub fn save_pomodoro_session_start(pomodoro_session: PomodoroSession) -> String {
    write_pomodoro_session(&pomodoro_session);

    format!(
        "Started session {}: duration {} and type: {}",
        pomodoro_session.session_uuid, pomodoro_session.session_time, pomodoro_session.session_type
    )
}

#[tauri::command]
pub fn save_pomodoro_session_end(pomodoro_session: PomodoroSession) -> String {
    format!(
        "Stopped session {}: Rest time {}",
        pomodoro_session.session_uuid, pomodoro_session.session_time
    )
}

fn write_pomodoro_session(pomodoro_session: &PomodoroSession) -> String {
    let pomodoro_session_string = serde_json::to_string(&pomodoro_session).unwrap();

    let mut file = OpenOptions::new()
        .write(true)
        .create(true)
        .append(true)
        .open("pomodoro_sessions.json")
        .unwrap();

    file.write_all(pomodoro_session_string.as_bytes())
        .expect("Unable to write data to file");
    pomodoro_session_string
}
