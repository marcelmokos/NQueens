import {countNQueens} from "./array-solution-symmetry";

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
