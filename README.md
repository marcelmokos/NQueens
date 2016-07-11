# N-Queens Counting Algorithms:
[wikipedia](https://en.wikipedia.org/wiki/Eight_queens_puzzle) 

date: 10.07.2016

### ImmutableUsingList
* uses symetry 
* uses [immutable list](https://facebook.github.io/immutable-js/docs/#/List) 
    
    * immutablity is hurting performance 

### JavascriptArray
* uses symetry
* uses javascript array datastructure

	* array map and filter are not as fastest as simple two for cycles
    
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
| 16                    | 2474454.835        |                 |                    | 28069.038       | 12367.12                     |
| 17                    |                    |                 |                    | 214466.428      | 94513.589                    |

time in [ms] running on MacBook Pro mid 2014

![alt text][chart]

[chart]: http://image.prntscr.com/image/adce892195424666a4039d14481c970d.png "N Queen Algorithms chart"


