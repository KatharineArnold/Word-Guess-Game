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
  let currentWord = 0;
  let remainingGueses = 8;
  let wins = 0;





  //  start button // run generate word
  $("#start-button").click(function () {
    let currentWord = wordStore[Math.floor(Math.random() * wordStore.length)];

    //  display blank word
    for (let i = 0; i < currentWord.length; i++) {
      wordSpaces.push('-');
      $("#blankLetters").html(wordSpaces);
    }
  });






    // display guesses left   
    $("#guessesLeft").append(remainingGueses);

  // //  score board # wins each word guessed correctly


  $("#totalWins").append(wins);


  //  read the button user presses read only letters and no repeat letters can be chosen

  // reads users key
  document.onkeyup = function (event) {
    var currentGuess = event.key;

    wordSpaces.push(currentGuess);
    //  populate blank word with guessed letters
    $("#blankLetters").html(wordSpaces.join(""));

    for (var j = 0; j < currentWord.length; j++) {
      if (word[j] === currentGuess) {
        wordSpaces[j] = currentGuess;
        remainingGuesses--;
      };
    };
  };



  //  letters guessed tracker
  let usedLetters = [];

  $("#usedLetters").append(usedLetters);

  




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



