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

//Event listeners
const buttons = document.querySelectorAll('.buttons > button');//selects all button child elements in class buttons
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        //console.log(button.id);//debug
        console.log(playRound(button.id,getComputerChoice()));
    });
});

rockVector.addEventListener('mouseover', () => {
    rockVector.style.fill = 'blue';
    rockVector.style.stroke = 'darkBlue';
    rockVector.style.strokeWidth = '4px';
});

rockVector.addEventListener('mouseout', () => {
    rockVector.style.fill = 'grey';
    rockVector.style.stroke = 'black';
    rockVector.style.strokeWidth = '2px';
})

scissorsVector.addEventListener('mouseover', () => {
    scissorsVector.style.fill = 'red';
    scissorsVector.style.stroke = 'darkRed';
    scissorsVector.style.strokeWidth = '2px';
});

scissorsVector.addEventListener('mouseout', ()=> {
    scissorsVector.style.fill = 'grey';
    scissorsVector.style.stroke = 'black';
    scissorsVector.style.strokeWidth = '1px';
});

paperVector.addEventListener('mouseover', ()=> {
    paperVector.style.fill = 'green';
    paperVector.style.stroke = 'darkGreen';
    paperVector.style.strokeWidth = '2px';
});

paperVector.addEventListener('mouseout', ()=> {
    paperVector.style.fill = 'grey';
    paperVector.style.stroke = 'black';
    paperVector.style.strokeWidth = '1px';
});



//Javascript DOM manipulation

//have the hands enlarge slightly on hover
//could have the actual svg's transform position to appear that they are attacking the loser

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
