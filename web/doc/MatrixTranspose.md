<a name="module_MatrixTranspose"></a>

## MatrixTranspose
Contains the [MatrixTranspose](./Matrix#module_MatrixTranspose..MatrixTranspose) class, which
storage-efficiently encodes transpositions.

**Author**: Novak / <cszach@proton.me>  

* [MatrixTranspose](./Matrix#module_MatrixTranspose)
    * [~MatrixTranspose](./Matrix#module_MatrixTranspose..MatrixTranspose)
        * [new MatrixTranspose(matrix)](#new_module_MatrixTranspose..MatrixTranspose_new)
        * _instance_
            * [._](./Matrix#module_MatrixTranspose..MatrixTranspose+_) : [<code>Matrix</code>](./Matrix#module_Matrix..Matrix)
            * [.size](./Matrix#module_MatrixTranspose..MatrixTranspose+size) ⇒ <code>object</code>
            * [.rows](./Matrix#module_MatrixTranspose..MatrixTranspose+rows) ⇒ <code>Array.&lt;Array&gt;</code>
            * [.columns](./Matrix#module_MatrixTranspose..MatrixTranspose+columns) ⇒ <code>Array.&lt;Array&gt;</code>
            * [.mainDiagonal](./Matrix#module_MatrixTranspose..MatrixTranspose+mainDiagonal) ⇒ <code>Array.&lt;number&gt;</code>
            * [.computeElements()](./Matrix#module_MatrixTranspose..MatrixTranspose+computeElements) ⇒ <code>Array.&lt;number&gt;</code>
            * [.entry(i, j)](./Matrix#module_MatrixTranspose..MatrixTranspose+entry) ⇒ <code>number</code>
            * [.row(r)](./Matrix#module_MatrixTranspose..MatrixTranspose+row) ⇒ <code>Array.&lt;number&gt;</code>
            * [.column(c)](./Matrix#module_MatrixTranspose..MatrixTranspose+column) ⇒ <code>Array.&lt;number&gt;</code>
            * [.forEach(callback, thisArg)](./Matrix#module_MatrixTranspose..MatrixTranspose+forEach)
            * [.forEachComputed(callback, thisArg)](./Matrix#module_MatrixTranspose..MatrixTranspose+forEachComputed)
            * [.forEachRow(callback, thisArg)](./Matrix#module_MatrixTranspose..MatrixTranspose+forEachRow)
            * [.forEachColumn(callback, thisArg)](./Matrix#module_MatrixTranspose..MatrixTranspose+forEachColumn)
        * _inner_
            * [~forEach](./Matrix#module_MatrixTranspose..MatrixTranspose..forEach) : <code>function</code>


* * *

<a name="module_MatrixTranspose..MatrixTranspose"></a>

### MatrixTranspose~MatrixTranspose
Encodes accessors for the transposition of a matrix and avoids the need of
actually computing the transpose's elements.

The main purpose of this class is to make dealing with transpositions
syntactically clearer and to avoid using additional storage.

**Kind**: inner class of [<code>MatrixTranspose</code>](./Matrix#module_MatrixTranspose)  

* [~MatrixTranspose](./Matrix#module_MatrixTranspose..MatrixTranspose)
    * [new MatrixTranspose(matrix)](#new_module_MatrixTranspose..MatrixTranspose_new)
    * _instance_
        * [._](./Matrix#module_MatrixTranspose..MatrixTranspose+_) : [<code>Matrix</code>](./Matrix#module_Matrix..Matrix)
        * [.size](./Matrix#module_MatrixTranspose..MatrixTranspose+size) ⇒ <code>object</code>
        * [.rows](./Matrix#module_MatrixTranspose..MatrixTranspose+rows) ⇒ <code>Array.&lt;Array&gt;</code>
        * [.columns](./Matrix#module_MatrixTranspose..MatrixTranspose+columns) ⇒ <code>Array.&lt;Array&gt;</code>
        * [.mainDiagonal](./Matrix#module_MatrixTranspose..MatrixTranspose+mainDiagonal) ⇒ <code>Array.&lt;number&gt;</code>
        * [.computeElements()](./Matrix#module_MatrixTranspose..MatrixTranspose+computeElements) ⇒ <code>Array.&lt;number&gt;</code>
        * [.entry(i, j)](./Matrix#module_MatrixTranspose..MatrixTranspose+entry) ⇒ <code>number</code>
        * [.row(r)](./Matrix#module_MatrixTranspose..MatrixTranspose+row) ⇒ <code>Array.&lt;number&gt;</code>
        * [.column(c)](./Matrix#module_MatrixTranspose..MatrixTranspose+column) ⇒ <code>Array.&lt;number&gt;</code>
        * [.forEach(callback, thisArg)](./Matrix#module_MatrixTranspose..MatrixTranspose+forEach)
        * [.forEachComputed(callback, thisArg)](./Matrix#module_MatrixTranspose..MatrixTranspose+forEachComputed)
        * [.forEachRow(callback, thisArg)](./Matrix#module_MatrixTranspose..MatrixTranspose+forEachRow)
        * [.forEachColumn(callback, thisArg)](./Matrix#module_MatrixTranspose..MatrixTranspose+forEachColumn)
    * _inner_
        * [~forEach](./Matrix#module_MatrixTranspose..MatrixTranspose..forEach) : <code>function</code>


* * *

<a name="new_module_MatrixTranspose..MatrixTranspose_new"></a>

#### new MatrixTranspose(matrix)
Constructs a new `MatrixTranspose` instance and assigns a matrix to it.
The instance will then represent the transpose of the assigned matrix
(also referred to as the _original matrix_).


| Param | Type | Description |
| --- | --- | --- |
| matrix | [<code>Matrix</code>](./Matrix#module_Matrix..Matrix) | The matrix to assign. |


* * *

<a name="module_MatrixTranspose..MatrixTranspose+_"></a>

#### matrixTranspose.\_ : [<code>Matrix</code>](./Matrix#module_Matrix..Matrix)
The original matrix assigned to this transpose.

**Kind**: instance property of [<code>MatrixTranspose</code>](./Matrix#module_MatrixTranspose..MatrixTranspose)  

* * *

<a name="module_MatrixTranspose..MatrixTranspose+size"></a>

#### matrixTranspose.size ⇒ <code>object</code>
Returns the `size` property of the transpose of the original matrix. This
is computed dynamically.

**Kind**: instance property of [<code>MatrixTranspose</code>](./Matrix#module_MatrixTranspose..MatrixTranspose)  
**Returns**: <code>object</code> - An object of the form `{ rows, columns }`  

* * *

<a name="module_MatrixTranspose..MatrixTranspose+rows"></a>

#### matrixTranspose.rows ⇒ <code>Array.&lt;Array&gt;</code>
Returns the rows of this transpose in an array, which are the columns of
the original matrix.

**Kind**: instance property of [<code>MatrixTranspose</code>](./Matrix#module_MatrixTranspose..MatrixTranspose)  
**Returns**: <code>Array.&lt;Array&gt;</code> - The rows in this transpose  

* * *

<a name="module_MatrixTranspose..MatrixTranspose+columns"></a>

#### matrixTranspose.columns ⇒ <code>Array.&lt;Array&gt;</code>
Returns the columns of this transpose in an array, which are the rows of
the original matrix.

**Kind**: instance property of [<code>MatrixTranspose</code>](./Matrix#module_MatrixTranspose..MatrixTranspose)  
**Returns**: <code>Array.&lt;Array&gt;</code> - The columns in this transpose  

* * *

<a name="module_MatrixTranspose..MatrixTranspose+mainDiagonal"></a>

#### matrixTranspose.mainDiagonal ⇒ <code>Array.&lt;number&gt;</code>
Returns the main diagonal of this transpose, which is the same as the main
diagonal of the original matrix.

**Kind**: instance property of [<code>MatrixTranspose</code>](./Matrix#module_MatrixTranspose..MatrixTranspose)  
**Returns**: <code>Array.&lt;number&gt;</code> - The entries in the main diagonal of this transpose  

* * *

<a name="module_MatrixTranspose..MatrixTranspose+computeElements"></a>

#### matrixTranspose.computeElements() ⇒ <code>Array.&lt;number&gt;</code>
Computes the entries of the transpose of the original matrix, stores them
in an array, and stores the array as the `elements` property of this
instance.

The indices of the transposed entries in the new row-major-ordered array
are computed using Cate & Twigg's permutation formula, devised in 1977.

**Note**: The `elements` property, after being created for this particular
instance, won't be dynamic (e.g. it won't be in sync with the entries of
the original matrix). After modifying the entries of the original matrix,
call this method again should you need to compute the updated entries of
the transpose.

**Kind**: instance method of [<code>MatrixTranspose</code>](./Matrix#module_MatrixTranspose..MatrixTranspose)  
**Returns**: <code>Array.&lt;number&gt;</code> - The entries of the transpose (row-major ordered)  
**See**: [Wikipedia, _In-place matrix transposition_, section _Properties of the permutation_](https://en.wikipedia.org/wiki/In-place_matrix_transposition#Properties_of_the_permutation)  

* * *

<a name="module_MatrixTranspose..MatrixTranspose+entry"></a>

#### matrixTranspose.entry(i, j) ⇒ <code>number</code>
Returns the entry in the specified row and column in the transpose of the
original matrix.

**Kind**: instance method of [<code>MatrixTranspose</code>](./Matrix#module_MatrixTranspose..MatrixTranspose)  
**Returns**: <code>number</code> - The entry  

| Param | Type | Description |
| --- | --- | --- |
| i | <code>number</code> | The row that contains the entry (1-indexed position). |
| j | <code>number</code> | The column that contains the entry (1-indexed position). |


* * *

<a name="module_MatrixTranspose..MatrixTranspose+row"></a>

#### matrixTranspose.row(r) ⇒ <code>Array.&lt;number&gt;</code>
Returns a row in the transpose of the original matrix.

**Kind**: instance method of [<code>MatrixTranspose</code>](./Matrix#module_MatrixTranspose..MatrixTranspose)  
**Returns**: <code>Array.&lt;number&gt;</code> - The row's entries  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | Row number (1-indexed). |


* * *

<a name="module_MatrixTranspose..MatrixTranspose+column"></a>

#### matrixTranspose.column(c) ⇒ <code>Array.&lt;number&gt;</code>
Returns a column in the transpose of the original matrix.

**Kind**: instance method of [<code>MatrixTranspose</code>](./Matrix#module_MatrixTranspose..MatrixTranspose)  
**Returns**: <code>Array.&lt;number&gt;</code> - The column's entries  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>number</code> | Column number (1-indexed). |


* * *

<a name="module_MatrixTranspose..MatrixTranspose+forEach"></a>

#### matrixTranspose.forEach(callback, thisArg)
Executes a function for each entry in the transpose of the original matrix.
The entries are iterated in row-major order.

This method does not compute the transposed array of entries. Instead, it
uses Cate & Twigg's inverse permutation formula (devised in 1977) to locate
the transposed entry itself in the original array given the entry's index
within the transposed array.

**Kind**: instance method of [<code>MatrixTranspose</code>](./Matrix#module_MatrixTranspose..MatrixTranspose)  
**See**: [Wikipedia, _In-place matrix transposition_, section _Properties of the permutation_](https://en.wikipedia.org/wiki/In-place_matrix_transposition#Properties_of_the_permutation)  

| Param | Type | Description |
| --- | --- | --- |
| callback | [<code>forEach</code>](./Matrix#module_MatrixTranspose..MatrixTranspose..forEach) | The function to execute per iteration. |
| thisArg | <code>object</code> | The argument to use as `this` in the function. |


* * *

<a name="module_MatrixTranspose..MatrixTranspose+forEachComputed"></a>

#### matrixTranspose.forEachComputed(callback, thisArg)
Similar to the [`forEach`](#MatrixTranspose+forEach) method above.
However, this method iterates through the `elements` property of the
instance. This, of course, assumes that you've called
[`computeElements`](#MatrixTranspose+computeElements) on this
instance. Saves computational power.

**Kind**: instance method of [<code>MatrixTranspose</code>](./Matrix#module_MatrixTranspose..MatrixTranspose)  

| Param | Type | Description |
| --- | --- | --- |
| callback | [<code>forEach</code>](./Matrix#module_MatrixTranspose..MatrixTranspose..forEach) | The function to execute per iteration. |
| thisArg | <code>object</code> | The argument to use as `this` in the function. |


* * *

<a name="module_MatrixTranspose..MatrixTranspose+forEachRow"></a>

#### matrixTranspose.forEachRow(callback, thisArg)
Executes a function for each row in the transpose.

**Kind**: instance method of [<code>MatrixTranspose</code>](./Matrix#module_MatrixTranspose..MatrixTranspose)  

| Param | Type | Description |
| --- | --- | --- |
| callback | [<code>forEachRow</code>](./Matrix#module_Matrix..Matrix..forEachRow) | The function to execute per iteration. |
| thisArg | <code>object</code> | The argument to use as `this` in the function. |


* * *

<a name="module_MatrixTranspose..MatrixTranspose+forEachColumn"></a>

#### matrixTranspose.forEachColumn(callback, thisArg)
Executes a function for each column in the transpose.

**Kind**: instance method of [<code>MatrixTranspose</code>](./Matrix#module_MatrixTranspose..MatrixTranspose)  

| Param | Type | Description |
| --- | --- | --- |
| callback | [<code>forEachColumn</code>](./Matrix#module_Matrix..Matrix..forEachColumn) | The function to execute per iteration. |
| thisArg | <code>object</code> | The argument to use as `this` in the function. |


* * *

<a name="module_MatrixTranspose..MatrixTranspose..forEach"></a>

#### MatrixTranspose~forEach : <code>function</code>
**Kind**: inner typedef of [<code>MatrixTranspose</code>](./Matrix#module_MatrixTranspose..MatrixTranspose)  

| Param | Type | Description |
| --- | --- | --- |
| entry | <code>number</code> | The current entry of the transpose being processed. |
| i | <code>number</code> | The entry's row number in the transpose (1-indexed). |
| j | <code>number</code> | The entry's column number in the transpose (1-indexed). |
| index | <code>number</code> | The 0-based index of the entry in the transpose's array of row-major-ordered entries. |
| transpose | <code>MatrixTranspose</code> | The instance that this method was called upon. |
| matrix | [<code>Matrix</code>](./Matrix#module_Matrix..Matrix) | The original matrix. |


* * *

