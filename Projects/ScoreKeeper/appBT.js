const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const reset = document.querySelector('#reset');
const playTo = document.querySelector('#playTo');

const p1DisplayScore = document.querySelector('#p1');
const p2DisplayScore = document.querySelector('#p2');

let p1Score = 0;
let p2Score = 0;

let winningScore = 3;
let isGameOver = false;

playTo.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    resetGame();
})

p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score == winningScore) {
            isGameOver = true;
            p1DisplayScore.classList.add('winner');
            p2DisplayScore.classList.add('loser');
        }
        p1DisplayScore.innerText = p1Score;
    }
})

p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score == winningScore) {
            isGameOver = true;
            p1DisplayScore.classList.add('loser');
            p2DisplayScore.classList.add('winner');
        }
        p2DisplayScore.innerText = p2Score;
    }
})

reset.addEventListener('click', function() {
resetGame();
})

function resetGame () {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1DisplayScore.innerText = p1Score;
    p2DisplayScore.innerText = p2Score;
    p1DisplayScore.classList.remove('loser', 'winner');
    p2DisplayScore.classList.remove('loser', 'winner');
}