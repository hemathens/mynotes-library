// This file will handle advanced logic for:
// - Save, edit, delete notes
// - LocalStorage sync
// - Tag filtering
// - Google Drive image preview (if link is image)

// Code will match the new index.html structure
// Ready for enhanced full JS logic to be written on demand
// Theme toggle logic
const themeToggle = document.getElementById("themeToggle");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
  document.body.classList.add("dark");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  themeToggle.textContent = isDark ? "☀️" : "🌙";
});
console.log("Script loaded");