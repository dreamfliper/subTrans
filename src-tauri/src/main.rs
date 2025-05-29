#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use opencc_rs::{OpenCC, Config};

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![opencc])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");

}

#[tauri::command]
fn opencc(input: String, mode: String) -> String {
  let dict_config = match mode.as_str() {
      "s2twp" => Config::S2TWP,
      "s2tw" => Config::S2TW,
      "tw2s" | "tw2sp" => Config::TW2S, // Using TW2S to align with simplecc's T2S default
      _ => Config::S2TWP, // Default
  };

  let converter = match OpenCC::new(&[dict_config]) {
      Ok(c) => c,
      Err(e) => return format!("Failed to create OpenCC instance: {}", e),
  };

  match converter.convert(&input) {
      Ok(s) => s,
      Err(e) => format!("Failed to convert string: {}", e),
  }
}
