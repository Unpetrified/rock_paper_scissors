let userScore = 0,
    comScore = 0,
    round = 1;

function comPick() {
    
    let num = Math.floor(Math.random() * 10)

    if (num < 3) return "rock"
    if (num < 6) return "paper"
    return "scissors"
}

function userPick() {
    let userPick = (prompt("Rock, Paper, Scissors: ")).toLowerCase();
    return userPick
}

function playRound(com, user) {
    if (round > 1) {
        console.log("Round " + round);
    } else {
        console.log("Round 1");
    }
    console.log("You played: " + user, "Computer played: " + com);
    if (com === user) {
        console.log("Tie");
        playRound(comPick(), userPick())
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

playGame()