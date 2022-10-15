let playerScore = 0;
let compScore = 0;



game();


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


    while(playerScore != 5 && compScore != 5) {
        let valid = false;
        while(valid == false) {
            const playerChoice = prompt();
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
        
        const compChoice = getComputerChoice();
        console.log("player: " + playerChoice +",computer: " + compChoice);
        console.log(playRound(playerChoice, compChoice));
    }
    if(playerScore == 5) {
        console.log("You Won the game! Congratulations!");
    } else {
        console.log("You Lost the game. Better luck next time.");
    }
    
    


    
}

