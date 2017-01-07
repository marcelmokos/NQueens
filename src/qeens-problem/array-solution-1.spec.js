import {countNQueens} from "./array-solution-1";

describe("immutableUsingMap1", () => {
  it("for '4' queens", () => {
    expect(countNQueens(4)).toBe(2);
  });

  it("for '5' queens", () => {
    expect(countNQueens(5)).toBe(10);
  });

  it("for '6' queens", () => {
    expect(countNQueens(6)).toBe(4);
  });

  it("for '7' queens", () => {
    expect(countNQueens(7)).toBe(40);
  });

  it("for '8' queens", () => {
    expect(countNQueens(8)).toBe(92);
  });

  it("for '9' queens", () => {
    expect(countNQueens(9)).toBe(352);
  });
});
