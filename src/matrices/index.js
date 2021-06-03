/**
 * @module Matrices
 * @description
 *
 * One of the three major components of lnagb.js. This component groups matrix
 * classes.
 *
 */

/**
 * @name Matrix
 * @see {@link module:Matrix}
 * @member
 * @kind export
 * @description
 *
 * Contains the {@link module:Matrix~Matrix} class, which encodes basic matrices
 * of any size in linear algebra.
 *
 */

/**
 * @name Matrix2
 * @see {@link module:Matrix2}
 * @member
 * @kind export
 * @description
 *
 * Contains the {@link module:Matrix2~Matrix2} class, which encodes 2 x 2
 * matrices in linear algebra.
 *
 */

/**
 * @name Matrix3
 * @see {@link module:Matrix3}
 * @member
 * @kind export
 * @description
 *
 * Contains the {@link module:Matrix3~Matrix3} class, which encodes 3 x 3
 * matrices in linear algebra.
 *
 */

/**
 * @name Matrix4
 * @see {@link module:Matrix4}
 * @member
 * @kind export
 * @description
 *
 * Contains the {@link module:Matrix4~Matrix4} class, which encodes 4 x 4
 * matrices in linear algebra.
 *
 */

/**
 * @name SquareMatrix
 * @see {@link module:SquareMatrix}
 * @member
 * @kind export
 * @description
 *
 * Contains the {@link module:SquareMatrix~SquareMatrix} class, which is similar
 * to the {@link module:Matrix~Matrix} class but only encodes square matrices.
 *
 */

/**
 * @name IdentityMatrix
 * @see {@link module:IdentityMatrix}
 * @member
 * @kind export
 * @description
 *
 * Contains the {@link module:IdentityMatrix~IdentityMatrix} class, which
 * encodes read-only identity matrices.
 *
 */

/**
 * @name AugmentedMatrix
 * @see {@link module:AugmentedMatrix}
 * @member
 * @kind export
 * @description
 *
 * Contains the {@link module:AugmentedMatrix~AugmentedMatrix} class, which
 * encodes augmented matrices.
 *
 */

/**
 * @name MatrixTranspose
 * @see {@link module:MatrixTranspose}
 * @member
 * @kind export
 * @description
 *
 * Contains the {@link module:MatrixTranspose~MatrixTranspose} class, which
 * storage-efficiently encodes transpositions.
 *
 */

export * from './Matrix.js';
export * from './Matrix2.js';
export * from './Matrix3.js';
export * from './Matrix4.js';
export * from './SquareMatrix.js';
export * from './IdentityMatrix.js';
export * from './AugmentedMatrix.js';
export * from './MatrixTranspose.js';
