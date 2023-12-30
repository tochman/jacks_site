addEventListener("DOMContentLoaded", () => {
  const heading = document.getElementById("rubrik");
  const button = document.getElementById("knapp");
  setTimeout(() => (heading.innerHTML = "Vi ändrar ytterligare en gång"), 5000);
  button.addEventListener("click", () => {
    if (heading.style.display === "none") {
      heading.style.display = null;
    } else {
      heading.style.display = "none";
    }
  });
});

let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
let currentPlayer = "X";
let gameActive = true;

function makeMove(cell, row, col) {
  if (cell.innerText === "" && gameActive) {
    cell.innerText = currentPlayer;
    board[row][col] = currentPlayer;
    if (checkForWinner()) {
      document.getElementById("status").innerText = currentPlayer + " vann!";
      gameActive = false;
    } else if (isBoardFull()) {
      document.getElementById("status").innerText = "Oavgjort!";
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      document.getElementById("status").innerText =
        "Nuvarande spelare: " + currentPlayer;
    }
  }
}

function checkForWinner() {
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] === board[i][1] &&
      board[i][1] === board[i][2] &&
      board[i][0] !== ""
    ) {
      return true;
    }
    if (
      board[0][i] === board[1][i] &&
      board[1][i] === board[2][i] &&
      board[0][i] !== ""
    ) {
      return true;
    }
  }
  if (
    board[0][0] === board[1][1] &&
    board[1][1] === board[2][2] &&
    board[0][0] !== ""
  ) {
    return true;
  }
  if (
    board[0][2] === board[1][1] &&
    board[1][1] === board[2][0] &&
    board[0][2] !== ""
  ) {
    return true;
  }
  return false;
}

function isBoardFull() {
  return board.every((row) => row.every((cell) => cell !== ""));
}

function resetGame() {
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  currentPlayer = "X";
  gameActive = true;
  document.getElementById("status").innerText =
    "Nuvarande spelare: " + currentPlayer;
  Array.from(document.getElementsByClassName("cell")).forEach((cell) => {
    cell.innerText = "";
  });
}
