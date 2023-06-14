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

        let roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);

        if (roundResult.includes("won")) {
            playerScore++;
        } else if (roundResult.includes("lost")) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log(`Congratulations! You won by ${playerScore} x ${computerScore}!`);
    } else if (playerScore < computerScore) {
        console.log(`Ha-ha! You lost by ${playerScore} x ${computerScore}!`);
    } else {
        console.log("A draw... Not that interesting, huh?");
    }

    // Choose the computer's option randomly
    function getComputerChoice() {
        let selected = Math.floor(Math.random() * 3);

        // Change value to the actual words
        if (selected === 0) {
            selected = "Rock";
        } else if (selected === 1) {
            selected = "Paper";
        } else {
            selected = "Scissors";
        }

        return selected;
    }

    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            return `${playerSelection} vs ${computerSelection}. That's a draw!`;
        } else if (
            playerSelection === "Rock" && computerSelection === "Scissors" ||
            playerSelection === "Paper" && computerSelection === "Rock" ||
            playerSelection === "Scissors" && computerSelection === "Paper"
        ) {
            return `${playerSelection} beats ${computerSelection}. You won!`;
        } else {
            return `${computerSelection} beats ${playerSelection}. You lost!`;
        }
    }
}

game();
