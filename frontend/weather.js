const weatherElement = document.querySelector('#weather');

async function getWeather(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const weatherJSON = await fetch(`https://newtab-x3zr.onrender.com/${latitude}/${longitude}/`)
        .then(data => data.json());
    
    const temp = await Math.round(weatherJSON.current.temp);
    weatherElement.innerHTML = `${temp}°F`;
}

if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(position => {
        getWeather(position);

        setInterval(() => {getWeather(position)}, 1000 * 60 * 10);
    }, error);
}

function error(err) {
    alert(`Weather services disabled. Geolocation not allowed: ${err}`);
}