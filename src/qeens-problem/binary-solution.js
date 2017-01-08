/**
 * Created by Marcel Mokos Mokos on 10/07/2016.
 *
 * author: Greg Trowbridge
 * source: http://gregtrowbridge.com/a-bitwise-solution-to-the-n-queens-problem-in-javascript/
 *
 * changed by Marcel Mokos
 * - rewritten in es6
 * - style adjusted by Eslint
 */

import dec2bin from "../utility/dec2bin";

/**
 * @param n
 * @returns {number}
 */
const countNQueensBinarySolutions = (n) => {
  // Keeps track of the # of valid solutions
  let count = 0;
  let iterations = 0;

  // Helps identify valid solutions
  const done = (2 ** n) - 1;

  /**
   * Checks all possible board configurations
   * @param ld
   * @param col
   * @param rd
   */
  const innerRecurse = (ld, col, rd) => {
    iterations++;
    // All columns are occupied,
    // so the solution must be complete
    if (col === done) {
      count++;

      return;
    }

    // Gets a bit sequence with "1"s
    // whereever there is an open "slot"
    let poss = ~(ld | rd | col);

    // console.log({count, done, ld, col, rd, poss})
    // console.log({
    //   count,
    //   done,
    //   ld: dec2bin(ld),
    //   col: dec2bin(col),
    //   rd: dec2bin(rd),
    //   poss: dec2bin(poss)
    // })

    // Loops as long as there is a valid
    // place to put another queen.
    while (poss & done) {
      const bit = poss & -poss;
      poss -= bit;
      innerRecurse((ld | bit) >> 1, col | bit, (rd | bit) << 1);
    }
  };

  innerRecurse(0, 0, 0);

  return count;
};

export default countNQueensBinarySolutions;
