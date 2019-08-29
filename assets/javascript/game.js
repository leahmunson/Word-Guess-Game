// Before coding any functions, set up global-level game variables
    // Set up list of words
    var selectableWords =           
        [
            "hello",
            "computer",
            "document",
            "puppy",
            "javascript",
            "seattle",
            "table",
            "watch",
            "washington",
            "table",
            "coffee",
        ];

    // Define maximum number of tries player has
    const maxTries = 10;            

    // Store the letters the user guessed
    var guessedLetters = [];       

    // Index of the current word in the array
    var currentWordIndex;    
    
    // Define the word we actually build to match the current word
    var guessingWord = [];  

    // How many tries the player has left
    var remainingGuesses = 0;   

    // How to tell if the game has started
    var gameStarted = false;

    // Say 'press any key to try again'
    var hasFinished = false;  

    // How many wins has the player racked up
    var wins = 0;

// Create a function to reset game 
function resetGame() {
    remainingGuesses = maxTries;
    gameStarted = false;

    // Round the random number down to the nearest whole number
    currentWordIndex = Math.floor(Math.random() * (selectableWords.length));

    // Clear out arrays
    guessedLetters = [];
    guessingWord = [];

    // Build the guessing word and clear it out
    for (var i = 0; i < selectableWords[currentWordIndex].length; i++) {
        guessingWord.push("_");
    }

    // Show display
    updateDisplay();
};

//  Update the display on the HTML Page
function updateDisplay() {
    document.getElementById("totalWins").innerText = wins;
    document.getElementById("currentWord").innerText = "";

    for (var i = 0; i < guessingWord.length; i++) {
        document.getElementById("currentWord").innerText += guessingWord[i]; //add
    }
    
    document.getElementById("remainingGuesses").innerText = remainingGuesses;
    document.getElementById("guessedLetters").innerText = guessedLetters;

    if(remainingGuesses <= 0) {
        document.getElementById("gameover-image").style.cssText = "display: block";
        document.getElementById("pressKeyTryAgain").style.cssText = "display:block";
        hasFinished = true;
    }
};

// Update the image depending on how many guesses
function updateDisplay() {
    document.getElementById("resultimage").src = //insert "wrong"
};

// Create an Event Listener to run the game
document.onkeydown = function(event) {
    // If you finish the game and need to reset
    if(hasFinished) {
        resetGame();
        hasFinished = false;
    } else {
        // Check to make sure a-z was pressed.
        if(event.keyCode >= 65 && event.keyCode <= 90) {
            makeGuess(event.key.toLowerCase());
        }
    }
};

function makeGuess(letter) {
    if (remainingGuesses > 0) {
        if (!gameStarted) {
            gameStarted = true;
        }

        // Make sure we didn't use this letter yet
        if (guessedLetters.indexOf(letter) === -1) {
            guessedLetters.push(letter);
            evaluateGuess(letter);
        }
    }
    updateDisplay();
    checkWin();
};

// Create a function that takes a letter and finds all instances of appearance in the string and replaces them in the word being guessed.

function evaluateGuess(letter) {
    // Array to store positions of letters in string
    var positions = [];

    // For loop to finding all instances of guessed letter in a word and store in array
    for (var i = 0; i < selectableWords[currentWordIndex].length; i++) {
        if(selectableWords[currentWordIndex][i] === letter) {
            positions.push(i);
        }
    }

    // if there are no indicies, remove a guess and update the hangman image
    if (positions.length <= 0) {
        remainingGuesses--;

    } else {
        // Loop through all the indicies and replace the '_' with a letter.
        for(var i = 0; i < positions.length; i++) {
            guessingWord[positions[i]] = letter;
        }
    }
};

function checkWin() {
    if(guessingWord.indexOf("_") === -1) {
        document.getElementById("youwin-image").style.cssText = "display: block";
        document.getElementById("pressKeyTryAgain").style.cssText= "display: block";
        wins++;
        hasFinished = true;
    }
}