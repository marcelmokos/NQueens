# N-Queens Counting Algorithms:
[wikipedia](https://en.wikipedia.org/wiki/Eight_queens_puzzle) 
date: 10.07.2016

![alt text][chessboard]

### ImmutableUsingList
* uses symetry 
* uses [immutable list](https://facebook.github.io/immutable-js/docs/#/List) 
    
    * immutablity is hurting performance 

### JavascriptArray
* uses symetry
* uses javascript array datastructure

	* array map and filter are not as fastest as two simple for cycles
    
### SimpleBacktracking
* not using symetry
* uses two for cycles over game board

### BinarySolutions
* not using symetry
* uses fast binary operations

### BinarySolutionsUsingSymmetry
* uses symetry
* uses fast binary operations

| solution for N queens | ImmutableUsingList | JavascriptArray | SimpleBacktracking | BinarySolutions | BinarySolutionsUsingSymmetry |
|-----------------------|--------------------|-----------------|--------------------|-----------------|------------------------------|
| 1                     | 0.187              | 0.187           | 0.189              | 0.14            | 0.093                        |
| 2                     | 10.685             | 0.445           | 0.023              | 0.019           | 0.103                        |
| 3                     | 0.538              | 0.203           | 0.012              | 0.005           | 0.017                        |
| 4                     | 1.467              | 0.053           | 0.017              | 0.006           | 0.005                        |
| 5                     | 6.899              | 0.454           | 0.074              | 0.013           | 0.007                        |
| 6                     | 8.565              | 1.719           | 0.175              | 0.019           | 0.007                        |
| 7                     | 16.704             | 2.451           | 1.026              | 0.035           | 0.02                         |
| 8                     | 15.055             | 3.34            | 1.151              | 0.108           | 0.044                        |
| 9                     | 75.965             | 14.152          | 4.273              | 0.647           | 0.176                        |
| 10                    | 448.191            | 68.196          | 31.126             | 0.796           | 0.711                        |
| 11                    | 1884.626           | 343.853         | 117.401            | 4.193           | 1.857                        |
| 12                    | 7651.936           | 2236.244        | 598.053            | 14.803          | 7.658                        |
| 13                    | 41274.144          | 11220.463       | 3535.549           | 86.476          | 44.587                       |
| 14                    | 235994.302         | 60013.036       | 23078.019          | 505.164         | 232.241                      |
| 15                    | 1506385.472        | 391141.19       | 145485.322         | 3136.496        | 1606.969                     |
| 16                    |                    | 2474454.835     | heap out of memory | 28069.038       | 12367.12                     |
| 17                    |                    |                 |                    | 214466.428      | 94513.589                    |

time in [ms] running on MacBook Pro mid 2014

![alt text][chart]

[chart]: http://image.prntscr.com/image/9a6ca892dabe48c0a44dec1a0870deb9.png "N Queen Algorithms chart"
[chessboard]: data:image/png;base64,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 "N Queen Algorithms gif"

