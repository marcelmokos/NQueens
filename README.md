# N-Queens problem Counting Algorithms:
[wikipedia](https://en.wikipedia.org/wiki/Eight_queens_puzzle) 
date: 10.07.2016

![alt text][chessboard]

## Solutions using immutable.js
Goal was not to create best solutions with best performance but to try immutable.js as a learning experiment 

### ImmutableUsingMap1
* uses symmetry 
* uses [immutable list](https://facebook.github.io/immutable-js/docs/#/Map) 
    
    * immutability is hurting performance 

### ImmutableUsingList1
* uses symmetry 
* uses [immutable list](https://facebook.github.io/immutable-js/docs/#/List) 
    
    * immutability is hurting performance 
    
### JavascriptArray1
* uses symmetry
* uses javascript array data structure

	* array map and filter are not as fastest as two simple for cycles
    
### ArraySimpleBacktracking
* not using symmetry
* uses two for cycles over game board

### ArraySolution1
* using symmetry
* uses two for cycles over game board and run two times less cycles compared to ArraySimpleBacktracking

### BinarySolutions
* not using symmetry
* uses fast binary operations

### BinarySolutionsUsingSymmetry
* uses symmetry
* uses fast binary operations


## Solutions Table 
| Board | n       | ImmutableUsingMap1 | ImmutableUsingList1 | JavascriptArray1 | ArraySimpleBacktracking | ArraySolution1 | BinarySolutions | BinarySolutions1 |
|-------|---------|--------------------|---------------------|------------------|-------------------------|----------------|-----------------|------------------|
| 1     | 1       | 0.161              | 0.163               | 0.160            | 0.153                   | 0.094          | 0.134           | 0.087            |
| 2     | 0       | 6.140              | 1.116               | 0.306            | 0.012                   | 0.100          | 0.004           | 0.075            |
| 3     | 0       | 0.534              | 0.265               | 0.132            | 0.005                   | 0.018          | 0.001           | 0.006            |
| 4     | 2       | 0.385              | 2.598               | 0.037            | 0.009                   | 0.008          | 0.003           | 0.003            |
| 5     | 10      | 3.772              | 2.363               | 0.475            | 0.025                   | 0.017          | 0.040           | 0.003            |
| 6     | 4       | 3.052              | 5.788               | 0.366            | 0.083                   | 0.045          | 0.009           | 0.005            |
| 7     | 40      | 18.112             | 5.156               | 1.449            | 0.469                   | 0.432          | 0.053           | 0.020            |
| 8     | 92      | 25.590             | 17.751              | 2.126            | 0.643                   | 0.428          | 0.088           | 0.043            |
| 9     | 352     | 151.426            | 79.055              | 31.321           | 4.482                   | 2.802          | 0.558           | 0.173            |
| 10    | 724     | 500.004            | 294.851             | 49.161           | 21.333                  | 7.292          | 1.451           | 0.750            |
| 11    | 2680    | 3,035.158          | 1,562.973           | 266.091          | 96.558                  | 52.743         | 4.269           | 2.807            |
| 12    | 14200   | 15,614.331         | 7,137.904           | 1,036.597        | 354.145                 | 185.736        | 14.443          | 7.387            |
| 13    | 73712   | 94,564.087         | 41,937.483          | 6,696.019        | 2,240.342               | 1,217.622      | 79.580          | 39.091           |
| 14    | 365596  | 541,363.175        | 230,818.838         | 35,937.945       | 13,511.567              | 6,886.705      | 459.915         | 227.823          |
| 15    | 2279184 | 3,902,885.897      | 1,519,514.080       | 236,474.720      | 86,210.298              | 47,583.423     | 2,892.796       | 1,447.372        |


## Command line output
```
➜  queens git:(master) ✗ yarn run start
yarn run v0.15.1
$ babel-node src/index.js
Board  n        ImmutableUsingMap1  ImmutableUsingList1  JavascriptArray1  ArraySimpleBacktracking  ArraySolution1  BinarySolutions  BinarySolutions1
-----  -------  ------------------  -------------------  ----------------  -----------------------  --------------  ---------------  ----------------
1      1        0.161ms             0.163ms              0.160ms           0.153ms                  0.094ms         0.134ms          0.087ms
2      0        6.140ms             1.116ms              0.306ms           0.012ms                  0.100ms         0.004ms          0.075ms
3      0        0.534ms             0.265ms              0.132ms           0.005ms                  0.018ms         0.001ms          0.006ms
4      2        0.385ms             2.598ms              0.037ms           0.009ms                  0.008ms         0.003ms          0.003ms
5      10       3.772ms             2.363ms              0.475ms           0.025ms                  0.017ms         0.040ms          0.003ms
6      4        3.052ms             5.788ms              0.366ms           0.083ms                  0.045ms         0.009ms          0.005ms
7      40       18.112ms            5.156ms              1.449ms           0.469ms                  0.432ms         0.053ms          0.020ms
8      92       25.590ms            17.751ms             2.126ms           0.643ms                  0.428ms         0.088ms          0.043ms
9      352      151.426ms           79.055ms             31.321ms          4.482ms                  2.802ms         0.558ms          0.173ms
10     724      500.004ms           294.851ms            49.161ms          21.333ms                 7.292ms         1.451ms          0.750ms
11     2680     3035.158ms          1562.973ms           266.091ms         96.558ms                 52.743ms        4.269ms          2.807ms
12     14200    15614.331ms         7137.904ms           1036.597ms        354.145ms                185.736ms       14.443ms         7.387ms
13     73712    94564.087ms         41937.483ms          6696.019ms        2240.342ms               1217.622ms      79.580ms         39.091ms
14     365596   541363.175ms        230818.838ms         35937.945ms       13511.567ms              6886.705ms      459.915ms        227.823ms
15     2279184  3902885.897ms       1519514.080ms        236474.720ms      86210.298ms              47583.423ms     2892.796ms       1447.372ms

*1 - solutions using symmetry
✨  Done in 6805.32s.
```
time in [ms] running on MacBook Pro mid 2014

![alt text][chart]

The N Queeens problem algorithm Speed
https://sites.google.com/site/nqueensolver/home/algorithm-results

[chart]: https://docs.google.com/spreadsheets/d/1CMzqPUiNJAlkLNrBh2ZyPROi7WHpXL3twzCNm3dBR7c/pubchart?oid=578868863&format=image "N Queen Algorithms chart"
[chessboard]: https://media.giphy.com/media/26BRwNRvMw7r3WErm/giphy.gif "N Queen Algorithms gif"

