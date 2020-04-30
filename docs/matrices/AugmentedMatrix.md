<a name="AugmentedMatrix"></a>

## AugmentedMatrix
Encodes augmented matrices in Linear Algebra.

This class constructs instances similar to those of the `Matrix` class, with
one difference: The `size` property has two additional properties:
  - `l`: The number of columns of the matrix on the left
  - `r`: The number of columns of the matrix on the right

**Note**: You can freely change the value of the `name` property, but `size`
and `elements` should only be changed using this class's methods.

**Kind**: global class  

* [AugmentedMatrix](#AugmentedMatrix)
    * [new AugmentedMatrix(m, n, name)](#new_AugmentedMatrix_new)
    * _instance_
        * [.leftMatrix](#AugmentedMatrix+leftMatrix) ⇒ <code>Matrix</code>
        * [.rightMatrix](#AugmentedMatrix+rightMatrix) ⇒ <code>Matrix</code>
        * [.copy(m, copyName)](#AugmentedMatrix+copy) ⇒ [<code>AugmentedMatrix</code>](#AugmentedMatrix)
        * [.clone()](#AugmentedMatrix+clone) ⇒ [<code>AugmentedMatrix</code>](#AugmentedMatrix)
    * _static_
        * [.isIt(o)](#AugmentedMatrix.isIt) ⇒ <code>boolean</code>

<a name="new_AugmentedMatrix_new"></a>

### new AugmentedMatrix(m, n, name)
Constructs an `AugmentedMatrix` instance, which encodes an augmented
matrix.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| m | <code>Matrix</code> |  | The matrix on the left side of the augmented matrix |
| n | <code>Matrix</code> |  | The matrix on the right side of the augmented matrix |
| name | <code>string</code> | <code>null</code> | The denotation for the new matrix |

<a name="AugmentedMatrix+leftMatrix"></a>

### augmentedMatrix.leftMatrix ⇒ <code>Matrix</code>
Obtains the matrix on the left side of this augmented matrix.

**Kind**: instance property of [<code>AugmentedMatrix</code>](#AugmentedMatrix)  
**Returns**: <code>Matrix</code> - The matrix on the left of this augmented matrix  
<a name="AugmentedMatrix+rightMatrix"></a>

### augmentedMatrix.rightMatrix ⇒ <code>Matrix</code>
Obtains the matrix on the right side of this augmented matrix.

**Kind**: instance property of [<code>AugmentedMatrix</code>](#AugmentedMatrix)  
**Returns**: <code>Matrix</code> - The matrix on the right of this augmented matrix  
<a name="AugmentedMatrix+copy"></a>

### augmentedMatrix.copy(m, copyName) ⇒ [<code>AugmentedMatrix</code>](#AugmentedMatrix)
Makes this augmented matrix the same as augmented matrix *m*.

**Kind**: instance method of [<code>AugmentedMatrix</code>](#AugmentedMatrix)  
**Returns**: [<code>AugmentedMatrix</code>](#AugmentedMatrix) - This matrix  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| m | [<code>AugmentedMatrix</code>](#AugmentedMatrix) |  | The instance to copy from |
| copyName | <code>boolean</code> | <code>false</code> | Set to `true` to copy the denotation of *m* |

<a name="AugmentedMatrix+clone"></a>

### augmentedMatrix.clone() ⇒ [<code>AugmentedMatrix</code>](#AugmentedMatrix)
Creates and returns a clone of this instance.

**Kind**: instance method of [<code>AugmentedMatrix</code>](#AugmentedMatrix)  
**Returns**: [<code>AugmentedMatrix</code>](#AugmentedMatrix) - A clone of this matrix  
<a name="AugmentedMatrix.isIt"></a>

### AugmentedMatrix.isIt(o) ⇒ <code>boolean</code>
Checks if object *o* is a valid `AugmentedMatrix` instance.

Note that methods inside the `AugmentedMatrix` class do not check if
their parameters are valid (including matrices).

Criteria for being "valid":
- The constructor is `AugmentedMatrix`
- Has the `size` property that has
    - the `row` property being a positive integer
    - the `column` property also being a positive integer
    - the `l` and `r` properties that sum to the `column` property
- Has the `elements` property and it is a JavaScript array of numbers
  and the number of elements must equal to the product of `.size.rows`
  and `.size.columns`

**Kind**: static method of [<code>AugmentedMatrix</code>](#AugmentedMatrix)  
**Returns**: <code>boolean</code> - `true` if *o* is an `AugmentedMatrix` instance,
`false` otherwise  

| Param | Type | Description |
| --- | --- | --- |
| o | <code>object</code> | The object to check |

