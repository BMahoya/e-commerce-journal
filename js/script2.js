// Script for interactivity and form handling

// Subscription form submission
document.getElementById('subscription-form')?.addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Thank you for subscribing!');
});

// Purchase form submission
document.getElementById('purchase-form')?.addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Your purchase was successful!');
});

// Article search and filter functionality (for the archive page)
document.getElementById('search')?.addEventListener('input', filterArticles);
document.getElementById('topic')?.addEventListener('change', filterArticles);
document.getElementById('author')?.addEventListener('change', filterArticles);
document.getElementById('date')?.addEventListener('change', filterArticles);

function filterArticles() {
  const searchTerm = document.getElementById('search').value.toLowerCase();
  const selectedTopic = document.getElementById('topic').value;
  const selectedAuthor = document.getElementById('author').value;
  const selectedDate = document.getElementById('date').value;

  const articles = document.getElementById('articles').children;
  Array.from(articles).forEach(function(article) {
    const title = article.querySelector('h2').textContent.toLowerCase();
    const topic = article.getAttribute('data-topic');
    const author = article.getAttribute('data-author');
    const date = article.getAttribute('data-date');

    const matchesSearch = title.includes(searchTerm);
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
