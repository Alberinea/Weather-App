import { displayInfo, changeDegrees } from './dom';

async function getAPI(location) {
    const API_key = '780876c77a2ffc68569ba8637b985e4f';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${API_key}`;

    try {
        const response = await fetch(url, { mode: 'cors' });
        const data = await response.json();
        displayInfo(data);
    } catch (error) {
        console.error(error);
    }
}

function addListener() {
    const searchBar = document.getElementById('search');
    const celsius = document.getElementById('celsius');
    const fahrenheit = document.getElementById('fahrenheit');

    searchBar.addEventListener('keypress', (e) => {
        if (e.key != 'Enter') return;
        e.preventDefault();
        getAPI(searchBar.value);
        searchBar.value = ''
    });
    celsius.addEventListener('click', () => changeDegrees('celsius'));
    fahrenheit.addEventListener('click', () => changeDegrees('fahrenheit'));
}

getAPI('New York');
addListener();

