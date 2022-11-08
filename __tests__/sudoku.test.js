import { Board } from './../src/sudoku.js';

describe('Board.makeRow', () => {

    test('should create an array of letters "a" - "g"', () => {
        const board1 = new Board();
        const row1 = board1.makeRow();
        expect(row1[3]).toEqual("d");
    });
});

 describe('repeatingNumbers', () => {

     test('it should check for repeating numbers in an array and call false if there are', () => {
         const board1 = new Board();
         let array1 = [1, 3, 4, 2, 1, 6, 8, 7, 8];
         expect(board1.repeatingNumbers(array1)).toEqual(false);
     });
});