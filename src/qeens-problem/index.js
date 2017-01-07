/**
 * Created by marcel on 10/07/2016.
 */

import {countNQeensUsingSimpleBacktracking as ArraySimpleBacktracking} from "./simple-backtracking";
import {countNQueens as ArraySolution1} from "./array-solution-1";
import BinarySolutions from "./binary-solution";
import BinarySolutions1 from "./binary-solution-1";
import ImmutableUsingList1 from "./immutable-solution-using-list-1";
import {immutableUsingMap1 as ImmutableUsingMap1} from "./immutable-solution-using-map-1";
import JavascriptArray1 from "./array-of-xy-solution-1";

const algorithms = {
  ImmutableUsingMap1,
  ImmutableUsingList1,
  JavascriptArray1,
  ArraySimpleBacktracking,
  ArraySolution1,
  BinarySolutions,
  BinarySolutions1,
};

export default algorithms;
