import Immutable, {List, Range} from "immutable";
import {countNQueens, getDiagonalIndexes} from "./immutable-solution";

describe("getDiagonalIndexes", () => {
  const testDiagonal = (test = {
    n: 4,
    row: 1,
    results: List.of(),
    output: List.of(),
  }) => {
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
        expect(
          getDiagonalIndexes(n)(row)(results),
        ).toEqual(output);
      });
    });
  };

  // testDiagonal({
  //   row: 0,
  //   results: List.of(List.of(0, 1)),
  // });

  testDiagonal({
    row: 1,
    results: List.of(List.of(0, 1)),
    output: List.of(0, 2),
  });

  testDiagonal({
    row: 2,
    results: List.of(List.of(0, 1)),
    output: List.of(-1, 3),
  });

  testDiagonal({
    row: 2,
    results: List.of(List.of(1, 1)),
    output: List.of(0, 2),
  });

  testDiagonal({
    row: 3,
    results: List.of(List.of(1, 1)),
    output: List.of(-1, 3),
  });

  testDiagonal({
    n: 5,
    row: 2,
    results: List.of(List.of(1, 2)),
    output: List.of(1, 3),
  });

  testDiagonal({
    n: 5,
    row: 3,
    results: List.of(List.of(1, 2)),
    output: List.of(0, 4),
  });
});

describe("countNQueens", () => {
  it("for '4' queens", () => {
    expect(countNQueens(4)).toBe(2);
  });

  it("for '5' queens", () => {
    expect(countNQueens(5)).toBe(10);
  });

  it("for '6' queens", () => {
    expect(countNQueens(6)).toBe(4);
  });
});
