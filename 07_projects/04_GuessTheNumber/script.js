const leftChances = document.querySelector(".chancesLeft");
const yourGuesses = document.querySelector(".previousGuesses");
const form = document.querySelector("form");
const correctNumber = document.querySelector(".correctNumber");
const lowOrHigh = document.querySelector(".lowOrHigh");
const startOver = document.querySelector(".startOver");
const currentGuess = document.querySelector(".guessField");
let guessArray = [];
let numGuess = 1;

let number = Math.round(Math.random() * 100 + 1);

let playGame = true;

if (playGame) {
  // validate the guess
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const guess = currentGuess.value;
    validateGuess(guess);
  });
}

// validate()
function validateGuess(guess) {
  if (isNaN(guess)) {
    displayMessage("Please enter valid value which is a number.");
  } else if (guess < 1) {
    displayMessage("Please enter values greater than or 1");
  } else if (guess > 100) {
    displayMessage("Please enter values less than or 100");
  } else {
    guessArray.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(
        `Game Over, the random number is ${number}. Please restart the game.`
      );
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

//checkGuess()
function checkGuess(guess) {
  if (Number(guess) === number) {
    displayMessage("Yohoo! you did it.");
    endGame();
  } else if (Number(guess) > number) {
    displayMessage("Your guess is higher.");
  } else {
    displayMessage("Your guess is lower.");
  }
}

// update prev guess
function displayGuess(guess) {
  currentGuess.value = "";
  yourGuesses.textContent += `${guess}  `;
  numGuess++;
  leftChances.textContent = 11 - numGuess;
}

// message
function displayMessage(guess) {
  lowOrHigh.textContent = guess;
}

// gameOver
function endGame() {
  currentGuess.setAttribute("disabled", "");
  document.querySelector(".guessButton").setAttribute("disabled", "");
  p = document.createElement("h2");
  p.classList.add("button");
  p.textContent = "Restart Game";
  p.style.cursor = "pointer";
  startOver.appendChild(p);
  newGame();

  playGame = false;
}

// StartGame()
function newGame() {
  const newGame = document.querySelector(".button");

  newGame.addEventListener("click", () => {
    number = Math.round(Math.random() * 100 + 1);
    currentGuess.removeAttribute("disabled");
    document.querySelector(".guessButton").removeAttribute("disabled");
    guessArray = [];
    numGuess = 1;

    lowOrHigh.textContent = "";
    yourGuesses.textContent = "";
    leftChances.textContent = 11 - numGuess;

    startOver.removeChild(p);

    playGame = true;
  });
}

// console.log(number);
// console.log(correctNumber);

// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   const guessNumber = Number(document.querySelector(".guessField").value);
//   const currentGuess = document.querySelector(".guessField");

//   if (guessNumber <= 0 || isNaN(guessNumber) || guessNumber > 100) {
//     correctNumber.textContent = "Please enter your guess between 1 to 100";

//     currentGuess.addEventListener("click", () => {
//       correctNumber.textContent = "";
//     });

//   } else {
//     if (number === guessNumber) {
//       correctNumber.style.display = "block";
//       correctNumber.textContent = "You nailed it!!!";
//       startOver.textContent = "Restart the Game";
//     } else {
//       let pChance = Number(leftChances.textContent);

//       // adding previous gusses
//       guessArray.push(guessNumber);
//       yourGuesses.textContent = guessArray.join(" ");
//       //   console.log(leftChances.textContent);

//       if (pChance === 0) {
//       correctNumber.style.display = "block";
//         correctNumber.textContent = `OOPS! you missed it , the number was ${number}`;
//         startOver.style.display = "block";
//         startOver.textContent = "Start Over";
//       } else {
//         // reducing the chances left
//         leftChances.textContent = 10 - guessArray.length;
//         pChance--;
//       }
//       lowOrHigh.textContent = guessNumber < number ? "Go Higher" : "Go Lower";
//     }
//   }
// });
