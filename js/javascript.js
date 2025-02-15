
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
    if (humanChoice === "paper" && computerChoice === "Rock" || humanChoice === "rock" && computerChoice === "Scissors" || humanChoice === "scissors" && computerChoice === "Paper" ){
        console.log("You win! " + humanChoice + " beats " + computerChoice + "!")
        return 0; //Human wins = 0
    } else if (humanChoice === computerChoice.toLowerCase()){
        console.log("It's a tie!");
        return -1; // Tie = -1
    } else{
        console.log("You loose! " + computerChoice + " beats " + humanChoice +"!")
         return 1;// Computer wins = 1
    } 
} 

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let roundsPlayed = 0;

    while (roundsPlayed < 5){ 
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log("Playing Round " + parseInt(roundsPlayed+1));
        roundWinner = playRound(humanChoice, computerChoice);
        
        if (roundWinner == 0){
            humanScore++;
        } else if (roundWinner == 1){
            computerScore++;
        } 
        console.log("Current Score: Human: " + humanScore + " Computer: " + computerScore);
        roundsPlayed++;
    } 
    compareFinalScores(humanScore, computerScore);
}  

function getRandomInt() {
    return Math.floor(Math.random() * 3);
  }

playGame();


  