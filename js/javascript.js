
function getHumanChoice(){
    let humanChoice = prompt("Rock, Paper, Scissors?");
    let validChoices =["rock", "paper", "scissors"];
    while (!validChoices.includes(humanChoice.toLowerCase())){
        humanChoice = prompt("Please enter a valid choice... Rock, Paper, Scissors?");
    }
    return humanChoice.toLowerCase();
} 

function getComputerChoice(){
    randomNumber = getRandomInt();
    switch (randomNumber){
        case 0:
            choice = "Rock";
            break;
        case 1:
            choice = "Paper";
            break;
        case 2:
            choice = "Scissors";
            break;
    }
    return choice;

} 

function compareFinalScores(humanScore, computerScore){
    if (humanScore > computerScore){
        console.log("Congrats! You won with " + humanScore + " to " + computerScore + " points!")
    } else if (computerScore > humanScore){
        console.log("You suck and lost with " + computerScore + " to " + humanScore + " points!")
    } else{
    console.log("Its a tie with " + computerScore + " to " + humanScore + " points!")
    } 
} 

function playRound(humanChoice, computerChoice){
    const humanScoreElement = document.querySelector(".humanScore");
    const computerScoreElement = document.querySelector(".computerScore");
    const roundWinner = document.querySelector(".roundWinner");
    const gameWinner = document.querySelector(".gameWinner");

    gameWinner.textContent = "";
    let humanScore = humanScoreElement.textContent;
    let computerScore = computerScoreElement.textContent;

   

    if (humanChoice === "Paper" && computerChoice === "Rock" || humanChoice === "Rock" && computerChoice === "Scissors" || humanChoice === "Scissors" && computerChoice === "Paper" ){
        roundWinner.textContent = "You win! " + humanChoice + " beats " + computerChoice + "!";
        humanScore++; 
        humanScoreElement.textContent = humanScore;
        // return 0; //Human wins = 0
    } else if (humanChoice === computerChoice){
        roundWinner.textContent = "It's a tie!";
        // return -1; // Tie = -1
    } else{
        roundWinner.textContent = "You loose! " + computerChoice + " beats " + humanChoice +"!";
        computerScore++;
        computerScoreElement.textContent = computerScore;
        // return 1;// Computer wins = 1
    } 

    if (humanScore === 5 || computerScore === 5){
        if ( humanScore > computerScore){
            gameWinner.textContent = "Congratulations! You won the game! Final Score: " + humanScore + " : " + computerScore ;
        } else gameWinner.textContent = "Sorry! You lost the game, better luck next time! Final Score: " + humanScore + " : " + computerScore ;
        humanScoreElement.textContent = 0;
        computerScoreElement.textContent = 0;
    }
} 

const buttonCointainer = document.querySelector(".container");

buttonCointainer.addEventListener("click", (event) =>{
    const computerChoice = getComputerChoice();
    const humanChoice = event.target.outerText;
    playRound(humanChoice,computerChoice);
});

// function playGame(){
//     let humanScore = 0;
//     let computerScore = 0;
//     let roundsPlayed = 0;

//     while (roundsPlayed < 5){ 
//         const humanChoice = getHumanChoice();
//         const computerChoice = getComputerChoice();
//         console.log("Playing Round " + parseInt(roundsPlayed+1));
//         roundWinner = playRound(humanChoice, computerChoice);
        
//         if (roundWinner == 0){
//             humanScore++;
//         } else if (roundWinner == 1){
//             computerScore++;
//         } 
//         console.log("Current Score: Human: " + humanScore + " Computer: " + computerScore);
//         roundsPlayed++;
//     } 
//     compareFinalScores(humanScore, computerScore);
// }  

function getRandomInt() {
    return Math.floor(Math.random() * 3);
  }

// playGame();


  