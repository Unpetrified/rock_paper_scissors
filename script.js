let userScore = 0,
    comScore = 0,
    round = 0,
    tie = false;

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
    
    tie ? tie = false : round++;
    
    let userPick = e.target.getAttribute("id");
    playRound(comPick(), userPick);
    checkRound();
}

function checkRound() {

    if (round + 1 > 5) {
        if (userScore > comScore) {
            console.log("You win");
            return
        }
        console.log("I win");

        let resetBtn = document.createElement("button");
        resetBtn.textContent = "Play Again";
        resetBtn.addEventListener('click', reset)

        let stats = document.querySelector(".stats");

        stats.appendChild(resetBtn);
    }   
}

function reset(e) {
    userScore = 0;
    comScore = 0;
    round = 0;
    tie = false;

    e.target.remove();
}

function playRound(com, user) {
    if (round > 1) {
        console.log("Round " + round);
    } else {
        console.log("Round 1");
    }
    console.log("You played: " + user, "Computer played: " + com);
    if (com === user) {
        tie = true;
        console.log("Tie");
        return
    } else if (com === "rock" && user === "paper") {
        console.log("Paper covers Rock!");
        roundWinner("user");
        return
    } else if (com === "paper" && user === "scissors") {
        console.log("Scissors cuts Paper!");
        roundWinner("user");
        return
    } else if (com === "scissors" && user === "rock") {
        console.log("Rock smashes Scissors!");
        roundWinner("user");
        return
    } else if (user === "rock" && com === "paper") {
        console.log("Paper covers Rock!");
        roundWinner("com");
        return
    } else if (user === "paper" && com === "scissors") {
        console.log("Scissors cuts Paper!");
        roundWinner("com");
        return
    } else if (user === "scissors" && com === "rock") {
        console.log("Rock smashes Scissors!");
        roundWinner("com");
        return
    }
}

function roundWinner(winner) {
    if (winner === "user") {
        userScore++;
        console.log("You win this round!");
        console.log("Score ->", "User: " +userScore, "Computer: " +comScore);
        return
    }

    comScore++;
    console.log("I win this round!");
    console.log("Score ->", "User: " +userScore, "Computer: " +comScore);
    return
}

function playGame() {
    while (round <= 5) {
        playRound(comPick(), userPick())
        round++
    }

    if (userScore > comScore) {
        console.log("You win!");
        return
    }

    console.log("!!!I win!!!");
}