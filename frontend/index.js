const div = document.createElement('div');
div.id = 'greeting';

const h1 = document.createElement('h1');
h1.id = 'greeting_text';

const settings_icon = document.querySelector('#settings');
const settings_page = document.querySelector('#settings-page-container');
var settings_visible = false;

settings_icon.addEventListener('click', () => {
    settings_page.classList.toggle('show');
})

const input = document.createElement('input');
input.id = 'search';
input.type = 'search';
input.placeholder = 'Search';
input.style.height = '2.5rem';
input.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';

var str = [];

function searchQuery(string) {
    window.open(`https://google.com/search?q=${input.value}`, "_self")
}

input.addEventListener('keydown', (e) => {
    if (e.key != "Enter") {
        str.push(e.key);
    }

    if (e.key == "Enter") {
        console.log(str);
        searchQuery(str);
    }
});

div.style.display = 'flex';
div.style.flexDirection = 'column';
div.style.justifyContent = 'center';

const bounce = [
    {opacity: 0, transform: "translateY(-200px)", offset: 0},
    {transform: "translateY(30px)", offset: .5}, 
	{transform: "translateY(-15px)", offset: .75},
	{opacity: 1, transform: "translateY(0)", offset: 1}
	// {transform: "translateY(50px)", offset: 0.7},
	// {transform: "translateY(-50px)", offset: 0.8},
    // {opacity: 100, transform: "translateY(0)", offset: 1} 
]

div.animate(bounce, {
    duration: 500,
    iterations: 1,
    fill: "forwards",
    easing: 'ease-in'
});

h1.style.color = "black";
h1.style.display = 'block';

// input.style.textAlign = 'left';
// input.style.width = '40%';
// input.style.marginLeft = '30%';
input.style.justifySelf = 'center';
input.style.fontSize = '20px';

div.appendChild(h1);
div.appendChild(input);

document.body.prepend(div);

// setTimeout(() => {
//   h1.style.transform = "translateY(0)";
// }, 50);

function getTime() {
    const now = new Date();
    const [date, time] = now.toLocaleString('en-GB').split(', ');
    return time;
}

function getTextContent() {
    const [hour] = getTime().split(':');

    if (hour >= 17) return "Evening";
    if (hour >= 12) return "Afternoon";

    return "Morning";
}

function setText() {
    h1.textContent = `Good ${getTextContent()}`;
}

setText();

setInterval(setText, 1000);