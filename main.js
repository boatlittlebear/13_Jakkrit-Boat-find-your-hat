"use strict";
import promptSync from "prompt-sync";

const prompt = promptSync({ sigint: true });

// Board tiles
const PLAYER = "*";
const EMPTY = "░";
const HOLE = "O";
const HAT = "^";

// Hardcoded board
let board = [
  [PLAYER, EMPTY, HOLE],
  [EMPTY, HOLE, EMPTY],
  [EMPTY, HAT, EMPTY],
];

// Game state
let playerRow = 0;
let playerCol = 0;
let playing = true;

// Print board
function printBoard(board) {
  console.clear();
  const drawing = board
    .map((row) => row.join("")) // ["*", "░", "O"] -> "*░O"
    .join("\n");                // ต่อแต่ละแถวด้วย \n

  console.log(drawing);
}

printBoard(board)
// รับ input จากผู้เล่น
function getMove() {
  const input = prompt("Which way? (w/a/s/d): ").toLowerCase();

  if (!["w", "a", "s", "d"].includes(input)) {
    console.log(" Invalid input, please use w/a/s/d");
    return null;
  }

  return input;
}

// ขยับตำแหน่งผู้เล่น
function movePlayer(move, row, col) {
  let newRow = row;
  let newCol = col;

  if (move === "w") newRow--;
  if (move === "s") newRow++;
  if (move === "a") newCol--;
  if (move === "d") newCol++;

  return { newRow, newCol };
}

// เช็กสถานะเกม
function checkGameState(board, row, col) {
  const height = board.length;
  const width = board[0].length;

  if (row < 0 || row >= height || col < 0 || col >= width) {
    return "out";
  }

  const tile = board[row][col];

  if (tile === HOLE) return "hole";
  if (tile === HAT) return "hat";

  return "ok";
}

// Game play loop
function playGame() {
  while (playing) {
    printBoard(board);

    const move = getMove();
    if (!move) continue;

    const { newRow, newCol } = movePlayer(move, playerRow, playerCol);
    const state = checkGameState(board, newRow, newCol);

    if (state === "out") {
      console.log("You moved out of bounds! Game over.");
      playing = false;
      break;
    }

    if (state === "hole") {
      console.log("You fell into a hole! Game over.");
      playing = false;
      break;
    }

    if (state === "hat") {
      console.log("You found your hat! You win!");
      playing = false;
      break;
    }

    // อัปเดตตำแหน่งผู้เล่นบนบอร์ด
    board[playerRow][playerCol] = EMPTY;
    playerRow = newRow;
    playerCol = newCol;
    board[playerRow][playerCol] = PLAYER;
  }
}

playGame();


