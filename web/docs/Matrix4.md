<a name="module_Matrix4"></a>

## Matrix4
Contains the [Matrix4](./Matrix#module_Matrix4..Matrix4) class, which encodes 4 x 4
matrices in linear algebra.

**Author**: Nguyen Hoang Duong / <you_create@protonmail.com>  

* [Matrix4](./Matrix#module_Matrix4)
    * [~Matrix4](./Matrix#module_Matrix4..Matrix4)
        * [new Matrix4(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p)](#new_module_Matrix4..Matrix4_new)
        * [.multiply(matrix)](./Matrix#module_Matrix4..Matrix4+multiply) ⇒ <code>Matrix4</code>


* * *

<a name="module_Matrix4..Matrix4"></a>

### Matrix4~Matrix4
Encodes 4 x 4 matrices. Has speed advantage over [Matrix](./Matrix#module_Matrix..Matrix).

**Kind**: inner class of [<code>Matrix4</code>](./Matrix#module_Matrix4)  
**See**: [Matrix](./Matrix#module_Matrix..Matrix) for common properties  

* [~Matrix4](./Matrix#module_Matrix4..Matrix4)
    * [new Matrix4(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p)](#new_module_Matrix4..Matrix4_new)
    * [.multiply(matrix)](./Matrix#module_Matrix4..Matrix4+multiply) ⇒ <code>Matrix4</code>


* * *

<a name="new_module_Matrix4..Matrix4_new"></a>

#### new Matrix4(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p)
All parameters are optional and default to 0.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| a | <code>number</code> | <code>0</code> | The (1, 1)-entry of the new 4 x 4 matrix |
| b | <code>number</code> | <code>0</code> | The (1, 2)-entry |
| c | <code>number</code> | <code>0</code> | The (1, 3)-entry |
| d | <code>number</code> | <code>0</code> | The (1, 4)-entry |
| e | <code>number</code> | <code>0</code> | The (2, 1)-entry |
| f | <code>number</code> | <code>0</code> | The (2, 2)-entry |
| g | <code>number</code> | <code>0</code> | The (2, 3)-entry |
| h | <code>number</code> | <code>0</code> | The (2, 4)-entry |
| i | <code>number</code> | <code>0</code> | The (3, 1)-entry |
| j | <code>number</code> | <code>0</code> | The (3, 2)-entry |
| k | <code>number</code> | <code>0</code> | The (3, 3)-entry |
| l | <code>number</code> | <code>0</code> | The (3, 4)-entry |
| m | <code>number</code> | <code>0</code> | The (4, 1)-entry |
| n | <code>number</code> | <code>0</code> | The (4, 2)-entry |
| o | <code>number</code> | <code>0</code> | The (4, 3)-entry |
| p | <code>number</code> | <code>0</code> | The (4, 4)-entry |


* * *

<a name="module_Matrix4..Matrix4+multiply"></a>

#### matrix4.multiply(matrix) ⇒ <code>Matrix4</code>
Multiplies this matrix by another 4 x 4 matrix.

**Kind**: instance method of [<code>Matrix4</code>](./Matrix#module_Matrix4..Matrix4)  
**Returns**: <code>Matrix4</code> - This matrix  

| Param | Type | Description |
| --- | --- | --- |
| matrix | <code>matrix</code> | The 4 x 4 matrix to post-multiply this matrix to. |


* * *

