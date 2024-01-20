// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

#[tauri::command]
fn save_pomodoro_session_start(session_time: u32, session_type: String) -> String {
    format!(
        "Session time: {} and session type: {}",
        session_time, session_type
    )
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![save_pomodoro_session_start])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
