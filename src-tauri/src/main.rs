// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

#[tauri::command]
fn save_pomodoro_session_start(
    session_uuid: String,
    session_time: u32,
    session_type: String,
) -> String {
    format!(
        "Started session {}: duration {} and type: {}",
        session_uuid, session_time, session_type
    )
}
/*
#[tauri::command]
fn save_pomodoro_session_end(session_uuid: String, session_time: u32) -> String {
    format!(
        "Stopped session {}: Rest time {}",
        session_uuid, session_time
    )
}
*/
fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            save_pomodoro_session_start,
            //save_pomodoro_session_end
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
