import getNameJsonOfCurrentData from './get-name-json-of-current-data.js';

window.onload = chooseData();

async function chooseData() {
    const url = document.location.pathname.replace('/', '').replace('.html', '');
    const upload = {
        film: uploadFilmData.bind(null, 'currentFilm'),
        hero: uploadHeroData.bind(null, 'currentHero'),
        comic: uploadComicData.bind(null, 'currentComic'),
        game: uploadGameData.bind(null, 'currentGame'),
    }[url]();

    console.log(localStorage.getItem('currentFilm'));
    console.log(localStorage.getItem('currentHero'));
    console.log(localStorage.getItem('currentComic'));
    console.log(localStorage.getItem('currentGame'));
}

async function loadData(key) {
    const currentItem = getNameJsonOfCurrentData(key);
    let data;
    if (currentItem !== 'null.json') {
        const response = await fetch(`./data/${currentItem}`);
        data = await response.json();
    }

    return data;
}

async function uploadFilmData(key) {
    const data = await loadData(key);
    
    if (data !== undefined) {
        document.getElementsByTagName('h1')[0].innerText = data['title'];
        document.getElementsByClassName('date-info')[0].innerText = data['date'];
        document.getElementsByClassName('genre-info')[0].innerText = data['genre'];
        document.getElementsByClassName('director-info')[0].innerText = data['director'];
        document.getElementsByClassName('logo-film')[0].firstElementChild.setAttribute('src', data['picture-src']);
        document.getElementsByClassName('plot')[0].innerText = data['plot'];
        document.getElementsByClassName('trailer')[0].lastElementChild.setAttribute('src', data['trailer-url']);
    } else {
        document.getElementsByClassName('logo-film')[0].firstElementChild.setAttribute('src', './images/not-found.jpg');
    }
}

async function uploadHeroData(key) {
    const data = await loadData(key);
        
    if (data !== undefined) {
        document.getElementsByTagName('h1')[0].innerText = data['nickname'];
        document.getElementsByClassName('name-info')[0].innerText = data['name'];
        document.getElementsByClassName('type-info')[0].innerText = data['type'];
        document.getElementsByClassName('growth-info')[0].innerText = data['growth'];
        document.getElementsByClassName('weight-info')[0].innerText = data['weight'];
        document.getElementsByClassName('logo-hero')[0].firstElementChild.setAttribute('src', data['picture-src']);
        document.getElementsByClassName('tagline-text')[0].innerText = data['description'];
        const pictures = [...document.getElementsByClassName('image')];
        pictures.forEach((element, index) => {
            element.lastElementChild.setAttribute('src', data['pictures'][index]);
        });
    } else {
        document.getElementsByClassName('logo-hero')[0].firstElementChild.setAttribute('src', './images/not-found.jpg');
    }
}

async function uploadComicData(key) {
    const data = await loadData(key);
    const codeOfEventOnClickReadBtn = `window.location.href = '${data['reader-url']}'`;

    if (data !== undefined) {
        document.getElementsByTagName('h1')[0].innerText = data['original-title'];
        document.getElementsByClassName('title-info')[0].innerText = data['title'];
        document.getElementsByClassName('date-info')[0].innerText = data['year'];
        document.getElementsByClassName('genre-info')[0].innerText = data['genre'];
        document.getElementsByClassName('logo-comic')[0].firstElementChild.setAttribute('src', data['picture-src']);
        document.getElementsByClassName('plot-text')[0].innerText = data['plot'];
        document.getElementsByClassName('btn-read-comic')[0].setAttribute('onclick', codeOfEventOnClickReadBtn);
    } else {
        document.getElementsByClassName('logo-comic')[0].firstElementChild.setAttribute('src', './images/not-found.jpg');
    }
}

async function uploadGameData(key) {
    const data = await loadData(key);
    
    if (data !== undefined) {
        document.getElementsByTagName('h1')[0].innerText = data['title'];
        document.getElementsByClassName('date-info')[0].innerText = data['date'];
        document.getElementsByClassName('genre-info')[0].innerText = data['genre'];
        document.getElementsByClassName('age-info')[0].innerText = data['age'];
        document.getElementsByClassName('developer-info')[0].innerText = data['developer'];
        document.getElementsByClassName('platform-info')[0].innerText = data['platform'];
        document.getElementsByClassName('logo-game')[0].firstElementChild.setAttribute('src', data['picture-src']);
        document.getElementsByClassName('plot-text')[0].innerText = data['plot'];
        document.getElementsByClassName('trailer')[0].lastElementChild.setAttribute('src', data['trailer-url']);
    } else {
    document.getElementsByClassName('logo-game')[0].firstElementChild.setAttribute('src', './images/not-found.jpg');
    }
}