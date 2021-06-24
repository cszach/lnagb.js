<a name="module_LinearEquation"></a>

## LinearEquation
Contains the [LinearEquation](#module_LinearEquation..LinearEquation) class, which encodes
linear equations of any number of variables.

**Author**: Novak / <novakcgx@protonmail.com>  

* [LinearEquation](#module_LinearEquation)
    * [~LinearEquation](#module_LinearEquation..LinearEquation)
        * [new LinearEquation(coefficients, constant)](#new_module_LinearEquation..LinearEquation_new)
        * [.coefficients](#module_LinearEquation..LinearEquation+coefficients) : <code>Array.&lt;number&gt;</code>
        * [.constant](#module_LinearEquation..LinearEquation+constant) : <code>number</code>
        * [.numberOfVariables](#module_LinearEquation..LinearEquation+numberOfVariables) : <code>number</code>
        * [.clone()](#module_LinearEquation..LinearEquation+clone) ⇒ <code>LinearEquation</code>
        * [.multiplyScalar(k)](#module_LinearEquation..LinearEquation+multiplyScalar) ⇒ <code>LinearEquation</code>
        * [.negate()](#module_LinearEquation..LinearEquation+negate) ⇒ <code>LinearEquation</code>
        * [.add(equation)](#module_LinearEquation..LinearEquation+add) ⇒ <code>LinearEquation</code>
        * [.subtract(equation)](#module_LinearEquation..LinearEquation+subtract) ⇒ <code>LinearEquation</code>
        * [.toArray()](#module_LinearEquation..LinearEquation+toArray) ⇒ <code>Array.&lt;number&gt;</code>


* * *

<a name="module_LinearEquation..LinearEquation"></a>

### LinearEquation~LinearEquation
Encodes linear equations by storing coefficients in an array and the constant
term. Coefficients are stored left-to-right.

**Kind**: inner class of [<code>LinearEquation</code>](#module_LinearEquation)  

* [~LinearEquation](#module_LinearEquation..LinearEquation)
    * [new LinearEquation(coefficients, constant)](#new_module_LinearEquation..LinearEquation_new)
    * [.coefficients](#module_LinearEquation..LinearEquation+coefficients) : <code>Array.&lt;number&gt;</code>
    * [.constant](#module_LinearEquation..LinearEquation+constant) : <code>number</code>
    * [.numberOfVariables](#module_LinearEquation..LinearEquation+numberOfVariables) : <code>number</code>
    * [.clone()](#module_LinearEquation..LinearEquation+clone) ⇒ <code>LinearEquation</code>
    * [.multiplyScalar(k)](#module_LinearEquation..LinearEquation+multiplyScalar) ⇒ <code>LinearEquation</code>
    * [.negate()](#module_LinearEquation..LinearEquation+negate) ⇒ <code>LinearEquation</code>
    * [.add(equation)](#module_LinearEquation..LinearEquation+add) ⇒ <code>LinearEquation</code>
    * [.subtract(equation)](#module_LinearEquation..LinearEquation+subtract) ⇒ <code>LinearEquation</code>
    * [.toArray()](#module_LinearEquation..LinearEquation+toArray) ⇒ <code>Array.&lt;number&gt;</code>


* * *

<a name="new_module_LinearEquation..LinearEquation_new"></a>

#### new LinearEquation(coefficients, constant)
Constructs a `LinearEquation` instance, which encodes a linear equation.


| Param | Type | Description |
| --- | --- | --- |
| coefficients | <code>Array.&lt;number&gt;</code> | The coefficients of the linear equation. |
| constant | <code>number</code> | The constant term of the linear equation. |


* * *

<a name="module_LinearEquation..LinearEquation+coefficients"></a>

#### linearEquation.coefficients : <code>Array.&lt;number&gt;</code>
Array of this equation's coefficients.

**Kind**: instance property of [<code>LinearEquation</code>](#module_LinearEquation..LinearEquation)  

* * *

<a name="module_LinearEquation..LinearEquation+constant"></a>

#### linearEquation.constant : <code>number</code>
The constant term of this linear equation.

**Kind**: instance property of [<code>LinearEquation</code>](#module_LinearEquation..LinearEquation)  

* * *

<a name="module_LinearEquation..LinearEquation+numberOfVariables"></a>

#### linearEquation.numberOfVariables : <code>number</code>
The number of variables in this linear equation.

**Kind**: instance property of [<code>LinearEquation</code>](#module_LinearEquation..LinearEquation)  

* * *

<a name="module_LinearEquation..LinearEquation+clone"></a>

#### linearEquation.clone() ⇒ <code>LinearEquation</code>
Returns an instance of `LinearEquation` that is exactly the same as this
instance.

**Kind**: instance method of [<code>LinearEquation</code>](#module_LinearEquation..LinearEquation)  
**Returns**: <code>LinearEquation</code> - An exact copy of this instance  

* * *

<a name="module_LinearEquation..LinearEquation+multiplyScalar"></a>

#### linearEquation.multiplyScalar(k) ⇒ <code>LinearEquation</code>
Multiplies this linear equation with a scalar.

**Kind**: instance method of [<code>LinearEquation</code>](#module_LinearEquation..LinearEquation)  
**Returns**: <code>LinearEquation</code> - This linear equation  

| Param | Type | Description |
| --- | --- | --- |
| k | <code>number</code> | The scalar to multiply this equation by. |


* * *

<a name="module_LinearEquation..LinearEquation+negate"></a>

#### linearEquation.negate() ⇒ <code>LinearEquation</code>
Negates this equation.

**Kind**: instance method of [<code>LinearEquation</code>](#module_LinearEquation..LinearEquation)  
**Returns**: <code>LinearEquation</code> - This linear equation  

* * *

<a name="module_LinearEquation..LinearEquation+add"></a>

#### linearEquation.add(equation) ⇒ <code>LinearEquation</code>
Adds a linear equation to this linear equation.

**Kind**: instance method of [<code>LinearEquation</code>](#module_LinearEquation..LinearEquation)  
**Returns**: <code>LinearEquation</code> - This linear equation  

| Param | Type | Description |
| --- | --- | --- |
| equation | <code>LinearEquation</code> | The equation to add to this equation. Both equations must have the same number of coefficients. |


* * *

<a name="module_LinearEquation..LinearEquation+subtract"></a>

#### linearEquation.subtract(equation) ⇒ <code>LinearEquation</code>
Subtracts a linear equation from this linear equation.

**Kind**: instance method of [<code>LinearEquation</code>](#module_LinearEquation..LinearEquation)  
**Returns**: <code>LinearEquation</code> - This linear equation  

| Param | Type | Description |
| --- | --- | --- |
| equation | <code>LinearEquation</code> | The equation to subtract this equation to. Both equations must have the same number of coefficients. |


* * *

<a name="module_LinearEquation..LinearEquation+toArray"></a>

#### linearEquation.toArray() ⇒ <code>Array.&lt;number&gt;</code>
Returns an array containing the coefficients from left to right and the
constant. Helpful in converting to a row or column vector.

**Kind**: instance method of [<code>LinearEquation</code>](#module_LinearEquation..LinearEquation)  
**Returns**: <code>Array.&lt;number&gt;</code> - The array representation of this linear equation  

* * *

