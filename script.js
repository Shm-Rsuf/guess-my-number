'use strict'

//elements
const check = document.querySelector('.check');
const input = document.querySelector('.input-number');
const guessingText = document.querySelector('.guessing-text');
const correctAns = document.querySelector('.game-correct-ans');
const score = document.querySelector('.score');
const highScore = document.querySelector('.high-score');
const playAgain = document.querySelector('.play-again');

//variables
let SECRET_NUMBER = Math.trunc(Math.random() * 20 + 1);
let SCORE = 20;
let HIGH_SCORE = 0;

function displayGuessingText(text) {
  guessingText.textContent = text;
}

//checking
check.addEventListener('click', () => {
  const inputNumber = Number(input.value);

  // when there is no input
  if (!inputNumber) displayGuessingText('Input a valid number');

  // when player wins
  else if (inputNumber === SECRET_NUMBER) {
    displayGuessingText('Correct Answer!')
    correctAns.textContent = SECRET_NUMBER;
    correctAns.style.backgroundColor = '#222';
    document.body.style.backgroundColor = 'teal';

    if (SCORE > HIGH_SCORE) {
      HIGH_SCORE = SCORE;
      highScore.textContent = HIGH_SCORE;
    }
  }

  // when guess is wrong
  else if (inputNumber !== SECRET_NUMBER) {
    if (SCORE > 1) {
      displayGuessingText(
        inputNumber > SECRET_NUMBER ? "Too High" : "Too Low"
      );
      SCORE--;
      console.log(SCORE)
      score.textContent = SCORE;
    }
    else {
      displayGuessingText('Game is over!');
      score.textContent = 0;
    }
  }
})

// play again
playAgain.addEventListener('click', () => {
  SCORE = 20;
  SECRET_NUMBER = Math.trunc(Math.random() * 20 + 1);
  displayGuessingText('Start Guessing...')
  document.body.style.backgroundColor = '#222';
  correctAns.style.backgroundColor = 'teal';
  correctAns.textContent = '?';
  score.textContent = SCORE;
  input.value = '';

})