// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

struct PomodoroSession {
    start_time: u32,
    end_time: u32,
    duration: u32,
    is_active: bool,
}

impl Drop for PomodoroSession {
    fn drop(&mut self) {
        println!("Dropping PomodoroSession!");
    }
}

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn save_pomodoro_session_start(time: u32) -> String {
    format!("Hello! You've been started your {} Pomodoro!", time)
}

fn main() {
    let session = PomodoroSession {
        start_time: 0,
        end_time: 0,
        duration: 0,
        is_active: false,
    };

    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![save_pomodoro_session_start])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
