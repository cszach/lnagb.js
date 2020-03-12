<a name="AugmentedMatrix"></a>

## AugmentedMatrix
Class for augmented matrices in Linear Algebra.

An augmented matrix is a matrix obtained by appending the columns of two
matrices. This class constructs instances similar to those of the `Matrix`
class, with 2 differences:
- The `name` property defaults to "_AugmentedMatrix_"
- The `size` property has two additional properties:
    - `l`: The number of columns of the matrix on the left
    - `r`: The number of columns of the matrix on the right

This class is a child class of `Matrix`. See the base [`Matrix`](./Matrix)
class for common properties and methods.

**Note**: You can freely change the value of the `name` property, but `size`
and `elements` should only be changed using this class's methods.

**Kind**: global class  

* [AugmentedMatrix](#AugmentedMatrix)
    * [new AugmentedMatrix(row, m, n)](#new_AugmentedMatrix_new)
    * _instance_
        * [.leftMatrix](#AugmentedMatrix+leftMatrix) ⇒ <code>object</code>
        * [.rightMatrix](#AugmentedMatrix+rightMatrix) ⇒ <code>object</code>
        * [.copy(m)](#AugmentedMatrix+copy)
        * [.clone()](#AugmentedMatrix+clone) ⇒ <code>object</code>
    * _static_
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

<a name="AugmentedMatrix+leftMatrix"></a>

### augmentedMatrix.leftMatrix ⇒ <code>object</code>
Obtain the matrix on the left side of this augmented matrix.

**Kind**: instance property of [<code>AugmentedMatrix</code>](#AugmentedMatrix)  
**Returns**: <code>object</code> - The matrix on the left as an instance of `Matrix`  
<a name="AugmentedMatrix+rightMatrix"></a>

### augmentedMatrix.rightMatrix ⇒ <code>object</code>
Obtain the matrix on the right side of this augmented matrix.

**Kind**: instance property of [<code>AugmentedMatrix</code>](#AugmentedMatrix)  
**Returns**: <code>object</code> - The matrix on the right as an instance of `Matrix`  
<a name="AugmentedMatrix+copy"></a>

### augmentedMatrix.copy(m)
Makes this augmented matrix the same as augmented matrix *m*.

**Kind**: instance method of [<code>AugmentedMatrix</code>](#AugmentedMatrix)  

| Param | Type | Description |
| --- | --- | --- |
| m | <code>object</code> | The `AugmentedMatrix` instance to copy from |

<a name="AugmentedMatrix+clone"></a>

### augmentedMatrix.clone() ⇒ <code>object</code>
Creates and returns a clone of this instance.

**Kind**: instance method of [<code>AugmentedMatrix</code>](#AugmentedMatrix)  
**Returns**: <code>object</code> - A clone of this matrix  
<a name="AugmentedMatrix.isAugmentedMatrix"></a>

### AugmentedMatrix.isAugmentedMatrix(o) ⇒ <code>boolean</code>
Checks if object *o* is a valid `AugmentedMatrix` instance

Note that methods inside the `AugmentedMatrix` class do not check if
their parameters are valid (including matrices).

Criteria for being "valid":
- The constructor is `AugmentedMatrix`
- Has the `name` property
- Has the `size` property that has
    - the `row` property being a positive integer
    - the `column` property also being a positive integer
    - the `l` and `r` properties that sum to the `column` property
- Has the `elements` property and it is a JavaScript array of numbers
  and the number of elements must equal to the product of `.size.row` and
  `.size.column`

**Kind**: static method of [<code>AugmentedMatrix</code>](#AugmentedMatrix)  
**Returns**: <code>boolean</code> - `true` if *o* is an `AugmentedMatrix` instance,
`false` otherwise  

| Param | Type | Description |
| --- | --- | --- |
| o | <code>object</code> | The object to check |

