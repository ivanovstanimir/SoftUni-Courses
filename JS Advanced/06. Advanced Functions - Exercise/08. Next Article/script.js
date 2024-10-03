function getArticleGenerator(articles) {
    const div = document.getElementById('content');

    return () => {
        if (articles.length > 0) {
            const article = document.createElement('article');
            article.textContent = articles.shift();
            div.appendChild(article);
        }
    }
}