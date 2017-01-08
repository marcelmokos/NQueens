/**
 * Created by Marcel Mokos on 10/07/2016.
 */

/**
 * author: Zoli Kahan
 * source: https://zolmeister.com/2014/01/n-queens-problem-backtracking.html
 *
 * changed by Marcel Mokos
 * - rewritten in es6
 * - style adjusted by Eslint
 *
 * @param n {Number}
 * @returns {Number}
 */
export const countNQeensUsingSimpleBacktracking = (n) => {
  let count = 0;

  /**
   * @param current
   */
  const solver = (current) => {
    if (current.length === n) {
      count++;
    } else {
      for (let i = 0; i < n; i++) {
        let j = 0;
        let l = 0;
        for (l = current.length; j < l; j++) {
          const prev = current[j];
          if (prev === i) { break; }
          if (prev - (l - j) === i) { break; }
          if (prev + (l - j) === i) { break; }
        }
        if (j === l) {
          solver(current.concat([i]));
        }
      }
    }
  };

  solver([]);

  return count;
};
