let mazes = [
    {
        name: "A1",
        description: "A simple maze to get you started. It should be a walk in the park",
        size: { row: 21, col: 21 },
        player: { row: 1, col: 10 },
        finish: { row: 21, col: 12 },
        walls: [
            { row: 1, col: 1 },
            { row: 1, col: 2 },
            { row: 1, col: 3 },
            { row: 1, col: 4 },
            { row: 1, col: 5 },
            { row: 1, col: 6 },
            { row: 1, col: 7 },
            { row: 1, col: 8 },
            { row: 1, col: 9 },
            { row: 1, col: 11 },
            { row: 1, col: 12 },
            { row: 1, col: 13 },
            { row: 1, col: 14 },
            { row: 1, col: 15 },
            { row: 1, col: 16 },
            { row: 1, col: 17 },
            { row: 1, col: 18 },
            { row: 1, col: 19 },
            { row: 1, col: 20 },
            { row: 1, col: 21 },
            { row: 21, col: 1 },
            { row: 21, col: 2 },
            { row: 21, col: 3 },
            { row: 21, col: 4 },
            { row: 21, col: 5 },
            { row: 21, col: 6 },
            { row: 21, col: 7 },
            { row: 21, col: 8 },
            { row: 21, col: 9 },
            { row: 21, col: 10 },
            { row: 21, col: 11 },
            { row: 21, col: 13 },
            { row: 21, col: 14 },
            { row: 21, col: 15 },
            { row: 21, col: 16 },
            { row: 21, col: 17 },
            { row: 21, col: 18 },
            { row: 21, col: 19 },
            { row: 21, col: 20 },
            { row: 21, col: 21 },
            { row: 2, col: 1 },
            { row: 2, col: 21 },
            { row: 3, col: 1 },
            { row: 3, col: 21 },
            { row: 4, col: 1 },
            { row: 4, col: 21 },
            { row: 5, col: 1 },
            { row: 5, col: 21 },
            { row: 6, col: 1 },
            { row: 6, col: 21 },
            { row: 7, col: 1 },
            { row: 7, col: 21 },
            { row: 8, col: 1 },
            { row: 8, col: 21 },
            { row: 9, col: 1 },
            { row: 9, col: 21 },
            { row: 10, col: 1 },
            { row: 10, col: 21 },
            { row: 11, col: 1 },
            { row: 11, col: 21 },
            { row: 12, col: 1 },
            { row: 12, col: 21 },
            { row: 13, col: 1 },
            { row: 13, col: 21 },
            { row: 14, col: 1 },
            { row: 14, col: 21 },
            { row: 15, col: 1 },
            { row: 15, col: 21 },
            { row: 16, col: 1 },
            { row: 16, col: 21 },
            { row: 17, col: 1 },
            { row: 17, col: 21 },
            { row: 18, col: 1 },
            { row: 18, col: 21 },
            { row: 19, col: 1 },
            { row: 19, col: 21 },
            { row: 20, col: 1 },
            { row: 20, col: 21 },
            { row: 3, col: 3 },
            { row: 3, col: 5 },
            { row: 3, col: 7 },
            { row: 3, col: 9 },
            { row: 3, col: 11 },
            { row: 3, col: 13 },
            { row: 3, col: 15 },
            { row: 3, col: 17 },
            { row: 3, col: 19 },
            { row: 5, col: 3 },
            { row: 5, col: 5 },
            { row: 5, col: 7 },
            { row: 5, col: 9 },
            { row: 5, col: 11 },
            { row: 5, col: 13 },
            { row: 5, col: 15 },
            { row: 5, col: 17 },
            { row: 5, col: 19 },
            { row: 7, col: 3 },
            { row: 7, col: 5 },
            { row: 7, col: 7 },
            { row: 7, col: 9 },
            { row: 7, col: 11 },
            { row: 7, col: 13 },
            { row: 7, col: 15 },
            { row: 7, col: 17 },
            { row: 7, col: 19 },
            { row: 9, col: 3 },
            { row: 9, col: 5 },
            { row: 9, col: 7 },
            { row: 9, col: 9 },
            { row: 9, col: 11 },
            { row: 9, col: 13 },
            { row: 9, col: 15 },
            { row: 9, col: 17 },
            { row: 9, col: 19 },
            { row: 11, col: 3 },
            { row: 11, col: 5 },
            { row: 11, col: 7 },
            { row: 11, col: 9 },
            { row: 11, col: 11 },
            { row: 11, col: 13 },
            { row: 11, col: 15 },
            { row: 11, col: 17 },
            { row: 11, col: 19 },
            { row: 13, col: 3 },
            { row: 13, col: 5 },
            { row: 13, col: 7 },
            { row: 13, col: 9 },
            { row: 13, col: 11 },
            { row: 13, col: 13 },
            { row: 13, col: 15 },
            { row: 13, col: 17 },
            { row: 13, col: 19 },
            { row: 15, col: 3 },
            { row: 15, col: 5 },
            { row: 15, col: 7 },
            { row: 15, col: 9 },
            { row: 15, col: 11 },
            { row: 15, col: 13 },
            { row: 15, col: 15 },
            { row: 15, col: 17 },
            { row: 15, col: 19 },
            { row: 17, col: 3 },
            { row: 17, col: 5 },
            { row: 17, col: 7 },
            { row: 17, col: 9 },
            { row: 17, col: 11 },
            { row: 17, col: 13 },
            { row: 17, col: 15 },
            { row: 17, col: 17 },
            { row: 17, col: 19 },
            { row: 19, col: 3 },
            { row: 19, col: 5 },
            { row: 19, col: 7 },
            { row: 19, col: 9 },
            { row: 19, col: 11 },
            { row: 19, col: 13 },
            { row: 19, col: 15 },
            { row: 19, col: 17 },
            { row: 19, col: 19 },
            { row: 3, col: 2 },
            { row: 3, col: 4 },
            { row: 3, col: 10 },
            { row: 3, col: 14 },
            { row: 3, col: 18 },
            { row: 5, col: 4 },
            { row: 5, col: 12 },
            { row: 5, col: 14 },
            { row: 5, col: 16 },
            { row: 5, col: 20 },
            { row: 7, col: 6 },
            { row: 7, col: 8 },
            { row: 7, col: 10 },
            { row: 7, col: 18 },
            { row: 9, col: 10 },
            { row: 9, col: 12 },
            { row: 9, col: 16 },
            { row: 11, col: 2 },
            { row: 11, col: 4 },
            { row: 11, col: 6 },
            { row: 11, col: 12 },
            { row: 11, col: 16 },
            { row: 11, col: 18 },
            { row: 13, col: 10 },
            { row: 13, col: 12 },
            { row: 13, col: 14 },
            { row: 15, col: 4 },
            { row: 15, col: 6 },
            { row: 15, col: 8 },
            { row: 15, col: 12 },
            { row: 15, col: 20 },
            { row: 17, col: 2 },
            { row: 17, col: 18 },
            { row: 17, col: 20 },
            { row: 19, col: 4 },
            { row: 19, col: 6 },
            { row: 19, col: 10 },
            { row: 19, col: 12 },
            { row: 2, col: 7 },
            { row: 2, col: 11 },
            { row: 2, col: 15 },
            { row: 4, col: 7 },
            { row: 4, col: 9 },
            { row: 4, col: 17 },
            { row: 6, col: 5 },
            { row: 6, col: 11 },
            { row: 6, col: 15 },
            { row: 6, col: 19 },
            { row: 8, col: 3 },
            { row: 8, col: 5 },
            { row: 8, col: 7 },
            { row: 8, col: 13 },
            { row: 8, col: 15 },
            { row: 8, col: 19 },
            { row: 10, col: 3 },
            { row: 10, col: 7 },
            { row: 10, col: 9 },
            { row: 10, col: 13 },
            { row: 12, col: 5 },
            { row: 12, col: 9 },
            { row: 12, col: 15 },
            { row: 12, col: 19 },
            { row: 14, col: 3 },
            { row: 14, col: 7 },
            { row: 14, col: 9 },
            { row: 14, col: 15 },
            { row: 14, col: 17 },
            { row: 16, col: 7 },
            { row: 16, col: 11 },
            { row: 16, col: 13 },
            { row: 16, col: 15 },
            { row: 16, col: 17 },
            { row: 18, col: 5 },
            { row: 18, col: 7 },
            { row: 18, col: 9 },
            { row: 18, col: 13 },
            { row: 18, col: 15 },
            { row: 18, col: 17 },
            { row: 20, col: 11 },
            { row: 20, col: 15 },
            { row: 20, col: 19 }
        ]
    }
];

