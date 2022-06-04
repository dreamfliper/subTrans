#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use simplecc::Dict;
use simplecc::dicts;

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![opencc])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");

}

#[tauri::command]
fn opencc(input: String, mode: String) -> String {
  let dict: &Dict = match mode.as_str() {
    "s2twp" => &dicts::S2TWP,
    "s2tw" => &dicts::S2TW,
    "tw2s" | "tw2sp" => &dicts::T2S,
    _ => &dicts::S2TWP
  };
  return dict.replace_all(&input);
}
