<a name="module_Matrix3"></a>

## Matrix3
Contains the [Matrix3](./Matrix#module_Matrix3..Matrix3) class, which encodes 3 x 3
matrices in linear algebra.

**Author**: Zach / <cszach@proton.me>  

* [Matrix3](./Matrix#module_Matrix3)
    * [~Matrix3](./Matrix#module_Matrix3..Matrix3)
        * [new Matrix3(a, b, c, d, e, f, g, h, i)](#new_module_Matrix3..Matrix3_new)
        * [.multiply(matrix)](./Matrix#module_Matrix3..Matrix3+multiply) ⇒ <code>Matrix3</code>


* * *

<a name="module_Matrix3..Matrix3"></a>

### Matrix3~Matrix3
Encodes 3 x 3 matrices.

**Kind**: inner class of [<code>Matrix3</code>](./Matrix#module_Matrix3)  
**See**: [Matrix](./Matrix#module_Matrix..Matrix) for common properties  

* [~Matrix3](./Matrix#module_Matrix3..Matrix3)
    * [new Matrix3(a, b, c, d, e, f, g, h, i)](#new_module_Matrix3..Matrix3_new)
    * [.multiply(matrix)](./Matrix#module_Matrix3..Matrix3+multiply) ⇒ <code>Matrix3</code>


* * *

<a name="new_module_Matrix3..Matrix3_new"></a>

#### new Matrix3(a, b, c, d, e, f, g, h, i)
All parameters are optional and default to 0.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| a | <code>number</code> | <code>0</code> | The (1, 1)-entry of the new 3 x 3 matrix |
| b | <code>number</code> | <code>0</code> | The (1, 2)-entry |
| c | <code>number</code> | <code>0</code> | The (1, 3)-entry |
| d | <code>number</code> | <code>0</code> | The (2, 1)-entry |
| e | <code>number</code> | <code>0</code> | The (2, 2)-entry |
| f | <code>number</code> | <code>0</code> | The (2, 3)-entry |
| g | <code>number</code> | <code>0</code> | The (3, 1)-entry |
| h | <code>number</code> | <code>0</code> | The (3, 2)-entry |
| i | <code>number</code> | <code>0</code> | The (3, 3)-entry |


* * *

<a name="module_Matrix3..Matrix3+multiply"></a>

#### matrix3.multiply(matrix) ⇒ <code>Matrix3</code>
Multiplies this matrix by another 3 x 3 matrix.

**Kind**: instance method of [<code>Matrix3</code>](./Matrix#module_Matrix3..Matrix3)  
**Returns**: <code>Matrix3</code> - This matrix  

| Param | Type | Description |
| --- | --- | --- |
| matrix | <code>matrix</code> | The 3 x 3 matrix to post-multiply this matrix to. |


* * *

