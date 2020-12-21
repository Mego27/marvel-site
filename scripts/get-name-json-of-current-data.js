export default function getNameJsonOfCurrentData(key) {
    return `${getItemFromLocalStorage(key)}.json`;
}

function getItemFromLocalStorage(key) {
    return localStorage.getItem(key);
}
