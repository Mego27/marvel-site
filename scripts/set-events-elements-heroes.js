import { setEvents, setCurrentValueToLocalStorage } from "./setter-current-item.js";

const heroLinks = document.getElementsByClassName('hero');

setEvents(heroLinks, setCurrentValueToLocalStorage, 'currentHero');