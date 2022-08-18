// ==========================================
// AN OLDER WAY OF ADDING DEFAULT PARAM VALUE
// ==========================================

// function rollDie(numSides) {
//     if (numSides === undefined) {
//         numSides = 6
//     }
//     return Math.floor(Math.random() * numSides) + 1
// }

// ============
// THE NEW WAY!
// ============
function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1
}
// Defaults to six if no number is passed in as parameter

function greet(person, msg = "Hey there", punc = '!') {
    console.log(`${msg}, ${person}${punc}`)
}
// Default parameters should come after non-default parameters

