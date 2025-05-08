document.getElementsByTagName("h1")[0].style.fontSize = "6vw";
let score = 0;
let currentMole = null;
let gameInterval = null;

function randomHole() {
  const holes = document.querySelectorAll('.hole');
  holes.forEach(hole => hole.classList.remove('mole'));

  const index = Math.floor(Math.random() * holes.length);
  currentMole = holes[index];
  currentMole.classList.add('mole');
}

function startGame() {
  score = 0;
  document.getElementById('score').textContent = score;

  if (gameInterval) clearInterval(gameInterval);
  gameInterval = setInterval(randomHole, 800);
}

document.querySelectorAll('.hole').forEach(hole => {
  hole.addEventListener('click', () => {
    if (hole === currentMole) {
      score++;
      document.getElementById('score').textContent = score;
      hole.classList.remove('mole');
      currentMole = null;
    }
  });
});
