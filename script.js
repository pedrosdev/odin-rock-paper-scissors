const playBtn = document.querySelector(".play-btn");
const options = document.querySelectorAll(".option");
const outcomeWindow = document.getElementById("outcome");

// Keep track of the scores
let playerScore = 0;
let computerScore = 0;

// Game starts
playBtn.addEventListener("click", () => {
  const instructionsContainer = document.querySelector("#instructions");
  const summaryScreen = document.querySelector(".summary");
  const optionsContainer = options[0].parentElement;

  instructionsContainer.textContent = "Choose your weapon!";
  summaryScreen.classList.toggle("hidden");
  playBtn.classList.toggle("on-screen");
  optionsContainer.classList.toggle("on-screen");
});

options.forEach((option) => {
  option.addEventListener("click", playRound)
});

// Play a single round of Rock Paper Scissors
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

// Choose the computer's option randomly
function getComputerChoice() {
  let selected = Math.floor(Math.random() * 3);

  return ["Rock", "Paper", "Scissors"][selected];
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
  scoresContainer.textContent = `You ${playerScore} vs ${computerScore} Computer`;

  return (playerScore > computerScore) ? playerScore : computerScore;
}

function showRoundResult(playerSelection, computerSelection, roundResult) {
  let message = '';

  if (roundResult === 1) {
    message = `I'll go with ${computerSelection}.<br>${playerSelection} beats 
    ${computerSelection}.<br>You won!`;  
  } else if (roundResult === 0) {
    message = `I choose ${computerSelection}.<br>${playerSelection} vs 
    ${computerSelection}.<br>That's a draw!`;
  } else {
    message = `${computerSelection}!<br>${computerSelection} beats 
    ${playerSelection}.<br>You lost!`;
  }

  outcomeWindow.innerHTML = message;
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

  outcomeWindow.textContent = message;

  // Reset scores after end of each game
  playerScore = 0;
  computerScore = 0;
}
