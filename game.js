/*
    Justin Chhay
    Rock Paper Scissors Game, part of The Odin Project
    JavaScript
*/

//Variables (let, const, var)
const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let playerSelection = "";
let computerSelection = "";

//DOM Variables
let buttons = document.querySelectorAll(".button");
const roundResult = document.querySelector("#results-container");


//Randomly generates computer decision
function computerPlay() {
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {

    //loop through turn in case user misspells
    let playerAns = choices.indexOf(playerSelection.toLowerCase());
    let computerAns = choices.indexOf(computerSelection.toLowerCase());

    if (playerAns === computerAns) { //draw
        displayResult("You both chose " + playerSelection + ". DRAW");
    } else if (
        (playerAns === 0 && computerAns === 2) ||
        (playerAns === 2 && computerAns === 1) ||
        (playerAns === 1 && computerAns === 0)
    ) {
        ++playerScore;
        displayResult(playerSelection.substr(0, 1).toUpperCase() + playerSelection.substr(1).toLowerCase() + " beats " + computerSelection + ". WINNER");
    } else { //lose
        ++computerScore;
        displayResult(playerSelection.substr(0, 1).toUpperCase() + playerSelection.substr(1).toLowerCase() + " loses against " + computerSelection + ". LOSS");
    }
}


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        computerSelection = computerPlay();
        playerSelection = button.id;
        console.log(playerSelection);
        playRound(playerSelection, computerSelection);
        if (playerScore === 5 || computerScore === 5) {
            endGame();
        }
    });
});

function displayResult(result) {
    roundResult.textContent = result;
}

function endGame() {
    //Game results
    console.log("player score = " + playerScore);
    console.log("computer score = " + computerScore);

    if (playerScore === computerScore)
        return alert("tie game");
    else if (playerScore < computerScore)
        return alert("YOU LOST to a literal bot");
    else
        return alert("YOU WON");
}