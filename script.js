// Get user's choice and make it case insensitive
let playerSelection = prompt("What will you play?", "");
playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

// Get computer's choice
let computerSelection = getComputerChoice();

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
