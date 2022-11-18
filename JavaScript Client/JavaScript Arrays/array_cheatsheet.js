// Making an array:
const colors = ["red", "orange", "yellow"];

// Arrays are indexed like strings:
colors[0]; // "red"

// They have a length:
colors.length; //3

// One method to add element to end of array is to create it with indices
colors[3] = "green";
console.log(colors[3]);

// Important array methods:
//push(value) - adds value to the END of an array
//pop() - removes and returns last value in array

//unshift(val) - adds value to START of an array
//shift() - removes and returns first element in an array

// concat - Add 2 arrays together
// includes - Finds value and returns true or false
// indexOf - Finds value and returns index
// reverse - Destructive method to reverse array

// slice - take indexes and make new array
// splice - put something in place or remove part array

// Nested Arrays 

const gameBoard = [
    ['X','O','X'],
    ['O','X',null],
    [null,'X',null]
];