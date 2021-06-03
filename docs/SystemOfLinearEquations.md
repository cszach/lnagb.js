<a name="module_SystemOfLinearEquations"></a>

## SystemOfLinearEquations
Contains the [SystemOfLinearEquations](#module_SystemOfLinearEquations..SystemOfLinearEquations)
class, which encodes systems of linear equations.

**Author**: Nguyen Hoang Duong / <you_create@protonmail.com>  

* [SystemOfLinearEquations](#module_SystemOfLinearEquations)
    * [~SystemOfLinearEquations](#module_SystemOfLinearEquations..SystemOfLinearEquations)
        * [new SystemOfLinearEquations(equations)](#new_module_SystemOfLinearEquations..SystemOfLinearEquations_new)
        * _instance_
            * [.equations](#module_SystemOfLinearEquations..SystemOfLinearEquations+equations) : <code>Array.&lt;LinearEquation&gt;</code>
            * [.numberOfVariables](#module_SystemOfLinearEquations..SystemOfLinearEquations+numberOfVariables) : <code>number</code>
            * [.numberOfEquations](#module_SystemOfLinearEquations..SystemOfLinearEquations+numberOfEquations) : <code>number</code>
            * [.coefficientMatrix](#module_SystemOfLinearEquations..SystemOfLinearEquations+coefficientMatrix) : [<code>Matrix</code>](./Matrix#module_Matrix..Matrix)
            * [.constantMatrix](#module_SystemOfLinearEquations..SystemOfLinearEquations+constantMatrix) : [<code>Matrix</code>](./Matrix#module_Matrix..Matrix)
            * [.augmentedMatrix](#module_SystemOfLinearEquations..SystemOfLinearEquations+augmentedMatrix) : [<code>AugmentedMatrix</code>](./AugmentedMatrix#module_AugmentedMatrix..AugmentedMatrix)
            * [.clone()](#module_SystemOfLinearEquations..SystemOfLinearEquations+clone) ⇒ <code>SystemOfLinearEquations</code>
            * [.computeCoefficientMatrix()](#module_SystemOfLinearEquations..SystemOfLinearEquations+computeCoefficientMatrix)
            * [.computeConstantMatrix()](#module_SystemOfLinearEquations..SystemOfLinearEquations+computeConstantMatrix)
            * [.computeAugmentedMatrix()](#module_SystemOfLinearEquations..SystemOfLinearEquations+computeAugmentedMatrix)
            * [.lazyComputeAugmentedMatrix()](#module_SystemOfLinearEquations..SystemOfLinearEquations+lazyComputeAugmentedMatrix)
            * [.forEach(callback, thisArg)](#module_SystemOfLinearEquations..SystemOfLinearEquations+forEach)
        * _inner_
            * [~forEach](#module_SystemOfLinearEquations..SystemOfLinearEquations..forEach) : <code>function</code>


* * *

<a name="module_SystemOfLinearEquations..SystemOfLinearEquations"></a>

### SystemOfLinearEquations~SystemOfLinearEquations
Encodes systems of linear equations by storing instances of
[LinearEquation](./LinearEquation#module_LinearEquation..LinearEquation)s in an array.

**Kind**: inner class of [<code>SystemOfLinearEquations</code>](#module_SystemOfLinearEquations)  

* [~SystemOfLinearEquations](#module_SystemOfLinearEquations..SystemOfLinearEquations)
    * [new SystemOfLinearEquations(equations)](#new_module_SystemOfLinearEquations..SystemOfLinearEquations_new)
    * _instance_
        * [.equations](#module_SystemOfLinearEquations..SystemOfLinearEquations+equations) : <code>Array.&lt;LinearEquation&gt;</code>
        * [.numberOfVariables](#module_SystemOfLinearEquations..SystemOfLinearEquations+numberOfVariables) : <code>number</code>
        * [.numberOfEquations](#module_SystemOfLinearEquations..SystemOfLinearEquations+numberOfEquations) : <code>number</code>
        * [.coefficientMatrix](#module_SystemOfLinearEquations..SystemOfLinearEquations+coefficientMatrix) : [<code>Matrix</code>](./Matrix#module_Matrix..Matrix)
        * [.constantMatrix](#module_SystemOfLinearEquations..SystemOfLinearEquations+constantMatrix) : [<code>Matrix</code>](./Matrix#module_Matrix..Matrix)
        * [.augmentedMatrix](#module_SystemOfLinearEquations..SystemOfLinearEquations+augmentedMatrix) : [<code>AugmentedMatrix</code>](./AugmentedMatrix#module_AugmentedMatrix..AugmentedMatrix)
        * [.clone()](#module_SystemOfLinearEquations..SystemOfLinearEquations+clone) ⇒ <code>SystemOfLinearEquations</code>
        * [.computeCoefficientMatrix()](#module_SystemOfLinearEquations..SystemOfLinearEquations+computeCoefficientMatrix)
        * [.computeConstantMatrix()](#module_SystemOfLinearEquations..SystemOfLinearEquations+computeConstantMatrix)
        * [.computeAugmentedMatrix()](#module_SystemOfLinearEquations..SystemOfLinearEquations+computeAugmentedMatrix)
        * [.lazyComputeAugmentedMatrix()](#module_SystemOfLinearEquations..SystemOfLinearEquations+lazyComputeAugmentedMatrix)
        * [.forEach(callback, thisArg)](#module_SystemOfLinearEquations..SystemOfLinearEquations+forEach)
    * _inner_
        * [~forEach](#module_SystemOfLinearEquations..SystemOfLinearEquations..forEach) : <code>function</code>


* * *

<a name="new_module_SystemOfLinearEquations..SystemOfLinearEquations_new"></a>

#### new SystemOfLinearEquations(equations)
Constructs a new instance of `SystemOfLinearEquations`, which encodes a
system of linear equations.


| Param | Type | Description |
| --- | --- | --- |
| equations | <code>Array.&lt;LinearEquation&gt;</code> | Instances of `LinearEquation` for the system. |


* * *

<a name="module_SystemOfLinearEquations..SystemOfLinearEquations+equations"></a>

#### systemOfLinearEquations.equations : <code>Array.&lt;LinearEquation&gt;</code>
Array of linear equations of this system.

**Kind**: instance property of [<code>SystemOfLinearEquations</code>](#module_SystemOfLinearEquations..SystemOfLinearEquations)  

* * *

<a name="module_SystemOfLinearEquations..SystemOfLinearEquations+numberOfVariables"></a>

#### systemOfLinearEquations.numberOfVariables : <code>number</code>
The number of variables of this system.

**Kind**: instance property of [<code>SystemOfLinearEquations</code>](#module_SystemOfLinearEquations..SystemOfLinearEquations)  

* * *

<a name="module_SystemOfLinearEquations..SystemOfLinearEquations+numberOfEquations"></a>

#### systemOfLinearEquations.numberOfEquations : <code>number</code>
The number of linear equations in this system.

**Kind**: instance property of [<code>SystemOfLinearEquations</code>](#module_SystemOfLinearEquations..SystemOfLinearEquations)  

* * *

<a name="module_SystemOfLinearEquations..SystemOfLinearEquations+coefficientMatrix"></a>

#### systemOfLinearEquations.coefficientMatrix : [<code>Matrix</code>](./Matrix#module_Matrix..Matrix)
The coefficient matrix of this system of linear equations, obtained by
calling [computeCoefficientMatrix](#module_SystemOfLinearEquations..SystemOfLinearEquations+computeCoefficientMatrix).

**Kind**: instance property of [<code>SystemOfLinearEquations</code>](#module_SystemOfLinearEquations..SystemOfLinearEquations)  

* * *

<a name="module_SystemOfLinearEquations..SystemOfLinearEquations+constantMatrix"></a>

#### systemOfLinearEquations.constantMatrix : [<code>Matrix</code>](./Matrix#module_Matrix..Matrix)
The constant matrix of this system of linear equations, obtained by
calling [computeConstantMatrix](#module_SystemOfLinearEquations..SystemOfLinearEquations+computeConstantMatrix).

**Kind**: instance property of [<code>SystemOfLinearEquations</code>](#module_SystemOfLinearEquations..SystemOfLinearEquations)  

* * *

<a name="module_SystemOfLinearEquations..SystemOfLinearEquations+augmentedMatrix"></a>

#### systemOfLinearEquations.augmentedMatrix : [<code>AugmentedMatrix</code>](./AugmentedMatrix#module_AugmentedMatrix..AugmentedMatrix)
The augmented matrix of this system of linear equations, obtained by
calling [computeAugmentedMatrix](#module_SystemOfLinearEquations..SystemOfLinearEquations+computeAugmentedMatrix).

**Kind**: instance property of [<code>SystemOfLinearEquations</code>](#module_SystemOfLinearEquations..SystemOfLinearEquations)  

* * *

<a name="module_SystemOfLinearEquations..SystemOfLinearEquations+clone"></a>

#### systemOfLinearEquations.clone() ⇒ <code>SystemOfLinearEquations</code>
Creates and returns a new instance that is the same as this instance.

**Kind**: instance method of [<code>SystemOfLinearEquations</code>](#module_SystemOfLinearEquations..SystemOfLinearEquations)  
**Returns**: <code>SystemOfLinearEquations</code> - A clone of this instance  

* * *

<a name="module_SystemOfLinearEquations..SystemOfLinearEquations+computeCoefficientMatrix"></a>

#### systemOfLinearEquations.computeCoefficientMatrix()
Computes the coefficient matrix of this system of linear equations and
assigns the matrix to the [coefficientMatrix](#module_SystemOfLinearEquations..SystemOfLinearEquations+coefficientMatrix)
property.

**Kind**: instance method of [<code>SystemOfLinearEquations</code>](#module_SystemOfLinearEquations..SystemOfLinearEquations)  

* * *

<a name="module_SystemOfLinearEquations..SystemOfLinearEquations+computeConstantMatrix"></a>

#### systemOfLinearEquations.computeConstantMatrix()
Computes the constant matrix of this system of linear equations and
assigns the matrix to the [constantMatrix](#module_SystemOfLinearEquations..SystemOfLinearEquations+constantMatrix)
property.

**Kind**: instance method of [<code>SystemOfLinearEquations</code>](#module_SystemOfLinearEquations..SystemOfLinearEquations)  

* * *

<a name="module_SystemOfLinearEquations..SystemOfLinearEquations+computeAugmentedMatrix"></a>

#### systemOfLinearEquations.computeAugmentedMatrix()
Computes the augmented matrix of this system of linear equations and
assigns the matrix to the [augmentedMatrix](#module_SystemOfLinearEquations..SystemOfLinearEquations+augmentedMatrix)
property.

**Kind**: instance method of [<code>SystemOfLinearEquations</code>](#module_SystemOfLinearEquations..SystemOfLinearEquations)  

* * *

<a name="module_SystemOfLinearEquations..SystemOfLinearEquations+lazyComputeAugmentedMatrix"></a>

#### systemOfLinearEquations.lazyComputeAugmentedMatrix()
Computes the augmented matrix of this system of linear equations and
assigns the matrix to the [augmentedMatrix](#module_SystemOfLinearEquations..SystemOfLinearEquations+augmentedMatrix)
property **provided that** the coefficient matrix and the constant matrix
have been computed.

**Kind**: instance method of [<code>SystemOfLinearEquations</code>](#module_SystemOfLinearEquations..SystemOfLinearEquations)  

* * *

<a name="module_SystemOfLinearEquations..SystemOfLinearEquations+forEach"></a>

#### systemOfLinearEquations.forEach(callback, thisArg)
Executes a function for each equation in this system.

**Kind**: instance method of [<code>SystemOfLinearEquations</code>](#module_SystemOfLinearEquations..SystemOfLinearEquations)  

| Param | Type | Description |
| --- | --- | --- |
| callback | [<code>forEach</code>](#module_SystemOfLinearEquations..SystemOfLinearEquations..forEach) | The function to execute per iteration. |
| thisArg | <code>object</code> | The argument to use as `this` in the function. |


* * *

<a name="module_SystemOfLinearEquations..SystemOfLinearEquations..forEach"></a>

#### SystemOfLinearEquations~forEach : <code>function</code>
**Kind**: inner typedef of [<code>SystemOfLinearEquations</code>](#module_SystemOfLinearEquations..SystemOfLinearEquations)  

| Param | Type | Description |
| --- | --- | --- |
| equation | [<code>LinearEquation</code>](./LinearEquation#module_LinearEquation..LinearEquation) | The current equation being processed. |
| coefficients | <code>Array.&lt;number&gt;</code> | The coefficients of the equation. |
| constant | <code>number</code> | The constant term of the equation. |
| index | <code>number</code> | The 0-based position of the equation in `this.equations`. |
| system | <code>SystemOfLinearEquations</code> | The instance that this method was called upon. |


* * *

