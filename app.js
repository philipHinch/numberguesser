//VARIABLES GMAE
let min = 1;
let max = 10;
let winningNum = getWinningNum();
let = guessesLeft = 3;

//VARIABLES UI
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const btn = document.querySelector('.btn');
const input = document.querySelector('#input');
const message = document.querySelector('.message');
const inputContainer = document.querySelector('.input-container');

//ASSIGN MIN-MAX NUM TO UI
minNum.textContent = min;
maxNum.textContent = max;

//PLAY AGAIN EVENT LISTENER
inputContainer.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains('play-again')) {
        window.location.reload();
    }
})

//LISTEN FOR GUESS
btn.addEventListener('click', () => {
    let guess = parseInt(input.value);

    //VALIDATION
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Plese enter a number between ${ min } and ${ max }`, 'red');
    }
    //if correct number
    if (guess === winningNum) {
        gameOver(`Hurray! ${ winningNum } is the correct number!`, 'limegreen', 'limegreen');
        btn.textContent = 'Play Again';
        btn.classList.add('play-again');
    } else {
        //if wrong number
        guessesLeft -= 1;
        //game over
        if (guessesLeft === 0) {
            gameOver(`Oh no! ${ winningNum } was the correct number!`, 'crimson', 'crimson')
            btn.textContent = 'Play Again';
            btn.classList.add('play-again');
        } else {
            setMessage(`Wrong number, you have ${ guessesLeft } guesses left`, 'crimson');
            input.value = '';
        }
    }
});

//SET MESSAGE FUNCTION
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
};

//GENERATE WINNING NUM
function getWinningNum() {
    return Math.floor(Math.random() * 10 + 1);
};

//GAME OVER
function gameOver(msg, color, textColor) {
    input.disabled = true;
    input.style.backgroundColor = color;
    input.style.color = '#f4f4f4';
    message.style.color = textColor;
    setMessage(msg);
};



