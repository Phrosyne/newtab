const news = document.querySelector('#articles');

async function getNews() {
    const news_articles = await fetch('https://newtab-x3zr.onrender.com/headlines/')
        .then(data => data.json())
        .then(key => key.articles);

    news.innerHTML = "";

    news_articles.forEach(article => {
        news.innerHTML += `<a target="_blank" href="${article.url}">${article.title}</a><br><br><hr><br>`
    });
}

getNews();

//15 minutes
setInterval(getNews, 1000 * 60 * 15);