const decksEl = document.getElementById('decks');
const cardsEl = document.getElementById('cards');
const backBtn = document.getElementById('backToDecks');
const titleImage = document.getElementById('title-image');

const ranks = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];

// Helper: Load background based on deck
function setBackground(deck) {
  if(deck === 'hearts' || deck === 'diamonds') {
    document.body.style.backgroundImage = "url('images/bg-red.jpg')";
  } else if(deck === 'clubs' || deck === 'spades') {
    document.body.style.backgroundImage = "url('images/bg-black.jpg')";
  } else {
    // main page or unknown
    document.body.style.backgroundImage = "url('images/bg-black.jpg')";
  }
}

function clearCards() {
  cardsEl.innerHTML = '';
}

// Show decks (main page)
function showDecks() {
  decksEl.style.display = 'grid';
  cardsEl.style.display = 'none';
  backBtn.style.display = 'none';
  titleImage.style.display = 'block';
  setBackground('main');
}

// Show all cards of a suit
function showCards(deck) {
  clearCards();
  decksEl.style.display = 'none';
  cardsEl.style.display = 'grid';
  backBtn.style.display = 'inline-block';
  titleImage.style.display = 'none';
  setBackground(deck);

  // Build cards grid with A at top center (approx)
  // We'll just list A first then the rest to keep it simple.
  const sortedRanks = ['A', ...ranks.filter(r => r !== 'A')];

  sortedRanks.forEach(rank => {
    const card = document.createElement('div');
    card.className = 'card';
    const img = document.createElement('img');
    img.src = `images/${deck}-${rank}.jpg`;
    img.alt = `${rank} of ${deck}`;
    card.appendChild(img);
    cardsEl.appendChild(card);
  });
}

decksEl.addEventListener('click', e => {
  const deckCard = e.target.closest('.deck-card');
  if(!deckCard) return;
  const deck = deckCard.dataset.deck;
  showCards(deck);
});

backBtn.addEventListener('click', () => {
  showDecks();
});

// Initialize
showDecks();
