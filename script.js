
let color = 'black';
let click = true;

function gameSize(size) {
    let board = document.querySelector('.game-board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for (let i = 0; i < amount; i++){
    let square = document.createElement('div');
    square.addEventListener('mouseover', colorSquare);
    square.style.backgroundColor = 'white';
    square.style.border = '1px solid rgba(100, 100, 100, .2)';
    board.insertAdjacentElement('beforeend', square);
    };
}

gameSize(16);

function changeSize(input) {
    if (input < 2 || input > 100) {
        console.log('Error too much or too low grids');
    } else {
        gameSize(input);
    }
}

function colorSquare() {
    if (!click) {
        if (color === 'random') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = color;
        };
    
    };
}

function colorChoice(choice) {
    color = choice;
}

document.querySelector('body').addEventListener('click', (e) => {
    console.log(e.target.tagName);
    if (e.target.tagName != 'BUTTON') {
        click = !click;
    } else {
        click = click;
    };
})