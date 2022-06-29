// Defining a function
// Function is not executed
function singSong (){
    console.log("DO")
    console.log("RE")
    console.log("ME")
}

// Running Function
singSong();

function repeat(str, numTimes){
    let result = '';
    for(let i = 0; i < numTimes; i++) {
        result += str;
    }
}

repeat("Ligma", 3);
repeat(3, "Ligma");
repeat()
// If we miss the the variable types, this can ruin the function

