// Script for interactivity and form handling

// Subscription form submission
document.getElementById('subscription-form')?.addEventListener('submit', function(event) {
  event.preventDefault();

  // Mock payment processing
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const plan = document.getElementById('plan').value;
  const cardNumber = document.getElementById('card-number').value;
  const expiryDate = document.getElementById('expiry-date').value;
  const cvv = document.getElementById('cvv').value;

  if (name && email && plan && cardNumber && expiryDate && cvv) {
    alert(`Subscription successful!\n\nName: ${name}\nEmail: ${email}\nPlan: ${plan}`);
  } else {
    alert('Please fill in all fields.');
  }
});

// Purchase form submission
document.getElementById('purchase-form')?.addEventListener('submit', function(event) {
  event.preventDefault();

  // Mock secure payment processing
  const articleId = document.getElementById('article-id').value;
  const cardNumber = document.getElementById('card-number').value;
  const expiryDate = document.getElementById('expiry-date').value;
  const cvv = document.getElementById('cvv').value;

  if (articleId && cardNumber && expiryDate && cvv) {
    alert(`Purchase successful!\n\nArticle ID: ${articleId}`);
  } else {
    alert('Please fill in all fields.');
  }
});

// Article search and filter functionality (for the archive page)
document.getElementById('search')?.addEventListener('input', filterArticles);
document.getElementById('topic')?.addEventListener('change', filterArticles);
document.getElementById('author')?.addEventListener('change', filterArticles);
document.getElementById('date')?.addEventListener('change', filterArticles);

function filterArticles() {
    const searchTerm = document.getElementBy}