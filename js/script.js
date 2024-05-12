let currentPlayer = "X";
let gameEnded = false;
let board = ["", "", "", "", "", "", "", "", ""];
const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
];
function checkWinner(player) {
    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] === player && board[b] === player && board[c] === player) {
            document.getElementById(`cell${a}`).classList.add("marked");
            document.getElementById(`cell${b}`).classList.add("marked");
            document.getElementById(`cell${c}`).classList.add("marked");

            return true;
        }
    }
    return false;
}
function isBoardFull() {
    return board.every(cell => cell !== "");
}
function cellClicked(cellIndex) {
    if (!gameEnded && board[cellIndex] === "") {
        const cell = document.getElementById(`cell${cellIndex}`);
        cell.textContent = currentPlayer;
        cell.setAttribute('data-value', currentPlayer);
        board[cellIndex] = currentPlayer;
        if (checkWinner(currentPlayer)) {
            document.getElementById("message").textContent = `Игрок ${currentPlayer} победил!`;

            gameEnded = true;
        } else if (isBoardFull()) {
            document.getElementById("message").textContent = "Ничья!";
            gameEnded = true;
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}
