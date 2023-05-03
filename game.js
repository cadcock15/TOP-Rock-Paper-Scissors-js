let playerScore = 0;
let compScore = 0;

//game();

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

function game() {
    console.log("Welcome to a game of Rock Paper Scissors.");
    console.log("You will be versing a computer. First to 5 wins!");

    //while(playerScore != 5 && compScore != 5) {
        let valid = false;
        while(valid == false) {
            var playerChoice = prompt();
            switch(playerChoice.toLowerCase()) {
            case "rock":
            case "paper":
            case "scissors":
                valid = true;
                break;
            default:
                console.log("Error: Please enter rock, paper, or scissors.");
            }
        } 
        var compChoice = getComputerChoice();
        console.log("player: " + playerChoice +",computer: " + compChoice);
        console.log(playRound(playerChoice, compChoice));
    // }
    // if(playerScore == 5) {
    //     console.log("You Won the game! Congratulations!");
    // } else {
    //     console.log("You Lost the game. Better luck next time.");
    // }
}



//Selectors
const rockVector = document.querySelector('#g2982');
const paperVector = document.querySelector('#g2906');
const scissorsVector = document.querySelector('#g3028');

const scoreBoard = document.querySelector('#result');
const playerScoreBoard = document.querySelector('#playerScoreVal');
const computerScoreBoard = document.querySelector('#computerScoreVal');

function updateScoreBoard(result) {
    scoreBoard.textContent = result;
    playerScoreBoard.textContent = playerScore;
    computerScoreBoard.textContent = compScore;
}


//Event listeners
//const buttons = document.querySelectorAll('.buttons > button');//selects all button child elements in class buttons
//buttons.forEach((button) => {
    //button.addEventListener('click', () => {
        //console.log(button.id);//debug
        //console.log(playRound(button.id,getComputerChoice()));
    //);
//});

rockVector.addEventListener('mouseover', () => {
    rockVector.style.fill = 'blue';
    rockVector.style.stroke = 'darkBlue';
    //rockVector.style.strokeWidth = '4px';
});

rockVector.addEventListener('mouseout', () => {
    rockVector.style.fill = 'grey';
    rockVector.style.stroke = 'black';
    //rockVector.style.strokeWidth = '2px';
})

scissorsVector.addEventListener('mouseover', () => {
    scissorsVector.style.fill = 'blue'
    scissorsVector.style.stroke = 'darkBlue'
    //scissorsVector.style.strokeWidth = '2px';
});

scissorsVector.addEventListener('mouseout', ()=> {
    scissorsVector.style.fill = 'grey';
    scissorsVector.style.stroke = 'black';
    //scissorsVector.style.strokeWidth = '1px';
});

paperVector.addEventListener('mouseover', ()=> {
    paperVector.style.fill = 'blue';
    paperVector.style.stroke = 'darkBlue';
    //paperVector.style.strokeWidth = '2px';
});

paperVector.addEventListener('mouseout', ()=> {
    paperVector.style.fill = 'grey';
    paperVector.style.stroke = 'black';
    //paperVector.style.strokeWidth = '1px';
});
/*need to refactor all of these specific seperate scissor, rock, paper actions into one listener like the buttons iteration.
    need to add a delay variable that gets triggered on click that wont untrigger until mouseout event. This is so you can see the color change of your selection and computers
    might need to use direct javascript code replacement to make functions more generic to eliminate repetion ie: paperVector.style i could use a variable for the paper part and
    edit the code itself so i dont need to retype it for each one
*/
rockVector.addEventListener('click', () => {
    tmpComputerChoice = getComputerChoice();
    if(tmpComputerChoice != 'rock') {
        if(tmpComputerChoice == 'paper') {
            paperVector.style.fill = 'red';
            paperVector.style.stroke = 'darkRed';
            //paperVector.style.strokeWidth = '2px';
        } else {
            scissorsVector.style.fill = 'red'
            scissorsVector.style.stroke = 'darkRed'
            //scissorsVector.style.strokeWidth = '2px';
        }
    } else {
        rockVector.style.fill = 'purple';
        rockVector.style.stroke = 'darkPurple';
        //rockVector.style.strokeWidth = '4px';
    }
    let tmp = playRound('rock',getComputerChoice());
    console.log(tmp);
    updateScoreBoard(tmp);
});

scissorsVector.addEventListener('click', () => {
    let tmp = playRound('scissors',getComputerChoice());
    console.log(tmp);
    updateScoreBoard(tmp);
});

paperVector.addEventListener('click', () => {
    let tmp = playRound('paper',getComputerChoice());
    console.log(tmp);
    updateScoreBoard(tmp);
});




//Javascript DOM manipulation

//have the hands enlarge slightly on hover
//could have the actual svg's transform position to appear that they are attacking the loser
//could have the svg fade out after you make your selection and play an animation of your choice and computer battling

//make the actual svg's the buttons
//make the user selection blue
//make the computer selection green
//make a tie red


rockVector.style.fill = 'grey';
rockVector.style.stroke = 'black';
rockVector.style.strokeWidth = '2px';


paperVector.style.fill = 'grey';
paperVector.style.stroke = 'black';

scissorsVector.style.fill = 'grey';
scissorsVector.style.stroke = 'black';
