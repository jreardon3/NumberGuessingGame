<html lang="en">
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="css/main.css">
  <title>Number Guessing Game</title>
 </head>
<body>
  <div class="container">
  <h1>Guess a Number!</h1>
  <script>
 
 
//STEP 1 - BASIC INTRODUCTION TO CONDITIONALS. DID THE USER GUESS THE NUMBER?

var num = Math.ceil(Math.random() * 10); 
//randomly generate a number b/w 1 and 10
var guess = prompt('Guess the number between 1 and 10 inclusive');
//prompt the user to try and guess your number
 if (guess == num){	//users guess matched the generated number
   alert('Matched :)');	//alert the user that they won
 }
 else{ //users guess did not match the generated number
 	alert('Not matched :('); //alert the user that they lost
 }


//STEP 2 - TRANSITION TO LOOPS. HELP THE USER GUESS THE NUMBER!

 var num = Math.ceil(Math.random() * 10); 
 //randomly generate number b/w 1 and 10
 var numTries = 0; //initialize variable to keep track of # tries
 var guess = prompt('Guess the number between 1 and 10 inclusive');
 //prompt user to guess number b/w 1 and 10
 if (guess == num){	//users guess matched generated number
 	numTries++;	//increment numTries
    alert('Matched! That took you ' + numTries + ' tries.'); 
    //alert user that they won and how many tries it took them
 }
 else{ //users guess did not match generated number
 while(guess!=num){ 
//create a loop that continues as long as the user has not guessed the number
 	if(guess<num){ //guess is lower than the generated number
    guess = prompt('Too low! Guess again:');
    //alert them they are too low and prompt them to guess higher
    }
    else if(guess>num){ //guess is higher than generated number
    guess = prompt('Too high! Guess again:');
    //alert them they are too high and prompt them to guess lower
    }
    numTries++; //increment number tries
}
}
if(guess==num){ //user's guess matches the generated number 
	alert('Matched! That took you ' + numTries + ' tries.');
    //alert them that they have won and how many tries it took them
}



//STEP 4 - MAKE IT A MULTI PLAYER GAME AND KEEP SCORE. WHO WILL WIN? WHAT IF YOU WERE GUESSING BETWEEN 1 AND 100? 1 AND 1000?

var num = Math.ceil(Math.random() * 10);
//randomly generate number b/w 1 and 10
var player1 = prompt('Enter the name of the first player: ');
//store name of first player in variable
player1 = player1.charAt(0).toUpperCase() + player1.slice(1);
//edit name so that the first letter is capitalized
var player2 = prompt('Enter the name of the second player: ');
//store name of second player in variable
player2 = player2.charAt(0).toUpperCase() + player2.slice(1);
//edit name so that the first letter is capitalized
alert('Hello ' + player1 + ' and ' + player2 + '! Lets get started. I am thinking of a number between 1 and 10. Take turns guessing until one player guesses my number and wins. Good luck!');
//alert players of the rules of the game
var p1score = 0; //initialize player 1's score
var p2score = 0; //initialize player 2's score
var p1guess = prompt(player1 + ', guess a number between 1 and 10: ');
//prompt player 1 to guess a number between 1 and 10
var p2guess = prompt(player2 + ', guess a number between 1 and 10: ');
//prompt player 2 to guess a number between 1 and 10
if(p1guess == num || p2guess == num){	//one player has won
	if(p1guess == num){ //if player 1 won...
    p1score++; //increment number of tries
    alert('Matched! The number was ' + num + '. Congratulations, ' + player1 + ' you win! That took you ' + p1score + ' guess.'); //tell them they won
    }
    else if(p2guess == num) { //if player 2 won...
    p2score++; //increment number of tries
    alert('Matched! The number was ' + num + '. Congratulations, ' + player2 + ' you win! That took you ' + p2score + ' guess.'); //tell them they won
    }
}
else{//neither player has guessed correctly 
	while(p1guess != num && p2guess != num){
    //create a loop that continues as long as neither player has guessed the number
    	if(p1guess<num){ //player 1's guess is too low
        p1guess = prompt(player1 + ', too low! Guess again:');
        //alert them and prompt them to guess higher
        }
        else if(p1guess>num){ //player 1's guess is too high
        p1guess = prompt(player1 + ', too high! Guess again:');
        //alert them and prompt them to guess lower
        }
        p1score++;
        //increment playuer 2's number of tries
        if(p2guess<num){ //player 2's guess is too low
        p2guess = prompt(player2 + ', too low! Guess again:');
        //alert them and prompt them to guess higher
        }
        else if(p2guess>num){ //player 2's guess is too high
        p2guess = prompt(player2 + ', too high! Guess again:');
        //alert them and prompt them to guess lower
        }
        p2score++;
        //increment playuer 2's number of tries 
	}
}
if(p1guess == num){ //player 1 has won
alert('Matched! The number was ' + num + '. Congratulations, ' + player1 + ' you win! That took you ' + p1score + ' guesses.'); //tell them they won
}
else if(p2guess == num) { //player 2 has won
alert('Matched! The number was ' + num + '. Congratulations, ' + player2 + ' you win! That took you ' + p2score + ' guesses.'); //tell them they won
}

</script>
  </div>
</body>
</html>
