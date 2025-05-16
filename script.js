// On card.html
const urlParams = new URLSearchParams(window.location.search);
const cardNumber = urlParams.get('card');

if (cardNumber) {
  const frontImg = document.getElementById('front-img');
  const backImg = document.getElementById('back-img');

  frontImg.src = `images/${cardNumber}-front.jpg`;
  backImg.src = `images/${cardNumber}-back.jpg`;

  // Flip the card after a second
  setTimeout(() => {
    document.getElementById('flip-card').style.transform = 'rotateY(180deg)';
  }, 1000);
}
