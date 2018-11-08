
// calls the function genCharArray to generate the alphabet 
// the function can be found at line 103.

var arrAlphabet = genCharArray('a', 'z'); 



// creates a  guessGame object 
// with various methods and 
// properties required for the 
// game to work.
var guessGame = {
    currentGuessLetter : "",
    Wins : 0 ,
    Losses : 0,
    GuessesLeft : 10,
    GuessedLetters : [] ,
    GameOver : false ,
   // this function is the "brain of the game (logic)"

    CheckLetter: function (varLetter){
        //checks if the player guessed letter matchs the letter picked 
        // by the computer
        
        if (varLetter === this.currentGuessLetter){
            // add code to win the game
            //adds a ppoint to the win score 
            this.Wins++;
            //starts a new game
            this.newGame();
            // alert the player he won.
            alert("You Win this time!");
            
        
        } else {
            // code here in case of wrong guess
            //if the guesss amount of tries reach 0 then
            if (this.GuessesLeft -1 === 0){
                //sets the gameover flag 
            this.GameOver = true 
            // set a function to reset guesses left and guessed letters
            //adds a point to the to the losses score
            this.Losses++;
            //restart a new game
            this.newGame();
            //alerts the player he / she lost
            alert("You lost this time!");
            
            
            }else {
                //subtract one atempt of the remaining guesses left
                    this.GuessesLeft--;
                //adds to the array of wrong guess to be displayed to the player
                    this.GuessedLetters.push (varLetter);
                    
                   
            }

        }

    },
    //generate a rnd letter for the game
    setLetterToGuess: function (){
        // arrAlphabet is the array created at the top of the 
        //code to hold the alphabet....
      this.currentGuessLetter =  randomLetter(arrAlphabet);
      
    },
    // function to start a new game reseting the guessed letter from previous game
    // and the guesses left
    // also generates a new letter for the player to guess
    newGame: function(){
        //resets the game over value to false
        this.GameOver =false;
        //reset the array back to empty for the new game
        this.GuessedLetters =[];
        // reset the atempts to 10
        this.GuessesLeft =10;
        // pick a new letter from the array
        this.setLetterToGuess();
        
    },
    //function to update the score in the elements (html)
    // gets the handle of each span element and updates with the new score
    updateScore: function() {
        var winHandle = document.getElementById("win");
        winHandle.innerHTML = this.Wins;
        var lossHandle = document.getElementById("loss");
        lossHandle.innerHTML = this.Losses;
        var leftHandle = document.getElementById("left");
        leftHandle.innerHTML = this.GuessesLeft;
        var lettersusedHandle = document.getElementById("current");
        lettersusedHandle.innerHTML = this.GuessedLetters.toString();
        var actualletter = document.getElementById("actual");
        actualletter.innerHTML = this.currentGuessLetter;
    }


}

// function to populate the array with the abc....

function genCharArray(charA, charZ) {
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }
    return a;
}
// function to randomize a letter 
// takes the created array from the top of the code as argument
// and return a number
function randomLetter(array){
    var rndLetter  = array[Math.floor(Math.random() * array.length)];
    return rndLetter;
}
// starts the first random letter for the first game
var computerLetter = randomLetter(arrAlphabet);
guessGame.currentGuessLetter = computerLetter;

// uses the onkeyup event to play the game 

document.onkeyup =function(event){
    // set guess var to the key that was released (keyup)
    var guess = event.key ;
    // calls the object guessGame's function CheckLetter 
    //that starts the game
   guessGame.CheckLetter(guess);
   // then update the score
   guessGame.updateScore();
}

// this function was meant to hide and show a you win / lose hidden div 
// however ...
// still a work in progress :)
function showhide(id) {
  if (document.getElementById) {
    var divid = document.getElementById(id);
    
    var divs = document.getElementsByClassName("boxwin");
    for (var i = 0; i < divs.length; i = i + 1) {
      $(divs[i]).fadeOut("slow");
    }
    $(divid).fadeIn("slow");
   
  }
  return false;
}