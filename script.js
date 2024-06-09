const arr = ["rock", "paper", "scissors"];
let humanScore=0;
let computerScore=0;

function getRandomInt(max){
    
    return Math.floor(Math.random()*3);
}
function getComputerChoice(){
    console.log("Computer says: ")
    return arr[getRandomInt(3)];
}

function getHumanChoice(){
    let choice = prompt("Rock, paper, scissors?");
    return choice;
}

function playRound(humanChoice, computerChoice){
    if(humanChoice.toLowerCase()=="scissors"){
        if(computerChoice.toLowerCase()=="paper"){
            console.log("You win! Scissors beats paper.");
            humanScore++;
        }
        else if(computerChoice.toLowerCase()=="rock"){
            console.log("You lose! Rock beats scissors.");
            computerScore++;
        }
        else if(computerChoice.toLowerCase()==humanChoice.toLowerCase()){
            console.log("Tie!");
        }
    }

    if(humanChoice.toLowerCase()=="paper"){
        if(computerChoice.toLowerCase()=="rock"){
            console.log("You win! Paper beats rock.");
            humanScore++;
        }
        else if(computerChoice.toLowerCase()=="scissors"){
            console.log("You lose! Scissors beats paper.");
            computerScore++;
        }
        else if(computerChoice.toLowerCase()==humanChoice.toLowerCase()){
            console.log("Tie!");
        }
    }

    if(humanChoice.toLowerCase()=="rock"){
        if(computerChoice.toLowerCase()=="scissors"){
            console.log("You win! Rock beats scissors.");
            humanScore++;
        }
        else if(computerChoice.toLowerCase()=="paper"){
            console.log("You lose! Paper beats rock.");
            computerScore++;
        }
        else if(computerChoice.toLowerCase()==humanChoice.toLowerCase()){
            console.log("Tie!");
        }
    }
    
}


function playGame(){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

for(let i=0; i<5; i++){
    playGame();
}

function whoWon(humanScore, computerScore){
    if(humanScore>computerScore){
        console.log("You win! Your score: " + humanScore + " Computer score: " + computerScore);
    }
    else{
        console.log("You lose! Your score: " + humanScore + " Computer score: " + computerScore);
    }
}

whoWon();