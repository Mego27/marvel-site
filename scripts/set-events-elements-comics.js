import { setEvents, setCurrentValueToLocalStorage } from "./setter-current-item.js";

const comicsLinks = document.getElementsByClassName('comic');

setEvents(comicsLinks, setCurrentValueToLocalStorage, 'currentComic');