<a name="ZeroMatrix"></a>

## ZeroMatrix
Class for creating matrices that start off being zero matrices.

Note that, as said above, instances of this class start as zero matrices.
They can be transformed into non-zero matrices using methods inherited from
the base `Matrix` class.

This class is a child class of `Matrix`. See the base [`Matrix`](./Matrix)
class for common properties and methods.

**Kind**: global class  

* [ZeroMatrix](#ZeroMatrix)
    * [new ZeroMatrix(row, column)](#new_ZeroMatrix_new)
    * [.isZeroMatrix(o)](#ZeroMatrix.isZeroMatrix) ⇒ <code>boolean</code>

<a name="new_ZeroMatrix_new"></a>

### new ZeroMatrix(row, column)
Constructs a `ZeroMatrix` instance.

The instance initially encodes a zero matrix.


| Param | Type | Description |
| --- | --- | --- |
| row | <code>number</code> | The number of rows for the new matrix |
| column | <code>number</code> | The number of columns for the new matrix |

<a name="ZeroMatrix.isZeroMatrix"></a>

### ZeroMatrix.isZeroMatrix(o) ⇒ <code>boolean</code>
Checks if `o` encodes a zero matrix and returns `true` if it does.

**Kind**: static method of [<code>ZeroMatrix</code>](#ZeroMatrix)  
**Returns**: <code>boolean</code> - `true` if `o` is a zero matrix, `false` otherwise  

| Param | Type | Description |
| --- | --- | --- |
| o | <code>object</code> | The object to check |

