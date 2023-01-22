import createBoard from "./createBoard.js";

describe("Given a function createBoard", () => {
  describe("When it receives 'rows' and 'colums'", () => {
    test("The it should return '[]'", () => {
      const rows = 1;
      const colums = 2;
      const expectedResult = [
        [
          {
            lifeState: false,
            positionX: 0,
            positionY: 0,
          },
          {
            lifeState: false,
            positionX: 0,
            positionY: 1,
          },
        ],
      ];

      const testNewBoard = createBoard(rows, colums);

      expect(testNewBoard).toEqual(expectedResult);
    });
  });
});
