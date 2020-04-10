<a name="LinearEquation"></a>

## LinearEquation
Encodes linear equations in mathematics.

If you only need to deal with linear equations with 3 variables or fewer,
see [`LinearEquations`](./LinearEquations).

**Kind**: global class  

* [LinearEquation](#LinearEquation)
    * [new LinearEquation(name)](#new_LinearEquation_new)
    * _instance_
        * [.numberOfVariables](#LinearEquation+numberOfVariables) ⇒ <code>number</code>
        * [.set(coefficients, constant)](#LinearEquation+set) ⇒ [<code>LinearEquation</code>](#LinearEquation)
        * [.setCoefficients()](#LinearEquation+setCoefficients) ⇒ [<code>LinearEquation</code>](#LinearEquation)
        * [.setConstant(constant)](#LinearEquation+setConstant) ⇒ [<code>LinearEquation</code>](#LinearEquation)
        * [.clone()](#LinearEquation+clone) ⇒ [<code>LinearEquation</code>](#LinearEquation)
        * [.copy(equ)](#LinearEquation+copy) ⇒ [<code>LinearEquation</code>](#LinearEquation)
        * [.add(equ)](#LinearEquation+add) ⇒ [<code>LinearEquation</code>](#LinearEquation)
        * [.subtract(equ)](#LinearEquation+subtract) ⇒ [<code>LinearEquation</code>](#LinearEquation)
        * [.multiplyScalar(s)](#LinearEquation+multiplyScalar) ⇒ [<code>LinearEquation</code>](#LinearEquation)
    * _static_
        * [.isIt(o)](#LinearEquation.isIt) ⇒ <code>boolean</code>

<a name="new_LinearEquation_new"></a>

### new LinearEquation(name)
Constructs a `LinearEquation` instance.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> | <code>&quot;LinearEquation&quot;</code> | The name for the new instance |

<a name="LinearEquation+numberOfVariables"></a>

### linearEquation.numberOfVariables ⇒ <code>number</code>
**Kind**: instance property of [<code>LinearEquation</code>](#LinearEquation)  
**Returns**: <code>number</code> - The number of coefficients/variables in this linear equation  
<a name="LinearEquation+set"></a>

### linearEquation.set(coefficients, constant) ⇒ [<code>LinearEquation</code>](#LinearEquation)
Sets the coefficients and the constant for this linear equation.

**Kind**: instance method of [<code>LinearEquation</code>](#LinearEquation)  
**Returns**: [<code>LinearEquation</code>](#LinearEquation) - This linear equation (after setting values)  

| Param | Type | Description |
| --- | --- | --- |
| coefficients | <code>Array.&lt;number&gt;</code> | The coefficients for this equation |
| constant | <code>number</code> | The constant for this equation |

<a name="LinearEquation+setCoefficients"></a>

### linearEquation.setCoefficients() ⇒ [<code>LinearEquation</code>](#LinearEquation)
Sets the coefficients for this linear equation. Arguments to this method
are assumed to be the coefficients given in order from left to right.

**Kind**: instance method of [<code>LinearEquation</code>](#LinearEquation)  
**Returns**: [<code>LinearEquation</code>](#LinearEquation) - This linear equation (after setting the coefficients)  
<a name="LinearEquation+setConstant"></a>

### linearEquation.setConstant(constant) ⇒ [<code>LinearEquation</code>](#LinearEquation)
Sets the constant for this linear equation.

**Kind**: instance method of [<code>LinearEquation</code>](#LinearEquation)  
**Returns**: [<code>LinearEquation</code>](#LinearEquation) - This linear equation (after setting the constant)  

| Param | Type | Description |
| --- | --- | --- |
| constant | <code>number</code> | The constant for this linear equation |

<a name="LinearEquation+clone"></a>

### linearEquation.clone() ⇒ [<code>LinearEquation</code>](#LinearEquation)
Creates an instance of `LinearEquation` that is exactly the same as this
instance.

**Kind**: instance method of [<code>LinearEquation</code>](#LinearEquation)  
**Returns**: [<code>LinearEquation</code>](#LinearEquation) - An exact copy of this instance  
<a name="LinearEquation+copy"></a>

### linearEquation.copy(equ) ⇒ [<code>LinearEquation</code>](#LinearEquation)
Makes this linear equation exactly the same as another linear equation.

**Kind**: instance method of [<code>LinearEquation</code>](#LinearEquation)  
**Returns**: [<code>LinearEquation</code>](#LinearEquation) - This linear equation (after copying)  

| Param | Type | Description |
| --- | --- | --- |
| equ | [<code>LinearEquation</code>](#LinearEquation) | The linear equation to copy from |

<a name="LinearEquation+add"></a>

### linearEquation.add(equ) ⇒ [<code>LinearEquation</code>](#LinearEquation)
Adds a linear equation to this linear equation.

**Kind**: instance method of [<code>LinearEquation</code>](#LinearEquation)  
**Returns**: [<code>LinearEquation</code>](#LinearEquation) - This linear equation  

| Param | Type | Description |
| --- | --- | --- |
| equ | [<code>LinearEquation</code>](#LinearEquation) | The equation to add to this linear equation |

<a name="LinearEquation+subtract"></a>

### linearEquation.subtract(equ) ⇒ [<code>LinearEquation</code>](#LinearEquation)
Subtracts a linear equation from this linear equation.

**Kind**: instance method of [<code>LinearEquation</code>](#LinearEquation)  
**Returns**: [<code>LinearEquation</code>](#LinearEquation) - This linear equation  

| Param | Type | Description |
| --- | --- | --- |
| equ | [<code>LinearEquation</code>](#LinearEquation) | The equation used to subtract |

<a name="LinearEquation+multiplyScalar"></a>

### linearEquation.multiplyScalar(s) ⇒ [<code>LinearEquation</code>](#LinearEquation)
Multiplies this linear equation with a scalar.

**Kind**: instance method of [<code>LinearEquation</code>](#LinearEquation)  
**Returns**: [<code>LinearEquation</code>](#LinearEquation) - This linear equation  

| Param | Type | Description |
| --- | --- | --- |
| s | <code>number</code> | The scalar to multiply this equation by |

<a name="LinearEquation.isIt"></a>

### LinearEquation.isIt(o) ⇒ <code>boolean</code>
Checks if *o* properly encodes a linear equation.

Criteria:
- The constructor or its prototype is `LinearEquation`
- Has the `coefficients` property that is an array that stores a finite
  amount of numbers
- Has the `constant` property that is a number

**Kind**: static method of [<code>LinearEquation</code>](#LinearEquation)  
**Returns**: <code>boolean</code> - `true` if *o* satisfies the criteria, `false` otherwise  

| Param | Type | Description |
| --- | --- | --- |
| o | <code>object</code> | The object to check |

