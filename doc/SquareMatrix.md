<a name="module_SquareMatrix"></a>

## SquareMatrix
Contains the [SquareMatrix](#module_SquareMatrix..SquareMatrix) class, which is similar
to the [Matrix](./Matrix#module_Matrix..Matrix) class but only encodes square matrices.

**Author**: Novak / <cszach@proton.me>  

* [SquareMatrix](#module_SquareMatrix)
    * [~SquareMatrix](#module_SquareMatrix..SquareMatrix) ⇐ [<code>Matrix</code>](./Matrix#module_Matrix..Matrix)
        * [new SquareMatrix(size, entries)](#new_module_SquareMatrix..SquareMatrix_new)
        * [.size](./Matrix#module_Matrix..Matrix+size) : <code>object</code>
        * [.numberOfEntries](./Matrix#module_Matrix..Matrix+numberOfEntries) : <code>number</code>
        * [.elements](./Matrix#module_Matrix..Matrix+elements) : <code>Array.&lt;number&gt;</code>
        * [.rows](./Matrix#module_Matrix..Matrix+rows) ⇒ <code>Array.&lt;Array&gt;</code>
        * [.columns](./Matrix#module_Matrix..Matrix+columns) ⇒ <code>Array.&lt;Array&gt;</code>
        * [.mainDiagonal](./Matrix#module_Matrix..Matrix+mainDiagonal) ⇒ <code>Array.&lt;number&gt;</code>
        * [.identity()](#module_SquareMatrix..SquareMatrix+identity) ⇒ <code>SquareMatrix</code>
        * [.clone()](./Matrix#module_Matrix..Matrix+clone) ⇒ <code>Matrix</code>
        * [.equals(matrix)](./Matrix#module_Matrix..Matrix+equals) ⇒ <code>boolean</code>
        * [.entry(i, j)](./Matrix#module_Matrix..Matrix+entry) ⇒ <code>number</code>
        * [.row(r)](./Matrix#module_Matrix..Matrix+row) ⇒ <code>Array.&lt;number&gt;</code>
        * [.column(c)](./Matrix#module_Matrix..Matrix+column) ⇒ <code>Array.&lt;number&gt;</code>
        * [.leadingCoefficient(r)](./Matrix#module_Matrix..Matrix+leadingCoefficient) ⇒ <code>number</code>
        * [.forEach(callback, thisArg)](./Matrix#module_Matrix..Matrix+forEach)
        * [.forEachRow(callback, thisArg)](./Matrix#module_Matrix..Matrix+forEachRow)
        * [.forEachColumn(callback, thisArg)](./Matrix#module_Matrix..Matrix+forEachColumn)
        * [.interchargeRows(r, s)](./Matrix#module_Matrix..Matrix+interchargeRows) ⇒ <code>Matrix</code>
        * [.multiplyRowByScalar(r, k)](./Matrix#module_Matrix..Matrix+multiplyRowByScalar) ⇒ <code>Matrix</code>
        * [.addRowTimesScalarToRow(r, s, k)](./Matrix#module_Matrix..Matrix+addRowTimesScalarToRow) ⇒ <code>Matrix</code>
        * [.transpose()](./Matrix#module_Matrix..Matrix+transpose) ⇒ <code>Matrix</code>
        * [.multiplyScalar(k)](./Matrix#module_Matrix..Matrix+multiplyScalar) ⇒ <code>Matrix</code>
        * [.negate()](./Matrix#module_Matrix..Matrix+negate) ⇒ <code>Matrix</code>
        * [.add(matrix)](./Matrix#module_Matrix..Matrix+add) ⇒ <code>Matrix</code>
        * [.sub(matrix)](./Matrix#module_Matrix..Matrix+sub) ⇒ <code>Matrix</code>
        * [.multiply(matrix)](./Matrix#module_Matrix..Matrix+multiply) ⇒ <code>Matrix</code>


* * *

<a name="module_SquareMatrix..SquareMatrix"></a>

### SquareMatrix~SquareMatrix ⇐ [<code>Matrix</code>](./Matrix#module_Matrix..Matrix)
Encodes square matrices.

**Kind**: inner class of [<code>SquareMatrix</code>](#module_SquareMatrix)  
**Extends**: [<code>Matrix</code>](./Matrix#module_Matrix..Matrix)  

* [~SquareMatrix](#module_SquareMatrix..SquareMatrix) ⇐ [<code>Matrix</code>](./Matrix#module_Matrix..Matrix)
    * [new SquareMatrix(size, entries)](#new_module_SquareMatrix..SquareMatrix_new)
    * [.size](./Matrix#module_Matrix..Matrix+size) : <code>object</code>
    * [.numberOfEntries](./Matrix#module_Matrix..Matrix+numberOfEntries) : <code>number</code>
    * [.elements](./Matrix#module_Matrix..Matrix+elements) : <code>Array.&lt;number&gt;</code>
    * [.rows](./Matrix#module_Matrix..Matrix+rows) ⇒ <code>Array.&lt;Array&gt;</code>
    * [.columns](./Matrix#module_Matrix..Matrix+columns) ⇒ <code>Array.&lt;Array&gt;</code>
    * [.mainDiagonal](./Matrix#module_Matrix..Matrix+mainDiagonal) ⇒ <code>Array.&lt;number&gt;</code>
    * [.identity()](#module_SquareMatrix..SquareMatrix+identity) ⇒ <code>SquareMatrix</code>
    * [.clone()](./Matrix#module_Matrix..Matrix+clone) ⇒ <code>Matrix</code>
    * [.equals(matrix)](./Matrix#module_Matrix..Matrix+equals) ⇒ <code>boolean</code>
    * [.entry(i, j)](./Matrix#module_Matrix..Matrix+entry) ⇒ <code>number</code>
    * [.row(r)](./Matrix#module_Matrix..Matrix+row) ⇒ <code>Array.&lt;number&gt;</code>
    * [.column(c)](./Matrix#module_Matrix..Matrix+column) ⇒ <code>Array.&lt;number&gt;</code>
    * [.leadingCoefficient(r)](./Matrix#module_Matrix..Matrix+leadingCoefficient) ⇒ <code>number</code>
    * [.forEach(callback, thisArg)](./Matrix#module_Matrix..Matrix+forEach)
    * [.forEachRow(callback, thisArg)](./Matrix#module_Matrix..Matrix+forEachRow)
    * [.forEachColumn(callback, thisArg)](./Matrix#module_Matrix..Matrix+forEachColumn)
    * [.interchargeRows(r, s)](./Matrix#module_Matrix..Matrix+interchargeRows) ⇒ <code>Matrix</code>
    * [.multiplyRowByScalar(r, k)](./Matrix#module_Matrix..Matrix+multiplyRowByScalar) ⇒ <code>Matrix</code>
    * [.addRowTimesScalarToRow(r, s, k)](./Matrix#module_Matrix..Matrix+addRowTimesScalarToRow) ⇒ <code>Matrix</code>
    * [.transpose()](./Matrix#module_Matrix..Matrix+transpose) ⇒ <code>Matrix</code>
    * [.multiplyScalar(k)](./Matrix#module_Matrix..Matrix+multiplyScalar) ⇒ <code>Matrix</code>
    * [.negate()](./Matrix#module_Matrix..Matrix+negate) ⇒ <code>Matrix</code>
    * [.add(matrix)](./Matrix#module_Matrix..Matrix+add) ⇒ <code>Matrix</code>
    * [.sub(matrix)](./Matrix#module_Matrix..Matrix+sub) ⇒ <code>Matrix</code>
    * [.multiply(matrix)](./Matrix#module_Matrix..Matrix+multiply) ⇒ <code>Matrix</code>


* * *

<a name="new_module_SquareMatrix..SquareMatrix_new"></a>

#### new SquareMatrix(size, entries)
Constructs a `SquareMatrix` instance.

`entries` is optional. If not given, the constructor will create a zero
square matrix.


| Param | Type | Description |
| --- | --- | --- |
| size | <code>number</code> | The number of rows (or columns) for the new matrix. |
| entries | <code>Array.&lt;number&gt;</code> | The entries in row-major order for the new matrix. |


* * *

<a name="module_Matrix..Matrix+size"></a>

#### squareMatrix.size : <code>object</code>
Contains the dimensions of this matrix as an object in the
form `{ rows, columns }`.

**Kind**: instance property of [<code>SquareMatrix</code>](#module_SquareMatrix..SquareMatrix)  
**Overrides**: [<code>size</code>](./Matrix#module_Matrix..Matrix+size)  

* * *

<a name="module_Matrix..Matrix+numberOfEntries"></a>

#### squareMatrix.numberOfEntries : <code>number</code>
The number of entries in this matrix.

**Kind**: instance property of [<code>SquareMatrix</code>](#module_SquareMatrix..SquareMatrix)  
**Overrides**: [<code>numberOfEntries</code>](./Matrix#module_Matrix..Matrix+numberOfEntries)  

* * *

<a name="module_Matrix..Matrix+elements"></a>

#### squareMatrix.elements : <code>Array.&lt;number&gt;</code>
Stores the elements of this matrix in **row-major** order.

**Kind**: instance property of [<code>SquareMatrix</code>](#module_SquareMatrix..SquareMatrix)  
**Overrides**: [<code>elements</code>](./Matrix#module_Matrix..Matrix+elements)  

* * *

<a name="module_Matrix..Matrix+rows"></a>

#### squareMatrix.rows ⇒ <code>Array.&lt;Array&gt;</code>
Returns the rows of this matrix in an array.

**Kind**: instance property of [<code>SquareMatrix</code>](#module_SquareMatrix..SquareMatrix)  
**Overrides**: [<code>rows</code>](./Matrix#module_Matrix..Matrix+rows)  
**Returns**: <code>Array.&lt;Array&gt;</code> - The rows in this matrix  

* * *

<a name="module_Matrix..Matrix+columns"></a>

#### squareMatrix.columns ⇒ <code>Array.&lt;Array&gt;</code>
Returns the columns of this matrix in an array.

**Kind**: instance property of [<code>SquareMatrix</code>](#module_SquareMatrix..SquareMatrix)  
**Overrides**: [<code>columns</code>](./Matrix#module_Matrix..Matrix+columns)  
**Returns**: <code>Array.&lt;Array&gt;</code> - The columns in this matrix  

* * *

<a name="module_Matrix..Matrix+mainDiagonal"></a>

#### squareMatrix.mainDiagonal ⇒ <code>Array.&lt;number&gt;</code>
Returns the main diagonal of this matrix.

**Kind**: instance property of [<code>SquareMatrix</code>](#module_SquareMatrix..SquareMatrix)  
**Overrides**: [<code>mainDiagonal</code>](./Matrix#module_Matrix..Matrix+mainDiagonal)  
**Returns**: <code>Array.&lt;number&gt;</code> - The entries in the main diagonal of this matrix  

* * *

<a name="module_SquareMatrix..SquareMatrix+identity"></a>

#### squareMatrix.identity() ⇒ <code>SquareMatrix</code>
Makes this square matrix an identity matrix.

**Kind**: instance method of [<code>SquareMatrix</code>](#module_SquareMatrix..SquareMatrix)  
**Returns**: <code>SquareMatrix</code> - This matrix  

* * *

<a name="module_Matrix..Matrix+clone"></a>

#### squareMatrix.clone() ⇒ <code>Matrix</code>
Creates and returns a clone of this matrix instance.

**Kind**: instance method of [<code>SquareMatrix</code>](#module_SquareMatrix..SquareMatrix)  
**Overrides**: [<code>clone</code>](./Matrix#module_Matrix..Matrix+clone)  
**Returns**: <code>Matrix</code> - A clone of this instance  

* * *

<a name="module_Matrix..Matrix+equals"></a>

#### squareMatrix.equals(matrix) ⇒ <code>boolean</code>
Checks if this matrix and another matrix are equal.

**Kind**: instance method of [<code>SquareMatrix</code>](#module_SquareMatrix..SquareMatrix)  
**Overrides**: [<code>equals</code>](./Matrix#module_Matrix..Matrix+equals)  
**Returns**: <code>boolean</code> - `true` if the two matrices are equal, `false` otherwise  

| Param | Type | Description |
| --- | --- | --- |
| matrix | <code>Matrix</code> | The matrix to compare this matrix to. |


* * *

<a name="module_Matrix..Matrix+entry"></a>

#### squareMatrix.entry(i, j) ⇒ <code>number</code>
Returns the entry in the specified row and column in this matrix.

**Kind**: instance method of [<code>SquareMatrix</code>](#module_SquareMatrix..SquareMatrix)  
**Overrides**: [<code>entry</code>](./Matrix#module_Matrix..Matrix+entry)  
**Returns**: <code>number</code> - The entry  

| Param | Type | Description |
| --- | --- | --- |
| i | <code>number</code> | The row that contains the entry (1-indexed). |
| j | <code>number</code> | The column that contains the entry (1-indexed). |


* * *

<a name="module_Matrix..Matrix+row"></a>

#### squareMatrix.row(r) ⇒ <code>Array.&lt;number&gt;</code>
Returns a row in this matrix as a JavaScript array.

**Kind**: instance method of [<code>SquareMatrix</code>](#module_SquareMatrix..SquareMatrix)  
**Overrides**: [<code>row</code>](./Matrix#module_Matrix..Matrix+row)  
**Returns**: <code>Array.&lt;number&gt;</code> - The row's entries  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | Row number (1-indexed). |


* * *

<a name="module_Matrix..Matrix+column"></a>

#### squareMatrix.column(c) ⇒ <code>Array.&lt;number&gt;</code>
Returns a column in this matrix as a JavaScript array.

**Kind**: instance method of [<code>SquareMatrix</code>](#module_SquareMatrix..SquareMatrix)  
**Overrides**: [<code>column</code>](./Matrix#module_Matrix..Matrix+column)  
**Returns**: <code>Array.&lt;number&gt;</code> - The column's entries  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>number</code> | Column number (1-indexed). |


* * *

<a name="module_Matrix..Matrix+leadingCoefficient"></a>

#### squareMatrix.leadingCoefficient(r) ⇒ <code>number</code>
Returns the leading coefficient of a row, or `undefined` if the row does
not have a leading coefficient.

**Kind**: instance method of [<code>SquareMatrix</code>](#module_SquareMatrix..SquareMatrix)  
**Overrides**: [<code>leadingCoefficient</code>](./Matrix#module_Matrix..Matrix+leadingCoefficient)  
**Returns**: <code>number</code> - The leading coefficient of the row  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | Row number (1-indexed). |


* * *

<a name="module_Matrix..Matrix+forEach"></a>

#### squareMatrix.forEach(callback, thisArg)
Executes a function for each entry in this matrix. Entries are iterated in
row-major order.

**Kind**: instance method of [<code>SquareMatrix</code>](#module_SquareMatrix..SquareMatrix)  
**Overrides**: [<code>forEach</code>](./Matrix#module_Matrix..Matrix+forEach)  

| Param | Type | Description |
| --- | --- | --- |
| callback | [<code>forEach</code>](./Matrix#module_Matrix..Matrix..forEach) | The function to execute per iteration. |
| thisArg | <code>object</code> | The argument to use as `this` in the function. |


* * *

<a name="module_Matrix..Matrix+forEachRow"></a>

#### squareMatrix.forEachRow(callback, thisArg)
Executes a function for each row in this matrix.

**Kind**: instance method of [<code>SquareMatrix</code>](#module_SquareMatrix..SquareMatrix)  
**Overrides**: [<code>forEachRow</code>](./Matrix#module_Matrix..Matrix+forEachRow)  

| Param | Type | Description |
| --- | --- | --- |
| callback | [<code>forEachRow</code>](./Matrix#module_Matrix..Matrix..forEachRow) | The function to execute per iteration. |
| thisArg | <code>object</code> | The argument to use as `this` in the function. |


* * *

<a name="module_Matrix..Matrix+forEachColumn"></a>

#### squareMatrix.forEachColumn(callback, thisArg)
Executes a function for each column in this matrix.

**Kind**: instance method of [<code>SquareMatrix</code>](#module_SquareMatrix..SquareMatrix)  
**Overrides**: [<code>forEachColumn</code>](./Matrix#module_Matrix..Matrix+forEachColumn)  

| Param | Type | Description |
| --- | --- | --- |
| callback | [<code>forEachColumn</code>](./Matrix#module_Matrix..Matrix..forEachColumn) | The function to execute per iteration. |
| thisArg | <code>object</code> | The argument to use as `this` in the function. |


* * *

<a name="module_Matrix..Matrix+interchargeRows"></a>

#### squareMatrix.interchargeRows(r, s) ⇒ <code>Matrix</code>
Intercharges two rows in this matrix.

**Kind**: instance method of [<code>SquareMatrix</code>](#module_SquareMatrix..SquareMatrix)  
**Overrides**: [<code>interchargeRows</code>](./Matrix#module_Matrix..Matrix+interchargeRows)  
**Returns**: <code>Matrix</code> - This matrix  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | First row number (1-indexed). |
| s | <code>number</code> | Second row number (1-indexed). |


* * *

<a name="module_Matrix..Matrix+multiplyRowByScalar"></a>

#### squareMatrix.multiplyRowByScalar(r, k) ⇒ <code>Matrix</code>
Multiplies a row in this matrix by a nonzero scalar.

**Kind**: instance method of [<code>SquareMatrix</code>](#module_SquareMatrix..SquareMatrix)  
**Overrides**: [<code>multiplyRowByScalar</code>](./Matrix#module_Matrix..Matrix+multiplyRowByScalar)  
**Returns**: <code>Matrix</code> - This matrix  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | Row number (1-indexed). |
| k | <code>number</code> | The nonzero scalar to multiply the row by. |


* * *

<a name="module_Matrix..Matrix+addRowTimesScalarToRow"></a>

#### squareMatrix.addRowTimesScalarToRow(r, s, k) ⇒ <code>Matrix</code>
Adds multiples of a row to another row in this matrix.

**Kind**: instance method of [<code>SquareMatrix</code>](#module_SquareMatrix..SquareMatrix)  
**Overrides**: [<code>addRowTimesScalarToRow</code>](./Matrix#module_Matrix..Matrix+addRowTimesScalarToRow)  
**Returns**: <code>Matrix</code> - This matrix  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| r | <code>number</code> |  | The row that gets added (1-indexed position). |
| s | <code>number</code> |  | The row to multiply the scalar by and then add to row `r` (1-indexed position). |
| k | <code>number</code> | <code>1</code> | The scalar to multiply row `s` by. |


* * *

<a name="module_Matrix..Matrix+transpose"></a>

#### squareMatrix.transpose() ⇒ <code>Matrix</code>
Transposes this matrix *in place*.

**Kind**: instance method of [<code>SquareMatrix</code>](#module_SquareMatrix..SquareMatrix)  
**Overrides**: [<code>transpose</code>](./Matrix#module_Matrix..Matrix+transpose)  
**Returns**: <code>Matrix</code> - This matrix  
**Todo**

- [ ] Optimize this method by removing the medium


* * *

<a name="module_Matrix..Matrix+multiplyScalar"></a>

#### squareMatrix.multiplyScalar(k) ⇒ <code>Matrix</code>
Multiplies this matrix by a scalar.

**Kind**: instance method of [<code>SquareMatrix</code>](#module_SquareMatrix..SquareMatrix)  
**Overrides**: [<code>multiplyScalar</code>](./Matrix#module_Matrix..Matrix+multiplyScalar)  
**Returns**: <code>Matrix</code> - This matrix  

| Param | Type | Description |
| --- | --- | --- |
| k | <code>number</code> | The scalar to multiply this matrix by. |


* * *

<a name="module_Matrix..Matrix+negate"></a>

#### squareMatrix.negate() ⇒ <code>Matrix</code>
Multiplies this matrix by -1.

**Kind**: instance method of [<code>SquareMatrix</code>](#module_SquareMatrix..SquareMatrix)  
**Overrides**: [<code>negate</code>](./Matrix#module_Matrix..Matrix+negate)  
**Returns**: <code>Matrix</code> - This matrix  

* * *

<a name="module_Matrix..Matrix+add"></a>

#### squareMatrix.add(matrix) ⇒ <code>Matrix</code>
Adds a matrix to this matrix.

**Kind**: instance method of [<code>SquareMatrix</code>](#module_SquareMatrix..SquareMatrix)  
**Overrides**: [<code>add</code>](./Matrix#module_Matrix..Matrix+add)  
**Returns**: <code>Matrix</code> - This matrix  

| Param | Type | Description |
| --- | --- | --- |
| matrix | <code>Matrix</code> | The matrix to add to this matrix. |


* * *

<a name="module_Matrix..Matrix+sub"></a>

#### squareMatrix.sub(matrix) ⇒ <code>Matrix</code>
Subtracts a matrix from this matrix.

**Kind**: instance method of [<code>SquareMatrix</code>](#module_SquareMatrix..SquareMatrix)  
**Overrides**: [<code>sub</code>](./Matrix#module_Matrix..Matrix+sub)  
**Returns**: <code>Matrix</code> - This matrix  

| Param | Type | Description |
| --- | --- | --- |
| matrix | <code>Matrix</code> | The matrix to subtract this matrix to. |


* * *

<a name="module_Matrix..Matrix+multiply"></a>

#### squareMatrix.multiply(matrix) ⇒ <code>Matrix</code>
Multiplies this matrix by another matrix. If the input matrix is not
compatible for multiplication, return this matrix unchanged.

**Kind**: instance method of [<code>SquareMatrix</code>](#module_SquareMatrix..SquareMatrix)  
**Overrides**: [<code>multiply</code>](./Matrix#module_Matrix..Matrix+multiply)  
**Returns**: <code>Matrix</code> - This matrix  

| Param | Type | Description |
| --- | --- | --- |
| matrix | <code>Matrix</code> | The matrix to post-multiply this matrix to. |


* * *

