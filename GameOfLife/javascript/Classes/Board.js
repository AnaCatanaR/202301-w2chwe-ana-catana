class Board {
  columns;
  raws;

  constructor(columns, raws) {
    this.columns = columns;
    this.raws = raws;
  }

  createTable(x, y) {
    this.columns = x;
    this.raws = y;
  }
}

export default Board;
