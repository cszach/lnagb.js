<a name="LinearEquation"></a>

## LinearEquation
Class for linear equations in mathematics.

A linear equation has the form *ax + by + ... + cz = d* where:
- *a*, *b*, ..., *c* are the coefficients
- *x*, *y*, ..., *z* are the variables
- *d* is the constant term

Every variable on the left side of the linear equation is accompanied with a
coefficient. Coefficients are known values. This governs how the
`LinearEquation` class is designed. Specifically, an instance of this class
contains these information:
- The coefficients (stored in an array); and
- The constant term

**Kind**: global class  
<a name="new_LinearEquation_new"></a>

### new LinearEquation(coefficients, constant)
Constructs a `LinearEquation` instance.


| Param | Type | Description |
| --- | --- | --- |
| coefficients | <code>object</code> | A JS array that contains the coefficients in order |
| constant | <code>number</code> | The constant term of the linear equation |

