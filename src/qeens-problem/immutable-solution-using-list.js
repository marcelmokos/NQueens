/**
 * Created by marcel on 10/07/2016.
 */

import Immutable from 'immutable'

/**
 * @param n
 * @returns {List<any>}
 */
const getBoardMap = (n = 4) => {
  let board = Immutable.List()

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      board = board.push(Immutable.List.of(i, j))
    }
  }

  return board
}

/**
 * @param {number} n
 * @returns {number} - solution count
 */
const countNQueensUsingImmutableList = (n) => {
  // Symmetry will not work for N=1 and N=0 because
  // the one solution's mirror image is itself
  if (n === 0 || n === 1) return 1

  const x = 0
  const y = 1
  const board = getBoardMap(n)
  let count = 0

  /**
   * @param {number} row
   * @param {List} options
   * @param {List} result
   * @returns {List} options
   */
  const getFilteredOptions = (row, options, result) => {
    const last = result.last()
    const lastLeftDiagonalIndex = last.get(x) - last.get(y)
    const lastRightDiagonalIndex = last.get(x) + last.get(y)

    return options
      .filterNot(item => (
        item.get(x) === row || // remove same row
        item.get(y) === last.get(y) ||  // remove same column
        (item.get(x) - item.get(y)) === lastLeftDiagonalIndex || // remove left diagonal
        (item.get(x) + item.get(y)) === lastRightDiagonalIndex   // remove right diagonal
      ))
  }

  /**
   * @param {number} row
   * @param {List} options
   */
  const getNextRowOptions = (row, options) => (
    options
      .slice(0, n - (row + 1))
      .filter(item => (item.get(x) === row + 1)) // pick next row to process
  )

  /**
   * @returns {boolean}
   */
  const isOddWithMiddleItem = () => {
    const nModulo = n % 2

    return nModulo !== 0 && (nModulo) % 1 === 0
  }

  /**
   * @param {number} row
   * @param {List} options
   * @param {List} result
   * @param {number} increment
   */
  const innerRecurse = (row, options, result, increment = 2) => {
    if (result.size === n) {
      count += increment
      return
    }

    const filteredOptions = getFilteredOptions(row, options, result)
    const nexRowOptions = getNextRowOptions(row, filteredOptions)

    if (nexRowOptions.size === 0 || nexRowOptions.size > (n - result.size)) {
      return
    }

    nexRowOptions
      .forEach(item => {
        innerRecurse(row + 1, filteredOptions, result.push(item), increment)
      })
  }

  /**
   * Halved number of items in first row round down
   * Equivalent of Math.floor(n / 2)
   * @type {number}
   */
  const items = (n / 2) << 0

  /**
   * Given board
   * When take half items of the first row
   * Then process with symetry in mind and increment by value of two
   */
  board
    .take(items)
    .forEach(item => {
      innerRecurse(0, board.slice(n - 1), Immutable.List.of(item), 2)
    })

  /**
   * Given Odd n
   * When processing item in middle of first row
   * Then increment counter only by value of one
   */
  if (isOddWithMiddleItem()) {
    board
      .slice(items, items + 1)
      .forEach(item => {
        innerRecurse(0, board.slice(n - 1), Immutable.List.of(item), 1)
      })
  }

  return count
}

export default countNQueensUsingImmutableList

