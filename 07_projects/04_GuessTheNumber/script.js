const leftChances = document.querySelector(".chancesLeft");
const yourGuesses = document.querySelector(".previousGuesses");
const form = document.querySelector("form");
const correctNumber = document.querySelector(".correctNumber");
const lowOrHigh = document.querySelector(".lowOrHigh");
const guessArray = [];

const number = Math.round(Math.random() * 100 + 1);
// console.log(number);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const guessNumber = Number(document.querySelector(".guessField").value);
  const currentGuess = document.querySelector(".guessField");

  if (guessNumber <= 0 || isNaN(guessNumber) || guessNumber > 100) {
    correctNumber.textContent = "Please enter your guess between 1 to 100";

    currentGuess.addEventListener("click", () => {
      correctNumber.textContent = "";
      lowOrHigh.textContent = "";
    });
  } else {
    if (number === guessNumber) {
      correctNumber.textContent = "You nailed it!!!";
    } else {
      let pChance = Number(leftChances.textContent);
      // adding previous gusses
      guessArray.push(guessNumber);
      yourGuesses.textContent = guessArray.join(" ");
      //   console.log(leftChances.textContent);

      if (pChance <= 0) {
        correctNumber.textContent = `OOPS! you missed it , the number was ${number}`;
      } else {
        // reducing the chances left
        leftChances.textContent = 10 - guessArray.length;
        pChance--;
      }
      lowOrHigh.textContent = (guessNumber < number)? "Go Higher": "Go Lower";
    }
  }
});
