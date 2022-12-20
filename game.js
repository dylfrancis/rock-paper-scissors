let getComputerChoice = () => {
  const randChoice = Math.floor(Math.random() * 3);
  const computerChoice = ["rock", "paper", "scissors"];
  return computerChoice[randChoice];
};

let checkWinner = (player1, player2) => {
  if (
    (player1 === "rock" && player2 === "scissors") ||
    (player1 === "paper" && player2 === "rock") ||
    (player1 === "scissors" && player2 === "paper")
  ) {
    return "player";
  } else if (player1 === player2) {
    return "tie";
  } else {
    return "computer";
  }
};

let playRound = (playerChoice) => {
  // play until winner gets to 5
};

let updateScore = (playerChoice, computerChoice) => {
  // Update score each time a round is played
  if (checkWinner(playerChoice, computerChoice) === "player") {
  }
};
