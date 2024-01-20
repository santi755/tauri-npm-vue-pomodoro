// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
struct PomodoroSession {
    session_uuid: String,
    session_time: u32,
    session_type: Option<String>,
}

#[tauri::command]
fn save_pomodoro_session_start(pomodoro_session: PomodoroSession) -> String {
    if pomodoro_session.session_type.is_none() {
        return "Session type is required".to_string();
    }

    let session_type = pomodoro_session.session_type.unwrap();
    format!(
        "Started session {}: duration {} and type: {}",
        pomodoro_session.session_uuid, pomodoro_session.session_time, session_type
    )
}

#[tauri::command]
fn save_pomodoro_session_end(pomodoro_session: PomodoroSession) -> String {
    format!(
        "Stopped session {}: Rest time {}",
        pomodoro_session.session_uuid, pomodoro_session.session_time
    )
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            save_pomodoro_session_start,
            save_pomodoro_session_end
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
