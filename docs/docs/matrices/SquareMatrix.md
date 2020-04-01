<a name="SquareMatrix"></a>

## SquareMatrix
Dedicated class for square matrices in Linear Algebra.

This class is a child class of `Matrix`. See the base [`Matrix`](./Matrix)
class for common properties and methods.

**Kind**: global class  

* [SquareMatrix](#SquareMatrix)
    * [new SquareMatrix(size)](#new_SquareMatrix_new)
    * [.isSquareMatrix(o)](#SquareMatrix.isSquareMatrix) ⇒ <code>boolean</code>

<a name="new_SquareMatrix_new"></a>

### new SquareMatrix(size)
Constructs a `SquareMatrix` instance.

The first parameter sets the size of the matrix. The rest of the
parameters are perceived as elements of the new matrix given in
**row-major** order.


| Param | Type | Description |
| --- | --- | --- |
| size | <code>number</code> | The number of rows (or columns) for the new matrix |

<a name="SquareMatrix.isSquareMatrix"></a>

### SquareMatrix.isSquareMatrix(o) ⇒ <code>boolean</code>
Checks if `o` is a square matrix and returns `true` if it is.

**Kind**: static method of [<code>SquareMatrix</code>](#SquareMatrix)  
**Returns**: <code>boolean</code> - `true` if `o` encodes a square matrix, `false` otherwise  

| Param | Type | Description |
| --- | --- | --- |
| o | <code>object</code> | The object to check |

