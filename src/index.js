/**
 * Created by marcel on
 *
 * n queen on n*n board problem
 *
 * Given board n*n
 * When we will place n chess queens on the board
 * Then how many combinations can queens be placed and not attacking each other
 */

import algorithms from './qeens-problem'

for (let i = 1; i < 13; i++) {
  const counts = []
  console.log('---')

  Object.keys(algorithms).map((key) => {
    console.time(`${key} [${i}]`)
    const result = algorithms[key](i)
    console.timeEnd(`${key} [${i}]`)

    counts.push(result)
    return
  })

  console.log(`results [${i}]:`, { counts })

  const count = counts.pop()
  counts.map((item) => (
    console.assert(count === item, 'not same results')
  ))
}

