import { convertTimestamp, convertKelvin, convertTemperature } from './conversion';

const temperature = document.getElementById('degree');

function displayInfo(response) {
    if (handleNoValue(response) === false) return;
    displayCity(response);
    displayTime(response);
    displayTemperature(response);
    displayWeather(response);
    displayWeatherIcon(response);
}

function displayCity({ name }) {
    const city = document.getElementById('city');
    city.innerText = name;
}

function displayTime({ timezone }) {
    const time = document.getElementById('time');
    const currentTime = new Date();
    const currentHour = currentTime.getUTCHours() + convertTimestamp(timezone);
    const currentMinute = currentTime.getUTCMinutes();

    const currentHourConverted = currentHour > 12 ? currentHour - 12 : currentHour;
    const clock = currentHour > 12 ? 'PM' : 'AM';
    const minutes = currentMinute < 10 ? '0' + currentMinute : currentMinute;

    time.innerText = `${currentHourConverted}:${minutes} ${clock}`;
}

function displayTemperature({ main: { temp } }) {
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

function changeDegrees(degrees) {
    const opposite = degrees == 'celsius' ? 'fahrenheit' : 'celsius';
    const allOpposite = document.querySelectorAll(`.wi-${opposite}`);
    let rest;
    [, ...rest] = allOpposite;

    rest.map((node) => (node.className = `wi wi-${degrees}`));
    temperature.innerText = convertTemperature(degrees, temperature.innerText);
}

export { displayInfo, changeDegrees };
