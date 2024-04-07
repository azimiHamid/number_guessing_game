# Projects related to DOM

## projects link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1 - Bg-color changer

```javascript
const buttons = document.querySelectorAll("button");
const body = document.querySelector("body");
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.id === "grey") {
      body.style.background = e.target.id;
    }
    if (e.target.id === "purple") {
      body.style.background = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.background = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.background = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.background = e.target.id;
    }
  });
});
```

## project 2 - BMI-calculator

```javascript
const form = document.querySelector("form");

// const height = parseInt(document.querySelector('#height').value) // this usecase will give you an empty value

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const weight = parseInt(document.querySelector("#weight").value);
  const height = parseInt(document.querySelector("#height").value);
  const result = document.querySelector(".result");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = "Please enter a valid height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = "Please enter a valid weight";
  } else {
    const bmi = weight / (height ** 2 / 10000).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
  }
});
```

## project 3 - Digital Clock

```javascript
const clock = document.getElementById("clock");

setInterval(() => {
  let date = new Date();
  // console.log(date.toLocaleTimeString());

  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

## project 4 - Guess the number

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

let userInput = document.getElementById("guessInputBox");
let submitButton = document.getElementById("submit");

let resultField = document.getElementById("resultField");
let guessArraySpan = document.getElementById("guesses");
let remainingAttempt = document.getElementById("remainingGuessAttempt");
let alertMsg = document.getElementById("lowOrHighMsg");

let p = document.createElement("p");

// let prevGuess = []
let numGuesses = 1;

let playGame = true;

if (playGame) {
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const userGuess = parseInt(userInput.value);
    validateGuess(userGuess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
    cleanUpGuess(guess);
  } else if (guess < 1) {
    alert("Please enter a number higher than 1");
    cleanUpGuess(guess);
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
    cleanUpGuess(guess);
  } else {
    // prevGuess.push(guess)
    if (numGuesses === 10) {
      cleanUpGuess(guess);
      displayMsg(`Game Over! Random number is ${randomNumber}`);
      alertMsg.style.background = "red";
      endGame();
    } else {
      cleanUpGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMsg(`You guessed it right! ${guess}`);
    alertMsg.style.background = "green";
    alertMsg.style.color = "white";
    endGame();
  } else if (guess < randomNumber) {
    displayMsg(`Number is Tooo low!`);
  } else if (guess > randomNumber) {
    displayMsg(`Number is Tooo high!`);
  }
}

function cleanUpGuess(guess) {
  userInput.value = "";
  guessArraySpan.innerHTML += `${guess}, `;
  numGuesses++;
  remainingAttempt.innerHTML = ` ${11 - numGuesses - 1}`;
}

function displayMsg(msg) {
  alertMsg.innerHTML = `<h2>${msg}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  submitButton.setAttribute("disabled", "");
  p.innerHTML = `<h2 id="newGameBtn">Start new Game</h2>`;
  resultField.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameBtn = document.querySelector("#newGameBtn");
  newGameBtn.addEventListener("click", (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    // prevGuess = []
    numGuesses = 1;
    guessArraySpan.innerHTML = "";
    remainingAttempt.innerHTML = `${11 - numGuesses - 1}`;
    userInput.removeAttribute("disabled");
    submitButton.removeAttribute("disabled");
    alertMsg.style.background = "yellow";
    alertMsg.style.color = "brown";
    displayMsg(``);
    resultField.removeChild(p);
    playGame = true;
  });
}
```