const maze = document.querySelector(".maze");
maze.getAttribute("id");
let currentMaze = setMaze();
let currentPlayer = { ...currentMaze.player };
let won = false;

const rootElement = document.documentElement.style; // DOM for css properties

function setMaze() {
    let mazeId = maze.getAttribute("id");
    let filtered = mazes.filter(function (m) {
        return m.name == mazeId;
    })
    if (filtered.length > 1) {
        console.error("Invalid ID: multiple matches. Contact site owner");
    }
    else if (filtered.length === 0) {
        console.error("Invalid ID: no match. Contact site owner");
    }
    else {
        return filtered[0];
    }
}

function checkIfWall(a, b) {
    return currentMaze.walls.some(w => w.row == a && w.col == b);
}

function checkIfFinished(a, b) {
    return a == currentMaze.finish.row && b == currentMaze.finish.col;
}

function checkIfInBounds(a, b) {
    return (a > 0 && a <= currentMaze.size.row) && (b > 0 && b <= currentMaze.size.col);
}

function setup() {
    rootElement.setProperty('--size-row', currentMaze.size.row);
    rootElement.setProperty('--size-column', currentMaze.size.col);
    document.querySelector("h2").innerHTML = `Maze ${currentMaze.name}`;
    document.querySelector("h3").innerHTML = `About Maze ${currentMaze.name}`;
    document.querySelector("#description").innerHTML = currentMaze.description;

    render();
}

