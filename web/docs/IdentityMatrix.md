<a name="module_IdentityMatrix"></a>

## IdentityMatrix
Contains the [IdentityMatrix](#module_IdentityMatrix..IdentityMatrix) class, which
encodes read-only identity matrices.

**Author**: Nguyen Hoang Duong / <you_create@protonmail.com>  

* [IdentityMatrix](#module_IdentityMatrix)
    * [~IdentityMatrix](#module_IdentityMatrix..IdentityMatrix)
        * [new IdentityMatrix(size)](#new_module_IdentityMatrix..IdentityMatrix_new)
        * _instance_
            * [.clone()](#module_IdentityMatrix..IdentityMatrix+clone) ⇒ <code>IdentityMatrix</code>
            * [.equals(matrix)](#module_IdentityMatrix..IdentityMatrix+equals) ⇒ <code>boolean</code>
            * [.entry(r, c)](#module_IdentityMatrix..IdentityMatrix+entry) ⇒ <code>number</code>
            * [.row(r)](#module_IdentityMatrix..IdentityMatrix+row) ⇒ <code>Array.&lt;number&gt;</code>
            * [.column(c)](#module_IdentityMatrix..IdentityMatrix+column) ⇒ <code>Array.&lt;number&gt;</code>
            * [.leadingCoefficient(r)](#module_IdentityMatrix..IdentityMatrix+leadingCoefficient) ⇒ <code>number</code>
            * [.forEach(callback, thisArg)](#module_IdentityMatrix..IdentityMatrix+forEach)
            * [.forEachRow(callback, thisArg)](#module_IdentityMatrix..IdentityMatrix+forEachRow)
            * [.forEachColumn(callback, thisArg)](#module_IdentityMatrix..IdentityMatrix+forEachColumn)
        * _inner_
            * [~forEach](#module_IdentityMatrix..IdentityMatrix..forEach) : <code>function</code>
            * [~forEachRow](#module_IdentityMatrix..IdentityMatrix..forEachRow) : <code>function</code>
            * [~forEachColumn](#module_IdentityMatrix..IdentityMatrix..forEachColumn) : <code>function</code>


* * *

<a name="module_IdentityMatrix..IdentityMatrix"></a>

### IdentityMatrix~IdentityMatrix
Encodes *read-only* identity matrices and their operations. Being read-only
means instances of this class cannot have their elements modified (e.g. by
matrix addition or row operations).

Properties are encoded similarly to [Matrix](./Matrix#module_Matrix..Matrix). Many
methods in `Matrix` are absent in this class. Some are implemented
differently. The `elements` property of an `IdentityMatrix` instance only
serves for compatibility with other matrix classes; `IdentityMatrix` class
methods don't rely on it themselves.

While `rows` and `columns` are getters in the `Matrix` class, they are
properties here. For this reason, if you want to assign a variable to either
of them, you should add `.slice()` to clone, avoiding any unwanted problems
with pointers.

**Kind**: inner class of [<code>IdentityMatrix</code>](#module_IdentityMatrix)  

* [~IdentityMatrix](#module_IdentityMatrix..IdentityMatrix)
    * [new IdentityMatrix(size)](#new_module_IdentityMatrix..IdentityMatrix_new)
    * _instance_
        * [.clone()](#module_IdentityMatrix..IdentityMatrix+clone) ⇒ <code>IdentityMatrix</code>
        * [.equals(matrix)](#module_IdentityMatrix..IdentityMatrix+equals) ⇒ <code>boolean</code>
        * [.entry(r, c)](#module_IdentityMatrix..IdentityMatrix+entry) ⇒ <code>number</code>
        * [.row(r)](#module_IdentityMatrix..IdentityMatrix+row) ⇒ <code>Array.&lt;number&gt;</code>
        * [.column(c)](#module_IdentityMatrix..IdentityMatrix+column) ⇒ <code>Array.&lt;number&gt;</code>
        * [.leadingCoefficient(r)](#module_IdentityMatrix..IdentityMatrix+leadingCoefficient) ⇒ <code>number</code>
        * [.forEach(callback, thisArg)](#module_IdentityMatrix..IdentityMatrix+forEach)
        * [.forEachRow(callback, thisArg)](#module_IdentityMatrix..IdentityMatrix+forEachRow)
        * [.forEachColumn(callback, thisArg)](#module_IdentityMatrix..IdentityMatrix+forEachColumn)
    * _inner_
        * [~forEach](#module_IdentityMatrix..IdentityMatrix..forEach) : <code>function</code>
        * [~forEachRow](#module_IdentityMatrix..IdentityMatrix..forEachRow) : <code>function</code>
        * [~forEachColumn](#module_IdentityMatrix..IdentityMatrix..forEachColumn) : <code>function</code>


* * *

<a name="new_module_IdentityMatrix..IdentityMatrix_new"></a>

#### new IdentityMatrix(size)
Constructs a new `IdentityMatrix` instance, which encodes an identity
matrix.


| Param | Type | Description |
| --- | --- | --- |
| size | <code>number</code> | Number of rows (or columns) in the new identity matrix. |


* * *

<a name="module_IdentityMatrix..IdentityMatrix+clone"></a>

#### identityMatrix.clone() ⇒ <code>IdentityMatrix</code>
Creates and returns a clone of this identity matrix instance.

**Kind**: instance method of [<code>IdentityMatrix</code>](#module_IdentityMatrix..IdentityMatrix)  
**Returns**: <code>IdentityMatrix</code> - A clone of this instance  

* * *

<a name="module_IdentityMatrix..IdentityMatrix+equals"></a>

#### identityMatrix.equals(matrix) ⇒ <code>boolean</code>
Checks if this matrix and another matrix are equal.

**Kind**: instance method of [<code>IdentityMatrix</code>](#module_IdentityMatrix..IdentityMatrix)  
**Returns**: <code>boolean</code> - `true` if the two matrices are equal, `false` otherwise  

| Param | Type | Description |
| --- | --- | --- |
| matrix | [<code>Matrix</code>](./Matrix#module_Matrix..Matrix) | The matrix to compare this matrix to. |


* * *

<a name="module_IdentityMatrix..IdentityMatrix+entry"></a>

#### identityMatrix.entry(r, c) ⇒ <code>number</code>
Returns the entry in the specified row and column in this matrix.

**Kind**: instance method of [<code>IdentityMatrix</code>](#module_IdentityMatrix..IdentityMatrix)  
**Returns**: <code>number</code> - The entry  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | The row that contains the entry (1-indexed). |
| c | <code>number</code> | The column that contains the entry (1-indexed). |


* * *

<a name="module_IdentityMatrix..IdentityMatrix+row"></a>

#### identityMatrix.row(r) ⇒ <code>Array.&lt;number&gt;</code>
Returns a row in this matrix as a JavaScript array.

**Kind**: instance method of [<code>IdentityMatrix</code>](#module_IdentityMatrix..IdentityMatrix)  
**Returns**: <code>Array.&lt;number&gt;</code> - The row's entries  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | Row number (1-indexed). |


* * *

<a name="module_IdentityMatrix..IdentityMatrix+column"></a>

#### identityMatrix.column(c) ⇒ <code>Array.&lt;number&gt;</code>
Returns a column in this matrix as a JavaScript array.

**Kind**: instance method of [<code>IdentityMatrix</code>](#module_IdentityMatrix..IdentityMatrix)  
**Returns**: <code>Array.&lt;number&gt;</code> - The column's entries  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>number</code> | Column number (1-indexed). |


* * *

<a name="module_IdentityMatrix..IdentityMatrix+leadingCoefficient"></a>

#### identityMatrix.leadingCoefficient(r) ⇒ <code>number</code>
Returns the leading coefficient of a row, which is always 1 since this is
an identity matrix.

**Kind**: instance method of [<code>IdentityMatrix</code>](#module_IdentityMatrix..IdentityMatrix)  
**Returns**: <code>number</code> - The leading coefficient of the row  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | Row number (1-indexed) (this will be disregarded). |


* * *

<a name="module_IdentityMatrix..IdentityMatrix+forEach"></a>

#### identityMatrix.forEach(callback, thisArg)
Executes a function for each entry in this matrix.

**Kind**: instance method of [<code>IdentityMatrix</code>](#module_IdentityMatrix..IdentityMatrix)  

| Param | Type | Description |
| --- | --- | --- |
| callback | [<code>forEach</code>](#module_IdentityMatrix..IdentityMatrix..forEach) | The function to execute per iteration. |
| thisArg | <code>object</code> | The argument to use as `this` in the function. |


* * *

<a name="module_IdentityMatrix..IdentityMatrix+forEachRow"></a>

#### identityMatrix.forEachRow(callback, thisArg)
Executes a function for each row in this matrix.

**Kind**: instance method of [<code>IdentityMatrix</code>](#module_IdentityMatrix..IdentityMatrix)  

| Param | Type | Description |
| --- | --- | --- |
| callback | [<code>forEachRow</code>](#module_IdentityMatrix..IdentityMatrix..forEachRow) | The function to execute per iteration. |
| thisArg | <code>object</code> | The argument to use as `this` in the function. |


* * *

<a name="module_IdentityMatrix..IdentityMatrix+forEachColumn"></a>

#### identityMatrix.forEachColumn(callback, thisArg)
Executes a function for each column in this matrix.

**Kind**: instance method of [<code>IdentityMatrix</code>](#module_IdentityMatrix..IdentityMatrix)  

| Param | Type | Description |
| --- | --- | --- |
| callback | [<code>forEachColumn</code>](#module_IdentityMatrix..IdentityMatrix..forEachColumn) | The function to execute per iteration. |
| thisArg | <code>object</code> | The argument to use as `this` in the function. |


* * *

<a name="module_IdentityMatrix..IdentityMatrix..forEach"></a>

#### IdentityMatrix~forEach : <code>function</code>
**Kind**: inner typedef of [<code>IdentityMatrix</code>](#module_IdentityMatrix..IdentityMatrix)  

| Param | Type | Description |
| --- | --- | --- |
| entry | <code>number</code> | The current entry being processed. |
| i | <code>number</code> | The entry's row number (1-indexed). |
| j | <code>number</code> | The entry's column number (1-indexed). |
| index | <code>number</code> | The index of the entry in `this.elements` (0-indexed). |
| matrix | <code>IdentityMatrix</code> | The instance that this method was called upon. |


* * *

<a name="module_IdentityMatrix..IdentityMatrix..forEachRow"></a>

#### IdentityMatrix~forEachRow : <code>function</code>
**Kind**: inner typedef of [<code>IdentityMatrix</code>](#module_IdentityMatrix..IdentityMatrix)  

| Param | Type | Description |
| --- | --- | --- |
| row | <code>Array.&lt;number&gt;</code> | The current row being processed (with its entries). |
| r | <code>number</code> | Current row number (1-indexed). |
| matrix | <code>IdentityMatrix</code> | The instance that this method was called upon. |


* * *

<a name="module_IdentityMatrix..IdentityMatrix..forEachColumn"></a>

#### IdentityMatrix~forEachColumn : <code>function</code>
**Kind**: inner typedef of [<code>IdentityMatrix</code>](#module_IdentityMatrix..IdentityMatrix)  

| Param | Type | Description |
| --- | --- | --- |
| column | <code>Array.&lt;number&gt;</code> | The current column being processed (with its entries). |
| c | <code>number</code> | Current column number (1-indexed). |
| matrix | <code>IdentityMatrix</code> | The instance that this method was called upon. |


* * *

