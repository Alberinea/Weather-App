import { convertTimestamp, convertKelvin, convertTemperature } from './conversion';
import night from '../dist/img/bg-night.jpg';
import day from '../dist/img/bg-day.jpg';

function displayInfo(response) {
    if (handleNoValue(response) === false) return;
    displayCity(response);
    displayTime(response);
    displayTemperature(response);
    displayWeather(response);
    displayWeatherIcon(response);
    displayWind(response);
    displayOtherInfo(response);
    displayAdditionalTemp(response);
}

function displayCity({ name }) {
    const city = document.getElementById('city');
    city.innerText = name;
}

function displayTime({ timezone }) {
    const time = document.getElementById('time');
    const currentTime = new Date();
    let currentHour = currentTime.getUTCHours() + convertTimestamp(timezone);
    const currentMinute = currentTime.getUTCMinutes();

    if (currentHour > 24) currentHour -=24
    let currentHourConverted = currentHour > 12 ? currentHour - 12 : currentHour;
    if (currentHourConverted > 12) currentHourConverted -= 12

    const clock = currentHour > 12 ? 'PM' : 'AM';
    const minutes = currentMinute < 10 ? '0' + currentMinute : currentMinute;

    time.innerText = `${currentHourConverted}:${minutes} ${clock}`;
    changeBackground(currentHour)
}

function displayTemperature({ main: { temp } }) {
    const temperature = document.getElementById('degree');
    temperature.innerText = convertKelvin(temp);
}

function displayWeather({ weather }) {
    const condition = document.getElementById('condition');
    condition.innerText = weather[0].main;
}

function displayWeatherIcon({ weather }) {
    const icon = document.getElementById('conditionImg');
    icon.className = `wi wi-owm-${weather[0].id}`;
}

function handleNoValue({ cod }) {
    if (cod == '404') {
        alert('Invalid city name');
        return false;
    }
    return true;
}

function changeDegrees(unit) {
    const opposite = unit == 'celsius' ? 'fahrenheit' : 'celsius';
    const allOpposite = document.querySelectorAll(`.wi-${opposite}`);
    let rest;
    [, ...rest] = allOpposite;

    if (rest.length == 0) return;

    const allTemp = document.querySelectorAll('.degree');

    rest.map((node) => (node.className = `wi wi-${unit}`));
    allTemp.forEach((temp) => (temp.innerText = convertTemperature(unit, temp.innerText)));
}

function displayWind({ wind }) {
    const speed = document.getElementById('speed');
    const gust = document.getElementById('gust');
    const deg = document.getElementById('deg');
    const degIcon = document.getElementById('degIcon');

    if (wind.gust == null) wind.gust = 'None';

    speed.innerText = wind.speed;
    gust.innerText = wind.gust;
    deg.innerText = wind.deg;
    degIcon.classList = `wi wi-wind towards-${wind.deg}-deg`;
}

function displayOtherInfo({ main }) {
    const humidity = document.getElementById('humidity');
    const pressure = document.getElementById('pressure');

    humidity.innerText = main.humidity;
    pressure.innerText = main.pressure;
}

function displayAdditionalTemp({ main }) {
    const min = document.getElementById('min');
    const max = document.getElementById('max');
    const feel = document.getElementById('feel');

    min.innerText = convertKelvin(main.temp_min);
    max.innerText = convertKelvin(main.temp_max);
    feel.innerText = convertKelvin(main.feels_like);
}   

function changeBackground(time) {
    const background = document.body;
    background.style.backgroundImage = time > 6 && time < 18 ? `url(${day})` : `url(${night})`;
}

export { displayInfo, changeDegrees };  
