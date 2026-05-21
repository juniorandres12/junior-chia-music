const year = document.getElementById('year');
const trackCards = document.querySelectorAll('.track-card');
const player = document.getElementById('trackPlayer');
const activeNumber = document.getElementById('activeNumber');
const activeTitle = document.getElementById('activeTitle');
const activeCredit = document.getElementById('activeCredit');

year.textContent = new Date().getFullYear();

trackCards.forEach((card) => {
  const button = card.querySelector('.load-track');

  button.addEventListener('click', () => {
    loadTrack(card);
    document.querySelector('.now-playing').scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
});

function loadTrack(card) {
  const videoId = card.dataset.video;
  const title = card.dataset.title;
  const number = card.dataset.number;
  const credit = card.dataset.credit;

  trackCards.forEach((item) => item.classList.remove('active'));
  card.classList.add('active');

  player.src = `https://www.youtube.com/embed/${videoId}`;
  player.title = `${title} — Junior Chia`;
  activeNumber.textContent = number;
  activeTitle.textContent = title;
  activeCredit.textContent = credit;
}
