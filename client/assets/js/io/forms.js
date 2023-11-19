function formsHandler() {
    const $settingsForm = document.querySelector(`#settingsMenu form[name="settings"]`);
    $settingsForm.addEventListener("change", themeChanger);
    $settingsForm.addEventListener("submit", themeChanger);
}

function themeChanger(e) {
    e.preventDefault();
    const theme = document.querySelector(`#settingsMenu input[name="theme"]:checked`).id
    const $themeCSSLink = document.querySelector("#themeLink");

    $themeCSSLink.setAttribute("href", `assets/css/themes/${theme}/theme.css`);
}

export { formsHandler };