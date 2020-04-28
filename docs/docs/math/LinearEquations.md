## Classes

<dl>
<dt><a href="#LinearEquation1">LinearEquation1</a></dt>
<dd><p>Encodes linear equations of 1 variable.</p>
</dd>
<dt><a href="#LinearEquation2">LinearEquation2</a></dt>
<dd><p>Encodes linear equations of 2 variables.</p>
</dd>
<dt><a href="#LinearEquation3">LinearEquation3</a></dt>
<dd><p>Encodes linear equations of 3 variables.</p>
</dd>
</dl>

<a name="LinearEquation1"></a>

## LinearEquation1
Encodes linear equations of 1 variable.

**Kind**: global class  

* [LinearEquation1](#LinearEquation1)
    * [new LinearEquation1(name)](#new_LinearEquation1_new)
    * _instance_
        * [.a](#LinearEquation1+a) ⇒ <code>number</code>
    * _static_
        * [.isIt()](#LinearEquation1.isIt)

<a name="new_LinearEquation1_new"></a>

### new LinearEquation1(name)
Constructs a `LinearEquation1` instance.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> | <code>&quot;LinearEquation1&quot;</code> | The name for the new instance |

<a name="LinearEquation1+a"></a>

### linearEquation1.a ⇒ <code>number</code>
**Kind**: instance property of [<code>LinearEquation1</code>](#LinearEquation1)  
**Returns**: <code>number</code> - The first (and only) coefficient of this equation  
<a name="LinearEquation1.isIt"></a>

### LinearEquation1.isIt()
Checks if *o* properly encodes a linear equation of 1 variable.

Criteria:
- [`LinearEquation.isIt( o )`][1] returns `true`
- The `coefficients` property is an array with only 1 element

[1]: LinearEquation#LinearEquation.isIt

**Kind**: static method of [<code>LinearEquation1</code>](#LinearEquation1)  
<a name="LinearEquation2"></a>

## LinearEquation2
Encodes linear equations of 2 variables.

**Kind**: global class  

* [LinearEquation2](#LinearEquation2)
    * [new LinearEquation2(name)](#new_LinearEquation2_new)
    * _instance_
        * [.a](#LinearEquation2+a) ⇒ <code>number</code>
        * [.b](#LinearEquation2+b) ⇒ <code>number</code>
    * _static_
        * [.isIt()](#LinearEquation2.isIt)

<a name="new_LinearEquation2_new"></a>

### new LinearEquation2(name)
Constructs a `LinearEquation2` instance.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> | <code>&quot;LinearEquation2&quot;</code> | The name for the new instance |

<a name="LinearEquation2+a"></a>

### linearEquation2.a ⇒ <code>number</code>
**Kind**: instance property of [<code>LinearEquation2</code>](#LinearEquation2)  
**Returns**: <code>number</code> - The first coefficient of this equation (usually denoted *a*)  
<a name="LinearEquation2+b"></a>

### linearEquation2.b ⇒ <code>number</code>
**Kind**: instance property of [<code>LinearEquation2</code>](#LinearEquation2)  
**Returns**: <code>number</code> - The second coefficient of this equation (usually denoted *b*)  
<a name="LinearEquation2.isIt"></a>

### LinearEquation2.isIt()
Checks if *o* properly encodes a linear equation of 2 variables.

Criteria:
- [`LinearEquation.isIt( o )`][1] returns `true`
- The `coefficients` property is an array with 2 elements

[1]: LinearEquation#LinearEquation.isIt

**Kind**: static method of [<code>LinearEquation2</code>](#LinearEquation2)  
<a name="LinearEquation3"></a>

## LinearEquation3
Encodes linear equations of 3 variables.

**Kind**: global class  

* [LinearEquation3](#LinearEquation3)
    * [new LinearEquation3(name)](#new_LinearEquation3_new)
    * _instance_
        * [.a](#LinearEquation3+a) ⇒ <code>number</code>
        * [.b](#LinearEquation3+b) ⇒ <code>number</code>
        * [.c](#LinearEquation3+c) ⇒ <code>number</code>
    * _static_
        * [.isIt()](#LinearEquation3.isIt)

<a name="new_LinearEquation3_new"></a>

### new LinearEquation3(name)
Constructs a `LinearEquation3` instance.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> | <code>&quot;LinearEquation3&quot;</code> | The name for the new instance |

<a name="LinearEquation3+a"></a>

### linearEquation3.a ⇒ <code>number</code>
**Kind**: instance property of [<code>LinearEquation3</code>](#LinearEquation3)  
**Returns**: <code>number</code> - The first coefficient of this equation (usually denoted *a*)  
<a name="LinearEquation3+b"></a>

### linearEquation3.b ⇒ <code>number</code>
**Kind**: instance property of [<code>LinearEquation3</code>](#LinearEquation3)  
**Returns**: <code>number</code> - The second coefficient of this equation (usually denoted *b*)  
<a name="LinearEquation3+c"></a>

### linearEquation3.c ⇒ <code>number</code>
**Kind**: instance property of [<code>LinearEquation3</code>](#LinearEquation3)  
**Returns**: <code>number</code> - The third coefficient of this equation (usually denoted *c*)  
<a name="LinearEquation3.isIt"></a>

### LinearEquation3.isIt()
Checks if *o* properly encodes a linear equation of 3 variables.

Criteria:
- [`LinearEquation.isIt( o )`][1] returns `true`
- The `coefficients` property is an array with 3 elements

[1]: LinearEquation#LinearEquation.isIt

**Kind**: static method of [<code>LinearEquation3</code>](#LinearEquation3)  
