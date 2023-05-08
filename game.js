/**
 * The Odin Project
 * Rock Paper Scissors
 * @author: Christopher Adcock
 */

/* Global Variables
   ========================================================================== */

let playerScore = 0;
let compScore = 0;
let lastHovered = '';//stores id of last button to be hovered
let lockButtons = false;//disable events for a period of time after button click

/* DOM (HTML) manipulation selectors
   ========================================================================== */

   const scoreBoard = document.querySelector('#result');
   const playerScoreBoard = document.querySelector('#playerScoreVal');
   const computerScoreBoard = document.querySelector('#computerScoreVal');
   const gameInfoDiv = document.querySelector('#gameInfoDiv');
   const svgButtons = [document.querySelector('#g2982'), 
                       document.querySelector('#g2906'), 
                       document.querySelector('#g3028')];

/* Game Logic
   ========================================================================== */

/**
 * @return {string} computer choice of rock, paper,or scissors
 */
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    if (num == 0){
        return ("rock")
    }
    else if (num == 1){
        return ("paper")
    }
    else
    return ("scissors")
}

/**
 * Plays a round of rock paper scissors
 *
 * @param {string} playerSelection
 * @param {string} computerSelection
 * @return {string} The outcome text of a round of rock paper scissors
 */
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    switch(playerSelection) {
        case "rock":
            switch(computerSelection) {
                case "rock":
                    return "Tie! You both chose rock.";
                case "paper":
                    compScore++;
                    return "You lose! Rock is covered by paper.";
                case "scissors":
                    playerScore++;
                    return "You Win! Rock crushes scissors.";
            }
            return "oops";
        case "paper":
            switch(computerSelection) {
                case "rock":
                    playerScore++;
                    return "You Win! Paper covers rock.";
                case "paper":
                    return "Tie! You both chose paper.";
                case "scissors":
                    compScore++;
                    return "You lose! paper is cut by scissors.";
            }
        case "scissors":
            switch(computerSelection) {
                case "rock":
                    compScore++;
                    return "You lose! Scissors is crushed by rock.";
                case "paper":
                    playerScore++;
                    return "You win! Scissors cuts paper.";
                case "scissors":
                    return "Tie! You both chose scissors.";
            }
    }
}

/**
 * Check for game over and set end game text
 *
 * @return {string} The outcome text of a round of rock paper scissors
 */
function checkGameOver() {
    if (playerScore == 5) {
        scoreBoard.textContent = 'Congratulations! You outsmarted a computer!';
        return true;
    } else if (compScore == 5) {
        scoreBoard.textContent = 'Epic Fail! You were outsmarted by a machine!';
        return true;
    } else {
        return false;
    }
}

/**
 * Process a player btn click selection. Plays the game.
 *
 * @return {string} The outcome text of a round of rock paper scissors
 */
function svgBtnClick(svgBtn) {
    if(!lockButtons) {
        lockButtons = true;
        let tmpSelection = '';

        //get user choice
        switch (svgBtn.id) {
            case 'g2982':
                tmpSelection = 'rock';
                break;
            case 'g2906':
                tmpSelection = 'paper';
                break;
            case 'g3028':
                tmpSelection = 'scissors';
                break;
            default:
        }
        //get computer choice
        let tmpComputerChoice = getComputerChoice();

        let tmp = playRound(tmpSelection, tmpComputerChoice);
        //console.log(tmp);//debug
        updateScoreBoard(tmp);

        //update ui to show computer selection
        if(tmpComputerChoice != tmpSelection) {
            let i = 0;//0 is rock
            switch(tmpComputerChoice) {
                case 'paper':
                    i=1;
                    break;
                case 'scissors':
                    i=2;
                    break;
                default:
            }
            svgButtons[i].style.fill = 'red'
            svgButtons[i].style.stroke = 'darkRed'
            svgButtons[i].style.strokeWidth = '3px';
        } else {
            svgBtn.style.fill = 'purple';
            svgBtn.style.stroke = 'darkPurple';
            svgBtn.style.strokeWidth = '3px';
        }

        //check game over condition met
        if(!checkGameOver()) {
            //delay play of game 1.5 seconds to allow you to see the 
            //computers choice
             setTimeout(function () {
                 clearSelections();}, 1500);
        } else {
            //create a play again button
            var buttonAgain = document.createElement("button");
            buttonAgain.textContent = 'Play Again?';
            let btnAppendLocation = document.querySelector('#gameInfo');

            //if portrait orientation append to body instead of gameInfo
            if(window.innerWidth < window.innerHeight) {
                btnAppendLocation = document.querySelector('body');
            }
            btnAppendLocation.appendChild(buttonAgain);

            //create an event listener for the play again button
            buttonAgain.addEventListener('click', () => {
                //if clicked reset game
                playerScore = 0;
                compScore = 0;
                scoreBoard.textContent = '';
                updateScoreBoard('Result');
                clearSelections();
                btnAppendLocation.removeChild(buttonAgain);
            });
            
        }
        
    }
}

/* Event Handlers
   ========================================================================== */

svgButtons.forEach((svgBtn) => {
    svgBtn.addEventListener('mouseover', () => {svgBtnMouseover(svgBtn)});
    svgBtn.addEventListener('mouseout', () => {svgBtnMouseout(svgBtn)});
    svgBtn.addEventListener('click', () => {svgBtnClick(svgBtn)});
});


/* User Interface
   ========================================================================== */
/**
 * Take in resultant text and update UI and score display
 *
 * @param {string} The outcome text of a round of rock paper scissors
 */
function updateScoreBoard(result) {
    scoreBoard.textContent = result;
    playerScoreBoard.textContent = playerScore;
    computerScoreBoard.textContent = compScore;
}

function svgBtnMouseover(svgBtn) {
    if (!lockButtons) {
        svgBtn.style.fill = 'blue';
        svgBtn.style.stroke = 'darkBlue';
        svgBtn.style.strokeWidth = '3px';
    }
    lastHovered = svgBtn.id;
}

function svgBtnMouseout(svgBtn) {
    if (!lockButtons) {    
        svgBtn.style.fill = 'black';
        svgBtn.style.stroke = 'black';
        svgBtn.style.strokeWidth = '1px';
    }
    lastHovered = '';
}

function clearSelections() {
    svgButtons.forEach((svgBtn) => {
        if(lastHovered != svgBtn.id) {
            svgBtn.style.fill = 'black';
            svgBtn.style.stroke = 'black';
            svgBtn.style.strokeWidth = '1px';
        } else {
            svgBtn.style.fill = 'blue';
            svgBtn.style.stroke = 'darkBlue';
        }
    });
    lockButtons = false;
}
