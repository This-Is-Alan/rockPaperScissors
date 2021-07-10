const pScore = document.getElementById('player');
const cScore = document.getElementById('cpu');
const output = document.getElementById('output');
const result = document.getElementById('result');
const buttons = document.querySelectorAll('#choice__wrapper button');
const reset = document.getElementById('reset');

const OUTCOMES = {
  TIE: 0,
  PLAYER_WIN: 1,
  CPU_WIN: 2
};
const choices = ["rock", "paper", "scissors"];

let playerScore = 0;
let cpuScore = 0;

// main game function
function game(playerChoice) {
  const cpuChoice = computerChoice();
  const winner = checkWinner(playerChoice, cpuChoice); //winner logic
  scoreTracker(winner);
  displayGame(playerChoice, cpuChoice, winner); //display the game
  endGame();
}

// computer's choices
function computerChoice() {
  return Math.floor(Math.random() * choices.length);
}

// logic determining winner
function checkWinner(player, cpu) {
  if (player === cpu) {
    return OUTCOMES.TIE;
  } else if (player === 0 && cpu === 2) {
    return OUTCOMES.PLAYER_WIN;
  } else if (player === 0 && cpu === 1) {
    return OUTCOMES.CPU_WIN;
  } else if (player === 1 && cpu === 0) {
    return OUTCOMES.PLAYER_WIN;
  } else if (player === 1 && cpu === 2) {
    return OUTCOMES.CPU_WIN;
  } else if (player === 2 && cpu === 1) {
    return OUTCOMES.PLAYER_WIN;
  } else if (player === 2 && cpu === 0) {
    return OUTCOMES.CPU_WIN;
  }
}

// score
function scoreTracker(winner) {
  if (winner === OUTCOMES.PLAYER_WIN) {
    playerScore++;
  } else if (winner === OUTCOMES.CPU_WIN) {
    cpuScore++;
  }
}

// displays win or loss results
function displayGame(player, cpu, winner) {
  let win = ["Tie Game", "You Won!", "You Lost!"];
  pScore.textContent = `Player Score: ${playerScore}`;
  cScore.textContent = `CPU Score: ${cpuScore}`;
  output.textContent = `You Chose: ${choices[player].toUpperCase()} | Computer Chose: ${choices[cpu].toUpperCase()}`
  result.textContent = `${win[winner]}`;
}

// once highest score is reached, player has option to reset game
function endGame() {
  if (playerScore === 5){
    result.textContent = "You Beat That Dumb Computer!";
    buttons.forEach(button => {
      button.removeEventListener('click', game);
    });
  } else if (cpuScore === 5){
    result.textContent = "You Lost to a Computer Bro, You Suck!"
    buttons.forEach(button => {
      button.removeEventListener('click', game);
    });
  }
}

buttons.forEach(button => button.addEventListener('click', event => {
  const playerChoice = Number(event.target.attributes["data-id"].value);
  game(playerChoice);
}));

// refresh page to start over
reset.addEventListener('click', () => location.reload());