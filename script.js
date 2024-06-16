let userScore = 0,
    comScore = 0;
function comPick() {
    
    let num = Math.floor(Math.random() * 10)

    if (num < 3) return "rock"
    if (num < 6) return "paper"
    return "scissors"
}