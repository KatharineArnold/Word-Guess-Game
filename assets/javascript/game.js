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

  // global Variables 
  let wordSpaces = [];
  let currentWord = [];
  let remainingGueses = 8;
  let wins = 0;
  let usedLetters = [];
  let rightWord = [];






  //  start button // run generate word
  $("#start-button").click(function () {
    currentWord = wordStore[Math.floor(Math.random() * wordStore.length)];
    //  create blank word
    for (let i = 0; i < currentWord.length; i++) {
      wordSpaces.push('-');
      $("#start-button").hide();
    }
    // dispaly blank word
    renderWordSpaces();
  });


  //  start game Over
  function resetScore() {
    $("#blankLetters").empty();
    $("#usedletters").empty();
    wordSpaces = [];
    currentWord = [];
    remainingGueses = 8;
    // let wins = 0;
    usedLetters = [];
    rightWord = [];
  };

  //  play again button // run generate word
  $("#play-again").click(function () {
    resetScore();
    currentWord = wordStore[Math.floor(Math.random() * wordStore.length)];
    //  display blank word
    for (let i = 0; i < currentWord.length; i++) {
      wordSpaces.push('-');
    }
    renderWordSpaces();
  });

  

  const renderWordSpaces = () => {
    $("#blankLetters").html(wordSpaces);
  };


  function runScoreboard() {
    // display guesses left   
    $("#guessesLeft").text('Remaining Guesses:' + remainingGueses);
    // //  display # wins each word guessed correctly
    $("#totalWins").text(  "Total Wins:" + wins);
    //  letters guessed tracker
    $("#usedLetters").text('Letters Used:' + usedLetters);
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
      remainingGueses--;
    }
    if (remainingGueses <= 0) {
      $("#win-lose").text("You Lost");
    }
   

    if (wordSpaces.join('') === currentWord) {
      $("#win-lose").text("You Win");

    }
    runScoreboard();
  });

 // no negative guesses
  // choose new word automatically
  // fix so cant press keys until start
  // sop being able to push buttons after lose
  // hide play again

  //  start game Over
  function resetScore() {
    let wordSpaces = [];
    let currentWord = [];
    let remainingGueses = 8;
    // let wins = 0;
    let usedLetters = [];
    let rightWord = [];
  };





  // //  win alert with song/video
  // var keySound = new Audio('./assets/sounds/typewriter-key.wav');
  // //  lose alert with song/video
  // var keySound = new Audio('./assets/sounds/typewriter-key.wav');
 



});