function render() {
    maze.innerHTML = ``;
    for (let r = 1; r <= currentMaze.size.row; r++) {
        for (let c = 1; c <= currentMaze.size.col; c++) {
            const div = document.createElement('div');
            if (r == currentPlayer.row && c == currentPlayer.col) {
                div.className = 'player';
            }
            else if (checkIfWall(r, c)) {
                div.className = 'walls';
            }
            else if (checkIfFinished(r, c)) {
                div.className = 'finish';
            }
            maze.appendChild(div);
        }
    }
    if (checkIfFinished(currentPlayer.row, currentPlayer.col)) {
        won = true;
        setTimeout(() => { alert(`Congratulations! You solved ${currentMaze.name}!`); }, 50);
    }
}

//buttons
document.querySelector("#up").addEventListener("click", (event) => {
    move(event, 0, 1);
});
document.querySelector("#left").addEventListener("click", (event) => {
    move(event, 1, 0);
});
document.querySelector("#down").addEventListener("click", (event) => {
    move(event, 0, -1);
});
document.querySelector("#right").addEventListener("click", (event) => {
    move(event, -1, 0);
});

//keypress
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") {
        if (!won) {
            event.preventDefault();
        }
        move(event, 0, 1);
    }
});
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        if (!won) {
            event.preventDefault();
        }
        move(event, 1, 0);
    }
});
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown") {
        if (!won) {
            event.preventDefault();
        }
        move(event, 0, -1);
    }
});
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
        if (!won) {
            event.preventDefault();
        }
        move(event, -1, 0);
    }
});

function move(button, x, y) {
    if (won) {
        return;
    }
    let newCol = currentPlayer.col - x;
    let newRow = currentPlayer.row - y;
    if (checkIfInBounds(newRow, newCol) && !checkIfWall(newRow, newCol)) {
        currentPlayer.row = newRow;
        currentPlayer.col = newCol;
        render();
    }

}


setup();