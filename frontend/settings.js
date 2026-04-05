const lightButton = document.querySelector('#light');
const darkButton = document.querySelector('#dark');

const weather = document.querySelector('#weather');
const newsheader = document.querySelector('#news');
const articles = document.querySelector('#articles-container')

const newsAndWeather = document.querySelector('#news-container');

const weatherOn = document.querySelector('#weatherOn');
const weatherOff = document.querySelector('#weatherOff');

const newsOn = document.querySelector('#newsOn');
const newsOff = document.querySelector('#newsOff');

weatherOn.addEventListener('click', () => {
    weather.style.display = "inline";
    localStorage.setItem("visibleWeather", "on");
});

weatherOff.addEventListener('click', () => {
    weather.style.display = "none";
    localStorage.setItem("visibleWeather", "off");
});

newsOn.addEventListener('click', () => {
    newsheader.style.display = "flex";
    articles.style.display = "flex";
    localStorage.setItem("visibleNews", "on");
});

newsOff.addEventListener('click', () => {
    newsheader.style.display = "none";
    articles.style.display = "none";
    localStorage.setItem("visibleNews", "off");
});

if (localStorage.getItem("visibleWeather") == "off") {
    weather.style.display = "none";
} else {
    weather.style.display = "inline";
}

if (localStorage.getItem("visibleNews") == "off") {
    newsheader.style.display = "none";
    articles.style.display = "none";
} else {
    newsheader.style.display = "flex";
    articles.style.display = "flex";
}

var localWeather = localStorage.getItem("visibleWeather");
var localNews = localStorage.getItem("visibleNews");

console.log(localWeather)
console.log(localNews)
if (localWeather == "off" && localNews == "off") {
    newsAndWeather.style.opacity = 0;
    newsAndWeather.style.maxHeight = 0;
} else {
    newsAndWeather.style.display = "flexbox";
}