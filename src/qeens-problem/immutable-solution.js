import Immutable, {List, Range} from "immutable";

const x = 0;
const y = 1;

export const getDiagonalIndexes = n => row => results => results.flatMap(result =>
  // if (result.get(x) === row) {
  //   return List.of();
  // }

  [
    result.get(y) - (row - result.get(x)),
    result.get(y) + (row - result.get(x)),
  ]);

export const countNQueens = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  }

  let count = 0;
  const line = Range(0, n).toList();

  /**
   * @param {number} row
   * @param {List} options
   * @param {List} result
   * @param {number} increment
   */
  const innerRecurse = (row, options, results, increment = 1) => {
    if (results.size === n) {
      count += increment;

      return;
    }

    const nextRow = row + 1;
    if (nextRow === n) {
      return;
    }

    const diagonalIndexes = getDiagonalIndexes(n)(nextRow)(results);
    const filteredOptions = options.filterNot(option => diagonalIndexes.contains(option));

    if (filteredOptions.size === 0) {
      return;
    }

    filteredOptions
      .forEach((index) => {
        innerRecurse(
          nextRow,
          options.filter(option => option !== index),
          results.push(List.of(nextRow, index)),
          increment,
        );
      });
  };

  /**
   * Halved number of items in first row round down
   * Equivalent of Math.floor(n / 2)
   * @type {number}
   */
  const items = (n / 2) << 0;

  line
    .take(items)
    .forEach((index) => {
      innerRecurse(0, line.delete(index), List().push(List.of(0, index)), 2);
    });

  /**
   * Given Odd n
   * When processing item in middle of first row
   * Then increment counter only by value of one
   */
  if (items + items !== n) {
    line
      .slice(items, items + 1)
      .forEach((index) => {
        innerRecurse(0, line.delete(index), List().push(List.of(0, index)), 1);
      });
  }

  return count;
};
