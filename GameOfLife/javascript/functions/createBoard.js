import Cell from "../Classes/Cell.js";

const createBoard = (gridRows, gridColums) => {
  const newBoard = [];
  const row = [];
  for (let i = 0; i < gridRows; i++) {
    for (let j = 0; j < gridColums; j++) {
      row.push(new Cell(i, j));
    }

    newBoard.push(row);
  }

  return newBoard;
};

export default createBoard;
