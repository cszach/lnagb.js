## Functions

<dl>
<dt><a href="#loop">loop(count, func, thisArg)</a></dt>
<dd><p>Creates a loop that runs from 1 to <em>count</em>, executing a given function for
every iteration.</p>
</dd>
<dt><a href="#sameArrays">sameArrays()</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if arrays <code>p</code> and <code>q</code> are the same and returns <code>true</code> if they are</p>
<p>Two arrays are the same when...</p>
<ul>
<li>they have the same number of elements; and</li>
<li>every element of this array is <em>strictly</em> the same as the element of the
other array at the same index</li>
</ul>
</dd>
<dt><a href="#linearCombination">linearCombination(p, q)</a> ⇒ <code>number</code></dt>
<dd><p>Computes and returns the result of the <a href="https://en.wikipedia.org/wiki/Linear_combination">linear combination</a> of <em>p</em>
and <em>q</em>, two sequences of numbers. The sequences must have the same number of
terms.</p>
<p>This is useful in multiplying matrices.</p>
</dd>
</dl>

<a name="loop"></a>

## loop(count, func, thisArg)
Creates a loop that runs from 1 to *count*, executing a given function for
every iteration.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| count | <code>number</code> | How many times the function is executed |
| func | <code>function</code> | The function to execute in each iteration |
| thisArg | <code>object</code> | What to use as `this` inside `func` |

<a name="sameArrays"></a>

## sameArrays() ⇒ <code>boolean</code>
Checks if arrays `p` and `q` are the same and returns `true` if they are

Two arrays are the same when...
- they have the same number of elements; and
- every element of this array is *strictly* the same as the element of the
  other array at the same index

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if arrays *p* and *q* are the same, `false`
otherwise  
<a name="linearCombination"></a>

## linearCombination(p, q) ⇒ <code>number</code>
Computes and returns the result of the [linear combination][lncmb] of *p*
and *q*, two sequences of numbers. The sequences must have the same number of
terms.

This is useful in multiplying matrices.

[lncmb]: https://en.wikipedia.org/wiki/Linear_combination

**Kind**: global function  
**Returns**: <code>number</code> - The result of the linear combination of *p* and *q*  

| Param | Type | Description |
| --- | --- | --- |
| p | <code>object</code> | First sequence of numbers (as a JS array) |
| q | <code>object</code> | Second sequence of numbers (as a JS array) |

