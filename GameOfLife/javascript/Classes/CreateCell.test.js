import Cell from "./CreateCell.js";

describe("Given the class Cell", () => {
  describe("When it receives value 1 for 'positionX' and value 2 for 'positionY'", () => {
    test("Then is should return the value of the property 'positionX = 1' and 'positionY = 2' of the object newCell and with", () => {
      const positionX = 1;
      const positionY = 2;
      const newCell = new Cell(positionX, positionY);

      const expectedResultX = 1;
      const expectedResultY = 2;

      expect(newCell.positionX).toStrictEqual(expectedResultX);
      expect(newCell.positionY).toStrictEqual(expectedResultY);
      expect(newCell.lifeState).toBeFalsy();
    });
  });
});
