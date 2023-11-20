function setTheme(theme) {
    const $themeCSSLink = document.querySelector("#themeLink");
    $themeCSSLink.setAttribute("href", `assets/css/themes/${theme}/theme.css`);

    const $checkedTheme = document.querySelector(`#settingsMenu input[name="theme"]:checked`);

    if (theme !== $checkedTheme.id) {
        $checkedTheme.setAttribute("checked", false);
        document.querySelector(`form #${theme}`).setAttribute("checked", true);
    }
}

export { setTheme };