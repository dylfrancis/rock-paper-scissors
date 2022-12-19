let getComputerChoice = () => {
  const randChoice = Math.floor(Math.random() * 3);
  const computerChoice = ["ROCK", "PAPER", "SCISSORS"];
  return computerChoice[randChoice];
};

let singleRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toUpperCase();
  computerSelection = computerSelection.toUpperCase();

  if (playerSelection === "ROCK") {
    if (computerSelection === "ROCK") {
      return `Tie! ${playerSelection} ties with ${computerSelection}`;
    } else if (computerSelection === "PAPER") {
      return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if (computerSelection === "SCISSORS") {
      return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
      return "ERROR: Computer Selection not valid.";
    }
  } else if (playerSelection === "PAPER") {
    if (computerSelection === "PAPER") {
      return `Tie! ${playerSelection} ties with ${computerSelection}`;
    } else if (computerSelection === "SCISSORS") {
      return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if (computerSelection === "ROCK") {
      return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
      return "ERROR: Computer Selection not valid.";
    }
  } else if (playerSelection === "SCISSORS") {
    if (computerSelection === "SCISSSORS") {
      return `Tie! ${playerSelection} ties with ${computerSelection}`;
    } else if (computerSelection === "ROCK") {
      return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if (computerSelection === "PAPER") {
      return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
      return "ERROR: Computer Selection not valid.";
    }
  } else {
    return "ERROR: user input invalid.";
  }
};

let game = () => {
  let userScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let userChoice = prompt("Enter rock paper or scissors!");
    const computerChoice = getComputerChoice();

    let round = singleRound(userChoice, computerChoice);
    console.log(round);

    if (
      round === `You win! ${userChoice.toUpperCase()} beats ${computerChoice}`
    ) {
      userScore++;
    } else if (
      round === `You lose! ${computerChoice} beats ${userChoice.toUpperCase()}`
    ) {
      computerScore++;
    }
  }

  if (userScore > computerScore) {
    console.log(
      `You win!\n\nSCORE:\nUser: ${userScore}\nComputer: ${computerScore}`
    );
  } else if (userScore < computerScore) {
    console.log(
      `You lose.\n\nSCORE:\nUser: ${userScore}\nComputer: ${computerScore}`
    );
  } else {
    console.log(
      `You tied!\n\nSCORE:\nUser: ${userScore}\nComputer: ${computerScore}`
    );
  }
};

game();
