class Cell {
  lifeState = false;
  color = "white";
  position;

  constructor(lifeState, color, position) {
    this.lifeState = lifeState;
    this.color = color;
    this.position = position;
  }

  print(life) {
    this.lifeState = life;
    this.color = "red";
  }
}

export default Cell;
