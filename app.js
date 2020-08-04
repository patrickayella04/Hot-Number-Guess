// Guessing Game
// 1. dynamically enter game rules with min and max
// 2. Create a random wining number
// 3. display how many chances player has left if they ender wrong ansewer
// 4. Indicate when player has won or lost
// 5. display play again message on submit button to reload the page

// Elements

const minMaxMessage = document.getElementById('min-max-message'),
    playerInput = document.getElementById('input'),
    submitBtn = document.getElementById('submit-btn'),
    message = document.getElementById('message'),
    minGuess = document.getElementById('minGuess'),
    maxGuess = document.getElementById('maxGuess');


// Variables
let min = 1,
    max = 10,
    turn = 3,
    winningNum = getRandom(min, max) ;

// Instructions message
minMaxMessage.innerText = `Guess a number between ${min} and ${max}`;



// Event listener
submitBtn.addEventListener('click', function () {
    const guess = parseInt(playerInput.value);
    
    console.log(guess)

    if (isNaN(guess) || guess < min || guess > max) {

        messageOptions('This is an invalid answer!', 'red');

    }  else {
            turn -= 1;
    
        messageOptions(`Try Again, you have ${turn} turns left`, 'red')
        }

    
    if (guess === winningNum) {

        messageOptions(`YOU WIN! The correct answer is ${winningNum}`, 'green');

    } else if (turn === 0) {
        messageOptions('YOU LOSE!', 'red');
        playerInput.disabled = true;
     }
    


});

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function messageOptions(msg,color) {
    message.innerText = msg;
    playerInput.style.borderColor = color;
    message.style.color = color;
    playerInput.value = '';
}

