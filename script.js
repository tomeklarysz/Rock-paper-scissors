function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    // console.log(x);
    switch(x) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        default:
            return "Something went wrong";
    }
}

// console.log(getComputerChoice());

function play(playerSelection, computerSelection) {
    
    console.log(`You: ${playerSelection}`);
    console.log(`You: ${computerSelection}`);

    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    
    if (playerSelection == computerSelection) {
        return "It's tie";
    } else if (playerSelection == "ROCK") {
        switch (computerSelection) {
            case "PAPER":
                return "You Lose! Paper beats Rock";
            case "SCISSORS":
                return "You Win! Congratulations";
        }
    } else if (playerSelection == "PAPER") {
        switch (computerSelection) {
            case "ROCK":
                return "You Win! Congratulations";
            case "SCISSORS":
                return "You Lose! Scissors beat Paper";
        }
    } else {
        switch (computerSelection) {
            case "PAPER":
                return "You Win! Congratulations";
            case "ROCK":
                return "You Lose! Rock beats Scissors";
        }
    }
}
console.log(play("paper", getComputerChoice()));