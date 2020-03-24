## Functions

<dl>
<dt><a href="#loop">loop(count, func, thisArg)</a></dt>
<dd><p>Creates a loop that runs from 1 to <em>count</em>, executing a given function for
every iteration.</p>
</dd>
<dt><a href="#sameArrays">sameArrays(p, q)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if arrays <code>p</code> and <code>q</code> are the same and returns <code>true</code> if they are</p>
<p>Two arrays are the same when...</p>
<ul>
<li>they have the same number of elements; and</li>
<li>every element of this array is <em>strictly</em> the same as the element of the
other array at the same index</li>
</ul>
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

## sameArrays(p, q) ⇒ <code>boolean</code>
Checks if arrays `p` and `q` are the same and returns `true` if they are

Two arrays are the same when...
- they have the same number of elements; and
- every element of this array is *strictly* the same as the element of the
  other array at the same index

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if arrays *p* and *q* are the same, `false`
otherwise  

| Param | Type | Description |
| --- | --- | --- |
| p | <code>object</code> | A JavaScript array |
| q | <code>object</code> | Another JavaScript array |

