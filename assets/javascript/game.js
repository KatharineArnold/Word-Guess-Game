`use strict`

//  container for words that will be played 
const wordStore = [
  {
    name: 'snoopy',
    imageUrl: 'https://media.giphy.com/media/xT9DPzhNGA8MKjxwFG/giphy.gif'
  },
  {
    name: 'lassie',
    imageUrl: "https://media.giphy.com/media/e2ieg5dCpXTTq/giphy.gif"
  },
  {
    name: 'pluto',
    imageUrl: "https://media.giphy.com/media/LOTSdEc35dOrC/giphy.gif"
  },
  {
    name: 'toto',
    imageUrl: "https://media.giphy.com/media/ENvuajAiW7Z1C/giphy.gif"
  },
  {
    name: 'benji',

    imageUrl: "http://www.reformer.com/uploads/original/20180315-163323-BENJI-T5_93344.jpg"
  }];

// global Variables 
let wordSpaces = [];
let currentWord = [];
let remainingGueses = 8;
let wins = 0;
let usedLetters = [];
let rightWord = [];

let playAgain = document.getElementById('play-again');

// hide
playAgain.style.visibility = 'hidden';

let score = document.getElementById('score');
score.style.visibility = 'hidden';

//  start button // run generate word
let startButton = document.getElementById('start-button');


// on click is an event handler than runs a portion of code when something is clicked
startButton.onclick = function (event) {
  //this selects a random word from the word store
  currentWord = wordStore[Math.floor(Math.random() * wordStore.length)];
  //  create blank word spaces from the selected word using a for loop. check length and add a dash for each index
  for (let i = 0; i < currentWord.name.length; i++) {
    wordSpaces.push('-');
  }
  //show play agin and score
  playAgain.style.visibility = 'visible';
  score.style.visibility = 'visible';
//hide start button
  startButton.style.visibility = 'hidden';
  // dispaly blank word
  renderWordSpaces();
};


//  start game Over
function resetScore() {
  document.getElementById("blankLetters").innerHTML = "";
  document.getElementById("usedLetters").innerHTML = "";
  document.getElementById("win-lose").innerHTML = "";
  document.getElementById("image").innerHTML = "";
  wordSpaces = [];
  currentWord = {};
  remainingGueses = 8;
  usedLetters = [];
  rightWord = [];
};

//  play again button // run generate word
playAgain.onclick = function () {
  resetScore();
  currentWord = wordStore[Math.floor(Math.random() * wordStore.length)];
  //  display blank word
  for (let i = 0; i < currentWord.name.length; i++) {
    wordSpaces.push('-');
  }
  renderWordSpaces();
  runScoreboard();
};


// push words to DOM
const renderWordSpaces = () => {
  document.getElementById("blankLetters").innerHTML = wordSpaces.join(" ");
};

// run scores
function runScoreboard() {
  // display guesses left   
  document.getElementById("guessesLeft").innerHTML = 'Remaining Guesses:' + remainingGueses;
  // //  display # wins each word guessed correctly
  document.getElementById("totalWins").innerHTML = "Total Wins:" + wins;
  //  letters guessed tracker
  document.getElementById("usedLetters").innerHTML = 'Letters Used:' + usedLetters;

};

runScoreboard();




//check if input is a letter
const isLetterKeyCode = (keyCode) => {
  return (keyCode >= 65 && keyCode <= 90)
}


// event listener for key press
//set the current gues to the key that was pressed
document.onkeydown = (event) => {
  let currentGuess = event.key.toLowerCase();
  //if there are no more guesses the game is over
  if (remainingGueses <= 0) {
    return;
  }
  //if the guesses equal the correct word game is over
  if (wordSpaces.join('') === currentWord.name) {
    return;
  }

  let keyCode = event.keyCode;
  if (!isLetterKeyCode(keyCode)) {
    return;
  }


  // if user already guessed dont use letter again
  if (usedLetters.includes(currentGuess)) {
    return;
  };

  // if letter guessed is correct add to current word
  if (currentWord.name.includes(currentGuess)) {
    //check to see if letter appears multiple times 
    for (var j = 0; j < currentWord.name.length; j++) {
      if (currentWord.name.charAt(j) === currentGuess) {
        wordSpaces[j] = currentGuess;
      }
    }


    renderWordSpaces();
    // push to used letters if not correct guess
  } else {
    usedLetters.push(currentGuess);
    remainingGueses--;
  }
  // if out of guesses you lost
  if (remainingGueses <= 0) {
    document.getElementById("image").innerHTML =
      `<img src=${currentWord.imageUrl} alt=${currentWord.name} />
    <p>You lose!</p>
    <p>The correct answer is ${currentWord.name}</p>
  `;
  }

  // if guessed all letters you win
  if (wordSpaces.join('') === currentWord.name) {
    document.getElementById("win-lose").innerHTML ="You Win!!"
    document.getElementById("image").innerHTML =`<img src=${currentWord.imageUrl} alt=${currentWord.name} />`;
    wins++;
  }
  runScoreboard();

};

















