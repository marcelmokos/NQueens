/**
 * https://zolmeister.com/2014/01/n-queens-problem-backtracking.html
 */

/**
 * @param n
 * @returns {Array}
 */
export const countQeensUsingSimpleBacktrackingES6 = (n) => {
  const ans = []
  let iterations = 0

  /**
   * @param current
   */
  const solver = (current) => {
    iterations++
    if (current.length === n) {
      ans.push(current)
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

  return ans.length
}

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
