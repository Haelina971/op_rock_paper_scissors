/* Array containing the three choices */
const choices = ["Squirtle", "Bulbasaur", "Charmander"];
let playerSelection;
let computerSelection;
let userVictory = 0;
let computerVictory = 0;
let gameOn = true; //delete?
const body = document.querySelector('body');

/* Get random choice for computer */
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

/* Play one round and determine the winner */
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);   //Capitalize result
    const results = document.querySelector('#results'); //Get div for displaying results
    const score = document.querySelector('#score');
    if(playerSelection === computerSelection) {
        results.textContent = "It's a tie!";
    } else if(
        (playerSelection === "Squirtle" && computerSelection === "Charmander") ||
        (playerSelection === "Bulbasaur" && computerSelection === "Squirtle")||
        (playerSelection === "Charmander" && computerSelection === "Bulbasaur")) {
        userVictory++;
        results.textContent = `You won! ${playerSelection} beats ${computerSelection}!`;
    } else {
        computerVictory++;
        results.textContent = `You loose! ${computerSelection} beats ${playerSelection}!`;
    }
    score.textContent = `${userVictory} : ${computerVictory}`;
}

/* Add event listeners to buttons */
const buttons = document.querySelectorAll('input');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
    playRound(button.id, getComputerChoice());
    if(userVictory == 5 || computerVictory == 5) {
        endOfGame();
    }
    });
});

function endOfGame() {
    if(userVictory == 5) {
        body.textContent = `You won! You have ${userVictory} points against ${computerVictory}!`;
    } else {
        body.textContent = `You lost! You have ${userVictory} points against ${computerVictory}!`;
    }
    reset();
}

function reset() {
    const resetButton = document.createElement('input');
    resetButton.setAttribute('type', 'image');
    resetButton.setAttribute('id', 'reset');
    resetButton.setAttribute('src', 'images/pokeball.png');
    body.appendChild(resetButton);
    resetButton.addEventListener('click', () => document.location.reload());
}








/* First part of the project (console-based) */
/*function game() {
    for(let i=0; i < 5; i++) {
        playerSelection = window.prompt("Rock? Paper? Scissors?");
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
        while(playerSelection != "Rock" && playerSelection != "Paper" && playerSelection != "Scissors") {
            playerSelection = window.prompt("Incorrect choice, please select Rock, Paper or Scissors");
            playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
        }
        console.log(playerSelection);
        computerSelection = getComputerChoice();
        console.log(computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
    if(userVictory > computerVictory) {
        console.log(`You won! You have ${userVictory} points against ${computerVictory}!`);
    } else {
        console.log(`You lost! You have ${userVictory} points against ${computerVictory}!`)
    }
} 

game();*/

