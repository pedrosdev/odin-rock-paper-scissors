// Implement a 5 round game of Rock Paper Scissors
function game() {
    // Keep track of the scores
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        // Get user's choice and make it case insensitive
        let playerSelection = prompt("What will you play?", "");
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

        // Get computer's choice
        let computerSelection = getComputerChoice();

        // Get result of the current round
        let roundResult = playRound(playerSelection, computerSelection);

        // Print result message
        if (roundResult === 1) {
            console.log(`${playerSelection} beats ${computerSelection}. You won!`);
            playerScore++;
        } else if (roundResult === 0) {
            console.log(`${playerSelection} vs ${computerSelection}. That's a draw!`);
        } else {
            console.log(`${computerSelection} beats ${playerSelection}. You lost!`);
            computerScore++;
        }
    }

    printGameResult(playerScore, computerScore);
}

game();

// Choose the computer's option randomly
function getComputerChoice() {
    let selected = Math.floor(Math.random() * 3);

    // Change value to the actual words
    if (selected === 0) {
        return "Rock";
    } else if (selected === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

// Compute the result of a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    if (
        playerSelection === "Rock" && computerSelection === "Scissors" ||
        playerSelection === "Paper" && computerSelection === "Rock" ||
        playerSelection === "Scissors" && computerSelection === "Paper"
    ) {
        // Player won
        return 1;
    } else if (playerSelection === computerSelection) {
        // Draw
        return 0;
    } else {
        // Player lost
        return -1;
    }
}

// Print the result of a game to the console
function printGameResult(playerScore, computerScore) {
    if (playerScore > computerScore) {
        console.log(`Congratulations! You won by ${playerScore} x ${computerScore}!`);
    } else if (playerScore < computerScore) {
        console.log(`Ha-ha! You lost by ${playerScore} x ${computerScore}!`);
    } else {
        console.log("A draw... Not that interesting, huh?");
    }    
}
