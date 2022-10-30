const choices = ["Rock", "Paper", "Scissors"];
let playerSelection;
let computerSelection;
let userVictory = 0;
let computerVictory = 0;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return "It's a tie!";
    } else if(playerSelection === "Rock" && computerSelection === "Scissors") {
        userVictory++;
        return "You won! Rock beats Scissors!";
    } else if(playerSelection === "Paper" && computerSelection === "Rock") {
        userVictory++;
        return "You won! Paper beats Rock!";
    } else if(playerSelection === "Scissors" && computerSelection === "Paper") {
        userVictory++;
        return "You won! Scissors beats Paper!";
    } else {
        computerVictory++;
        return `You loose! ${computerSelection} beats ${playerSelection}!`;
    }
}

function game() {
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

game();