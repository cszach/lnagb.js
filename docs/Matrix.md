<a name="module_Matrix"></a>

## Matrix
Contains the [Matrix](#module_Matrix..Matrix) class, which encodes basic matrices
of any size in linear algebra.

**Author**: Nguyen Hoang Duong / <novakcgx@protonmail.com>  

* [Matrix](#module_Matrix)
    * [~Matrix](#module_Matrix..Matrix)
        * [new Matrix(nRows, nColumns, entries)](#new_module_Matrix..Matrix_new)
        * _instance_
            * [.size](#module_Matrix..Matrix+size) : <code>object</code>
            * [.numberOfEntries](#module_Matrix..Matrix+numberOfEntries) : <code>number</code>
            * [.elements](#module_Matrix..Matrix+elements) : <code>Array.&lt;number&gt;</code>
            * [.rows](#module_Matrix..Matrix+rows) ⇒ <code>Array.&lt;Array&gt;</code>
            * [.columns](#module_Matrix..Matrix+columns) ⇒ <code>Array.&lt;Array&gt;</code>
            * [.mainDiagonal](#module_Matrix..Matrix+mainDiagonal) ⇒ <code>Array.&lt;number&gt;</code>
            * [.clone()](#module_Matrix..Matrix+clone) ⇒ <code>Matrix</code>
            * [.equals(matrix)](#module_Matrix..Matrix+equals) ⇒ <code>boolean</code>
            * [.entry(i, j)](#module_Matrix..Matrix+entry) ⇒ <code>number</code>
            * [.row(r)](#module_Matrix..Matrix+row) ⇒ <code>Array.&lt;number&gt;</code>
            * [.column(c)](#module_Matrix..Matrix+column) ⇒ <code>Array.&lt;number&gt;</code>
            * [.leadingCoefficient(r)](#module_Matrix..Matrix+leadingCoefficient) ⇒ <code>number</code>
            * [.forEach(callback, thisArg)](#module_Matrix..Matrix+forEach)
            * [.forEachRow(callback, thisArg)](#module_Matrix..Matrix+forEachRow)
            * [.forEachColumn(callback, thisArg)](#module_Matrix..Matrix+forEachColumn)
            * [.interchargeRows(r, s)](#module_Matrix..Matrix+interchargeRows) ⇒ <code>Matrix</code>
            * [.multiplyRowByScalar(r, k)](#module_Matrix..Matrix+multiplyRowByScalar) ⇒ <code>Matrix</code>
            * [.addRowTimesScalarToRow(r, s, k)](#module_Matrix..Matrix+addRowTimesScalarToRow) ⇒ <code>Matrix</code>
            * [.transpose()](#module_Matrix..Matrix+transpose) ⇒ <code>Matrix</code>
            * [.multiplyScalar(k)](#module_Matrix..Matrix+multiplyScalar) ⇒ <code>Matrix</code>
            * [.negate()](#module_Matrix..Matrix+negate) ⇒ <code>Matrix</code>
            * [.add(matrix)](#module_Matrix..Matrix+add) ⇒ <code>Matrix</code>
            * [.sub(matrix)](#module_Matrix..Matrix+sub) ⇒ <code>Matrix</code>
            * [.multiply(matrix)](#module_Matrix..Matrix+multiply) ⇒ <code>Matrix</code>
        * _inner_
            * [~forEach](#module_Matrix..Matrix..forEach) : <code>function</code>
            * [~forEachRow](#module_Matrix..Matrix..forEachRow) : <code>function</code>
            * [~forEachColumn](#module_Matrix..Matrix..forEachColumn) : <code>function</code>


* * *

<a name="module_Matrix..Matrix"></a>

### Matrix~Matrix
Low-level, speed-prioritized class that encodes matrices and their operations.
A matrix is encoded by storing its elements - in **row-major** order for
lnagb.js - and its dimensions (see instance properties
[elements](#module_Matrix..Matrix+elements) and [size](#module_Matrix..Matrix+size)).

This class should be used to work with large matrices of arbitrary dimensions.
For small matrices, see [module:Matrix1~Matrix1](module:Matrix1~Matrix1),
[Matrix2](./Matrix2#module_Matrix2..Matrix2), [Matrix3](./Matrix3#module_Matrix3..Matrix3),
[Matrix4](./Matrix4#module_Matrix4..Matrix4), [module:Matrix2x3~Matrix2x3](module:Matrix2x3~Matrix2x3),
[module:Matrix3x2~Matrix3x2](module:Matrix3x2~Matrix3x2).

**Kind**: inner class of [<code>Matrix</code>](#module_Matrix)  

* [~Matrix](#module_Matrix..Matrix)
    * [new Matrix(nRows, nColumns, entries)](#new_module_Matrix..Matrix_new)
    * _instance_
        * [.size](#module_Matrix..Matrix+size) : <code>object</code>
        * [.numberOfEntries](#module_Matrix..Matrix+numberOfEntries) : <code>number</code>
        * [.elements](#module_Matrix..Matrix+elements) : <code>Array.&lt;number&gt;</code>
        * [.rows](#module_Matrix..Matrix+rows) ⇒ <code>Array.&lt;Array&gt;</code>
        * [.columns](#module_Matrix..Matrix+columns) ⇒ <code>Array.&lt;Array&gt;</code>
        * [.mainDiagonal](#module_Matrix..Matrix+mainDiagonal) ⇒ <code>Array.&lt;number&gt;</code>
        * [.clone()](#module_Matrix..Matrix+clone) ⇒ <code>Matrix</code>
        * [.equals(matrix)](#module_Matrix..Matrix+equals) ⇒ <code>boolean</code>
        * [.entry(i, j)](#module_Matrix..Matrix+entry) ⇒ <code>number</code>
        * [.row(r)](#module_Matrix..Matrix+row) ⇒ <code>Array.&lt;number&gt;</code>
        * [.column(c)](#module_Matrix..Matrix+column) ⇒ <code>Array.&lt;number&gt;</code>
        * [.leadingCoefficient(r)](#module_Matrix..Matrix+leadingCoefficient) ⇒ <code>number</code>
        * [.forEach(callback, thisArg)](#module_Matrix..Matrix+forEach)
        * [.forEachRow(callback, thisArg)](#module_Matrix..Matrix+forEachRow)
        * [.forEachColumn(callback, thisArg)](#module_Matrix..Matrix+forEachColumn)
        * [.interchargeRows(r, s)](#module_Matrix..Matrix+interchargeRows) ⇒ <code>Matrix</code>
        * [.multiplyRowByScalar(r, k)](#module_Matrix..Matrix+multiplyRowByScalar) ⇒ <code>Matrix</code>
        * [.addRowTimesScalarToRow(r, s, k)](#module_Matrix..Matrix+addRowTimesScalarToRow) ⇒ <code>Matrix</code>
        * [.transpose()](#module_Matrix..Matrix+transpose) ⇒ <code>Matrix</code>
        * [.multiplyScalar(k)](#module_Matrix..Matrix+multiplyScalar) ⇒ <code>Matrix</code>
        * [.negate()](#module_Matrix..Matrix+negate) ⇒ <code>Matrix</code>
        * [.add(matrix)](#module_Matrix..Matrix+add) ⇒ <code>Matrix</code>
        * [.sub(matrix)](#module_Matrix..Matrix+sub) ⇒ <code>Matrix</code>
        * [.multiply(matrix)](#module_Matrix..Matrix+multiply) ⇒ <code>Matrix</code>
    * _inner_
        * [~forEach](#module_Matrix..Matrix..forEach) : <code>function</code>
        * [~forEachRow](#module_Matrix..Matrix..forEachRow) : <code>function</code>
        * [~forEachColumn](#module_Matrix..Matrix..forEachColumn) : <code>function</code>


* * *

<a name="new_module_Matrix..Matrix_new"></a>

#### new Matrix(nRows, nColumns, entries)
Constructs a new `Matrix` instance, which encodes a matrix. To create a
zero matrix, leave `entries` `undefined`. To create an identity matrix,
see [IdentityMatrix](./IdentityMatrix#module_IdentityMatrix..IdentityMatrix).


| Param | Type | Description |
| --- | --- | --- |
| nRows | <code>number</code> | Number of rows in the new matrix. |
| nColumns | <code>number</code> | Number of columns in the matrix. |
| entries | <code>Array.&lt;number&gt;</code> | Entries of the matrix in row-major order. |


* * *

<a name="module_Matrix..Matrix+size"></a>

#### matrix.size : <code>object</code>
Contains the dimensions of this matrix as an object in the
form `{ rows, columns }`.

**Kind**: instance property of [<code>Matrix</code>](#module_Matrix..Matrix)  

* * *

<a name="module_Matrix..Matrix+numberOfEntries"></a>

#### matrix.numberOfEntries : <code>number</code>
The number of entries in this matrix.

**Kind**: instance property of [<code>Matrix</code>](#module_Matrix..Matrix)  

* * *

<a name="module_Matrix..Matrix+elements"></a>

#### matrix.elements : <code>Array.&lt;number&gt;</code>
Stores the elements of this matrix in **row-major** order.

**Kind**: instance property of [<code>Matrix</code>](#module_Matrix..Matrix)  

* * *

<a name="module_Matrix..Matrix+rows"></a>

#### matrix.rows ⇒ <code>Array.&lt;Array&gt;</code>
Returns the rows of this matrix in an array.

**Kind**: instance property of [<code>Matrix</code>](#module_Matrix..Matrix)  
**Returns**: <code>Array.&lt;Array&gt;</code> - The rows in this matrix  

* * *

<a name="module_Matrix..Matrix+columns"></a>

#### matrix.columns ⇒ <code>Array.&lt;Array&gt;</code>
Returns the columns of this matrix in an array.

**Kind**: instance property of [<code>Matrix</code>](#module_Matrix..Matrix)  
**Returns**: <code>Array.&lt;Array&gt;</code> - The columns in this matrix  

* * *

<a name="module_Matrix..Matrix+mainDiagonal"></a>

#### matrix.mainDiagonal ⇒ <code>Array.&lt;number&gt;</code>
Returns the main diagonal of this matrix.

**Kind**: instance property of [<code>Matrix</code>](#module_Matrix..Matrix)  
**Returns**: <code>Array.&lt;number&gt;</code> - The entries in the main diagonal of this matrix  

* * *

<a name="module_Matrix..Matrix+clone"></a>

#### matrix.clone() ⇒ <code>Matrix</code>
Creates and returns a clone of this matrix instance.

**Kind**: instance method of [<code>Matrix</code>](#module_Matrix..Matrix)  
**Returns**: <code>Matrix</code> - A clone of this instance  

* * *

<a name="module_Matrix..Matrix+equals"></a>

#### matrix.equals(matrix) ⇒ <code>boolean</code>
Checks if this matrix and another matrix are equal.

**Kind**: instance method of [<code>Matrix</code>](#module_Matrix..Matrix)  
**Returns**: <code>boolean</code> - `true` if the two matrices are equal, `false` otherwise  

| Param | Type | Description |
| --- | --- | --- |
| matrix | <code>Matrix</code> | The matrix to compare this matrix to. |


* * *

<a name="module_Matrix..Matrix+entry"></a>

#### matrix.entry(i, j) ⇒ <code>number</code>
Returns the entry in the specified row and column in this matrix.

**Kind**: instance method of [<code>Matrix</code>](#module_Matrix..Matrix)  
**Returns**: <code>number</code> - The entry  

| Param | Type | Description |
| --- | --- | --- |
| i | <code>number</code> | The row that contains the entry (1-indexed). |
| j | <code>number</code> | The column that contains the entry (1-indexed). |


* * *

<a name="module_Matrix..Matrix+row"></a>

#### matrix.row(r) ⇒ <code>Array.&lt;number&gt;</code>
Returns a row in this matrix as a JavaScript array.

**Kind**: instance method of [<code>Matrix</code>](#module_Matrix..Matrix)  
**Returns**: <code>Array.&lt;number&gt;</code> - The row's entries  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | Row number (1-indexed). |


* * *

<a name="module_Matrix..Matrix+column"></a>

#### matrix.column(c) ⇒ <code>Array.&lt;number&gt;</code>
Returns a column in this matrix as a JavaScript array.

**Kind**: instance method of [<code>Matrix</code>](#module_Matrix..Matrix)  
**Returns**: <code>Array.&lt;number&gt;</code> - The column's entries  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>number</code> | Column number (1-indexed). |


* * *

<a name="module_Matrix..Matrix+leadingCoefficient"></a>

#### matrix.leadingCoefficient(r) ⇒ <code>number</code>
Returns the leading coefficient of a row, or `undefined` if the row does
not have a leading coefficient.

**Kind**: instance method of [<code>Matrix</code>](#module_Matrix..Matrix)  
**Returns**: <code>number</code> - The leading coefficient of the row  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | Row number (1-indexed). |


* * *

<a name="module_Matrix..Matrix+forEach"></a>

#### matrix.forEach(callback, thisArg)
Executes a function for each entry in this matrix. Entries are iterated in
row-major order.

**Kind**: instance method of [<code>Matrix</code>](#module_Matrix..Matrix)  

| Param | Type | Description |
| --- | --- | --- |
| callback | [<code>forEach</code>](#module_Matrix..Matrix..forEach) | The function to execute per iteration. |
| thisArg | <code>object</code> | The argument to use as `this` in the function. |


* * *

<a name="module_Matrix..Matrix+forEachRow"></a>

#### matrix.forEachRow(callback, thisArg)
Executes a function for each row in this matrix.

**Kind**: instance method of [<code>Matrix</code>](#module_Matrix..Matrix)  

| Param | Type | Description |
| --- | --- | --- |
| callback | [<code>forEachRow</code>](#module_Matrix..Matrix..forEachRow) | The function to execute per iteration. |
| thisArg | <code>object</code> | The argument to use as `this` in the function. |


* * *

<a name="module_Matrix..Matrix+forEachColumn"></a>

#### matrix.forEachColumn(callback, thisArg)
Executes a function for each column in this matrix.

**Kind**: instance method of [<code>Matrix</code>](#module_Matrix..Matrix)  

| Param | Type | Description |
| --- | --- | --- |
| callback | [<code>forEachColumn</code>](#module_Matrix..Matrix..forEachColumn) | The function to execute per iteration. |
| thisArg | <code>object</code> | The argument to use as `this` in the function. |


* * *

<a name="module_Matrix..Matrix+interchargeRows"></a>

#### matrix.interchargeRows(r, s) ⇒ <code>Matrix</code>
Intercharges two rows in this matrix.

**Kind**: instance method of [<code>Matrix</code>](#module_Matrix..Matrix)  
**Returns**: <code>Matrix</code> - This matrix  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | First row number (1-indexed). |
| s | <code>number</code> | Second row number (1-indexed). |


* * *

<a name="module_Matrix..Matrix+multiplyRowByScalar"></a>

#### matrix.multiplyRowByScalar(r, k) ⇒ <code>Matrix</code>
Multiplies a row in this matrix by a nonzero scalar.

**Kind**: instance method of [<code>Matrix</code>](#module_Matrix..Matrix)  
**Returns**: <code>Matrix</code> - This matrix  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | Row number (1-indexed). |
| k | <code>number</code> | The nonzero scalar to multiply the row by. |


* * *

<a name="module_Matrix..Matrix+addRowTimesScalarToRow"></a>

#### matrix.addRowTimesScalarToRow(r, s, k) ⇒ <code>Matrix</code>
Adds multiples of a row to another row in this matrix.

**Kind**: instance method of [<code>Matrix</code>](#module_Matrix..Matrix)  
**Returns**: <code>Matrix</code> - This matrix  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| r | <code>number</code> |  | The row that gets added (1-indexed position). |
| s | <code>number</code> |  | The row to multiply the scalar by and then add to row `r` (1-indexed position). |
| k | <code>number</code> | <code>1</code> | The scalar to multiply row `s` by. |


* * *

<a name="module_Matrix..Matrix+transpose"></a>

#### matrix.transpose() ⇒ <code>Matrix</code>
Transposes this matrix *in place*.

**Kind**: instance method of [<code>Matrix</code>](#module_Matrix..Matrix)  
**Returns**: <code>Matrix</code> - This matrix  
**Todo**

- [ ] Optimize this method by removing the medium


* * *

<a name="module_Matrix..Matrix+multiplyScalar"></a>

#### matrix.multiplyScalar(k) ⇒ <code>Matrix</code>
Multiplies this matrix by a scalar.

**Kind**: instance method of [<code>Matrix</code>](#module_Matrix..Matrix)  
**Returns**: <code>Matrix</code> - This matrix  

| Param | Type | Description |
| --- | --- | --- |
| k | <code>number</code> | The scalar to multiply this matrix by. |


* * *

<a name="module_Matrix..Matrix+negate"></a>

#### matrix.negate() ⇒ <code>Matrix</code>
Multiplies this matrix by -1.

**Kind**: instance method of [<code>Matrix</code>](#module_Matrix..Matrix)  
**Returns**: <code>Matrix</code> - This matrix  

* * *

<a name="module_Matrix..Matrix+add"></a>

#### matrix.add(matrix) ⇒ <code>Matrix</code>
Adds a matrix to this matrix.

**Kind**: instance method of [<code>Matrix</code>](#module_Matrix..Matrix)  
**Returns**: <code>Matrix</code> - This matrix  

| Param | Type | Description |
| --- | --- | --- |
| matrix | <code>Matrix</code> | The matrix to add to this matrix. |


* * *

<a name="module_Matrix..Matrix+sub"></a>

#### matrix.sub(matrix) ⇒ <code>Matrix</code>
Subtracts a matrix from this matrix.

**Kind**: instance method of [<code>Matrix</code>](#module_Matrix..Matrix)  
**Returns**: <code>Matrix</code> - This matrix  

| Param | Type | Description |
| --- | --- | --- |
| matrix | <code>Matrix</code> | The matrix to subtract this matrix to. |


* * *

<a name="module_Matrix..Matrix+multiply"></a>

#### matrix.multiply(matrix) ⇒ <code>Matrix</code>
Multiplies this matrix by another matrix. If the input matrix is not
compatible for multiplication, return this matrix unchanged.

**Kind**: instance method of [<code>Matrix</code>](#module_Matrix..Matrix)  
**Returns**: <code>Matrix</code> - This matrix  

| Param | Type | Description |
| --- | --- | --- |
| matrix | <code>Matrix</code> | The matrix to post-multiply this matrix to. |


* * *

<a name="module_Matrix..Matrix..forEach"></a>

#### Matrix~forEach : <code>function</code>
**Kind**: inner typedef of [<code>Matrix</code>](#module_Matrix..Matrix)  

| Param | Type | Description |
| --- | --- | --- |
| entry | <code>number</code> | The current entry being processed. |
| i | <code>number</code> | The entry's row number (1-indexed). |
| j | <code>number</code> | The entry's column number (1-indexed). |
| index | <code>number</code> | The index of the entry in `this.elements` (0-indexed). |
| matrix | <code>Matrix</code> | The instance that this method was called upon. |


* * *

<a name="module_Matrix..Matrix..forEachRow"></a>

#### Matrix~forEachRow : <code>function</code>
**Kind**: inner typedef of [<code>Matrix</code>](#module_Matrix..Matrix)  

| Param | Type | Description |
| --- | --- | --- |
| row | <code>Array.&lt;number&gt;</code> | The row being processed (with its entries). |
| r | <code>number</code> | The row's number (1-indexed). |
| matrix | <code>Matrix</code> | The instance that this method was called upon. |


* * *

<a name="module_Matrix..Matrix..forEachColumn"></a>

#### Matrix~forEachColumn : <code>function</code>
**Kind**: inner typedef of [<code>Matrix</code>](#module_Matrix..Matrix)  

| Param | Type | Description |
| --- | --- | --- |
| column | <code>Array.&lt;number&gt;</code> | The column being processed. |
| c | <code>number</code> | The's column number (1-indexed). |
| matrix | <code>Matrix</code> | The instance that this method was called upon. |


* * *

