
const buttons = document.querySelectorAll('.btn');
let playerSelection = "rock";
buttons.forEach((button)=>{button.addEventListener('click',()=>{
    game();
    })
})



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
    
}

function game() {
    let compChoice = getComputerChoice();
    console.log("computer: " + compChoice);
}

