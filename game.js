let playerScore = 0;
let compScore = 0;

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

//Selectors

const scoreBoard = document.querySelector('#result');
const playerScoreBoard = document.querySelector('#playerScoreVal');
const computerScoreBoard = document.querySelector('#computerScoreVal');
const gameEndText = document.querySelector('#gameEndText');
const gameInfo = document.querySelector('.gameInfo');

function updateScoreBoard(result) {
    scoreBoard.textContent = result;
    playerScoreBoard.textContent = playerScore;
    computerScoreBoard.textContent = compScore;
}

let lastHovered = '';//stores id of last button to be hovered
let lockButtons = false;//disables events for a period of time after a button click
const svgButtons = [document.querySelector('#g2982'), document.querySelector('#g2906'), document.querySelector('#g3028')];

svgButtons.forEach((svgBtn) => {
    svgBtn.addEventListener('mouseover', () => {
        if (!lockButtons) {
            svgBtn.style.fill = 'blue';
            svgBtn.style.stroke = 'darkBlue';
            svgBtn.style.strokeWidth = '3px';
        }
        lastHovered = svgBtn.id;
    });
    svgBtn.addEventListener('mouseout', () => {
        if (!lockButtons) {    
            svgBtn.style.fill = 'black';
            svgBtn.style.stroke = 'black';
            svgBtn.style.strokeWidth = '1px';
        }
        lastHovered = '';
    });
    svgBtn.addEventListener('click', () => {
        if(!lockButtons) {
            lockButtons = true;
            let tmpSelection = '';
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
            let tmpComputerChoice = getComputerChoice();

            let tmp = playRound(tmpSelection, tmpComputerChoice);
            console.log(tmp);
            updateScoreBoard(tmp);
            
            if(tmpComputerChoice != tmpSelection) {
                let i = 0;
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
            if(!checkGameOver()) {
                setTimeout(function () {
                    clearSelections();}, 1500);
            } else {//create a play again button
                var buttonAgain = document.createElement("button");
                buttonAgain.textContent = 'Play Again?';
                gameInfo.appendChild(buttonAgain);
                buttonAgain.addEventListener('click', () => {
                    playerScore = 0;
                    compScore = 0;
                    gameEndText.textContent = '';
                    updateScoreBoard('Result');
                    clearSelections();
                    gameInfo.removeChild(buttonAgain);
                });
            }
            
        }
    });
});

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

function checkGameOver() {
    if (playerScore == 5) {
        gameEndText.textContent = 'Congratulations! You outsmarted a computer!';
        return true;
    } else if (compScore == 5) {
        gameEndText.textContent = 'Epic Fail! You were outsmarted by a machine!';
        return true;
    } else {
        return false;
    }
}

/*
    may want to adjust flex size of gameInfo and svg to give more ratio to svg
    may need to edit svg html code to thicken fist stroke width to make it scale better with the others without custom code
*/

//could have the actual svg's transform position to appear that they are attacking the loser
//could have the svg fade out after you make your selection and play an animation of your choice and computer battling

//rockVector.style.fill = 'grey';
//rockVector.style.stroke = 'black';
//rockVector.style.strokeWidth = '2px';


//paperVector.style.fill = 'grey';
//paperVector.style.stroke = 'black';

//scissorsVector.style.fill = 'grey';
//scissorsVector.style.stroke = 'black';
