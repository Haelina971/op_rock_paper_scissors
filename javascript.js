const choices = ["Rock", "Paper", "Scissors"];
const playerSelection = "paper";
const computerSelection = getComputerChoice();

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    console.log(playerSelection);
    console.log(computerSelection);
    if(playerSelection === computerSelection) {
        console.log("It's a tie!");
    } else if(playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You won! Rock beats Scissors!");
    } else if(playerSelection === "paper" && computerSelection === "rock") {
        console.log("You won! Paper beats Rock!");
    } else if(playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You won! Scissors beats Paper!");
    } else {
        console.log(`You loose! ${computerSelection} beats ${playerSelection}!`);
    }
}
playRound(playerSelection, computerSelection);