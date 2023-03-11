const squares = document.querySelectorAll('.square');
let player = 'X';
let winner = null;

function changePlayer() {
    player = player === 'X' ? 'O' : 'X';
}

function checkWin() {
    const combos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    combos.forEach((combo) => {
        const [a, b, c] = combo;
        if (squares[a].innerHTML &&
            squares[a].innerHTML === squares[b].innerHTML &&
            squares[b].innerHTML === squares[c].innerHTML) {
            winner = player;
        }
    });

    return winner;
}

function handleClick(e) {
    if (!e.target.innerHTML && !winner) {
        e.target.innerHTML = player;
        checkWin();
        changePlayer();
    }
}

squares.forEach(square => {
    square.addEventListener('click', handleClick);
});


