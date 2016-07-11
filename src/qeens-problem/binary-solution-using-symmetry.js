/**
 * Created by marcel on 10/07/2016.
 *
 * Updated to ES6
 * Esling fix used
 *
 * source: https://liujoycec.github.io/2015/09/20/n_queens_symmetry/
 */

import dec2bin from '../utility/dec2bin'

/**
 * @param n
 * @returns {*[]}
 */
const countNQueensBinarySolutionsUsingSymmetry = (n) => {
  // Symmetry will not work for N=1 and N=0 because
  // the one solution's mirror image is itself
  if (n === 0 || n === 1) return 1

  // Keeps track of the # of valid solutions
  let count = 0
  let iterations = 0

  // Helps identify valid solutions
  // Equivalent to Math.pow(2,n) - 1
  const done = (1 << n) - 1

  // Determines the positions in the first row
  // that will be excluded from our search
  // Also applies to the second row when N is
  // odd and the first queen is in the middle
  // Equivalent to Math.pow(2, Math.floor(n/2)) - 1
  const excl = (1 << ((n / 2) ^ 0)) - 1

  // console.log({ count, done, excl })

  // Checks all possible board configurations
  // Added two parameters: ex1 will be used on
  // the current row, ex2 is next in line
  const innerRecurse = (ld, col, rd, ex1, ex2) => {
    iterations++

    // All columns are occupied,
    // so the solution must be complete
    if (col === done) {
      count++
      return
    }

    // Gets a bit sequence with "1"s
    // whereever there is an open "slot"
    // ex1 filters out right half of row
    let poss = ~(ld | rd | col | ex1) & done
    let ex2Help = ex2

    // console.log({ld, col, rd, ex1, ex2, poss})
    // console.log({
    //   ld:dec2bin(ld),
    //   col: dec2bin(col),
    //   rd: dec2bin(rd),
    //   ex1: dec2bin(ex1),
    //   ex2: dec2bin(ex2),
    //   poss: dec2bin(poss),
    // })

    // Loops as long as there is a valid
    // place to put another queen.
    while (poss) {
      const bit = poss & -poss
      poss = poss ^ bit

      // ex2 will become the next row's ex1
      // All rows after that will have ex1 = 0
      innerRecurse((ld | bit) >> 1, col | bit, (rd | bit) << 1, ex2Help, 0)

      // After we are past the middle square in the
      // first row, disable filter for second row
      ex2Help = 0
    }
  }

  // Second row filter active only for odd N
  innerRecurse(0, 0, 0, excl, n % 2 ? excl : 0)

  // Multiply count by 2
  return count << 1
}

export default countNQueensBinarySolutionsUsingSymmetry

