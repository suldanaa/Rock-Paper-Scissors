const arr = ["rock", "paper", "scissors"];
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const outcomeMsg = document.createElement("div");
const score = document.createElement("div");
const winMsg = document.createElement("div");
const loseMsg = document.createElement("div");


rock.textContent="Rock";
paper.textContent="Paper";
scissors.textContent="Scissors";

rock.style.backgroundColor = "tomato";
paper.style.backgroundColor = "lightgreen";
scissors.style.backgroundColor = "lightyellow";


function getRandomInt(max){
    return Math.floor(Math.random()*3);
}

function getComputerChoice(){
    return arr[getRandomInt(3)];
}


function playGame(){
    let humanScore=0;
    let computerScore=0;

    score.textContent = "Human Score: " + humanScore + " Computer Score: " + computerScore;
    document.body.appendChild(score);

    function playRound(humanChoice, computerChoice){

        if(humanScore < 5 && computerScore < 5){
            
            if(document.body.contains(winMsg)){
                document.body.removeChild(winMsg);
            }
            else if(document.body.contains(loseMsg)){
                document.body.removeChild(loseMsg);
            }

            if(humanChoice.toLowerCase()=="scissors"){
                if(computerChoice.toLowerCase()=="paper"){
                    outcomeMsg.textContent= "You win! Scissors beats paper.";
                    document.body.appendChild(outcomeMsg);
                    humanScore++;
                    score.textContent = "Human Score: " + humanScore + " Computer Score: " + computerScore;
                    document.body.appendChild(score);
                
                }
                else if(computerChoice.toLowerCase()=="rock"){
                    outcomeMsg.textContent= "You lose! Rock beats scissors.";
                    document.body.appendChild(outcomeMsg);
                    computerScore++;
                    score.textContent = "Human Score: " + humanScore + " Computer Score: " + computerScore;
                    document.body.appendChild(score);
                }
                else if(computerChoice.toLowerCase()==humanChoice.toLowerCase()){
                    outcomeMsg.textContent="Tie!";
                    document.body.appendChild(outcomeMsg);
                    document.body.appendChild(score);
                }
            }
        
            if(humanChoice.toLowerCase()=="paper"){
                if(computerChoice.toLowerCase()=="rock"){
                    outcomeMsg.textContent="You win! Paper beats rock.";
                    document.body.appendChild(outcomeMsg);
                    humanScore++;
                    score.textContent = "Human Score: " + humanScore + " Computer Score: " + computerScore;
                    document.body.appendChild(score);
                }
                else if(computerChoice.toLowerCase()=="scissors"){
                    outcomeMsg.textContent="You lose! Scissors beats paper.";
                    document.body.appendChild(outcomeMsg);
                    computerScore++;
                    score.textContent = "Human Score: " + humanScore + " Computer Score: " + computerScore;
                    document.body.appendChild(score);
                }
                else if(computerChoice.toLowerCase()==humanChoice.toLowerCase()){
                    outcomeMsg.textContent="Tie!";
                    document.body.appendChild(outcomeMsg);
                    document.body.appendChild(score);
                }
            }
        
            if(humanChoice.toLowerCase()=="rock"){
                if(computerChoice.toLowerCase()=="scissors"){
                    outcomeMsg.textContent="You win! Rock beats scissors.";
                    document.body.appendChild(outcomeMsg);
                    humanScore++;
                    score.textContent = "Human Score: " + humanScore + " Computer Score: " + computerScore;
                    document.body.appendChild(score);
                }
                else if(computerChoice.toLowerCase()=="paper"){
                    outcomeMsg.textContent="You lose! Paper beats rock.";
                    document.body.appendChild(outcomeMsg);
                    computerScore++;
                    score.textContent = "Human Score: " + humanScore + " Computer Score: " + computerScore;
                    document.body.appendChild(score);
                }
                else if(computerChoice.toLowerCase()==humanChoice.toLowerCase()){
                    outcomeMsg.textContent="Tie!";
                    document.body.appendChild(outcomeMsg);
                    document.body.appendChild(score);
                }
            }
        }
        else{
            function whoWon(humanScore, computerScore){
                if(humanScore>computerScore){
                    winMsg.style.color="green";
                    winMsg.textContent = "You won the round!"
                    document.body.appendChild(winMsg);
                    console.log("we added it to the page!");
                }
                else{
                    loseMsg.style.color="red";
                    loseMsg.textContent = "You lost the round!"
                    document.body.appendChild(loseMsg);
                    console.log("we added it to the page!");
                }
            }
            if(humanScore == 5 || computerScore == 5){
                whoWon(humanScore, computerScore);
                humanScore=0;
                computerScore=0;
            }
        }
}
rock.addEventListener('click', ()=>{
    playRound("rock",getComputerChoice());
});

paper.addEventListener('click', ()=>{
    playRound("paper",getComputerChoice());
});

scissors.addEventListener('click', ()=>{
    playRound("scissors",getComputerChoice());
});
}

playGame();

 