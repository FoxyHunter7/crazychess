function loadFromLocalStorage(key) {
    try {
        return localStorage.getItem(key);
    } 
    catch {
        return undefined;
    }
}

function saveToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

export { loadFromLocalStorage, saveToLocalStorage };