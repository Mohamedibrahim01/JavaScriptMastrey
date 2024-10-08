"use strict";

// selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0 = document.getElementById("current--0");
const current1 = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

const scores = [0, 0];

let currentScore = 0;
let activePlayer = 0;

const switchPlayer = function(){
  document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')
}

// rolling dice functionality

btnRoll.addEventListener("click", function () {
  // generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // display dice
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;

  console.log(dice);

  //check for rolled 1 true, switch to next player
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
});

btnHold.addEventListener("click", function () {
  // add score to total
  scores[activePlayer] += currentScore;
  // scores[1] = scores[1]
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  // check score >= 100
  //finish game

  //switch to next player
  
  switchPlayer();
});
