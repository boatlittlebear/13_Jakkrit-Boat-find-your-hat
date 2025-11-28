"use strict";
import promptSync from "prompt-sync";

const prompt = promptSync({ sigint: true });

const PLAYER = "*";
const EMPTY  = "░";
const HOLE   = "O";
const HAT    = "^";

let board = [
  [PLAYER, EMPTY, HOLE],
  [EMPTY,  HOLE,  EMPTY],
  [EMPTY,  HAT,   EMPTY],
];

let playerRow = 0;
let playerCol = 0;
let playing   = true;


function printBoard(board) {
  console.clear();

  const drawing = board
    .map(row => row.join(""))   // ["*", "░", "O"] → "*░O"
    .join("\n");                // ขึ้นบรรทัดใหม่แต่ละแถว

  console.log(drawing);
}


function getMove() {
  const move = prompt("Which way? (w/a/s/d): ");
  return move;
}


function isValidMove(move) {
  if (move === "w" || move === "a" || move === "s" || move === "d") {
    return true;
  } else {
    return false;
  }
}


function getNewPosition(move, row, col) {
  let newRow = row;
  let newCol = col;

  if (move === "w") newRow--;
  if (move === "s") newRow++;
  if (move === "a") newCol--;
  if (move === "d") newCol++;

  return { newRow, newCol };
}


function isOutOfBounds(row, col, board) {
  if (row < 0 || row >= board.length)   return true;
  if (col < 0 || col >= board[0].length) return true;
  return false;
}



function checkMoveResult(newRow, newCol, board) {
  if (isOutOfBounds(newRow, newCol, board)) {
    return "out";
  }

  const tile = board[newRow][newCol];

  if (tile === HOLE) return "hole";
  if (tile === HAT)  return "hat";

  return "ok";
}


function updatePlayerPosition(newRow, newCol) {
  board[newRow][newCol] = PLAYER;
  playerRow = newRow;
  playerCol = newCol;
}

function playGame() {
  while (playing) {

    printBoard(board);

    const move = getMove();

    if (!isValidMove(move)) {
      console.log("Please type only w, a, s, or d.");
      continue;
    }

    const { newRow, newCol } = getNewPosition(move, playerRow, playerCol);

    const result = checkMoveResult(newRow, newCol, board);

    if (result === "out") {
      console.log("You stepped outside the board! Game over.");
      playing = false;
      break;
    }

    if (result === "hole") {
      console.log("You fell in a hole! Game over.");
      playing = false;
      break;
    }

    if (result === "hat") {
      console.log("You found your hat! You win!");
      playing = false;
      break;
    }

    updatePlayerPosition(newRow, newCol);
  }
}

playGame();
