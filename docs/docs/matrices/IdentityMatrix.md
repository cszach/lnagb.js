<a name="IdentityMatrix"></a>

## IdentityMatrix
Class for creating matrices that start off being identity matrices.

Note that, as said above, instances of this class start as identity matrices.
They can be transformed into trivial matrices using methods inherited from
the base `Matrix` class.

This class is a child class of `SquareMatrix`. See the base
[`SquareMatrix`](./SquareMatrix) class for common properties and methods.

**Kind**: global class  

* [IdentityMatrix](#IdentityMatrix)
    * [new IdentityMatrix(size)](#new_IdentityMatrix_new)
    * [.isIdentityMatrix(o)](#IdentityMatrix.isIdentityMatrix) ⇒ <code>boolean</code>

<a name="new_IdentityMatrix_new"></a>

### new IdentityMatrix(size)
Constructs an `IdentityMatrix` instance.

The instance initially encodes an identity matrix.


| Param | Type | Description |
| --- | --- | --- |
| size | <code>number</code> | The number of rows/columns for the new matrix |

<a name="IdentityMatrix.isIdentityMatrix"></a>

### IdentityMatrix.isIdentityMatrix(o) ⇒ <code>boolean</code>
Checks if `o` encodes an identity matrix and returns `true` if it does.

**Kind**: static method of [<code>IdentityMatrix</code>](#IdentityMatrix)  
**Returns**: <code>boolean</code> - `true` if `o` is an identity matrix, false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| o | <code>object</code> | The object to check |

