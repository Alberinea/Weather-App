function convertTimestamp(timestamp) {
    return timestamp / 3600;
}

function convertCelsius(temperature) {
    return parseInt(temperature - 273.15);
}

export { convertTimestamp, convertCelsius };
