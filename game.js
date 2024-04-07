// let randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(randomNumber);

// const userGuess = document.getElementById("guessInputBox");
// const submitBtn = document.getElementById("submit");
// const resultField = document.getElementById("resultField");
// const prevGuessesDiv = document.getElementById("guesses");
// const remainingGuessAttempt = document.getElementById("remainingGuessAttempt");
// const lowOrHighMsg = document.getElementById("lowOrHighMsg");

// let guessesArray = [];
// let startGame = true;
// let guessCounter = 0;

// let p = document.createElement("p");

// //! My Logic
// submitBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (startGame === true) {
//     if (userGuess.value === "" || isNaN(userGuess.value)) {
//       alert("Please enter a valid guess Number");
//       userGuess.value = "";
//     } else if (userGuess.value > 100 || userGuess.value < 1) {
//       alert("OOPS! Enter a number between 1 and 100");
//       userGuess.value = "";
//     }

//     if (userGuess.value > randomNumber) {
//       lowOrHighMsg.innerHTML = `Guessed number is Tooo High!`;
//       guessCounter++;
//       // guessesArray.push(userGuess.value)
//       remainingGuessAttempt.innerHTML = `${10 - guessCounter}`;
//       userGuess.value = "";
//     } else if (userGuess.value < randomNumber) {
//       lowOrHighMsg.innerHTML = `Guessed number is Tooo Low!`;
//       guessCounter++;
//       // guessesArray.push(userGuess.value)
//       remainingGuessAttempt.innerHTML = `${10 - guessCounter}`;
//       userGuess.value = "";
//     } else {
//       lowOrHighMsg.innerHTML = `Victory! You guessed the number, ${randomNumber}`;
//       lowOrHighMsg.style.backgroundColor = "green";
//       lowOrHighMsg.style.color = "white";
//       lowOrHighMsg.style.padding = "8px 4px";
//       guessCounter++;
//       // guessesArray.push(userGuess.value)
//       remainingGuessAttempt.innerHTML = `${10 - guessCounter}`;
//       userGuess.value = "";
//       userGuess.setAttribute("disabled", "");
//       document.querySelector("#newGamebtn").style.display = "block";
//     }
//   }
//   if (guessCounter === 10) {
//     remainingGuessAttempt.innerHTML = `${0}`;
//     userGuess.setAttribute("disabled", "");
//     startGame = false;
//     lowOrHighMsg.innerHTML = ``;
//     document.querySelector("#newGamebtn").style.display = "block";
//   }

//   //   guessesArray.forEach((guess) => {
//   //     prevGuessesDiv.innerHTML += `${guess}, `;
//   //   });
// });

// function newGame() {
//   userGuess.removeAttribute("disabled");
//   startGame = true;
//   guessCounter = 0;
//   remainingGuessAttempt.innerHTML = `${10}`;
//   document.querySelector("#newGamebtn").style.display = "none";
//   lowOrHighMsg.innerHTML = ``;
//   lowOrHighMsg.style.backgroundColor = "yellow";
//   lowOrHighMsg.style.color = "brown";
//   lowOrHighMsg.style.padding = "0px";
//   randomNumber = Math.floor(Math.random() * 100 + 1);
//   console.log(randomNumber);
// }

// document.querySelector("#newGamebtn").addEventListener("click", newGame);


















//! YT Wala LOGIC ---> Greate Logic

let randomNumber = parseInt(Math.random() * 100 + 1)
console.log(randomNumber)

let userInput = document.getElementById('guessInputBox')
let submitButton = document.getElementById('submit')

let resultField = document.getElementById('resultField')
let guessArraySpan = document.getElementById('guesses')
let remainingAttempt = document.getElementById('remainingGuessAttempt')
let alertMsg = document.getElementById('lowOrHighMsg')

let p = document.createElement('p')


// let prevGuess = []
let numGuesses = 1

let playGame = true

if (playGame) {
    submitButton.addEventListener('click', (e) => {
        e.preventDefault()
        const userGuess = parseInt(userInput.value)
        validateGuess(userGuess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number')
        cleanUpGuess(guess)
    } else if (guess < 1) {
        alert('Please enter a number higher than 1')
        cleanUpGuess(guess)
    } else if (guess > 100) {
        alert('Please enter a number less than 100')
        cleanUpGuess(guess)
    } else {
        // prevGuess.push(guess)
        if (numGuesses === 10) {
            cleanUpGuess(guess)
            displayMsg(`Game Over! Random number is ${randomNumber}`)
            alertMsg.style.background = 'red'    
            endGame()
        } else {
            cleanUpGuess(guess)
            checkGuess(guess)
        }
    }
}


function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMsg(`You guessed it right! ${guess}`)
        alertMsg.style.background = 'green'
        alertMsg.style.color = 'white'
        endGame()
    } else if (guess < randomNumber) {
        displayMsg(`Number is Tooo low!`)
    } else if (guess > randomNumber) {
        displayMsg(`Number is Tooo high!`)
    }
}


function cleanUpGuess(guess) {
    userInput.value = ''
    guessArraySpan.innerHTML += `${guess}, `
    numGuesses++;
    remainingAttempt.innerHTML = ` ${11 - numGuesses-1}`
}


function displayMsg(msg) {
    alertMsg.innerHTML = `<h2>${msg}</h2>`
}


function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled','')
    submitButton.setAttribute('disabled','')
    p.innerHTML = `<h2 id="newGameBtn">Start new Game</h2>`  
    resultField.appendChild(p)
    playGame = false
    newGame();
}

function newGame() {
    const newGameBtn = document.querySelector('#newGameBtn')
    newGameBtn.addEventListener('click', (e) => {
        randomNumber = parseInt(Math.random() * 100 + 1)
        // prevGuess = []
        numGuesses = 1
        guessArraySpan.innerHTML = ''
        remainingAttempt.innerHTML = `${11 - numGuesses-1}`
        userInput.removeAttribute('disabled')
        submitButton.removeAttribute('disabled')
        alertMsg.style.background = 'yellow'
        alertMsg.style.color = 'brown'
        displayMsg(``)
        resultField.removeChild(p)
        playGame = true
    })
}