const OVERLAY_CLASS_LIST = document.querySelector("#overlay").classList;
const SETTINGS_CLASS_LIST = document.querySelector("#settingsMenu").classList;
const INFO_CLASS_LIST = document.querySelector("#infoMenu").classList;

function ioHandlers() {
    document.querySelector("#player2Info a").addEventListener("click", showHideSettings);
    document.querySelector("#player1Info a").addEventListener("click", showHideInfo);
}

function showHideSettings(e) {
    e.preventDefault();
    console.log("hi");

    if (SETTINGS_CLASS_LIST.contains("hidden")) {
        OVERLAY_CLASS_LIST.remove("hidden");
        INFO_CLASS_LIST.add("hidden");
    } else if (INFO_CLASS_LIST.contains("hidden")) {
        OVERLAY_CLASS_LIST.add("hidden");
    }

    SETTINGS_CLASS_LIST.toggle("hidden");
}

function showHideInfo(e) {
    e.preventDefault();

    if (INFO_CLASS_LIST.contains("hidden")) {
        OVERLAY_CLASS_LIST.remove("hidden");
        SETTINGS_CLASS_LIST.add("hidden");
    } else if (SETTINGS_CLASS_LIST.contains("hidden")) {
        OVERLAY_CLASS_LIST.add("hidden");
    }

    INFO_CLASS_LIST.toggle("top");
    INFO_CLASS_LIST.toggle("hidden");
}

export { ioHandlers };