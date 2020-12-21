import { setEvents, setCurrentValueToLocalStorage } from "./setter-current-item.js";

const filmLinks = document.getElementsByClassName('film');

setEvents(filmLinks, setCurrentValueToLocalStorage, 'currentFilm');