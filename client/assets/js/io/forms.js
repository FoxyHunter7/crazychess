import { saveToLocalStorage } from "../data/dataStore.js";
import { setTheme } from "../ui.js";

function formsHandler() {
    const $settingsForm = document.querySelector(`#settingsMenu form[name="settings"]`);
    $settingsForm.addEventListener("change", themeChanger);
    $settingsForm.addEventListener("submit", themeChanger);
}

function themeChanger(e) {
    e.preventDefault();
    const theme = document.querySelector(`#settingsMenu input[name="theme"]:checked`).id;

    setTheme(theme);
    saveToLocalStorage("theme", theme);
}


export { formsHandler };