function createBoard(string) {
    let board = [];
    for (let i = 0; i < string.length; i += 9) {
      let row = string.slice(i, i + 9).split('').map(Number);
      board.push(row);
    }
    return board;
  }
  

  const boardString = "105802000090076405200400819019007306762083090000061050007600030430020501600308900";
  const board = createBoard(boardString);
  console.log(board);

  function isRowValid(board, row, num) {
    return !board[row].includes(num);
  }

  function isColValid(board, col, num) {
    for (let row = 0; row < 9; row++) {
      if (board[row][col] === num) {
        return false;
      }
    }
    return true;
  }

  function isBoxValid(board, startRow, startCol, num) {
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (board[row + startRow][col + startCol] === num) {
          return false;
        }
      }
    }
    return true;
  }

  function isValidMove(board, row, col, num) {
    return isRowValid(board, row, num) && 
           isColValid(board, col, num) &&
           isBoxValid(board, row - row % 3, col - col % 3, num);
  }
  
  function solveSudoku(board) {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === 0) {
          for (let num = 1; num <= 9; num++) {
            if (isValidMove(board, row, col, num)) {
              board[row][col] = num;
  
              if (solveSudoku(board)) {
                return true;
              }
  
              board[row][col] = 0; // Backtrack
            }
          }
          return false;
        }
      }
    }
    return true;
  }
  
 
  const boardString2 = "105802000090076405200400819019007306762083090000061050007600030430020501600308900";
  const board2 = createBoard(boardString2);
  solveSudoku(board2);
  console.log(board2);
  