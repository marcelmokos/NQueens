/**
 * @param n
 * @returns {number}
 */
export const countNQueens = (n) => {
  let count = 0;

  /**
   * @param current
   */
  const solver = (current) => {
    if (current.length === n) {
      // console.log({current});
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
