function setTheme(theme) {
    const $themeCSSLink = document.querySelector("#themeLink");
    $themeCSSLink.setAttribute("href", `assets/css/themes/${theme}/theme.css`);

    const $checkedTheme = document.querySelector(`#settingsMenu input[name="theme"]:checked`);

    if (theme !== $checkedTheme.id) {
        $checkedTheme.setAttribute("checked", false);
        document.querySelector(`form #${theme}`).setAttribute("checked", true);
    }
}

function setChessFont(chessFont) {
    const $board = document.querySelector("#board");
    $board.classList.add(chessFont);

    const $checkedChessFont = document.querySelector(`#settingsMenu input[name="chess-pieces"]:checked`);

    if (chessFont !== $checkedChessFont.id) {
        $checkedChessFont.setAttribute("checked", false);
        document.querySelector(`form #${chessFont}`).setAttribute("checked", true);
    }
}

export { setTheme, setChessFont };