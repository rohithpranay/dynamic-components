"use strict";

let secretNumber = Math.floor(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // When there is no input
  if (!guess) {
    displayMessage("⛔ No number");
  }
  // when player wins
  else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    displayMessage("🎉 Correct Number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  // when guess is Not equal
  else if (guess != secretNumber) {
    if (score > 1) {
      let msg = guess > secretNumber ? "📈Too high!" : "📉Too low!";
      displayMessage(msg);
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💣 You Lost the game!!";
      document.querySelector(".score").textContent = 0;
    }
  }
});
document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
