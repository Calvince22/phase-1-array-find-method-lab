// code your solution here
function superbowlWin(record){
    const win = record.find(game => game.result === "W"); //arrow function
    return win? win.year :undefined //ternary operator
}
