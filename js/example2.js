document.addEventListener('DOMContentLoaded', function () {
    // Example: Article filtering functionality
    const searchInput = document.getElementById('search');
    const topicFilter = document.getElementById('topic');
    const authorFilter = document.getElementById('author');
    const dateFilter = document.getElementById('date');
    const articles = document.querySelectorAll('.article');

    searchInput.addEventListener('input', filterArticles);
    topicFilter.addEventListener('change', filterArticles);
    authorFilter.addEventListener('change', filterArticles);
    dateFilter.addEventListener('change', filterArticles);

    function filterArticles() {
        const searchText = searchInput.value.toLowerCase();
        const selectedTopic = topicFilter.value;
        const selectedAuthor = authorFilter.value;
        const selectedDate = dateFilter.value;

        articles.forEach(article => {
            const title = article.querySelector('h2').textContent.toLowerCase();
            const author = article.getAttribute('data-author');
            const topic = article.getAttribute('data-topic');
            const date = article.getAttribute('data-date');

            const matchesSearch = title.includes(searchText);
            const matchesTopic = selectedTopic === 'all' || topic === selectedTopic;
            const matchesAuthor = selectedAuthor === 'all' || author === selectedAuthor;
            const matchesDate = !selectedDate || date === selectedDate;

            if (matchesSearch && matchesTopic && matchesAuthor && matchesDate) {
                article.style.display = '';
            } else {
                article.style.display = 'none';
            }
        });
    }
});
