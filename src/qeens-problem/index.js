/**
 * Created by marcel on 10/07/2016.
 */

import countNQueensImmutableUsingList from './immutable-solution-using-list'
import countNQueensUsingJavascriptArray from './javascript-solution-using-array'
// import countNQueensUsingJavascriptClassArray from './javascript-solution-using-class-array'
import { countQeensUsingSimpleBacktrackingES6 } from './simple-backtracking'
import countNQueensBinarySolutions from './binary-solution'
import countNQueensBinarySolutionsUsingSymmetry from './binary-solution-using-symmetry'

const algorithms = {
  countNQueensImmutableUsingList,
  countNQueensUsingJavascriptArray,
  // countNQueensUsingJavascriptClassArray,
  countQeensUsingSimpleBacktrackingES6,
  countNQueensBinarySolutions,
  countNQueensBinarySolutionsUsingSymmetry,
}

export default algorithms
