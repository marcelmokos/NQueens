/**
 * Created by Marcel Mokos on 07/01/2017.
 */

import {
  getTakenIndexesForRow,
  immutableUsingMap1,
} from "./immutable-solution-using-map-1";

import {List} from "immutable";

describe("getTakenIndexesForRow", () => {
  const testDiagonal = (
    test = {
      n: 4,
      row: 1,
      results: List.of(),
      output: List.of(),
    },
  ) => {
    const {n, row, results, output} = {
      ...{
        n: 4,
        row: 1,
        results: List.of(),
        output: List.of(),
      },
      ...test,
    };
    describe(`when n='${n}' row='${row}' and results='${results}'`, () => {
      it(`then expect to equal '${output}'`, () => {
        expect(getTakenIndexesForRow(n)(row)(results)).toEqual(output);
      });
    });
  };

  testDiagonal({
    row: 0,
    results: List.of(1),
  });

  testDiagonal({
    row: 1,
    results: List.of(1),
    output: List.of(0, 1, 2),
  });

  testDiagonal({
    row: 2,
    results: List.of(1),
    output: List.of(1, 3),
  });

  testDiagonal({
    row: 2,
    results: List.of(undefined, 1),
    output: List.of(0, 1, 2),
  });

  testDiagonal({
    row: 3,
    results: List.of(undefined, 1),
    output: List.of(1, 3),
  });

  testDiagonal({
    n: 5,
    row: 2,
    results: List.of(undefined, 2),
    output: List.of(1, 2, 3),
  });

  testDiagonal({
    n: 5,
    row: 3,
    results: List.of(undefined, 2),
    output: List.of(0, 2, 4),
  });
});

describe("immutableUsingMap1", () => {
  it("for '4' queens", () => {
    expect(immutableUsingMap1(4)).toBe(2);
  });

  it("for '5' queens", () => {
    expect(immutableUsingMap1(5)).toBe(10);
  });

  it("for '6' queens", () => {
    expect(immutableUsingMap1(6)).toBe(4);
  });
});
