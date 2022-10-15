


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
    if (playerSelection.toLowerCase == computerSelection) {
        return ("Tie! You both chose " + playerSelection);
    } else {
        switch(playerSelection) {
            case "rock":
                switch(computerSelection) {
                    case "rock":
                        return "Tie! You both chose rock.";
                    case "paper":
                        return "You lose! Rock is covered by paper.";
                    case "scissors":
                        return "You Win! Rock crushes scissors.";
                }
                return "oops";
            case "paper":
                switch(computerSelection) {
                    case "rock":
                        return "You Win! Paper covers rock.";
                    case "paper":
                        return "Tie! You both chose paper.";
                    case "scissors":
                        return "You lose! paper is cut by scissors.";
                }
            case "scissors":
                switch(computerSelection) {
                    case "rock":
                        return "You lose! Scissors is crushed by rock.";
                    case "paper":
                        return "You win! Scissors cuts paper.";
                    case "scissors":
                        return "Tie! You both chose scissors.";
                }
        }
    }
}

function game() {
    let valid = false;
    while(valid == false) {
        playerChoice = prompt();
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
    
    let compChoice = getComputerChoice();
    console.log("player: " + playerChoice +",computer: " + compChoice);
    console.log(playRound(playerChoice, compChoice));
}

