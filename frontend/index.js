const h1 = document.querySelector('h1');

function getTime() {
    const now = new Date();
    const [date, time] = now.toLocaleString('en-GB').split(', ');
    return time;
}

function getTextContent() {
    const [hour] = getTime().split(':');
    console.log(hour);
    if (hour >= 17) return "Evening";
    if (hour >= 12) return "Afternoon";
    return "Morning";
}

function setText() {
    h1.innerHTML = `Good ${getTextContent()}`
}

setInterval(setText, 1000);