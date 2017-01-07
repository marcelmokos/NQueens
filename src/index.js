/**
 * Created by marcel on 10/07/2016.
 *
 * n queen on n*n board problem
 *
 * Given board n*n
 * When we will place n chess queens on the board
 * Then how many combinations can queens be placed and not attacking each other
 */

import algorithms from "./qeens-problem";

require("console.table");

const getMsFromHrtime = hrtime => `${(((hrtime[0] * 1e9) + hrtime[1]) / 1e6).toFixed(3)}ms`;
const getElapsedTimeInMs = start => getMsFromHrtime(process.hrtime(start));

const table = [];

for (let i = 1; i < 11; i++) {
  const counts = [];
  const preformance = [];

  Object.keys(algorithms).forEach((key) => {
    const start = process.hrtime();
    const result = algorithms[key](i);
    const time = getElapsedTimeInMs(start);

    preformance.push(time);
    counts.push(result);
  });

  const count = counts.pop();
  counts.forEach((item, index) => {
    console.assert(count === item, `not same result of '${Object.keys(algorithms)[index + 1]}' algorithm i='${i}' - count='${count}' - item='${item}'`);
  });
  table.push([String(i), count, ...preformance]);
}

const header = ["Board", "n", ...Object.keys(algorithms)];
console.table(header, table);
console.log("*1 - solutions using symmetry");
