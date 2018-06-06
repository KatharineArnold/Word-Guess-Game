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
    currentWord = wordStore[Math.floor(Math.random() * wordStore.length)];
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






  // ##########1
  //   // reads users key
  //   document.onkeyup = function (event) {
  // //     var currentGuess = event.key;
  // console.log(currentGuess);
  //     // loop through current word to determine if key is correct
  //     for (var j = 0; j < currentWord.length; j++) {
  //       if (currentWord.charAt(j)) === currentGuess) {
  //   wordSpaces[j] = currentGuess;
  //   remainingGuesses--;
  // };
  // // push current guess to array
  // wordSpaces.push(currentGuess);
  // //  populate blank word with guessed letters
  // $("#blankLetters").html(wordSpaces.join(""));

  //     };
  //   };




  // ######################2
  //   document.onkeyup = function (event) {
  //     var currentGuess = event.key;
  //     console.log(currentGuess);





  //     let currentWordLetters = [];

  //     for (var j = 0; j < currentWord.length; j++) {
  //       currentWordLetters.push(currentWord.charAt(j));
  //     }
  //     for (var k = 0; k < currentWordLetters.length; k++) {
  //       if (k == currentGuess) {
  //         wordSpaces.push(k);
  //       }
  //       else {
  //         usedLetters.push(k);
  //       }
  //       remainingGuesses--;

  //     };
  //   };

  // #################3
  //   for (var i = 0; i < word.length; i++) {
  //     if (word[i] === geuss) {
  //       geusses[i].innerHTML = geuss;
  //       counter += 1;


  // ####################4






  //checks if letter is in the word or not
  // reads users key
  //     document.onkeyup = function (event) {
  //       var currentGuess = event.key;
  //       for (i = 0; i < currentWord.length; i++) {
  //         if (currentGuess === currentWord[i]) {
  //           wordSpaces[i] = guess;
  //           $("#blankLetters").innerHTML = wordSpaces.join(" ");
  //         }
  //       }
  //     }




  // ###################5
  document.addEventListener('keypress', (event) => {
    let currentGuess = String.fromCharCode(event.keyCode);
    console.log(currentGuess);
    console.log(currentWord)

    if(currentWord.indexOf(currentGuess) > -1) {
      // add to rightWords
      wordSpaces[currentWord.indexOf(currentGuess)] = currentGuess;
      renderWordSpaces();
    } else {
      usedLetters.push(currentGuess);
    }
    if (wordSpaces.join('') === currentWord) {
      alert("you win")

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



