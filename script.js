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

function play(com, user) {
    console.log("Score ->", "User: " +userScore, "Computer: " +comScore);
    console.log("You played: " + user, "Computer played: " + com);
    if (com === user) {
        console.log("Tie");
        return
    } else if (com === "rock" && user === "paper") {
        console.log("Paper beats Rock!");
        roundWinner("user");
        return
    } else if (com === "paper" && user === "scissors") {
        console.log("Scissors beats Paper!");
        roundWinner("user");
        return
    } else if (com === "scissors" && user === "rock") {
        console.log("Rock beats Scissors!");
        roundWinner("user");
        return
    } else if (user === "rock" && com === "paper") {
        console.log("Paper beats Rock!");
        roundWinner("com");
        return
    } else if (user === "paper" && com === "scissors") {
        console.log("Scissors beats Paper!");
        roundWinner("com");
        return
    } else if (user === "scissors" && com === "rock") {
        console.log("Rock beats Scissors!");
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

play("rock", "scissors")