// const add = function(x,y) {
//     return x + y;
// }

// const add = (x, y) => {
//     return x + y;
// }

const add = (a, b) => a + b;


const square = num => {
    return num * num;
}

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1
// }

const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
)




const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

// const newMovies = movies.map(function (movie) {
//     return `${movie.title} - ${movie.score / 10}`
// })
// WITHOUT ARROW FUNCTIONS


// IMPLICIT RETURN
const newMovies = movies.map(movie => (
    `${movie.title} - ${movie.score / 10}`
))

const isEven = num => num % 2 === 0;
// Using parathesis versus curly brackets will make it a implicit return
// Supposed to wrap a single expressing (Only 1 value being returned)

