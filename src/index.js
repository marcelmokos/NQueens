/**
 * Created by marcel on 10/07/2016.
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

  Object.keys(algorithms).forEach((key) => {
    const algorithmDescription = `${key} [${i}]`

    console.time(algorithmDescription)
    const result = algorithms[key](i)
    console.timeEnd(algorithmDescription)

    counts.push(result)
  })

  console.log(`results [${i}]:`, { counts })

  const count = counts.pop()
  counts.forEach((item) => {
    console.assert(count === item, 'not same results')
  })
}

