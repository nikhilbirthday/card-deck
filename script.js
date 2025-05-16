// script.js

// Cards order and deck suits
const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
const cardsOrder = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

// Get the deck param from URL
function getDeckFromURL() {
  const params = new URLSearchParams(window.location.search);
  const deck = params.get('deck');
  if (deck && suits.includes(deck.toLowerCase())) {
    return deck.toLowerCase();
  }
  return null;
}

function createCardElement(deck, rank) {
  const cardDiv = document.createElement('div');
  cardDiv.className = 'card';

  const img = document.createElement('img');
  img.alt = `${rank} of ${deck}`;
  img.src = `images/${deck}-${rank}.jpg`;
  cardDiv.appendChild(img);

  return cardDiv;
}

function renderCards(deck) {
  const container = document.querySelector('.cards-container');
  container.innerHTML = ''; // Clear previous cards if any

  // Create and append Ace card first, with special class for positioning
  const aceCard = createCardElement(deck, 'A');
  aceCard.classList.add('ace-card');
  container.appendChild(aceCard);

  // Create cards 2-K in order
  const ranks = cardsOrder.slice(1); // Remove Ace
  ranks.forEach(rank => {
    const card = createCardElement(deck, rank);
    container.appendChild(card);
  });
}

function showError(message) {
  const container = document.querySelector('.cards-container');
  container.innerHTML = `<p style="text-align:center; font-size:1.2rem; padding: 40px;">${message}</p>`;
}

document.addEventListener('DOMContentLoaded', () => {
  const deck = getDeckFromURL();
  if (!deck) {
    showError('Invalid deck selected. Please go back and choose a valid deck.');
    return;
  }

  renderCards(deck);
});
