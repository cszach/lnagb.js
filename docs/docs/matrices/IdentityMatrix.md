<a name="IdentityMatrix"></a>

## IdentityMatrix
Encodes read-only identity matrices.

Matrices instanced from this class are meant to be identity matrices at all
times. Mutable methods inherited from `SquareMatrix` (and `Matrix`) no longer
work on instances of `IdentityMatrix` (except for `setDimensions`).

**Kind**: global class  

* [IdentityMatrix](#IdentityMatrix)
    * [new IdentityMatrix(name)](#new_IdentityMatrix_new)
    * _instance_
        * [.copy(m, copyName)](#IdentityMatrix+copy) ⇒ <code>Matrix</code>
    * _static_
        * [.isIt(o)](#IdentityMatrix.isIt) ⇒ <code>boolean</code>

<a name="new_IdentityMatrix_new"></a>

### new IdentityMatrix(name)
Constructs an `IdentityMatrix` instance.

The instance initially encodes a 2 x 2 identity matrix.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> | <code>null</code> | The denotation for the new matrix |

<a name="IdentityMatrix+copy"></a>

### identityMatrix.copy(m, copyName) ⇒ <code>Matrix</code>
Same as the `copy` method in the base class, the only difference is that
only identity matrices are allowed to be the first argument.

**Kind**: instance method of [<code>IdentityMatrix</code>](#IdentityMatrix)  
**Returns**: <code>Matrix</code> - This matrix  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| m | <code>Matrix</code> |  | An identity matrix to copy from |
| copyName | <code>boolean</code> | <code>false</code> | Set to `true` to copy the denotation of *m* |

<a name="IdentityMatrix.isIt"></a>

### IdentityMatrix.isIt(o) ⇒ <code>boolean</code>
Checks if *o* encodes an identity matrix and returns `true` if it does.

**Kind**: static method of [<code>IdentityMatrix</code>](#IdentityMatrix)  
**Returns**: <code>boolean</code> - `true` if *o* is an identity matrix, false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| o | <code>object</code> | The object to check |

