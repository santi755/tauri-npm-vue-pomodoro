// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod pomodoro_tracker;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            pomodoro_tracker::save_pomodoro_session_start,
            pomodoro_tracker::save_pomodoro_session_end
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
