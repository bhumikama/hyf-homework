const startButton = document.getElementById("start-button");
const restartButton = document.getElementById("restart-button");
const gameDurationInput = document.getElementById("input-seconds");
const sCountDisplay = document.getElementById("s_count");
const lCountDisplay = document.getElementById("l_count");
let countdownTimer = document.getElementById("countdown");
const winnerStatus = document.getElementById("winner_status");
const sBox = document.querySelector(".s-box");
const lBox = document.querySelector(".l-box");
const canvasConfetti = document.getElementById("my-canvas");
let timer;
let countDownInterval;
let sCount = 0;
let lCount = 0;
let gameDuration = 0;
let gameIsActive = false;

startButton.addEventListener("click", function (event) {
  gameDuration = parseInt(gameDurationInput.value);
  if (isNaN(gameDuration) || gameDuration <= 0) {
    alert("Please input a valid number..");
    return;
  }
  startGame();
});

function startGame() {
  sCount = 0;
  lCount = 0;
  winnerStatus.innerHTML = "";
  sCountDisplay.innerHTML = sCount;
  lCountDisplay.innerHTML = lCount;
  gameIsActive = true;
  timer = setTimeout(endGame, gameDuration * 1000);
  countDownInterval = setInterval(updateCountDown, 1000);
  startButton.style.display = "none";
  restartButton.style.display = "inline";
}

function endGame() {
  gameIsActive = false;

  if (sCount === 0 && lCount === 0) {
    winnerStatus.innerHTML = "you haven't pressed any keys.Try again later";
    return;
  }
  let winnerMessage = "";
  if (sCount > lCount) {
    winnerMessage = " S Wins";
    renderConfetti(sBox);
  } else if (sCount < lCount) {
    winnerMessage = " L wins";
    renderConfetti(lBox);
  } else {
    winnerMessage = "it's a draw";
  }
  winnerStatus.innerHTML = winnerMessage;
  restartButton.style.display = "block";
}

function updateCountDown() {
  gameDuration--;
  countdownTimer.innerHTML = `${gameDuration}s remaining`;
  if (gameDuration <= 0) {
    clearInterval(countDownInterval);
  }
}

function reStartGame() {
  clearTimeout(timer);
  clearInterval(countDownInterval);
  gameIsActive = false;
  sCount = 0;
  lCount = 0;
  winnerStatus.innerHTML = "";
  sCountDisplay.innerHTML = sCount;
  lCountDisplay.innerHTML = lCount;
  gameDurationInput.value = "";
  countdownTimer.innerHTML = "";
  startButton.style.display = "inline";
  restartButton.style.display = "none";
  canvasConfetti.style.display = "none";
}

//to add gif
function renderConfetti(element) {
  const rect = element.getBoundingClientRect();
  canvasConfetti.style.position = "absolute";
  canvasConfetti.style.top = `${rect.top}px`;
  canvasConfetti.style.left = `${rect.left}px`;
  canvasConfetti.style.width = `${rect.width}px`;
  canvasConfetti.style.height = `${rect.height}px`;
  canvasConfetti.style.display = "block";

  const confettiSettings = {
    target: canvasConfetti,
  };
  const confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();
}

document.addEventListener("keydown", function (event) {
  if (!gameIsActive) {
    return; //does not count the key presses when the game is not started yet or after the game ends
  }

  if (event.key === "s" || event.key === "S") {
    sCount++;
    sCountDisplay.innerHTML = `${sCount}`;
  }
  if (event.key === "l" || event.key === "L") {
    lCount++;
    lCountDisplay.innerHTML = `${lCount}`;
  }
});

restartButton.addEventListener("click", reStartGame);
