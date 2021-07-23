const generateBoard = function (whiteQueen, blackQueen) {
  const boardDimention = 8;
  let board = initBoard(boardDimention);

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if ((i === whiteQueen[0] && j === whiteQueen[1]) || (i === blackQueen[0] && j === blackQueen[1])) {
        board[i][j] = 1;
      }
    }
  }
  return board;
}

const queenThreat = function (board) {
  let queen1, queen2;
  for (let i = 0; i < board.length; i++) {
    if (!queen1 && board[i].indexOf(1) !== -1) {
      queen1 = [i, board[i].indexOf(1)];
    }
    if (queen1 && board[i].indexOf(1) !== -1) {
      if (queen1[0] === i) {
        queen2 = [i, board[i].indexOf(1, queen1[1] + 1)];
      } else {
        queen2 = [i, board[i].indexOf(1)];
      }
    }
  }
  
  if (
    queen1[0] === queen2[0] ||
    queen1[1] === queen2[1] ||
    (Math.abs(queen1[1] - queen2[1]) === Math.abs(queen1[0] - queen2[0]))
  ) {
    return true;
  } else {
    return false;
  }
}

function initBoard(dimention) {
  let board = [];
  for (let i = 0; i < dimention; i++) {
    board[i] = [];
    for (let j = 0; j < dimention; j++) {
      board[i][j] = 0
    }
  }
  return board;
}

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));