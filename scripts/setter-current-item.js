function setEvents([...elements], setterToLocalStorage, type) {
    if (type !== 'currentComic') {
        elements.forEach(element => {
            const altValue = element.childNodes[0].nextSibling.childNodes[0].nextSibling.getAttribute('alt');
            element.addEventListener('click', setterToLocalStorage.bind(null, type, altValue))
        });
    } else {
        elements.forEach(element => {
            const altValue = element.childNodes[0].nextSibling.childNodes[0].nextSibling.childNodes[0].nextSibling.getAttribute('alt');
            element.addEventListener('click', setterToLocalStorage.bind(null, type, altValue))
        });
    }
}

function setCurrentValueToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

export {setEvents, setCurrentValueToLocalStorage};