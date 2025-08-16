const news = document.querySelector('#articles');

async function getNews() {
    const news_articles = await fetch('/headlines/')
        .then(data => data.json())
        .then(key => key.articles);

    news_articles.forEach(article => {
        news.innerHTML += `<a href="${article.url}">${article.title}</a><br><br>`
    });
}

getNews();

setInterval(getNews, 1000 * 60 * 15);