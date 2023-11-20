import { ActionsLibrary } from "./data/actionsLibrary.js"
import { calcPossibleActions } from "./logic/actionsCalc.js";
import { ioHandlers } from "./io/io.js"
import { formsHandler } from "./io/forms.js";
import { loadFromLocalStorage, saveToLocalStorage } from "./data/dataStore.js";
import { setTheme } from "./ui.js";

//const socket = io("http://localhost:3000")

ioHandlers();
formsHandler();

if (loadFromLocalStorage("theme")) {
    setTheme(loadFromLocalStorage("theme"));
}