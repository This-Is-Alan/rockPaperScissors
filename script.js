// computerPlay makes a random choice for the computer

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

//---------------------------------------------------------------------

const computerChoice = computerPlay();
const playerChoice = prompt("Choose Your Weapon").toLowerCase();
let playerScore = 0;
let cpuScore = 0;
console.log(gamePlay(playerChoice, computerChoice));
console.log("Your Score " + playerScore, "Computer Score " + cpuScore);

//---------------------------------------------------------------------

function gamePlay(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore++;
    return "You Win! Rock Beats Scissors";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    cpuScore++;
    return "You Lose! Paper Covers Rock.";
  } else if (playerSelection == "rock" && computerSelection == "rock") {
    return "Tie Game!";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore++;
    return "You Win! Paper Covers Rock.";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    cpuScore++;
    return "You Lose! Scissors Cuts Paper.";
  } else if (playerSelection == "paper" && computerSelection == "paper") {
    return "Tie Game!";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore++;
    return "You Win! Scissors Cuts Paper";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    cpuScore++;
    return "You Lose! Rock Beats Scissors.";
  } else if (playerSelection == "scissors" && computerSelection == "scissors") {
    return "Tie Game!";
  }
}

//---------------------------------------------------------------------

function game() {
  while (playerScore < 5 && cpuScore < 5) {
    const computerChoice = computerPlay();
    const playerChoice = prompt("Choose Your Weapon").toLowerCase();
    console.log(gamePlay(playerChoice, computerChoice));
    console.log("Your Score " + playerScore, "Computer Score " + cpuScore);
    if (playerScore == 5) {
      console.log("You Won The Game!");
    } else if (cpuScore == 5) {
      console.log("You Lost The Game!");
    }
  }
}
game();
