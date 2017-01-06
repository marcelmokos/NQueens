/**
 * Created by marcel on 10/07/2016.
 */

import BinarySolutions from "./binary-solution";
import BinarySolutionsUsingSymmetry from "./binary-solution-using-symmetry";
import ImmutableUsingList from "./immutable-solution-using-list";
import UsingJavascriptArray from "./javascript-solution-using-array";
import {countQeensUsingSimpleBacktrackingES6 as UsingSimpleBacktrackingES6} from "./simple-backtracking";

const algorithms = {
  ImmutableUsingList,
  UsingJavascriptArray,
  UsingSimpleBacktrackingES6,
  BinarySolutions,
  BinarySolutionsUsingSymmetry,
};

export default algorithms;
