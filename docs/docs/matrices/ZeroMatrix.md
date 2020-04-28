<a name="ZeroMatrix"></a>

## ZeroMatrix
Encodes read-only (in some sense) zero matrices.

Matrices instanced from this class are meant to be zero matrices at all
times. Mutable methods inherited from `Matrix` no longer work on instances
of `ZeroMatrix` (except for `setDimensions`, `zero`, `sizeSwap`,
`transpose`).

**Kind**: global class  

* [ZeroMatrix](#ZeroMatrix)
    * [new ZeroMatrix(name)](#new_ZeroMatrix_new)
    * _instance_
        * [.copy(m, copyName)](#ZeroMatrix+copy) ⇒ <code>Matrix</code>
    * _static_
        * [.isIt(o)](#ZeroMatrix.isIt) ⇒ <code>boolean</code>

<a name="new_ZeroMatrix_new"></a>

### new ZeroMatrix(name)
Constructs a `ZeroMatrix` instance.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> | <code>null</code> | The denotation for the new matrix |

<a name="ZeroMatrix+copy"></a>

### zeroMatrix.copy(m, copyName) ⇒ <code>Matrix</code>
Same as the `copy` method in the base class, the only difference is that
only zero matrices are allowed to be the first argument.

**Kind**: instance method of [<code>ZeroMatrix</code>](#ZeroMatrix)  
**Returns**: <code>Matrix</code> - This matrix  

| Param | Type | Description |
| --- | --- | --- |
| m | <code>Matrix</code> | A zero matrix to copy from |
| copyName | <code>boolean</code> | Set to `true` to copy the denotation of *m* |

<a name="ZeroMatrix.isIt"></a>

### ZeroMatrix.isIt(o) ⇒ <code>boolean</code>
Checks if *o* encodes a zero matrix. An instance of `Matrix` carrying
only zeros are also considered to be encoding a zero matrix.

**Kind**: static method of [<code>ZeroMatrix</code>](#ZeroMatrix)  
**Returns**: <code>boolean</code> - `true` if *o* is a zero matrix, `false` otherwise  

| Param | Type | Description |
| --- | --- | --- |
| o | <code>object</code> | The object to check |

