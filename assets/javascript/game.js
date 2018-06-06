// Press any key to get started button

// Wins: (# of times user guessed the word correctly).

// If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.

// As the user guesses the correct letters, reveal them: m a d o _  _ a.

// Number of Guesses Remaining: (# of guesses remaining for the user).

// Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).

// After the user wins/loses the game should automatically choose another word and make the user play it.

// Play a sound or song when the user guesses their word correctly, like in our demo.

$(document).ready(function () {



  //  container for words that will be played 
  const wordStore = ['snoopie', 'lassie', 'pluto', 'toto', 'benji'];

  // global Variables ok?
  let wordSpaces = [];
  let currentWord = [];
  let remainingGueses = 8;
  let wins = 0;
  let usedLetters = [];
  let rightWord = [];






  //  start button // run generate word
  $("#start-button").click(function () {
    // currentWord = wordStore[Math.floor(Math.random() * wordStore.length)];
    currentWord = wordStore[0];
    //  display blank word
    for (let i = 0; i < currentWord.length; i++) {
      wordSpaces.push('-');
    }
    renderWordSpaces();
    console.log(`currentWord: ${currentWord}`);
  });

  const renderWordSpaces = () => {
    $("#blankLetters").html(wordSpaces);
  };


  function runScoreboard() {
    // display guesses left   
    $("#guessesLeft").text(remainingGueses);
    // //  display # wins each word guessed correctly
    $("#totalWins").text(wins);
    //  letters guessed tracker
    $("#usedLetters").text(usedLetters);
  };

  runScoreboard();

  document.addEventListener('keypress', (event) => {
    let currentGuess = event.key;

    if (usedLetters.includes(currentGuess)) {
      return;
    };

    if (currentWord.includes(currentGuess)) {
      //    /* check to see if letter appears multiple times */
      for (var j = 0; j < currentWord.length; j++) {
        if (currentWord.charAt(j) === currentGuess) {
          wordSpaces[j] = currentGuess;
        }
      }
      renderWordSpaces();
    } else {
      usedLetters.push(currentGuess);
    }

    if (wordSpaces.join('') === currentWord) {
      $("#win-lose").text("You Win")

    }

    runScoreboard();
    console.log(wordSpaces);
  });





  // //  start game Over
  // function resetGame(){
  //   $('#totalWins').empty();
  //   $('#blankLetters').empty();
  //   $('#usedLetters').empty();
  //   $('#guessesLeft').empty();
  // remainingGuesses


  //     // Clear out arrays
  //     wordSpaces = [];
  //     usedLetters = [];
  // };


  // //  win alert with song/video
  // var keySound = new Audio('./assets/sounds/typewriter-key.wav');
  // //  lose alert with song/video
  // var keySound = new Audio('./assets/sounds/typewriter-key.wav');
  // if(remainingGuesses <= 0) {}

  //  //calls all event listeners
  // function handleWordGame(){
  //     //all of the functions will be called here

  //   };
  //   //runs after html
  //   $(handleWordGame);


});



