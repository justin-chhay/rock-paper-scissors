/*
    Justin Chhay
    Rock Paper Scissors Game, part of The Odin Project
    JavaScript
*/

//Variables (let, const, var)
const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

//Randomly generates computer decision
function computerPlay() {
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {

    //loop through turn in case user misspells
    while (true) {
        let playerAns = choices.indexOf(playerSelection.toLowerCase());
        let computerAns = choices.indexOf(computerSelection.toLowerCase());

        if (playerAns === -1) {
            console.log("Please recheck the spelling of your choice.");
            playerSelection = prompt("Choose rock, paper, or scissors");
            continue;
        }

        if (playerAns === computerAns) { //draw
            return "You both chose " + playerSelection + ". DRAW";
        } else if (
            (playerAns === 0 && computerAns === 2) ||
            (playerAns === 2 && computerAns === 1) ||
            (playerAns === 1 && computerAns === 0)
        ) {
            ++playerScore;
            return playerSelection.substr(0, 1).toUpperCase() + playerSelection.substr(1).toLowerCase() + " beats " + computerSelection + ". WINNER";
        } else { //lose
            ++computerScore;
            return playerSelection.substr(0, 1).toUpperCase() + playerSelection.substr(1).toLowerCase() + " loses against " + computerSelection + ". LOSS";
        }
        break;
    }
}

function game() {
    //PLay 5 Rounds
    for (let i = 0; i < 5; ++i) {
        let playerSelection = prompt("Choose rock, paper, or scissors");
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }

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


//Run game
console.log("Hello, World!");
game();