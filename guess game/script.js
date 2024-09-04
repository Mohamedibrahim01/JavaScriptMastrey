let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

console.log(secretNumber);

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

//document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage("No Secret Number!");
  } else if (guess === secretNumber) {
    displayMessage("Correct");
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess > secretNumber && score > 0) {
    displayMessage("Too high");
    document.querySelector(".score").textContent = score;
    score--;
  } else if (guess < secretNumber && score > 0) {
    displayMessage("Too low");
    document.querySelector(".score").textContent = score;
    score--;
  } else if (score == 0) {
    displayMessage("You Lost");
    document.querySelector(".score").textContent = 0;
  }
});
// Reload the page when the "Again!" button is clicked
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  
});
