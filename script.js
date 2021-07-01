const pScore = document.getElementById('player');
const cScore = document.getElementById('cpu');
const output = document.getElementById('output');
const result = document.getElementById('result');
const buttons = document.querySelectorAll('button');
const reset = document.getElementById('reset');


buttons.forEach(button => button.addEventListener('click', game));
// refresh page to start over
reset.addEventListener('click',() => location.reload());
 
let playerScore = 0;
let cpuScore = 0;
const choices = ["rock", "paper", "scissors"];


// main game function
function game(e) {
  const playerChoice = Number(e.target.id);
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
  let tie = 0;
  let playerWin = 1;
  let cpuWin = 2;

  if (player === cpu) {
    return tie;
  } else if (player === 0 && cpu === 2) {
    return playerWin;
  } else if (player === 0 && cpu === 1) {
    return cpuWin;
  } else if (player === 1 && cpu === 0) {
    return playerWin;
  } else if (player === 1 && cpu === 2) {
    return cpuWin;
  } else if (player === 2 && cpu === 1) {
    return playerWin;
  } else if (player === 2 && cpu === 0) {
    return cpuWin;
  }
}

// score
function scoreTracker(winner) {
  if (winner === 1) {
    return playerScore++;
  } else if (winner === 2) {
    return cpuScore++;
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
