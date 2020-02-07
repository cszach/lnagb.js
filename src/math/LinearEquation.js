/**
 * @author Nguyen Hoang Duong / you_create@protonmail.com / GitHub: you-create
 */

/**
 * Class for linear equations in mathematics.
 *
 * A linear equation has the form *ax + by + ... + cz = d* where:
 * - *a*, *b*, ..., *c* are the coefficients
 * - *x*, *y*, ..., *z* are the variables
 * - *d* is the constant term
 *
 * Every variable on the left side of the linear equation is accompanied with a
 * coefficient. Coefficients are known values. This governs how the
 * `LinearEquation` class is designed. Specifically, an instance of this class
 * contains these information:
 * - The coefficients (stored in an array); and
 * - The constant term
 */
class LinearEquation {

	/**
	 * Constructs a `LinearEquation` instance.
	 *
	 * @param {object} coefficients A JS array that contains the coefficients
	 * in order
	 * @param {number} constant The constant term of the linear equation
	 */
	constructor( coefficients, constant ) {

		this.name = "LinearEquation";
		this.coefficients = coefficients.slice();
		this.constant = constant;

	}

}

export { LinearEquation };
