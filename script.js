let userScore = 0,
    comScore = 0,
    round = 0,
    tie = false,
    winner = document.querySelector(".winner"),
    scoreBoard = document.querySelector(".score"),
    roundWinnerDisplay = document.querySelector(".round-winner"),
    playerOne = document.querySelector(".player-one"),
    playerTwo = document.querySelector(".player-two"),
    reason = document.querySelector(".reason"),
    roundDisplay = document.querySelector(".round");

let buttons = document.querySelectorAll(".rock-paper-scissors");

buttons.forEach(button => {
    button.addEventListener('click', userPick);
})

function comPick() {
    
    let num = Math.floor(Math.random() * 10)

    if (num < 3) return "rock"
    if (num < 6) return "paper"
    return "scissors"
}

function userPick(e) {
    
    if (round + 1> 5) return

    tie ? tie = false : round++;
    
    let userPick = e.target.getAttribute("id");
    playRound(comPick(), userPick);
    checkRound();
}

function checkRound() {

    if (round + 1 > 5) {

        (userScore > comScore) ? winner.textContent = "!!!You Win!!!" : winner.textContent = "!!!I Win !!!";

        let resetBtn = document.createElement("button");
        resetBtn.textContent = "Play Again";
        resetBtn.classList.add("reset")
        resetBtn.addEventListener('click', reset)

        let statsRound = document.querySelector(".stats-round");

        statsRound.appendChild(resetBtn);
    }   
}

function reset(e) {
    userScore = 0;
    comScore = 0;
    round = 0;
    tie = false;
    winner.textContent = "";
    scoreBoard.textContent = "";
    roundWinnerDisplay.textContent = "";
    playerOne.textContent = "";
    playerTwo.textContent = "";
    reason.textContent = "";
    roundDisplay.textContent = "Click the bottons below to start.";

    e.target.remove();
}

function showPlay(player1, player2) {
    playerOne.textContent = "You played: " + player1;
    playerTwo.textContent = "Computer played: " + player2;
}

function showRoundWinner(winner) {
    switch (winner) {
        case "tie":
            roundWinnerDisplay.textContent = "Tie";
            break;

        case "com":
            roundWinnerDisplay.textContent = "I win this round!";
            break;

        default:
            roundWinnerDisplay.textContent = "You win this round!";
            break;
    }
}

function gameLogic(choiceOne=null, choiceTwo=null) {

    if (!choiceOne) {
        reason.textContent = "";
    }

    if (choiceOne === "rock" && choiceTwo === "paper") {
        reason.textContent = "Paper covers Rock!";
    } else if (choiceOne === "paper" && choiceTwo === "scissors") {
        reason.textContent = "Scissors cuts Paper!";
    } else if (choiceOne === "scissors" && choiceTwo === "rock") {
        reason.textContent = "Rock smashes Scissors!";
    }


}

function playRound(com, user) {
    if (round > 1) {
        roundDisplay.textContent = "Round " + round;
    } else {
        roundDisplay.textContent = "Round 1"
    }
    showPlay(user, com);
    if (com === user) {
        tie = true;
        showRoundWinner("tie");
        gameLogic();
        return
    } else if (com === "rock" && user === "paper") {
        gameLogic(com, user)
        roundWinner("user");
        return
    } else if (com === "paper" && user === "scissors") {
        gameLogic(com, user)
        roundWinner("user");
        return
    } else if (com === "scissors" && user === "rock") {
        gameLogic(com, user)
        roundWinner("user");
        return
    } else if (user === "rock" && com === "paper") {
        gameLogic(user, com);
        
    } else if (user === "paper" && com === "scissors") {
        gameLogic(user, com);
        
    } else if (user === "scissors" && com === "rock") {
        gameLogic(user, com);
        
    }

    roundWinner("com");
}

function roundWinner(winner) {
    showRoundWinner(winner);

    if (winner === "user") {
        userScore++;
        scoreBoard.textContent = "User: " +userScore + " Computer: " +comScore;
        return
    }

    comScore++;
    scoreBoard.textContent = "User: " +userScore + " Computer: " +comScore;
    return
}