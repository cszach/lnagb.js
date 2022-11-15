<a name="module_AugmentedMatrix"></a>

## AugmentedMatrix
Contains the [AugmentedMatrix](#module_AugmentedMatrix..AugmentedMatrix) class, which
encodes augmented matrices.

**Author**: Novak / <cszach@proton.me>  

* [AugmentedMatrix](#module_AugmentedMatrix)
    * [~AugmentedMatrix](#module_AugmentedMatrix..AugmentedMatrix) ⇐ [<code>Matrix</code>](./Matrix#module_Matrix..Matrix)
        * [new AugmentedMatrix(left, right)](#new_module_AugmentedMatrix..AugmentedMatrix_new)
        * [.leftMatrix](#module_AugmentedMatrix..AugmentedMatrix+leftMatrix) ⇒ [<code>Matrix</code>](./Matrix#module_Matrix..Matrix)
        * [.rightMatrix](#module_AugmentedMatrix..AugmentedMatrix+rightMatrix) ⇒ [<code>Matrix</code>](./Matrix#module_Matrix..Matrix)
        * [.size](./Matrix#module_Matrix..Matrix+size) : <code>object</code>
        * [.numberOfEntries](./Matrix#module_Matrix..Matrix+numberOfEntries) : <code>number</code>
        * [.elements](./Matrix#module_Matrix..Matrix+elements) : <code>Array.&lt;number&gt;</code>
        * [.rows](./Matrix#module_Matrix..Matrix+rows) ⇒ <code>Array.&lt;Array&gt;</code>
        * [.columns](./Matrix#module_Matrix..Matrix+columns) ⇒ <code>Array.&lt;Array&gt;</code>
        * [.mainDiagonal](./Matrix#module_Matrix..Matrix+mainDiagonal) ⇒ <code>Array.&lt;number&gt;</code>
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

<a name="module_AugmentedMatrix..AugmentedMatrix"></a>

### AugmentedMatrix~AugmentedMatrix ⇐ [<code>Matrix</code>](./Matrix#module_Matrix..Matrix)
Encodes augmented matrices and their operations in Linear Algebra.

This class inherits class methods from [Matrix](./Matrix#module_Matrix..Matrix) with the
exception that `transpose`, `add`, `sub`, and `multiply` cannot be used.

The `size` property has two more elements: `left`—which is the number of
columns of the left matrix—and `right`—that of the right matrix.

**Kind**: inner class of [<code>AugmentedMatrix</code>](#module_AugmentedMatrix)  
**Extends**: [<code>Matrix</code>](./Matrix#module_Matrix..Matrix)  
**See**: [Matrix](./Matrix#module_Matrix..Matrix) for common properties  

* [~AugmentedMatrix](#module_AugmentedMatrix..AugmentedMatrix) ⇐ [<code>Matrix</code>](./Matrix#module_Matrix..Matrix)
    * [new AugmentedMatrix(left, right)](#new_module_AugmentedMatrix..AugmentedMatrix_new)
    * [.leftMatrix](#module_AugmentedMatrix..AugmentedMatrix+leftMatrix) ⇒ [<code>Matrix</code>](./Matrix#module_Matrix..Matrix)
    * [.rightMatrix](#module_AugmentedMatrix..AugmentedMatrix+rightMatrix) ⇒ [<code>Matrix</code>](./Matrix#module_Matrix..Matrix)
    * [.size](./Matrix#module_Matrix..Matrix+size) : <code>object</code>
    * [.numberOfEntries](./Matrix#module_Matrix..Matrix+numberOfEntries) : <code>number</code>
    * [.elements](./Matrix#module_Matrix..Matrix+elements) : <code>Array.&lt;number&gt;</code>
    * [.rows](./Matrix#module_Matrix..Matrix+rows) ⇒ <code>Array.&lt;Array&gt;</code>
    * [.columns](./Matrix#module_Matrix..Matrix+columns) ⇒ <code>Array.&lt;Array&gt;</code>
    * [.mainDiagonal](./Matrix#module_Matrix..Matrix+mainDiagonal) ⇒ <code>Array.&lt;number&gt;</code>
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

<a name="new_module_AugmentedMatrix..AugmentedMatrix_new"></a>

#### new AugmentedMatrix(left, right)
Constructs an `AugmentedMatrix` instance, which encodes an augmented matrix.
Input matrices are cloned and assumed to have equal number of rows.


| Param | Type | Description |
| --- | --- | --- |
| left | [<code>Matrix</code>](./Matrix#module_Matrix..Matrix) | The left part of the augmented matrix. |
| right | [<code>Matrix</code>](./Matrix#module_Matrix..Matrix) | The right part of the augmented matrix. |


* * *

<a name="module_AugmentedMatrix..AugmentedMatrix+leftMatrix"></a>

#### augmentedMatrix.leftMatrix ⇒ [<code>Matrix</code>](./Matrix#module_Matrix..Matrix)
Returns the left matrix of this augmented matrix.

**Kind**: instance property of [<code>AugmentedMatrix</code>](#module_AugmentedMatrix..AugmentedMatrix)  
**Returns**: [<code>Matrix</code>](./Matrix#module_Matrix..Matrix) - The left matrix  

* * *

<a name="module_AugmentedMatrix..AugmentedMatrix+rightMatrix"></a>

#### augmentedMatrix.rightMatrix ⇒ [<code>Matrix</code>](./Matrix#module_Matrix..Matrix)
Returns the right matrix of this augmented matrix.

**Kind**: instance property of [<code>AugmentedMatrix</code>](#module_AugmentedMatrix..AugmentedMatrix)  
**Returns**: [<code>Matrix</code>](./Matrix#module_Matrix..Matrix) - The right matrix  

* * *

<a name="module_Matrix..Matrix+size"></a>

#### augmentedMatrix.size : <code>object</code>
Contains the dimensions of this matrix as an object in the
form `{ rows, columns }`.

**Kind**: instance property of [<code>AugmentedMatrix</code>](#module_AugmentedMatrix..AugmentedMatrix)  
**Overrides**: [<code>size</code>](./Matrix#module_Matrix..Matrix+size)  

* * *

<a name="module_Matrix..Matrix+numberOfEntries"></a>

#### augmentedMatrix.numberOfEntries : <code>number</code>
The number of entries in this matrix.

**Kind**: instance property of [<code>AugmentedMatrix</code>](#module_AugmentedMatrix..AugmentedMatrix)  
**Overrides**: [<code>numberOfEntries</code>](./Matrix#module_Matrix..Matrix+numberOfEntries)  

* * *

<a name="module_Matrix..Matrix+elements"></a>

#### augmentedMatrix.elements : <code>Array.&lt;number&gt;</code>
Stores the elements of this matrix in **row-major** order.

**Kind**: instance property of [<code>AugmentedMatrix</code>](#module_AugmentedMatrix..AugmentedMatrix)  
**Overrides**: [<code>elements</code>](./Matrix#module_Matrix..Matrix+elements)  

* * *

<a name="module_Matrix..Matrix+rows"></a>

#### augmentedMatrix.rows ⇒ <code>Array.&lt;Array&gt;</code>
Returns the rows of this matrix in an array.

**Kind**: instance property of [<code>AugmentedMatrix</code>](#module_AugmentedMatrix..AugmentedMatrix)  
**Overrides**: [<code>rows</code>](./Matrix#module_Matrix..Matrix+rows)  
**Returns**: <code>Array.&lt;Array&gt;</code> - The rows in this matrix  

* * *

<a name="module_Matrix..Matrix+columns"></a>

#### augmentedMatrix.columns ⇒ <code>Array.&lt;Array&gt;</code>
Returns the columns of this matrix in an array.

**Kind**: instance property of [<code>AugmentedMatrix</code>](#module_AugmentedMatrix..AugmentedMatrix)  
**Overrides**: [<code>columns</code>](./Matrix#module_Matrix..Matrix+columns)  
**Returns**: <code>Array.&lt;Array&gt;</code> - The columns in this matrix  

* * *

<a name="module_Matrix..Matrix+mainDiagonal"></a>

#### augmentedMatrix.mainDiagonal ⇒ <code>Array.&lt;number&gt;</code>
Returns the main diagonal of this matrix.

**Kind**: instance property of [<code>AugmentedMatrix</code>](#module_AugmentedMatrix..AugmentedMatrix)  
**Overrides**: [<code>mainDiagonal</code>](./Matrix#module_Matrix..Matrix+mainDiagonal)  
**Returns**: <code>Array.&lt;number&gt;</code> - The entries in the main diagonal of this matrix  

* * *

<a name="module_Matrix..Matrix+clone"></a>

#### augmentedMatrix.clone() ⇒ <code>Matrix</code>
Creates and returns a clone of this matrix instance.

**Kind**: instance method of [<code>AugmentedMatrix</code>](#module_AugmentedMatrix..AugmentedMatrix)  
**Overrides**: [<code>clone</code>](./Matrix#module_Matrix..Matrix+clone)  
**Returns**: <code>Matrix</code> - A clone of this instance  

* * *

<a name="module_Matrix..Matrix+equals"></a>

#### augmentedMatrix.equals(matrix) ⇒ <code>boolean</code>
Checks if this matrix and another matrix are equal.

**Kind**: instance method of [<code>AugmentedMatrix</code>](#module_AugmentedMatrix..AugmentedMatrix)  
**Overrides**: [<code>equals</code>](./Matrix#module_Matrix..Matrix+equals)  
**Returns**: <code>boolean</code> - `true` if the two matrices are equal, `false` otherwise  

| Param | Type | Description |
| --- | --- | --- |
| matrix | <code>Matrix</code> | The matrix to compare this matrix to. |


* * *

<a name="module_Matrix..Matrix+entry"></a>

#### augmentedMatrix.entry(i, j) ⇒ <code>number</code>
Returns the entry in the specified row and column in this matrix.

**Kind**: instance method of [<code>AugmentedMatrix</code>](#module_AugmentedMatrix..AugmentedMatrix)  
**Overrides**: [<code>entry</code>](./Matrix#module_Matrix..Matrix+entry)  
**Returns**: <code>number</code> - The entry  

| Param | Type | Description |
| --- | --- | --- |
| i | <code>number</code> | The row that contains the entry (1-indexed). |
| j | <code>number</code> | The column that contains the entry (1-indexed). |


* * *

<a name="module_Matrix..Matrix+row"></a>

#### augmentedMatrix.row(r) ⇒ <code>Array.&lt;number&gt;</code>
Returns a row in this matrix as a JavaScript array.

**Kind**: instance method of [<code>AugmentedMatrix</code>](#module_AugmentedMatrix..AugmentedMatrix)  
**Overrides**: [<code>row</code>](./Matrix#module_Matrix..Matrix+row)  
**Returns**: <code>Array.&lt;number&gt;</code> - The row's entries  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | Row number (1-indexed). |


* * *

<a name="module_Matrix..Matrix+column"></a>

#### augmentedMatrix.column(c) ⇒ <code>Array.&lt;number&gt;</code>
Returns a column in this matrix as a JavaScript array.

**Kind**: instance method of [<code>AugmentedMatrix</code>](#module_AugmentedMatrix..AugmentedMatrix)  
**Overrides**: [<code>column</code>](./Matrix#module_Matrix..Matrix+column)  
**Returns**: <code>Array.&lt;number&gt;</code> - The column's entries  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>number</code> | Column number (1-indexed). |


* * *

<a name="module_Matrix..Matrix+leadingCoefficient"></a>

#### augmentedMatrix.leadingCoefficient(r) ⇒ <code>number</code>
Returns the leading coefficient of a row, or `undefined` if the row does
not have a leading coefficient.

**Kind**: instance method of [<code>AugmentedMatrix</code>](#module_AugmentedMatrix..AugmentedMatrix)  
**Overrides**: [<code>leadingCoefficient</code>](./Matrix#module_Matrix..Matrix+leadingCoefficient)  
**Returns**: <code>number</code> - The leading coefficient of the row  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | Row number (1-indexed). |


* * *

<a name="module_Matrix..Matrix+forEach"></a>

#### augmentedMatrix.forEach(callback, thisArg)
Executes a function for each entry in this matrix. Entries are iterated in
row-major order.

**Kind**: instance method of [<code>AugmentedMatrix</code>](#module_AugmentedMatrix..AugmentedMatrix)  
**Overrides**: [<code>forEach</code>](./Matrix#module_Matrix..Matrix+forEach)  

| Param | Type | Description |
| --- | --- | --- |
| callback | [<code>forEach</code>](./Matrix#module_Matrix..Matrix..forEach) | The function to execute per iteration. |
| thisArg | <code>object</code> | The argument to use as `this` in the function. |


* * *

<a name="module_Matrix..Matrix+forEachRow"></a>

#### augmentedMatrix.forEachRow(callback, thisArg)
Executes a function for each row in this matrix.

**Kind**: instance method of [<code>AugmentedMatrix</code>](#module_AugmentedMatrix..AugmentedMatrix)  
**Overrides**: [<code>forEachRow</code>](./Matrix#module_Matrix..Matrix+forEachRow)  

| Param | Type | Description |
| --- | --- | --- |
| callback | [<code>forEachRow</code>](./Matrix#module_Matrix..Matrix..forEachRow) | The function to execute per iteration. |
| thisArg | <code>object</code> | The argument to use as `this` in the function. |


* * *

<a name="module_Matrix..Matrix+forEachColumn"></a>

#### augmentedMatrix.forEachColumn(callback, thisArg)
Executes a function for each column in this matrix.

**Kind**: instance method of [<code>AugmentedMatrix</code>](#module_AugmentedMatrix..AugmentedMatrix)  
**Overrides**: [<code>forEachColumn</code>](./Matrix#module_Matrix..Matrix+forEachColumn)  

| Param | Type | Description |
| --- | --- | --- |
| callback | [<code>forEachColumn</code>](./Matrix#module_Matrix..Matrix..forEachColumn) | The function to execute per iteration. |
| thisArg | <code>object</code> | The argument to use as `this` in the function. |


* * *

<a name="module_Matrix..Matrix+interchargeRows"></a>

#### augmentedMatrix.interchargeRows(r, s) ⇒ <code>Matrix</code>
Intercharges two rows in this matrix.

**Kind**: instance method of [<code>AugmentedMatrix</code>](#module_AugmentedMatrix..AugmentedMatrix)  
**Overrides**: [<code>interchargeRows</code>](./Matrix#module_Matrix..Matrix+interchargeRows)  
**Returns**: <code>Matrix</code> - This matrix  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | First row number (1-indexed). |
| s | <code>number</code> | Second row number (1-indexed). |


* * *

<a name="module_Matrix..Matrix+multiplyRowByScalar"></a>

#### augmentedMatrix.multiplyRowByScalar(r, k) ⇒ <code>Matrix</code>
Multiplies a row in this matrix by a nonzero scalar.

**Kind**: instance method of [<code>AugmentedMatrix</code>](#module_AugmentedMatrix..AugmentedMatrix)  
**Overrides**: [<code>multiplyRowByScalar</code>](./Matrix#module_Matrix..Matrix+multiplyRowByScalar)  
**Returns**: <code>Matrix</code> - This matrix  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | Row number (1-indexed). |
| k | <code>number</code> | The nonzero scalar to multiply the row by. |


* * *

<a name="module_Matrix..Matrix+addRowTimesScalarToRow"></a>

#### augmentedMatrix.addRowTimesScalarToRow(r, s, k) ⇒ <code>Matrix</code>
Adds multiples of a row to another row in this matrix.

**Kind**: instance method of [<code>AugmentedMatrix</code>](#module_AugmentedMatrix..AugmentedMatrix)  
**Overrides**: [<code>addRowTimesScalarToRow</code>](./Matrix#module_Matrix..Matrix+addRowTimesScalarToRow)  
**Returns**: <code>Matrix</code> - This matrix  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| r | <code>number</code> |  | The row that gets added (1-indexed position). |
| s | <code>number</code> |  | The row to multiply the scalar by and then add to row `r` (1-indexed position). |
| k | <code>number</code> | <code>1</code> | The scalar to multiply row `s` by. |


* * *

<a name="module_Matrix..Matrix+transpose"></a>

#### augmentedMatrix.transpose() ⇒ <code>Matrix</code>
Transposes this matrix *in place*.

**Kind**: instance method of [<code>AugmentedMatrix</code>](#module_AugmentedMatrix..AugmentedMatrix)  
**Overrides**: [<code>transpose</code>](./Matrix#module_Matrix..Matrix+transpose)  
**Returns**: <code>Matrix</code> - This matrix  
**Todo**

- [ ] Optimize this method by removing the medium


* * *

<a name="module_Matrix..Matrix+multiplyScalar"></a>

#### augmentedMatrix.multiplyScalar(k) ⇒ <code>Matrix</code>
Multiplies this matrix by a scalar.

**Kind**: instance method of [<code>AugmentedMatrix</code>](#module_AugmentedMatrix..AugmentedMatrix)  
**Overrides**: [<code>multiplyScalar</code>](./Matrix#module_Matrix..Matrix+multiplyScalar)  
**Returns**: <code>Matrix</code> - This matrix  

| Param | Type | Description |
| --- | --- | --- |
| k | <code>number</code> | The scalar to multiply this matrix by. |


* * *

<a name="module_Matrix..Matrix+negate"></a>

#### augmentedMatrix.negate() ⇒ <code>Matrix</code>
Multiplies this matrix by -1.

**Kind**: instance method of [<code>AugmentedMatrix</code>](#module_AugmentedMatrix..AugmentedMatrix)  
**Overrides**: [<code>negate</code>](./Matrix#module_Matrix..Matrix+negate)  
**Returns**: <code>Matrix</code> - This matrix  

* * *

<a name="module_Matrix..Matrix+add"></a>

#### augmentedMatrix.add(matrix) ⇒ <code>Matrix</code>
Adds a matrix to this matrix.

**Kind**: instance method of [<code>AugmentedMatrix</code>](#module_AugmentedMatrix..AugmentedMatrix)  
**Overrides**: [<code>add</code>](./Matrix#module_Matrix..Matrix+add)  
**Returns**: <code>Matrix</code> - This matrix  

| Param | Type | Description |
| --- | --- | --- |
| matrix | <code>Matrix</code> | The matrix to add to this matrix. |


* * *

<a name="module_Matrix..Matrix+sub"></a>

#### augmentedMatrix.sub(matrix) ⇒ <code>Matrix</code>
Subtracts a matrix from this matrix.

**Kind**: instance method of [<code>AugmentedMatrix</code>](#module_AugmentedMatrix..AugmentedMatrix)  
**Overrides**: [<code>sub</code>](./Matrix#module_Matrix..Matrix+sub)  
**Returns**: <code>Matrix</code> - This matrix  

| Param | Type | Description |
| --- | --- | --- |
| matrix | <code>Matrix</code> | The matrix to subtract this matrix to. |


* * *

<a name="module_Matrix..Matrix+multiply"></a>

#### augmentedMatrix.multiply(matrix) ⇒ <code>Matrix</code>
Multiplies this matrix by another matrix. If the input matrix is not
compatible for multiplication, return this matrix unchanged.

**Kind**: instance method of [<code>AugmentedMatrix</code>](#module_AugmentedMatrix..AugmentedMatrix)  
**Overrides**: [<code>multiply</code>](./Matrix#module_Matrix..Matrix+multiply)  
**Returns**: <code>Matrix</code> - This matrix  

| Param | Type | Description |
| --- | --- | --- |
| matrix | <code>Matrix</code> | The matrix to post-multiply this matrix to. |


* * *

