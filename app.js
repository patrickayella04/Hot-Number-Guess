// Guessing Game
// 1. dynamically enter game rules with min and max
// 2. Create a random wining number
// 3. display how many chances player has left if they ender wrong ansewer
// 4. Indicate when player has won or lost
// 5. display play again message on submit button to reload the page

// Elements

const minMaxMessage = document.getElementById('min-max-message');
const playerInput = document.getElementById('input');
const submitBtn = document.getElementById('submit-btn');
const message = document.getElementById('message');
const minGuess = document.getElementById('minGuess');
const maxGuess = document.getElementById('maxGuess');


// Variables
let min = 1;
let max = 10;
let turn = 3;


let winningNum = 2;

// Instructions message
minMaxMessage.innerText = `Guess a number between ${min} and ${max}`;



// Event listener
submitBtn.addEventListener('click', function () {
    const guess = parseInt(playerInput.value);
    
    console.log(guess)

    if (isNaN(guess) || guess < min || guess > max) {

        message.innerText = 'This is an invalid answer!'
    }  else {
            turn -= 1;
    
            message.innerHTML = `Try Again, you have ${turn} turns left`
        }

    
    if (guess === winningNum) {

        message.innerText = `YOU WIN! The correct answer is ${winningNum}`;
     } 
    


});