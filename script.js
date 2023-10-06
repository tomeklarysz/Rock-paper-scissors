const choice = document.querySelector('#choice');

function getComputerChoice() {
    let x = Math.floor(Math.random() * 3); // random number 0, 1 or 2
    let computerChoice = '';
    console.log(x);
    switch(x) {
        case 0:
            computerChoice = 'Rock';
        case 1:
            computerChoice = 'Paper';
        case 2:
            computerChoice = 'Scissors';
    }
    choice.textContent = `Computer is ${computerChoice}`;
    return computerChoice;
}

const player = document.querySelector('#player');
const computer = document.querySelector('#computer');

let playerPoints = 0;
let computerPoints = 0;

function update() {
    player.textContent = `You: ${playerPoints.toString()}`;
    computer.textContent = `Computer: ${computerPoints.toString()}`;
}

function play(playerSelection, computerSelection) {
    
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    
    if (playerPoints === 5 || computerPoints === 5) {
        playerPoints = 0;
        computerPoints = 0;
    }
    
    if (playerSelection == computerSelection) {
        return "It's tie";
    } else if (playerSelection == "ROCK") {
        switch (computerSelection) {
            case "PAPER":
                computerPoints += 1;
                update();
                return "You Lose! Paper beats Rock";
            case "SCISSORS":
                playerPoints += 1;
                update();
                return "You Win! Congratulations";
        }
    } else if (playerSelection == "PAPER") {
        switch (computerSelection) {
            case "ROCK":
                playerPoints += 1;
                update();
                return "You Win! Congratulations";
            case "SCISSORS":
                computerPoints += 1;
                update();
                return "You Lose! Scissors beat Paper";
        }
    } else {
        switch (computerSelection) {
            case "PAPER":
                playerPoints += 1;
                update();
                return "You Win! Congratulations";
            case "ROCK":
                computerPoints += 1;
                update();
                return "You Lose! Rock beats Scissors";
        }
    }
}

// let player = prompt("Choose rock, paper or scissors");

const content = document.querySelector('#content');
content.addEventListener('click', (event) => {
    let target = event.target;
    let playerSelection;
    switch(target.id) {
        case 'rock':
            playerSelection = 'rock';
            break;
        case 'paper':
            playerSelection = 'paper';
            break;
        case 'scissors':
            playerSelection = 'scissors';
            break;
    }
    // play(playerSelection, getComputerChoice());
    console.log(play(playerSelection, getComputerChoice()));
})

