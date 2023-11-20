import { saveToLocalStorage } from "../data/dataStore.js";
import { setTheme, setChessFont } from "../ui.js";

function formsHandler() {
    const $settingsForm = document.querySelector(`#settingsMenu form[name="settings"]`);
    $settingsForm.addEventListener("change", applyFormChanges);
    $settingsForm.addEventListener("submit", applyFormChanges);
}

function applyFormChanges(e) {
    e.preventDefault();

    const theme = document.querySelector(`#settingsMenu input[name="theme"]:checked`).id;
    setTheme(theme);
    saveToLocalStorage("theme", theme);

    const chessFont = document.querySelector(`#settingsMenu input[name="chess-pieces"]:checked`).id;
    setChessFont(chessFont);
    saveToLocalStorage("chessFont", chessFont);
}


export { formsHandler };