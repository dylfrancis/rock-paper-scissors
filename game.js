let playerWins = [];
let computerWins = [];
let ties = [];

let getComputerChoice = () => {
  const randChoice = Math.floor(Math.random() * 3);
  const computerChoice = ["rock", "paper", "scissors"];
  return computerChoice[randChoice];
};

let checkWinner = (playerScore, computerScore) => {
  if (
    (playerScore === "rock" && computerScore === "scissors") ||
    (playerScore === "paper" && computerScore === "rock") ||
    (playerScore === "scissors" && computerScore === "paper")
  ) {
    return "player";
  } else if (playerScore === computerScore) {
    return "tie";
  } else {
    return "computer";
  }
};

let playRound = (playerChoice) => {
  // play until winner gets to 5
  if (playerWins.length >= 5 || computerWins.length >= 5) {
    return;
  }

  const computerChoice = getComputerChoice();

  updateScore(playerChoice, computerChoice);
  visualizeScore(playerChoice, computerChoice);
  setTimeout(resetVisualizeScore(playerChoice, computerChoice), 1000);
};

let updateScore = (playerChoice, computerChoice) => {
  // Update score each time a round is played
  const playerScore = playerWins.length;
  const computerScore = computerWins.length;
  const tieScore = ties.length;
  const domPlayerScore = document.querySelector(".player-score-count");
  const domComputerScore = document.querySelector(".computer-score-count");
  const domTieScore = document.querySelector(".tie-score-count");

  if (checkWinner(playerChoice, computerChoice) === "player") {
    playerWins.push("player");
    domPlayerScore.textContent = `Score: ${playerScore}`;
  } else if (checkWinner(playerChoice, computerChoice) === "computer") {
    computerWins.push("computer");
    domComputerScore.textContent = `Score: ${computerScore}`;
  } else {
    ties.push("tie");
    domTieScore.textContent = `${tieScore}`;
  }
};

let visualizeScore = (playerChoice, computerChoice) => {
  if (checkWinner(playerChoice, computerChoice) === "player") {
    document.getElementById(playerChoice).style.border = "4px solid green";
    document.getElementById(`${computerChoice}2`).style.border =
      "4px solid red";
  } else if (checkWinner(playerChoice, computerChoice) === "computer") {
    document.getElementById(playerChoice).style.border = "4px solid red";
    document.getElementById(`${computerChoice}2`).style.border =
      "4px solid green";
  } else {
    document.getElementById(playerChoice).style.border = "4px solid blue";
    document.getElementById(`${computerChoice}2`).style.border =
      "4px solid blue";
  }
};

let resetVisualizeScore = (playerChoice, computerChoice) => {
  if (checkWinner(playerChoice, computerChoice) === "player") {
    document.getElementById(playerChoice).style.border = "";
    document.getElementById(`${computerChoice}2`).style.border = "";
  } else if (checkWinner(playerChoice, computerChoice) === "computer") {
    document.getElementById(playerChoice).style.border = "";
    document.getElementById(`${computerChoice}2`).style.border = "";
  } else {
    document.getElementById(playerChoice).style.border = "";
    document.getElementById(`${computerChoice}2`).style.border = "";
  }
};

let playGame = () => {
  const images = document.querySelectorAll(".player-images");
  images.forEach((image) => {
    image.addEventListener("click", () => playRound(image.id));
  });
};

playGame();
