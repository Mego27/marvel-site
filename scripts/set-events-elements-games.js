import { setEvents, setCurrentValueToLocalStorage } from "./setter-current-item.js";

const gameLinks = document.getElementsByClassName('game');

setEvents(gameLinks, setCurrentValueToLocalStorage, 'currentGame');