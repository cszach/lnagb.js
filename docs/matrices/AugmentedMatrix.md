<a name="AugmentedMatrix"></a>

## AugmentedMatrix
Class for augmented matrices in Linear Algebra.

An augmented matrix is a matrix obtained by appending the columns of two
matrices.

**Kind**: global class  

* [AugmentedMatrix](#AugmentedMatrix)
    * [new AugmentedMatrix(row, m, n)](#new_AugmentedMatrix_new)
    * [.isAugmentedMatrix(o)](#AugmentedMatrix.isAugmentedMatrix) ⇒ <code>boolean</code>

<a name="new_AugmentedMatrix_new"></a>

### new AugmentedMatrix(row, m, n)
Constructs an `AugmentedMatrix` instance.

An `AugmentedMatrix` instance is used to represent an augmented matrix.


| Param | Type | Description |
| --- | --- | --- |
| row | <code>number</code> | The number of rows for the new augmented matrix |
| m | <code>object</code> | The matrix on the left side of the augmented matrix |
| n | <code>object</code> | The matrix on the right side of the augmented matrix |

<a name="AugmentedMatrix.isAugmentedMatrix"></a>

### AugmentedMatrix.isAugmentedMatrix(o) ⇒ <code>boolean</code>
Checks if object *o* is a valid `AugmentedMatrix` instance

Note that methods inside the `AugmentedMatrix` class do not check if
their parameters are valid (including matrices).

Criteria for being "valid":
- The constructor is `AugmentedMatrix`
- Has the `name` property
- Has the `elements` property and it is a JavaScript array that...
    - has a length of 2; and
    - every element of it is a valid `Matrix` instance that has the same
      number of rows as the other matrix

**Kind**: static method of [<code>AugmentedMatrix</code>](#AugmentedMatrix)  
**Returns**: <code>boolean</code> - `true` if *o* is an `AugmentedMatrix` instance,
`false` otherwise  

| Param | Type | Description |
| --- | --- | --- |
| o | <code>object</code> | The object to check |

