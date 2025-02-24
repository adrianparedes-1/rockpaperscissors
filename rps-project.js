/*
Create a Rock-paper-scissors game that you can play with the computer. The computer will make a random choice and there will be 5 rounds. Once the game is over,
show the winner. 

Understand:

This program should prompt the user to select one of three choices (rps) then randomly have the computer make the same choice. Once we have both inputs,
compare them to each for winner. 

Once there is a winner, update a counter depending on the respective winner. We should also have another counter for the amount
of rounds played.

Once on the rounds played hit 5 or the rounds won by any player hits 3, game should end displaying winner.

Plan: 

1. create variables for player counter and round counter.
2. create variable to store user input.
3. create variable to store random choice from computer.
4. create method that converts choice of 1 2 or 3 to rock paper or scissors
5. create method for game logic.
6. continue playing until player counter hits 3 or round counter hits 5.


edge cases: 
1. consider user input that is not a number
2. consider if the user and computer select the same choice.

Implement:

*/

//global vars
let playerCounter = 0;
let computerCounter = 0;
let roundCounter = 1;

function main() {
    alert("Welcome to Rock-Paper-Scissors!")
    while (playerCounter < 3 && computerCounter < 3 && roundCounter <= 5) {
        // alert("hello");
        gameLogic(promptUser());
        // ex. pc: 1, cc: 0, rc: 2    
    }
    alert("Game Over!\nPlayer: " + playerCounter + "\tComputer: " + computerCounter + "\nWinner: " + declareWinner());
}

main();

function promptUser() {
    let userInput = prompt("Make a choice:\n1. Rock\n2. Paper\n3. Scissors");
    userInput = parseInt(userInput);
    if (userInput === 1 || userInput === 2 || userInput === 3) {
        //if it is a number, compare it to the randomly generated number
        //prob just call another function here for game logic, like if it is a number then continue with the game
        // alert("hi");
        return userInput;
    } else if (!Number.isInteger(userInput)) { //checking if it is a number at all
        return alert("Please enter a number!");
    }
    else {
        return alert("Please enter a valid number!") // it is a number but not what we are looking for so prompt another response
    }
}

function gameLogic (userInput) {
/*
1. `Math.random()`: This generates a random decimal number between 0 (inclusive) and 1 (exclusive)
2. `* 3`: Multiplies the random number by 3, giving a range of 0 to 2.99999...
3. `Math.floor()`: Rounds down to the nearest integer, giving either 0, 1, or 2
4. `+ 1`: Adds 1 to the result, making the final range 1, 2, or 3

So this code will randomly generate one of three numbers: 1, 2, or 3, with equal probability (approximately 33.33% chance for each number).
*/
    const ran = Math.floor(Math.random() * 3) + 1;

    //I'm going to use the brute force method which is the easiest but I know there is a more elegant way to code the game logic. Maybe I will look at it at a later point.
    switch (userInput) {
        case 1:
            if (ran == 2) {
                computerCounter++;
            } else if (ran == 3) {
                playerCounter++;
            }
            break;
        case 2:
            if (ran == 3) {
                computerCounter++;
            } else if (ran == 1) {
                playerCounter++;
            }
            break;
        case 3:
            if (ran == 1) {
                computerCounter++;
            } else if (ran == 2) {
                playerCounter++;
            }
            break;
    }
    if (userInput != undefined) {
        alert("Round " + roundCounter + " Score:\nPlayer: " + playerCounter + "\tComputer: " + computerCounter);
        roundCounter++;    
    }
}

function declareWinner() {
    if (playerCounter > computerCounter) {
        winner = "Player";
    } else if (computerCounter < playerCounter) {
        winner = "Computer";
    } else {
        winner = "Tie!"
    }
    return winner;
}