<a name="Matrix"></a>

## Matrix
Encodes matrices *and* their operations.

This class encodes a matrix by storing the elements of that matrix in
**row-major** order. Every instance of this class is an object that has the
following properties:
- `name`: The matrix's (optional) denotation, defaults to null (no name)
- `size`: An object that has the following properties:
    - `rows`: The number of rows in the encoded matrix
    - `columns`: The number of columns in the encoded matrix
- `elements`: A JavaScript array that stores the elements of the encoded
  matrix in **row-major** order

**Note**: You can freely change the value of the `name` property, but `size`
and `elements` should only be changed using this class's methods.

**Kind**: global class  

* [Matrix](#Matrix)
    * [new Matrix(name)](#new_Matrix_new)
    * _instance_
        * [.numberOfElements](#Matrix+numberOfElements) ⇒ <code>number</code>
        * [.rows](#Matrix+rows) ⇒ <code>Array.&lt;Array&gt;</code>
        * [.columns](#Matrix+columns) ⇒ <code>Array.&lt;Array&gt;</code>
        * [.isInRowEchelonForm](#Matrix+isInRowEchelonForm) ⇒ <code>boolean</code>
        * [.isInReducedRowEchelonForm](#Matrix+isInReducedRowEchelonForm) ⇒ <code>boolean</code>
        * [.rank](#Matrix+rank) ⇒ <code>number</code>
        * [.copy(m, copyName)](#Matrix+copy) ⇒ [<code>Matrix</code>](#Matrix)
        * [.clone()](#Matrix+clone) ⇒ [<code>Matrix</code>](#Matrix)
        * [.setDimensions(r, c)](#Matrix+setDimensions) ⇒ [<code>Matrix</code>](#Matrix)
        * [.set()](#Matrix+set) ⇒ [<code>Matrix</code>](#Matrix)
        * [.sameSize(m)](#Matrix+sameSize) ⇒ <code>boolean</code>
        * [.zero()](#Matrix+zero) ⇒ [<code>Matrix</code>](#Matrix)
        * [.equals(m)](#Matrix+equals) ⇒ <code>boolean</code>
        * [.element(r, c)](#Matrix+element) ⇒ <code>number</code>
        * [.elementIndex(r, c)](#Matrix+elementIndex) ⇒ <code>number</code>
        * [.row(r)](#Matrix+row) ⇒ <code>Array.&lt;number&gt;</code>
        * [.column(c)](#Matrix+column) ⇒ <code>Array.&lt;number&gt;</code>
        * [.diagonal(r, c)](#Matrix+diagonal) ⇒ <code>Array.&lt;number&gt;</code>
        * [.leadingCoefficient(r)](#Matrix+leadingCoefficient) ⇒ <code>number</code>
        * [.forEach(callback, thisArg)](#Matrix+forEach)
        * [.forEachRow(callback, thisArg)](#Matrix+forEachRow)
        * [.forEachColumn(callback, thisArg)](#Matrix+forEachColumn)
        * [.mainDiagonal()](#Matrix+mainDiagonal) ⇒ <code>Array.&lt;number&gt;</code>
        * [.sizeSwap()](#Matrix+sizeSwap)
        * [.interchargeRows(r, s)](#Matrix+interchargeRows) ⇒ [<code>Matrix</code>](#Matrix)
        * [.multiplyRowByScalar(r, a)](#Matrix+multiplyRowByScalar) ⇒ [<code>Matrix</code>](#Matrix)
        * [.addRowTimesScalarToRow(r, s, a)](#Matrix+addRowTimesScalarToRow) ⇒ [<code>Matrix</code>](#Matrix)
        * [.transpose()](#Matrix+transpose) ⇒ [<code>Matrix</code>](#Matrix)
        * [.multiplyScalar(s)](#Matrix+multiplyScalar) ⇒ [<code>Matrix</code>](#Matrix)
        * [.negate()](#Matrix+negate) ⇒ [<code>Matrix</code>](#Matrix)
        * [.add(m)](#Matrix+add) ⇒ [<code>Matrix</code>](#Matrix)
        * [.subtract(m)](#Matrix+subtract) ⇒ [<code>Matrix</code>](#Matrix)
        * [.multiply(m)](#Matrix+multiply) ⇒ [<code>Matrix</code>](#Matrix)
        * [.premultiply(m)](#Matrix+premultiply) ⇒ [<code>Matrix</code>](#Matrix)
        * [.isZeroRow(r)](#Matrix+isZeroRow) ⇒ <code>boolean</code>
        * [.reduce(canonical)](#Matrix+reduce) ⇒ [<code>Matrix</code>](#Matrix)
    * _static_
        * [.isIt(o)](#Matrix.isIt) ⇒ <code>boolean</code>
        * [.multiplyMatrices(m, n)](#Matrix.multiplyMatrices) ⇒ [<code>Matrix</code>](#Matrix)

<a name="new_Matrix_new"></a>

### new Matrix(name)
Constructs a new `Matrix` instance.

The default new matrix is a 2 x 3 zero matrix. Change its dimensions
by using `setDimensions` and set elements for it by using `set`.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> | <code>null</code> | The denotation for the new matrix |

<a name="Matrix+numberOfElements"></a>

### matrix.numberOfElements ⇒ <code>number</code>
Returns the number of elements in this matrix.

**Kind**: instance property of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>number</code> - The number of elements in this matrix  
<a name="Matrix+rows"></a>

### matrix.rows ⇒ <code>Array.&lt;Array&gt;</code>
Returns the rows of this matrix in an array.

**Kind**: instance property of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>Array.&lt;Array&gt;</code> - The rows in this matrix  
<a name="Matrix+columns"></a>

### matrix.columns ⇒ <code>Array.&lt;Array&gt;</code>
Returns the columns of this matrix in an array.

**Kind**: instance property of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>Array.&lt;Array&gt;</code> - The columns in this matrix  
<a name="Matrix+isInRowEchelonForm"></a>

### matrix.isInRowEchelonForm ⇒ <code>boolean</code>
**Kind**: instance property of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>boolean</code> - `true` if this matrix is in row-echelon form, `false`
otherwise  
<a name="Matrix+isInReducedRowEchelonForm"></a>

### matrix.isInReducedRowEchelonForm ⇒ <code>boolean</code>
**Kind**: instance property of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>boolean</code> - `true` if this matrix is in reduced row-echelon form,
`false` otherwise  
<a name="Matrix+rank"></a>

### matrix.rank ⇒ <code>number</code>
Returns the rank of this matrix without reducing it in place.

**Kind**: instance property of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>number</code> - The rank of this matrix  
<a name="Matrix+copy"></a>

### matrix.copy(m, copyName) ⇒ [<code>Matrix</code>](#Matrix)
Makes this matrix the same as matrix *m*.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: [<code>Matrix</code>](#Matrix) - This matrix  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| m | [<code>Matrix</code>](#Matrix) |  | The instance to copy from |
| copyName | <code>boolean</code> | <code>false</code> | Set to `true` to copy the denotation of *m* |

<a name="Matrix+clone"></a>

### matrix.clone() ⇒ [<code>Matrix</code>](#Matrix)
Creates and returns a clone of this matrix instance.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: [<code>Matrix</code>](#Matrix) - A clone of this matrix  
<a name="Matrix+setDimensions"></a>

### matrix.setDimensions(r, c) ⇒ [<code>Matrix</code>](#Matrix)
Sets the dimensions for this matrix.

Using this method will change the dimensions of this matrix and reset all
elements back to 0.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: [<code>Matrix</code>](#Matrix) - This matrix  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | Number of rows |
| c | <code>number</code> | Number of columns |

<a name="Matrix+set"></a>

### matrix.set() ⇒ [<code>Matrix</code>](#Matrix)
Sets the elements for this matrix.

Arguments are assumed to be the elements given in row-major order.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: [<code>Matrix</code>](#Matrix) - This matrix  
<a name="Matrix+sameSize"></a>

### matrix.sameSize(m) ⇒ <code>boolean</code>
Checks if this matrix has the same size as *m*.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>boolean</code> - `true` if the two matrices have the same size, `false`
otherwise  

| Param | Type | Description |
| --- | --- | --- |
| m | [<code>Matrix</code>](#Matrix) | The matrix to check the size of this matrix against |

<a name="Matrix+zero"></a>

### matrix.zero() ⇒ [<code>Matrix</code>](#Matrix)
Makes this matrix a zero matrix.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: [<code>Matrix</code>](#Matrix) - This matrix  
<a name="Matrix+equals"></a>

### matrix.equals(m) ⇒ <code>boolean</code>
Checks if this matrix and the given matrix *m* are equal.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>boolean</code> - `true` if the two matrices are the same, `false`
otherwise  

| Param | Type | Description |
| --- | --- | --- |
| m | [<code>Matrix</code>](#Matrix) | The matrix to compare this matrix to |

<a name="Matrix+element"></a>

### matrix.element(r, c) ⇒ <code>number</code>
Returns the element in row *r* and column *c* in this matrix.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>number</code> - The element in row *r* and column *c*  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | The row that contains the element (1-indexed) |
| c | <code>number</code> | The column that contains the element (1-indexed) |

<a name="Matrix+elementIndex"></a>

### matrix.elementIndex(r, c) ⇒ <code>number</code>
Returns the 0-indexed position of the element in row *r* and column *c*
within `elements`.

If *r* and *c* are not within the dimensions of this matrix, returns -1.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>number</code> - The position of the element in `.elements` (0-indexed)  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | The row that contains the element (1-indexed) |
| c | <code>number</code> | The column that contains the element (1-indexed) |

<a name="Matrix+row"></a>

### matrix.row(r) ⇒ <code>Array.&lt;number&gt;</code>
Returns a row in this matrix as a JavaScript array.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>Array.&lt;number&gt;</code> - The array that contains the elements in the row  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | The position of the row (1-indexed) |

<a name="Matrix+column"></a>

### matrix.column(c) ⇒ <code>Array.&lt;number&gt;</code>
Returns a column in this matrix as a JavaScript array.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>Array.&lt;number&gt;</code> - The array that contains the elements in the column  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>number</code> | The position of the column (1-indexed) |

<a name="Matrix+diagonal"></a>

### matrix.diagonal(r, c) ⇒ <code>Array.&lt;number&gt;</code>
Returns the diagonal in this matrix that contains the element in row *r*
and column *c*.

If *r* and *c* are not within the dimensions of this matrix, returns an
empty array.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>Array.&lt;number&gt;</code> - The diagonal that contains the element  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | The row that contains the element (1-indexed) |
| c | <code>number</code> | The column that contains the element (1-indexed) |

<a name="Matrix+leadingCoefficient"></a>

### matrix.leadingCoefficient(r) ⇒ <code>number</code>
Returns the leading coefficient of a row

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>number</code> - The leading coefficient of the row, or undefined if it
does not have one  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | The row to consider (1-indexed) |

<a name="Matrix+forEach"></a>

### matrix.forEach(callback, thisArg)
Executes a function for each element in this matrix.

The function accepts any of the following arguments (in order):
1. `e` (`number`): The current element in the matrix being processed
2. `i` (`number`): The position of `element` in this matrix

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | The function to execute per iteration |
| thisArg | <code>object</code> | The argument to use as `this` in the function |

<a name="Matrix+forEachRow"></a>

### matrix.forEachRow(callback, thisArg)
Executes a function for each row in this matrix.

The function accepts any of the following arguments (in order):
1. (`Array.<number>`) The current row in the matrix being processed
2. `r` (`number`) The position of the row in this matrix (1-indexed)

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | The function to execute per iteration |
| thisArg | <code>object</code> | The argument to use as `this` in the function |

<a name="Matrix+forEachColumn"></a>

### matrix.forEachColumn(callback, thisArg)
Executes a function for each column in this matrix.

The function accepts any of the following arguments (in order):
1. (`Array.<number>`) The current column in the matrix being processed
2. `r` (`number`) The position of the column in this matrix (1-indexed)

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | The function to execute per iteration |
| thisArg | <code>object</code> | The argument to use as `this` in the function |

<a name="Matrix+mainDiagonal"></a>

### matrix.mainDiagonal() ⇒ <code>Array.&lt;number&gt;</code>
Returns the main diagonal of this matrix.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>Array.&lt;number&gt;</code> - The main diagonal of this matrix  
<a name="Matrix+sizeSwap"></a>

### matrix.sizeSwap()
Swaps the dimensions of this matrix.

**Note**: This may be used by this class's other methods such as
`transpose`, but it should not be called manually.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
<a name="Matrix+interchargeRows"></a>

### matrix.interchargeRows(r, s) ⇒ [<code>Matrix</code>](#Matrix)
Intercharges row *r* with row *s* in place.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: [<code>Matrix</code>](#Matrix) - This matrix  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | The row to intercharge with *s* (1-indexed) |
| s | <code>number</code> | The row to intercharge with *r* (1-indexed) |

<a name="Matrix+multiplyRowByScalar"></a>

### matrix.multiplyRowByScalar(r, a) ⇒ [<code>Matrix</code>](#Matrix)
Multiplies row *r* by a non-zero scalar *a* in place.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: [<code>Matrix</code>](#Matrix) - This matrix  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | The row to multiply the scalar by (1-indexed) |
| a | <code>number</code> | The scalar to multiply the row by |

<a name="Matrix+addRowTimesScalarToRow"></a>

### matrix.addRowTimesScalarToRow(r, s, a) ⇒ [<code>Matrix</code>](#Matrix)
Adds *a* times row *s* to row *r* in place.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: [<code>Matrix</code>](#Matrix) - This matrix  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| r | <code>number</code> |  | The row that gets added (1-indexed) |
| s | <code>number</code> |  | The row to multiply the scalar by and then add to row *r* (1-indexed) |
| a | <code>number</code> | <code>1</code> | The scalar to multiply row *s* by |

<a name="Matrix+transpose"></a>

### matrix.transpose() ⇒ [<code>Matrix</code>](#Matrix)
Transposes this matrix in place.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: [<code>Matrix</code>](#Matrix) - This matrix  
<a name="Matrix+multiplyScalar"></a>

### matrix.multiplyScalar(s) ⇒ [<code>Matrix</code>](#Matrix)
Multiplies this matrix by scalar *s*.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: [<code>Matrix</code>](#Matrix) - This matrix  

| Param | Type | Description |
| --- | --- | --- |
| s | <code>number</code> | The scalar to multiply this matrix by |

<a name="Matrix+negate"></a>

### matrix.negate() ⇒ [<code>Matrix</code>](#Matrix)
Multiplies this matrix by -1.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: [<code>Matrix</code>](#Matrix) - This matrix  
<a name="Matrix+add"></a>

### matrix.add(m) ⇒ [<code>Matrix</code>](#Matrix)
Adds matrix *m* to this matrix.

If this matrix and *m* aren't of the same size, perform no addition.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: [<code>Matrix</code>](#Matrix) - This matrix  

| Param | Type | Description |
| --- | --- | --- |
| m | [<code>Matrix</code>](#Matrix) | The matrix to add to this matrix |

<a name="Matrix+subtract"></a>

### matrix.subtract(m) ⇒ [<code>Matrix</code>](#Matrix)
Subtracts *m* from this matrix.

If this matrix and *m* aren't of the same size, perform no substraction.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: [<code>Matrix</code>](#Matrix) - This matrix  

| Param | Type | Description |
| --- | --- | --- |
| m | [<code>Matrix</code>](#Matrix) | The matrix to subtract this matrix to |

<a name="Matrix+multiply"></a>

### matrix.multiply(m) ⇒ [<code>Matrix</code>](#Matrix)
Post-multiplies this matrix by *m*.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: [<code>Matrix</code>](#Matrix) - This matrix  

| Param | Type | Description |
| --- | --- | --- |
| m | [<code>Matrix</code>](#Matrix) | The matrix to post-multiply this matrix to |

<a name="Matrix+premultiply"></a>

### matrix.premultiply(m) ⇒ [<code>Matrix</code>](#Matrix)
Pre-multiplies this matrix by *m*.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: [<code>Matrix</code>](#Matrix) - This matrix  

| Param | Type | Description |
| --- | --- | --- |
| m | [<code>Matrix</code>](#Matrix) | The matrix to pre-multiply this matrix to |

<a name="Matrix+isZeroRow"></a>

### matrix.isZeroRow(r) ⇒ <code>boolean</code>
Checks if a row in this matrix is zero (contains only 0s)

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>boolean</code> - `true` if the row is zero, `false` otherwise  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | The row to consider (1-indexed) |

<a name="Matrix+reduce"></a>

### matrix.reduce(canonical) ⇒ [<code>Matrix</code>](#Matrix)
Reduces this matrix to its row-echelon form in place using Gaussian
algorithm.

**Kind**: instance method of [<code>Matrix</code>](#Matrix)  
**Returns**: [<code>Matrix</code>](#Matrix) - This matrix after reduction  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| canonical | <code>boolean</code> | <code>false</code> | Set to `true` to reduce to reduced row-echelon |

<a name="Matrix.isIt"></a>

### Matrix.isIt(o) ⇒ <code>boolean</code>
Checks if object *o* is an instance of `Matrix` or a child class of
`Matrix`.

Note that methods inside the `Matrix` class do not check if their
parameters are valid (including matrices).

Criteria for being "valid":
- The constructor or the constructor's proto is `Matrix`
- Has the `size` property that has
    - the `rows` property being a positive integer
    - the `columns` property also being a positive integer
- Has the `elements` property and it is a JavaScript array of numbers
  and the number of elements must equal to the product of `.size.rows`
  and `.size.columns`

**Kind**: static method of [<code>Matrix</code>](#Matrix)  
**Returns**: <code>boolean</code> - `true` if *o* encodes a matrix, `false` otherwise  

| Param | Type | Description |
| --- | --- | --- |
| o | <code>object</code> | The object to check |

**Example**  
```js
Matrix.isIt( a )
// -> true
Matrix.isIt( 5 )
// -> false
Matrix.isIt( [ 1, 1, 2, 0, - 1, 7 ] )
// -> false
Matrix.isIt( { name: "FakeMatrix", elements: [ 1, 1, 2, 0 ] } )
// -> false
```
<a name="Matrix.multiplyMatrices"></a>

### Matrix.multiplyMatrices(m, n) ⇒ [<code>Matrix</code>](#Matrix)
Multiplies matrices *m* and *n* in that order.

Multiplying 2 matrices require that the number of columns in the matrix
on the left must equal to the number of rows in the matrix on the right.
If *m* and *n* are not valid for their multiplication, return a clone of
*m*.

**Kind**: static method of [<code>Matrix</code>](#Matrix)  
**Returns**: [<code>Matrix</code>](#Matrix) - The result of the multiplication  

| Param | Type | Description |
| --- | --- | --- |
| m | [<code>Matrix</code>](#Matrix) | The matrix on the left of the multiplication |
| n | [<code>Matrix</code>](#Matrix) | The matrix on the right of the multiplication |

