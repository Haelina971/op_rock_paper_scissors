let userVictory = 0;
let computerVictory = 0;
const results = document.querySelector('.results');
let imgPlayerElement = document.querySelector('.user_element');
let imgCompElement = document.querySelector('.comp_element');
const userPoints = document.querySelectorAll('div.player_points > img');
const compPoints = document.querySelectorAll('div.computer_points > img');
const body = document.querySelector('body');

/* Get random choice for computer from an array containing the different choices */
function getComputerChoice() {
    const choices = ["Squirtle", "Bulbasaur", "Charmander"];
    return choices[Math.floor(Math.random() * choices.length)];
}

/* Play one round and determine the winner */
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);   //Capitalize result
    displayElement(playerSelection, imgPlayerElement);
    displayElement(computerSelection, imgCompElement);
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
    displayPoints(userVictory, userPoints);
    displayPoints(computerVictory, compPoints);
}

/* Play rounds until user or computer reaches 5 points */
function game() {
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
}


/* Display final results and winner + call reset() to restart game */
function endOfGame() {
    if(userVictory == 5) {
        body.textContent = `You won! You have ${userVictory} points against ${computerVictory}!`;
    } else {
        body.textContent = `You lost! You have ${userVictory} points against ${computerVictory}!`;
    }
    body.className = 'body_final';
    reset();
}

/* Display button to play a new game */
function reset() {
    const playAgain = document.createElement('div');
    playAgain.className = 'play_again';
    playAgain.textContent = "To play again, click the Pokeball";
    const resetButton = document.createElement('input');
    resetButton.setAttribute('type', 'image');
    resetButton.setAttribute('src', 'images/pokeball.png');
    body.appendChild(playAgain);
    body.appendChild(resetButton);
    resetButton.addEventListener('click', () => document.location.reload());
}

/* Display element images related to choice of computer and player 
choice = choice of player or comp
user = HTML element of player of comp element */
function displayElement(choice, user) {
    if(choice == "Squirtle") {
        user.setAttribute('src', 'images/water.png');
    } else if(choice == "Charmander") {
        user.setAttribute('src', 'images/fire.png');
    } else {
        user.setAttribute('src', 'images/leaf.png');
    }
}

/* Lightup Pokeballs to track points 
victory = tracking of number of points of player or comp
user = HTML element of player or comp pokeballs*/
function displayPoints(victory, user) {
    for(let i=0; i<victory; i++) {
        user[i].style.opacity = '100%';
    }
}

/* Play the gane */
game();



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

