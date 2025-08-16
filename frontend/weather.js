const weatherElement = document.querySelector('#weather');

async function getWeather(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const weatherJSON = await fetch(`/location/${latitude}/${longitude}`)
        .then(data => data.json());
    
    const temp = await Math.round(weatherJSON.current.temp);
    weatherElement.innerHTML = `${temp}°F`;
}

if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(getWeather, error);
}

function error(err) {
    alert(`Weather services disabled. Geolocation not allowed: ${err}`);
}