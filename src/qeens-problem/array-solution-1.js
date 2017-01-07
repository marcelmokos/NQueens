/**
 * Created by marcel on 07/01/2016.
 */

/**
 * @param n {number} board size
 * @returns {number} count of N queens solutions
 */
export const countNQueens = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  }

  let count = 0;

  /**
   * @param current
   */
  const solver = (current, increment = 1) => {
    if (current.length === n) {
      count += increment;
    } else {
      for (let col = 0; col < n; col++) {
        let row = 0;
        let l = 0;
        for (l = current.length; row < l; row++) {
          const prev = current[row];
          if (prev === col) { break; }
          if (prev - (l - row) === col) { break; }
          if (prev + (l - row) === col) { break; }
        }
        if (row === l) {
          solver(current.concat([col]), increment);
        }
      }
    }
  };

  const items = (n / 2) << 0;

  for (let i = 0; i < items; i++) {
    solver([i], 2);
  }

  if (items + items !== n) {
    solver([items], 1);
  }

  return count;
};
