<a name="SystemOfLinearEquations"></a>

## SystemOfLinearEquations
Encodes systems of linear equations by storing the following information:
- Name, as the `name` property
- Equations, as the `equations` property, an array of instances of `LinearEquation`

**Kind**: global class  

* [SystemOfLinearEquations](#SystemOfLinearEquations)
    * [new SystemOfLinearEquations(name)](#new_SystemOfLinearEquations_new)
    * _instance_
        * [.push(equ)](#SystemOfLinearEquations+push) ⇒ [<code>SystemOfLinearEquations</code>](#SystemOfLinearEquations)
        * [.pop()](#SystemOfLinearEquations+pop) ⇒ <code>LinearEquation</code>
        * [.remove(index)](#SystemOfLinearEquations+remove) ⇒ <code>LinearEquation</code>
        * [.forEach(callback, thisArg)](#SystemOfLinearEquations+forEach)
    * _static_
        * [.isIt(o)](#SystemOfLinearEquations.isIt) ⇒ <code>boolean</code>

<a name="new_SystemOfLinearEquations_new"></a>

### new SystemOfLinearEquations(name)
Constructs a new system of linear equations.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> | <code>&quot;SystemOfLinearEquations&quot;</code> | The name for this instance |

<a name="SystemOfLinearEquations+push"></a>

### systemOfLinearEquations.push(equ) ⇒ [<code>SystemOfLinearEquations</code>](#SystemOfLinearEquations)
Adds a linear equation to this system by appending it to `equations`.

**Kind**: instance method of [<code>SystemOfLinearEquations</code>](#SystemOfLinearEquations)  
**Returns**: [<code>SystemOfLinearEquations</code>](#SystemOfLinearEquations) - This system of linear equations  

| Param | Type | Description |
| --- | --- | --- |
| equ | <code>LinearEquation</code> | A valid instance of `LinearEquation` |

<a name="SystemOfLinearEquations+pop"></a>

### systemOfLinearEquations.pop() ⇒ <code>LinearEquation</code>
Removes the last linear equation stored in `equations`.

**Kind**: instance method of [<code>SystemOfLinearEquations</code>](#SystemOfLinearEquations)  
**Returns**: <code>LinearEquation</code> - The removed equation  
<a name="SystemOfLinearEquations+remove"></a>

### systemOfLinearEquations.remove(index) ⇒ <code>LinearEquation</code>
Removes a linear equation from this system of linear equations.

**Kind**: instance method of [<code>SystemOfLinearEquations</code>](#SystemOfLinearEquations)  
**Returns**: <code>LinearEquation</code> - The removed equation, or null if *index* is invalid  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | The position of the equation in `equations` (**1-indexed**) |

<a name="SystemOfLinearEquations+forEach"></a>

### systemOfLinearEquations.forEach(callback, thisArg)
Executes a function for each equation in this system.

The function accepts any of the following arguments (in order):
1. `equation` (`LinearEquation`) The current equation being processed
2. `index` (`number`) The position of `equation` in this system

**Kind**: instance method of [<code>SystemOfLinearEquations</code>](#SystemOfLinearEquations)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | The function to execute per iteration |
| thisArg | <code>object</code> | The argument to use as `this` in the function |

<a name="SystemOfLinearEquations.isIt"></a>

### SystemOfLinearEquations.isIt(o) ⇒ <code>boolean</code>
Checks if *o* encodes a system of linear equations.

Criteria:
- The constructor of *o* is `SystemOfLinearEquations`
- Has the `equations` property that is an array of valid instances of
  `LinearEquation` (see also `LinearEquation.isIt`)

**Kind**: static method of [<code>SystemOfLinearEquations</code>](#SystemOfLinearEquations)  
**Returns**: <code>boolean</code> - `true` if *o* fulfills the criteria, `false` otherwise  

| Param | Type | Description |
| --- | --- | --- |
| o | <code>object</code> | The object to check |

