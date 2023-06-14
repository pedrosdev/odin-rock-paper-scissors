let playerSelection = prompt("What will you play?", "");
let computerSelection = getComputerChoice();

// Choose the computer's option randomly (Rock: 0, Paper: 1, Scissors: 2)
function getComputerChoice() {
    let selected = Math.floor(Math.random() * 3);

    if (selected === 0) {
        selected = "rock";
    } else if (selected === 1) {
        selected = "paper";
    } else {
        selected = "scissors";
    }

    return selected;
}
