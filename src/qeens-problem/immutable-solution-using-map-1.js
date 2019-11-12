/**
 * Created by Marcel Mokos on 07/01/2017.
 */

import {List, Range} from "immutable";

export const getTakenIndexesForRow = (n) => (row) => (results) => results.flatMap((y, x) => {
  if (x === row || y === undefined) {
    return [];
  }

  return [y - (row - x), y, y + (row - x)].filter((i) => i >= 0 && i < n);
});

/**
 * @param n {number} board size
 * @returns {number} count of N queens solutions
 */
export const immutableUsingMap1 = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  }

  let count = 0;
  const line = Range(0, n).toMap();

  /**
   * @param {Immutable.Map} options
   * @param {Immutable.List} results
   * @param {number} increment
   */
  const innerRecurse = (options, results, increment = 1) => {
    const row = results.size;
    if (row === n) {
      count += increment;

      return;
    }

    const takenIndexes = getTakenIndexesForRow(n)(row)(results);
    const filteredOptions = takenIndexes.reduce(
      (filtered, index) => filtered.remove(index),
      options,
    );

    if (filteredOptions.size === 0) {
      return;
    }

    filteredOptions.forEach((index) => {
      innerRecurse(options, results.push(index), increment);
    });
  };

  /**
   * Halved number of items in first row round down
   * Equivalent of Math.floor(n / 2)
   * @type {number}
   */
  const items = (n / 2) << 0;

  line.take(items).forEach((index) => {
    innerRecurse(line.delete(index), List.of(index), 2);
  });

  /**
   * Given Odd n
   * When processing item in middle of first row
   * Then increment counter only by value of one
   */
  if (items + items !== n) {
    line.slice(items, items + 1).forEach((index) => {
      innerRecurse(line.delete(index), List.of(index), 1);
    });
  }

  return count;
};
