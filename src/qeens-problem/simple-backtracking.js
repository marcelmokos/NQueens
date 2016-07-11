/**
 * Created by marcel on 10/07/2016.
 */

/**
 * @param n
 * @returns {number}
 */
export const countQeensUsingSimpleBacktrackingES6 = (n) => {
  let count = 0

  /**
   * @param current
   */
  const solver = (current) => {
    if (current.length === n) {
      count++
    } else {
      for (let i = 0; i < n; i++) {
        let j = 0
        let l = 0
        for (l = current.length; j < l; j++) {
          const prev = current[j]
          if (prev === i) break
          if (prev - (l - j) === i) break
          if (prev + (l - j) === i) break
        }
        if (j === l) {
          solver(current.concat([i]))
        }
      }
    }
  }

  solver([])

  return count
}

/**
 * author: Zoli Kahan
 * source: https://zolmeister.com/2014/01/n-queens-problem-backtracking.html
 *
 * @param n
 * @returns {Number}
 */
export function countQeensUsingSimpleBacktrackingES5(n) {
  var ans = []
  solver([])
  return ans.length
  function solver(current) {
    if (current.length === n)
      ans.push(current)
    else
      for (var i = 0; i < n; i++) {
        for (var j = 0, l = current.length; j < l; j++) {
          var prev = current[j]
          if (prev === i)
            break
          if (prev - (l - j) === i)
            break
          if (prev + (l - j) === i)
            break
        }
        if (j === l)
          solver(current.concat([i]))
      }
  }
}
