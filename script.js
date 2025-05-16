const decksEl = document.getElementById('decks');
const cardsEl = document.getElementById('cards');
const backBtn = document.getElementById('backToDecks');

// Define card ranks
const ranks = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];

// Function to clear cards container
function clearCards() {
  cardsEl.innerHTML = '';
}

// Show decks view
function showDecks() {
  decksEl.style.display = 'grid';
  cardsEl.style.display = 'none';
  backBtn.style.display = 'none';
}

// Show cards for a selected deck
function showCards(deck) {
  clearCards();
  decksEl.style.display = 'none';
  cardsEl.style.display = 'grid';
  backBtn.style.display = 'inline-block';

  ranks.forEach(rank => {
    const card = document.createElement('div');
    card.className = 'card';
    card.textContent = rank;
    card.dataset.deck = deck;
    card.dataset.rank = rank;
    cardsEl.appendChild(card);
  });
}

// Show flipping front/back images for a card
function showCardFlip(deck, rank) {
  cardsEl.innerHTML = '';

  const flipCard = document.createElement('div');
  flipCard.className = 'flip-card';

  const flipInner = document.createElement('div');
  flipInner.className = 'flip-card-inner';

  const front = document.createElement('div');
  front.className = 'flip-card-front';
  const frontImg = document.createElement('img');
  frontImg.src = `images/${deck}-${rank}-front.jpg`;
  frontImg.alt = `${rank} of ${deck} front`;
  front.appendChild(frontImg);

  const back = document.createElement('div');
  back.className = 'flip-card-back';
  const backImg = document.createElement('img');
  backImg.src = `images/${deck}-${rank}-back.jpg`;
  backImg.alt = `${rank} of ${deck} back`;
  back.appendChild(backImg);

  flipInner.appendChild(front);
  flipInner.appendChild(back);
  flipCard.appendChild(flipInner);

  cardsEl.appendChild(flipCard);

  // Flip on click
  flipCard.addEventListener('click', () => {
    flipCard.classList.toggle('flipped');
  });
}

decksEl.addEventListener('click', e => {
  const deckCard = e.target.closest('.deck-card');
  if (!deckCard) return;
  const deck = deckCard.dataset.deck;
  showCards(deck);
});

cardsEl.addEventListener('click', e => {
  const card = e.target.closest('.card');
  if (!card) return;
  const deck = card.dataset.deck;
  const rank = card.dataset.rank;
  showCardFlip(deck, rank);
});

backBtn.addEventListener('click', () => {
  showDecks();
});

// Start with decks view
showDecks();
