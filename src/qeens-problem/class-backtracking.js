/**
 * Created by Marcel Mokos on 10/07/2016.
 *
 * author: Thomas Lehmann
 * source: https://code.activestate.com/recipes/578497-eight-queen-problem-javascript/
 *
 * changed by Marcel Mokos
 * - rewritten in es6
 * - style adjusted by Eslint
 * - updated to return solutions count
 */
const OCCUPIED = 1; // field is in use
const FREE = 0; // field is not in use
const OUTPUT = 1; // when 1 show solutions

function Queen(width) {
  this.width = width;
  this.lastRow = this.width - 1;
  this.columns = new Array(this.width);
  this.rcolumns = new Array(this.width);

  const numberOfDiagonals = (2 * this.width) - 1;
  this.diagonals1 = new Array(numberOfDiagonals);
  this.diagonals2 = new Array(numberOfDiagonals);
  this.solutions = [];

  this.iterations = 0;

  for (let index = 0; index < numberOfDiagonals; ++index) {
    if (index < this.width) {
      this.columns[index] = -1;
    }
    this.diagonals1[index] = FREE;
    this.diagonals2[index] = FREE;
  }

  // starts the search with initial parameters
  this.run = () => {
    this.calculate(0);
  };

  // searches for all possible solutions
  this.calculate = (row) => {
    this.iterations = this.iterations++;
    for (let column = 0; column < this.width; ++column) {
      // current column blocked?
      if (this.columns[column] >= 0) {
        continue;
      }

      // relating diagonale '\' depending on current row and column
      const ixDiag1 = row + column;
      if (this.diagonals1[ixDiag1] === OCCUPIED) {
        continue;
      }

      // relating diagonale '/' depending on current row and column
      const ixDiag2 = this.width - 1 - (row + column);
      if (this.diagonals2[ixDiag2] === OCCUPIED) {
        continue;
      }

      // occupying column and diagonals depending on current row and column
      this.columns[column] = row;
      this.diagonals1[ixDiag1] = OCCUPIED;
      this.diagonals2[ixDiag2] = OCCUPIED;

      if (row === this.lastRow) {
        this.solutions.push(this.columns.slice());
      } else {
        this.calculate(row + 1);
      }

      this.columns[column] = -1;
      this.diagonals1[ixDiag1] = FREE;
      this.diagonals2[ixDiag2] = FREE;
    }
  };
}

/**
 * @param n
 * @returns {Number}
 */
export const classBacktracking = (n) => {
  const instance = new Queen(n);
  instance.run();

  return instance.solutions.length;
};
