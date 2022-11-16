<a name="module_Vector"></a>

## Vector
Contains the [Vector](#module_Vector..Vector) class, which encodes vector
quantities of any number of entries in linear algebra.

**Author**: Zach / <cszach@proton.me>  

* [Vector](#module_Vector)
    * [~Vector](#module_Vector..Vector)
        * [new Vector(entries)](#new_module_Vector..Vector_new)
        * [.elements](#module_Vector..Vector+elements) : <code>Array.&lt;number&gt;</code>
        * [.size](#module_Vector..Vector+size) : <code>object</code>
        * [.numberOfEntries](#module_Vector..Vector+numberOfEntries) : <code>number</code>
        * [.clone()](#module_Vector..Vector+clone) ⇒ <code>Vector</code>
        * [.equals(vector)](#module_Vector..Vector+equals) ⇒ <code>boolean</code>
        * [.multiplyScalar(k)](#module_Vector..Vector+multiplyScalar) ⇒ <code>Vector</code>
        * [.negate()](#module_Vector..Vector+negate) ⇒ <code>Vector</code>
        * [.add(vector)](#module_Vector..Vector+add) ⇒ <code>Vector</code>
        * [.subtract(vector)](#module_Vector..Vector+subtract) ⇒ <code>Vector</code>
        * [.dot(vector)](#module_Vector..Vector+dot) ⇒ <code>Vector</code>


* * *

<a name="module_Vector..Vector"></a>

### Vector~Vector
Encodes vectors and vector operations. Compatible for use with matrices (e.g.
for matrix-vector multiplications).

For optimal performance, use [Vector2](./Vector2#module_Vector2..Vector2),
[Vector3](./Vector3#module_Vector3..Vector3), [Vector4](./Vector4#module_Vector4..Vector4) if possible.

**Kind**: inner class of [<code>Vector</code>](#module_Vector)  

* [~Vector](#module_Vector..Vector)
    * [new Vector(entries)](#new_module_Vector..Vector_new)
    * [.elements](#module_Vector..Vector+elements) : <code>Array.&lt;number&gt;</code>
    * [.size](#module_Vector..Vector+size) : <code>object</code>
    * [.numberOfEntries](#module_Vector..Vector+numberOfEntries) : <code>number</code>
    * [.clone()](#module_Vector..Vector+clone) ⇒ <code>Vector</code>
    * [.equals(vector)](#module_Vector..Vector+equals) ⇒ <code>boolean</code>
    * [.multiplyScalar(k)](#module_Vector..Vector+multiplyScalar) ⇒ <code>Vector</code>
    * [.negate()](#module_Vector..Vector+negate) ⇒ <code>Vector</code>
    * [.add(vector)](#module_Vector..Vector+add) ⇒ <code>Vector</code>
    * [.subtract(vector)](#module_Vector..Vector+subtract) ⇒ <code>Vector</code>
    * [.dot(vector)](#module_Vector..Vector+dot) ⇒ <code>Vector</code>


* * *

<a name="new_module_Vector..Vector_new"></a>

#### new Vector(entries)
Constructs a new `Vector` instance, which encodes a vector and its
operations.


| Param | Type | Description |
| --- | --- | --- |
| entries | <code>Array.&lt;number&gt;</code> | Entries of the new vector. |


* * *

<a name="module_Vector..Vector+elements"></a>

#### vector.elements : <code>Array.&lt;number&gt;</code>
Stores the entries of this vector in order.

**Kind**: instance property of [<code>Vector</code>](#module_Vector..Vector)  

* * *

<a name="module_Vector..Vector+size"></a>

#### vector.size : <code>object</code>
Contains the dimensions of this vector as an object in the
form `{ rows, columns }`. Serve for compatibility with matrix classes.

**Kind**: instance property of [<code>Vector</code>](#module_Vector..Vector)  

* * *

<a name="module_Vector..Vector+numberOfEntries"></a>

#### vector.numberOfEntries : <code>number</code>
The number of entries in this vector.

**Kind**: instance property of [<code>Vector</code>](#module_Vector..Vector)  

* * *

<a name="module_Vector..Vector+clone"></a>

#### vector.clone() ⇒ <code>Vector</code>
Creates and returns a clone of this vector instance.

**Kind**: instance method of [<code>Vector</code>](#module_Vector..Vector)  
**Returns**: <code>Vector</code> - A clone of this vector  

* * *

<a name="module_Vector..Vector+equals"></a>

#### vector.equals(vector) ⇒ <code>boolean</code>
Checks if this vector and another vector are equal.

**Kind**: instance method of [<code>Vector</code>](#module_Vector..Vector)  
**Returns**: <code>boolean</code> - `true` if the two vectors are equal, `false` otherwise  

| Param | Type | Description |
| --- | --- | --- |
| vector | <code>Vector</code> | The vector to compare this vector to. |


* * *

<a name="module_Vector..Vector+multiplyScalar"></a>

#### vector.multiplyScalar(k) ⇒ <code>Vector</code>
Multiplies this vector by a scalar.

**Kind**: instance method of [<code>Vector</code>](#module_Vector..Vector)  
**Returns**: <code>Vector</code> - This vector  

| Param | Type | Description |
| --- | --- | --- |
| k | <code>number</code> | The scalar to multiply this vector by. |


* * *

<a name="module_Vector..Vector+negate"></a>

#### vector.negate() ⇒ <code>Vector</code>
Multiplies this vector by -1.

**Kind**: instance method of [<code>Vector</code>](#module_Vector..Vector)  
**Returns**: <code>Vector</code> - This vector  

* * *

<a name="module_Vector..Vector+add"></a>

#### vector.add(vector) ⇒ <code>Vector</code>
Adds a vector to this vector.

**Kind**: instance method of [<code>Vector</code>](#module_Vector..Vector)  
**Returns**: <code>Vector</code> - This vector  

| Param | Type | Description |
| --- | --- | --- |
| vector | <code>Vector</code> | The vector to add to this vector. |


* * *

<a name="module_Vector..Vector+subtract"></a>

#### vector.subtract(vector) ⇒ <code>Vector</code>
Subtracts a vector from this vector.

**Kind**: instance method of [<code>Vector</code>](#module_Vector..Vector)  
**Returns**: <code>Vector</code> - This vector  

| Param | Type | Description |
| --- | --- | --- |
| vector | <code>Vector</code> | The vector to subtract this vector to. |


* * *

<a name="module_Vector..Vector+dot"></a>

#### vector.dot(vector) ⇒ <code>Vector</code>
Returns the dot product of this vector and another vector.

**Kind**: instance method of [<code>Vector</code>](#module_Vector..Vector)  
**Returns**: <code>Vector</code> - The dot product of this vector and the given vector  

| Param | Type | Description |
| --- | --- | --- |
| vector | <code>Vector</code> | The vector to perform a dot product with this vector. |


* * *

