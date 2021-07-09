import { convertTimestamp, convertCelsius } from './conversion';

function displayInfo(response) {
    displayCity(response);
    displayTime(response);
    displayTemperature(response)
    displayWeather(response)
    displayWeatherIcon(response)
}

function displayCity({ name }) {
    const city = document.getElementById('city');
    city.innerText = name;
}

function displayTime({ timezone }) {
    const time = document.getElementById('time')
    const currentTime = new Date();
    const currentHour = currentTime.getUTCHours() + convertTimestamp(timezone);

    const currentHourConverted = currentHour > 12 ? currentHour - 12 : currentHour;
    const clock = currentHour > 12 ? 'PM' : 'AM';

    time.innerText = `${currentHourConverted}:${currentTime.getUTCMinutes().toString()} ${clock}`;
}

function displayTemperature({ main: { temp } }) {
    const temperature = document.getElementById('degree');
    temperature.innerText = convertCelsius(temp)
}

function displayWeather({weather}) {
    const condition = document.getElementById('condition')
    condition.innerText = weather[0].description
}

function displayWeatherIcon({weather}) {
    const icon = document.getElementById('conditionImg');
    icon.className = `wi wi-owm-${weather[0].id}`;
}

export { displayInfo };
