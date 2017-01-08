/**
 * Created by Marcel Mokos on 10/07/2016.
 */

/**
 * @param n
 * @returns {Array}
 */
const getBoardMap = (n = 4) => {
  const board = [];

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      board.push([i, j]);
    }
  }

  return board;
};

/**
 * @param n {number} board size
 * @returns {number} count of N queens solutions
 */
const countNQueensUsingJavascriptArray = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  }

  const board = getBoardMap(n);
  let count = 0;
  const x = 0;
  const y = 1;

  /**
   * @param {number} row
   * @param {Array} options
   * @param {Array} result
   * @returns {Array} options
   */
  const getFilteredOptions = (row, options, result) => {
    const last = result.slice(-1)[0];
    const lastLeftDiagonalIndex = last[x] - last[y];
    const lastRightDiagonalIndex = last[x] + last[y];

    return options
      .filter(item => (
        !(item[x] === row || // remove same row
          item[y] === last[y] ||  // remove same column
          (item[x] - item[y]) === lastLeftDiagonalIndex || // remove left diagonal
          (item[x] + item[y]) === lastRightDiagonalIndex)  // remove right diagonal
      ));
  };

  /**
   * @param {number} row
   * @param {Array} options
   */
  const getNextRowOptions = (row, options) => (
    options
      .slice(0, n - (row + 1))
      .filter(item => (item[x] === row + 1)) // pick next row to process
  );

  /**
   * @param {number} row
   * @param {array} options
   * @param {array} result
   * @param {number} increment
   */
  const innerRecurse = (row, options, result, increment = 2) => {
    if (result.length === n) {
      count += increment;

      return;
    }

    const filteredOptions = getFilteredOptions(row, options, result);
    const nexRowOptions = getNextRowOptions(row, filteredOptions);

    if (nexRowOptions.length === 0 || nexRowOptions.length > (n - result.length)) {
      return;
    }

    nexRowOptions
      .forEach((item) => {
        innerRecurse(row + 1, filteredOptions, result.concat([item]), increment);
      });
  };

  /**
   * Halved number of items in first row round down
   * Equivalent of Math.floor(n / 2)
   * @type {number}
   */
  const items = (n / 2) << 0;

  /**
   * Given board
   * When take half items of the first row
   * Then process with symetry in mind and increment by value of two
   */
  board
    .slice(0, items)
    .forEach((item) => {
      innerRecurse(0, board.slice(n - 1), [item], 2);
    });

  /**
   * Given Odd n
   * When processing item in middle of first
   * Then increment counter only by value of one
   */
  if (items + items !== n) {
    board
      .slice(items, items + 1)
      .forEach((item) => {
        innerRecurse(0, board.slice(n - 1), [item], 1);
      });
  }

  return count;
};

export default countNQueensUsingJavascriptArray;
