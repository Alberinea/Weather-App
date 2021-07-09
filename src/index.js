import { displayInfo } from './dom';

async function getAPI(location) {
    const API_key = '780876c77a2ffc68569ba8637b985e4f';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${API_key}`;

    try {
        const response = await fetch(url, { mode: 'cors' });
        const data = await response.json();
        displayInfo(data);
        console.log(data);
    } catch (error) {
        console.error('error');
    }
}

getAPI('Tokyo');

