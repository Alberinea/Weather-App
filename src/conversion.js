function convertTimestamp(timestamp) {
    return timestamp / 3600;
}

function convertKelvin(temperature) {
    return parseInt(temperature - 273.15);
}

function convertTemperature(unit, degree) {
    if (unit === 'fahrenheit') return parseInt((degree * 9) / 5 + 32);
    else return parseInt(((degree - 32) * 5) / 9);
}

export { convertTimestamp, convertKelvin, convertTemperature };
