alert("hello there, let's play a game of five rounds");

// 1.Write the logic to get computer choice
//create a function call getComputerChoice
//this function should return computer choice

function getComputerChoice(max){
 
    let number;
    function getRandom (max){
    return Math.floor(Math.random() * max);}
    
    if (number === 1){
        return "rock"
    } else if (number === 2){
        return "paper"
    } else {
        return "scissors"
    }  
}


// 2.Write the logic to get human choice
//human choice 
//create a function that you welcomes the player
//give him option of choosing by using prompt
//use .toLowerCase so user may use any case
function getHumanChoice(a, b, c){

    let human=  prompt("Enter between rock, paper or scissors");
    human = human.toLowerCase();
    
    if(human === "rock")
        return "rock";
    else if(human === "paper")
        return "paper";
    else if(human === "scissors")
        return "scissors";
    else {
        alert("invalid choice");
        //Do not change the score
        return "null";
    }
}

console.log(getHumanChoice());

// 3.Declare the players score variable
//create two variables 
//initialize with 0

let humanScore = 0;

let computerScore = 0;

// 4.Write the logic to play a single round
//create a single  round
//create a function playRandom
//define two parameters for playRandom : humanChoice and computerChoice
//use parameters as arguments

function playRound(humanChoice, computerChoice){
    
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();

    //create the game results 
    //create were computer wins and its outcome

    if(computerChoice == "rock"  && humanChoice == "paper"){
        alert("you lose");
        computerScore++;  //Add score only if valid
    } else if (computerChoice == "paper" && humanChoice == "scissors"){
        alert("you lose");
        computerScore++; //Add score only if valid
    }else if(computerChoice == "scissors" && humanChoice == "rock"){
        alert("you lose");
        computerScore++;  //Add score only if valid

    //create were human wins

    }else if(humanChoice == "rock" && computerChoice == "paper"){
        alert("you win");
        humanChoice++; //Add score only if valid
    }else if(humanChoice == "paper" && computerChoice == "scissors"){
        alert("you win");
        humanScore++; //Add score only if valid
    }else if(humanChoice == "scissors" && computerChoice == "rock"){
        alert("you win");
        humanScore++; //Add score only if valid

    //create were they tie

    }else if(humanChoice == "rock" && computerChoice == "rock"){
        alert("you tie"); //Add score only if valid
    }else if(humanChoice == "paper" && computerChoice == "paper"){
        alert("you tie"); //Add score only if valid
    }else if(humanChoice == "scissors" && computerChoice == "scissors"){
        alert("you tie"); //Add score only if valid
    }

}

// 5.Write the logic to play the entire game
// create a function called playGame

function playGame (){
    const rounds = 5;

    playRound();
    console.log("the score is now: " + humanScore + " : "+ computerScore + "!");

    playRound();
    console.log("the score is now: " + humanScore + " : "+ computerScore + "!");

    playRound();
    console.log("the score is now: " + humanScore + " : "+ computerScore + "!");

    playRound();
    console.log("the score is now: " + humanScore + " : "+ computerScore + "!");

    playRound();
    
    if (humanScore > computerScore){
        alert("congratulation, you are the wins", + humanScore + " " + computerScore);
    }else {
        alert("the computer is the wins",  + computerScore + " " + humanScore);
    }
}

playGame();