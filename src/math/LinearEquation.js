/**
 * @author Nguyen Hoang Duong / you_create@protonmail.com / GitHub: you-create
 */

/**
 * Class for a linear equation in mathematics
 *
 * A linear equation has the form ax + by + ... + cz = d where:
 *   o a, b, ..., c are the coefficients
 *   o x, y, ..., z are the variables
 *   o d is the constant term
 *
 * Every variable on the left side of the linear equation is accompanied with a
 * coefficient. Coefficients are known values. This governs how the
 * LinearEquation class is designed. Specifically, an instance of this class
 * contains these information:
 *   o The coefficients (stored in an array); and
 *   o The constant term
 */
class LinearEquation {

	constructor( coefficients, constant ) {

		this.name = "LinearEquation";
		this.coefficients = coefficients.slice();
		this.constant = constant;

	}

}

export { LinearEquation };
