<a name="SquareMatrix"></a>

## SquareMatrix
Encodes square matrices.

Instaces of this class only encode square matrices, and the default state
is identity instead of zero like `Matrix`'s instances.

**Kind**: global class  

* [SquareMatrix](#SquareMatrix)
    * [new SquareMatrix(name)](#new_SquareMatrix_new)
    * _instance_
        * [.copy(m, copyName)](#SquareMatrix+copy) ⇒ <code>Matrix</code>
        * [.setDimensions(dimension)](#SquareMatrix+setDimensions) ⇒ [<code>SquareMatrix</code>](#SquareMatrix)
        * [.identity()](#SquareMatrix+identity) ⇒ [<code>SquareMatrix</code>](#SquareMatrix)
    * _static_
        * [.isIt(o)](#SquareMatrix.isIt) ⇒ <code>boolean</code>

<a name="new_SquareMatrix_new"></a>

### new SquareMatrix(name)
Constructs a `SquareMatrix` instance.

The default instance starts as a 2 x 2 square identity matrix.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> | <code>null</code> | The denotation for the new matrix |

<a name="SquareMatrix+copy"></a>

### squareMatrix.copy(m, copyName) ⇒ <code>Matrix</code>
Same as the `copy` method in the base class, the only difference is that
only square matrices are allowed to be the first argument.

**Kind**: instance method of [<code>SquareMatrix</code>](#SquareMatrix)  
**Returns**: <code>Matrix</code> - This matrix  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| m | <code>Matrix</code> |  | A square matrix to copy from |
| copyName | <code>boolean</code> | <code>false</code> | Set to `true` to copy the denotation of *m* |

<a name="SquareMatrix+setDimensions"></a>

### squareMatrix.setDimensions(dimension) ⇒ [<code>SquareMatrix</code>](#SquareMatrix)
Sets the dimensions for and makes this matrix an identity matrix.

**Kind**: instance method of [<code>SquareMatrix</code>](#SquareMatrix)  
**Returns**: [<code>SquareMatrix</code>](#SquareMatrix) - This matrix  

| Param | Type | Description |
| --- | --- | --- |
| dimension | <code>number</code> | The number of rows/columns for this matrix |

<a name="SquareMatrix+identity"></a>

### squareMatrix.identity() ⇒ [<code>SquareMatrix</code>](#SquareMatrix)
Resets this matrix back to an identity matrix.

**Kind**: instance method of [<code>SquareMatrix</code>](#SquareMatrix)  
**Returns**: [<code>SquareMatrix</code>](#SquareMatrix) - This matrix  
<a name="SquareMatrix.isIt"></a>

### SquareMatrix.isIt(o) ⇒ <code>boolean</code>
Checks if *o* is a square matrix and returns `true` if it is.

**Kind**: static method of [<code>SquareMatrix</code>](#SquareMatrix)  
**Returns**: <code>boolean</code> - `true` if *o* encodes a square matrix, `false` otherwise  

| Param | Type | Description |
| --- | --- | --- |
| o | <code>object</code> | The object to check |

