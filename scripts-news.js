document.addEventListener('DOMContentLoaded', function() {
    const newsSection = document.getElementById('latest-news');

    const newsArticles = [
        {
            title: "Mars Rover Discovers Ancient Lake Bed",
            date: "July 10, 2024",
            content: "NASA's Mars rover has found evidence of an ancient lake bed, hinting at the possibility of past life on the Red Planet. <a href='#'>Read more...</a>"
        },
        {
            title: "New Horizons Mission Reaches Kuiper Belt",
            date: "June 25, 2024",
            content: "NASA's New Horizons mission has successfully reached the Kuiper Belt, providing unprecedented data on this distant region of our solar system. <a href='#'>Read more...</a>"
        }
    ];

    newsArticles.forEach(article => {
        const articleElement = document.createElement('article');
        
        const titleElement = document.createElement('h3');
        titleElement.textContent = article.title;

        const dateElement = document.createElement('p');
        dateElement.textContent = article.date;

        const contentElement = document.createElement('p');
        contentElement.innerHTML = article.content;

        articleElement.appendChild(titleElement);
        articleElement.appendChild(dateElement);
        articleElement.appendChild(contentElement);

        newsSection.appendChild(articleElement);
    });
});
