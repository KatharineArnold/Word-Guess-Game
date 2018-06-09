`use strict`

$(document).ready(function () {



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



  $('#play-again').hide();
  $('#score').hide();



  //  start button // run generate word
  $("#start-button").click(function () {
    currentWord = wordStore[Math.floor(Math.random() * wordStore.length)];
    //  create blank word
    for (let i = 0; i < currentWord.name.length; i++) {
      wordSpaces.push('-');
      $("#start-button").hide();
      $('#play-again').show();
      $('#score').show();

    }
    // dispaly blank word
    renderWordSpaces();
  });


  //  start game Over
  function resetScore() {
    $("#blankLetters").empty();
    $("#usedletters").empty();
    $("#win-lose").empty();
    $('#image').empty();
    wordSpaces = [];
    currentWord = {};
    remainingGueses = 8;
    usedLetters = [];
    rightWord = [];
  };

  //  play again button // run generate word
  $("#play-again").click(function () {
    resetScore();
    currentWord = wordStore[Math.floor(Math.random() * wordStore.length)];
    //  display blank word
    for (let i = 0; i < currentWord.name.length; i++) {
      wordSpaces.push('-');
    }
    renderWordSpaces();
    runScoreboard();
  });


  // push words to DOM
  const renderWordSpaces = () => {
    $("#blankLetters").html(wordSpaces);
  };

  // run scores
  function runScoreboard() {
    // display guesses left   
    $("#guessesLeft").text('Remaining Guesses:' + remainingGueses);
    // //  display # wins each word guessed correctly
    $("#totalWins").text("Total Wins:" + wins);
    //  letters guessed tracker
    $("#usedLetters").text('Letters Used:' + usedLetters);
  };

  runScoreboard();




  //check if input is a letter
  const isLetterKeyCode = (keyCode) => {
    return (keyCode >= 65 && keyCode <= 90)
  }


  // event listener for key press
  document.onkeydown = (event) => {
    let currentGuess = event.key;
    if (remainingGueses <= 0) {
      return;
    }
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
      // $("#win-lose").text('The answer is' + ' ' + currentWord.name);
      // $('#image').html($('<img>', {alt:currentWord.name, src: currentWord.imageUrl}));
      $('#image').html(`
        <img src=${currentWord.imageUrl} alt=${currentWord.name} />
        <p>You lose!</p>
        <p>The correct answer is ${currentWord.name}</p>
      `);
    }

    // if guessed all letters you win
    if (wordSpaces.join('') === currentWord.name) {
      $("#win-lose").text("You Win!!");
      $('#image').html($('<img>', {alt:currentWord.name, src: currentWord.imageUrl}));
      wins++;
    }
    runScoreboard();
    // });
  };











  // //  win alert with song/video
  // var keySound = new Audio('./assets/sounds/typewriter-key.wav');
  // //  lose alert with song/video
  // var keySound = new Audio('./assets/sounds/typewriter-key.wav');




});



