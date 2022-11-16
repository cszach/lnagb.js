<a name="module_Matrix2"></a>

## Matrix2
Contains the [Matrix2](./Matrix#module_Matrix2..Matrix2) class, which encodes 2 x 2
matrices in linear algebra.

**Author**: Zach / <cszach@proton.me>  

* [Matrix2](./Matrix#module_Matrix2)
    * [~Matrix2](./Matrix#module_Matrix2..Matrix2)
        * [new Matrix2(a, b, c, d)](#new_module_Matrix2..Matrix2_new)
        * [.interchargeRows()](./Matrix#module_Matrix2..Matrix2+interchargeRows) ⇒ <code>Matrix2</code>
        * [.multiply(matrix)](./Matrix#module_Matrix2..Matrix2+multiply) ⇒ <code>Matrix2</code>


* * *

<a name="module_Matrix2..Matrix2"></a>

### Matrix2~Matrix2
Encodes 2 x 2 matrices.

**Kind**: inner class of [<code>Matrix2</code>](./Matrix#module_Matrix2)  
**See**: [Matrix](./Matrix#module_Matrix..Matrix) for common properties  

* [~Matrix2](./Matrix#module_Matrix2..Matrix2)
    * [new Matrix2(a, b, c, d)](#new_module_Matrix2..Matrix2_new)
    * [.interchargeRows()](./Matrix#module_Matrix2..Matrix2+interchargeRows) ⇒ <code>Matrix2</code>
    * [.multiply(matrix)](./Matrix#module_Matrix2..Matrix2+multiply) ⇒ <code>Matrix2</code>


* * *

<a name="new_module_Matrix2..Matrix2_new"></a>

#### new Matrix2(a, b, c, d)
All parameters are optional and default to 0.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| a | <code>number</code> | <code>0</code> | The (1, 1)-entry of the new 2 x 2 matrix |
| b | <code>number</code> | <code>0</code> | The (1, 2)-entry |
| c | <code>number</code> | <code>0</code> | The (2, 1)-entry |
| d | <code>number</code> | <code>0</code> | The (2, 2)-entry |


* * *

<a name="module_Matrix2..Matrix2+interchargeRows"></a>

#### matrix2.interchargeRows() ⇒ <code>Matrix2</code>
Intercharges the two rows in this matrix.

**Kind**: instance method of [<code>Matrix2</code>](./Matrix#module_Matrix2..Matrix2)  
**Returns**: <code>Matrix2</code> - This matrix  

* * *

<a name="module_Matrix2..Matrix2+multiply"></a>

#### matrix2.multiply(matrix) ⇒ <code>Matrix2</code>
Multiplies this matrix by another 2 x 2 matrix.

**Kind**: instance method of [<code>Matrix2</code>](./Matrix#module_Matrix2..Matrix2)  
**Returns**: <code>Matrix2</code> - This matrix  

| Param | Type | Description |
| --- | --- | --- |
| matrix | <code>matrix</code> | The 2 x 2 matrix to post-multiply this matrix to. |


* * *

