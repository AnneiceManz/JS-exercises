//1. Create a new high score board:
function createScoreBoard() {
    let HighScoreboard = {
        "The Best Ever" : 1000000
    }
    return HighScoreboard;
}

console.log(createScoreBoard())

//2. Add players to a score board:
function addPlayer(scoreboard, player, score) {
    scoreboard[player]=score;
    return scoreboard;
}

console.log(addPlayer({'Dave Thomas': 0}, 'Jose Valim', 486373));

//3. Remove players from score board
function removePlayer(scoreboard, player) {
    delete scoreboard[player];
    return scoreboard;
}

console.log(removePlayer({'Dave Thomas': 0}, 'Dave Thomas'))
console.log(removePlayer({'Dave Thomas': 0}, 'Rose Fanaras'))

//4.Increase a player's score
function updateScore(scoreboard, player, points) {
    scoreboard[player]+= points
    return scoreboard
}

console.log(updateScore({'Freya Ciric': 12771008}, 'Freya Ciric', 73))

//5. Apply Monday Bonus Points
function applyMondayBonus (scoreboard) {
    for (let player in scoreboard) {
        scoreboard[player] += 100 
    }
    
    return scoreboard
}
let scoreboardA= {
    'Dave Thomas': 44,
    'Freyja Ciric': 539,
    'Jose Valim': 265
}
console.log(applyMondayBonus(scoreboardA))

//6.Normalize a high score
function normalizeScore (params) {
    return params.normalizeFunction(params.score)
}
