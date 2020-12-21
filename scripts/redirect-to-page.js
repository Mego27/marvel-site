import { setCurrentValueToLocalStorage } from './setter-current-item.js'

function redirectToPage(link, currentItem, value) {
    setCurrentValueToLocalStorage(currentItem, value)
    window.location.href = `./${link}.html`;
}

const links = document.getElementsByClassName('image');

links[0].addEventListener('click', redirectToPage.bind(null, 'film', 'currentFilm', 'film-avengers-endgame'));
links[1].addEventListener('click', redirectToPage.bind(null, 'film', 'currentFilm', 'film-spiderman'));
links[2].addEventListener('click', redirectToPage.bind(null, 'film', 'currentFilm', 'film-Black_panther'));

links[3].addEventListener('click', redirectToPage.bind(null, 'hero', 'currentHero', 'hero-ironman'));
links[4].addEventListener('click', redirectToPage.bind(null, 'hero', 'currentHero', 'hero-captain'));
links[5].addEventListener('click', redirectToPage.bind(null, 'hero', 'currentHero', 'hero-spiderman'));

links[6].addEventListener('click', redirectToPage.bind(null, 'comic', 'currentComic', 'comic-amazing-spiderman'));
links[7].addEventListener('click', redirectToPage.bind(null, 'comic', 'currentComic', 'comic-hulk'));
links[8].addEventListener('click', redirectToPage.bind(null, 'comic', 'currentComic', 'comic-xmen'));

links[9].addEventListener('click', redirectToPage.bind(null, 'game', 'currentGame', 'game-avengers'));
links[10].addEventListener('click', redirectToPage.bind(null, 'game', 'currentGame', 'game-ironman'));
links[11].addEventListener('click', redirectToPage.bind(null, 'game', 'currentGame', 'game-spiderman'));
