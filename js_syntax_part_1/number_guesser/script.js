let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
  const humanDistance = Math.abs(secretTarget - humanGuess);
  const computerDistance = Math.abs(secretTarget - computerGuess);

  if(humanDistance < computerDistance){
    return true;
  } else if (computerDistance < humanDistance){
    return false;
  }
};

const updateScore = (winner) => {
  switch(winner){
    case 'human':
      humanScore += 1;
      break;
    case 'computer':
      computerScore += 1;
  }
};

const advanceRound = () => {
  currentRoundNumber += 1;
};