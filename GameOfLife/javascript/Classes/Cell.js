class Cell {
  positionX;
  positionY;
  lifeState;

  constructor(positionX, positionY, lifeState = false) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.lifeState = lifeState;
  }

  alive() {
    this.lifeState = true;
  }

  dead() {
    this.lifeState = false;
  }
}

export default Cell;
