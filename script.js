const options = document.querySelectorAll(".option");
const resultWindow = document.getElementById("result-window");

options.forEach((option) => {
  option.addEventListener("click", playRound)
});

let playerScore = 0;
let computerScore = 0;

// Choose the computer's option randomly
function getComputerChoice() {
  let selected = Math.floor(Math.random() * 3);

  return ["Rock", "Paper", "Scissors"][selected];
}

// Compute the result of a single round of Rock Paper Scissors
function playRound(e) {
  // Get computer's choice
  let computerSelection = getComputerChoice();

  // Get player's choice
  let playerSelection = e.target.textContent;

  // Determine the winner for the round
  let roundResult = getRoundResult(playerSelection, computerSelection);

  if (updateScores(roundResult) === 5) {
    finishGame();
  } else {
    showRoundResult(playerSelection, computerSelection, roundResult);
  }
}

function getRoundResult(playerSelection, computerSelection) {
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

function updateScores(roundResult) {
  if (roundResult === 1) {
    playerScore++;
  } else if (roundResult === -1) {
    computerScore++;
  }

  // Show current scores
  const scoresContainer = document.getElementById("scores");
  scoresContainer.textContent = `You | ${playerScore} x ${computerScore} | Computer`;

  return (playerScore > computerScore) ? playerScore : computerScore;
}

function showRoundResult(playerSelection, computerSelection, roundResult) {
  let message = '';

  if (roundResult === 1) {
    message = `${playerSelection} beats ${computerSelection}. You won!`;  
  } else if (roundResult === 0) {
    message = `${playerSelection} vs ${computerSelection}. That's a draw!`;
  } else {
    message = `${computerSelection} beats ${playerSelection}. You lost!`;
  }

  resultWindow.textContent = message;
}

// Print the result of a game to the console
function finishGame() {
  let message = '';
  if (playerScore > computerScore) {
    message = `Congratulations! You won!`;
  } else if (playerScore < computerScore) {
    message = `Ha-ha! You lost!`;
  } else {
    message = "A draw... Not that interesting, huh?";
  }

  resultWindow.textContent = message;

  // Reset scores after end of each game
  playerScore = 0;
  computerScore = 0;
}
