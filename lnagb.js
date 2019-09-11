/**
 * lnagb.js
 *
 * Linear Algebra operations implemented in JavaScript.
 * @author Nguyen Hoang Duong (@you-create)
 * @license https://unlicense.org/
 */
(function() {
    "use strict";

    /**
    * Given an object, check if it's a (mathematical) matrix.
    * A matrix is this sense is represented by a JavaScript 2-dimensional array.
    * Basically, each matrix is an array of arrays. Each array in that whole
    * array represents the corresponding row (in terms of order) of the matrix.
    * Of course, every row must have the same number of elements and every
    * element must be a number.
    *
    * @param {object} matrix An object to test
    * @return {boolean} true if it's a valid matrix, false otherwise
    */
    function isValidMatrix(matrix) {
        // First, check if matrix is an array
        if (!matrix.constructor == Array)
          return false;

        // Next, check if matrix is an array of arrays and if every array inside
        // matrix has the same length. Here we're using the first array inside
        // matrix as a reference
        let baseArrayLength = matrix[0].length;
        if (!matrix.every(function(row) {
            return row.constructor == Array && row.length === baseArrayLength;
        })) return false;

        // Finally, check if every element is a number,
        // let it be integer or float
        if (!matrix.every(function(row) {
            return row.every(function(elementInRow) {
            return typeof elementInRow == "number";
          });
        })) return false;

        return true;
    }


    /**
    * Get the number of elements of a given matrix
    *
    * @param {object} matrix Input matrix
    * @return {integer} Number of elements in matrix
    */
    var getNumberOfElements = (matrix) => matrix.reduce(
        (numberOfElements, row) => numberOfElements + row.length
    , 0);


    /**
    * Check if the given matrices are equal in dimensions. Any number of
    * matrices can be given.
    *
    * @return {boolean} true if all given matrices have the same dimension,
    * false otherwise.
    */
    function equalDimension() {
        let baseNumOfRows = arguments[0].length;
        let baseNumOfElements = getNumberOfElements(arguments[0]);

        for (let matrix of arguments) {
            if (matrix.length !== baseNumOfRows
                || getNumberOfElements(matrix) !== baseNumOfElements) {
                return false;
            }
        }

        return true;
    }


    /**
     * Create a zero matrix with row rows and column columns and return it.
     *
     * @param {number} row Number of rows for the output zero matrix
     * @param {number} column Number of columns for the output zero matrix
     * @return {object} A zero matrix with row rows and column columns
     */
    var zeroMatrix = (row, column) => new Array(row).fill(0).map(
        () => new Array(column).fill(0).slice()
    );


    /**
     * Create a dimension x dimension identity matrix
     *
     * @param {number} dimension Number of row/column for the output matrix
     * @return {object} A dimension x dimension identity matrix
     */
    var identityMatrix = (dimension) => zeroMatrix(dimension, dimension).map(
        // Manipulate each row from the initial zero matrix by inserting 1 at
        // the right position
        (row, iter) => row.fill(1, iter, iter + 1)
    );


    /**
     * Add matrices given as arguments. Input matrices must be equal in size.
     * If they aren't equal in size, return a zero matrix that has the same size
     * as the first matrix given in the arguments.
     *
     * @return Sum of the matrices given as arguments, if the given matrices
     * aren't of equal size, return a zero matrix that has the same size as the
     * first matrix in the arguments
     */
    function addMatrices() {
        if (equalDimension(...arguments)) {
            return zeroMatrix(arguments[0].length, arguments[0][0].length).map(
                (row, rowIter) => row.map(
                    (rowElement, colIter) => Array.from(arguments).reduce(
                        (sum, matrix) => sum + matrix[rowIter][colIter], 0
                    ),
                )
            );
        }
        else {
            return zeroMatrix(arguments[0].length, arguments[0][0].length);
        }
    }


    /**
     * Given a matrix A, return -A.
     * @param {object} matrix Input matrix
     * @return {object} The input matrix multiplied by the scalar -1
     */
    function negateMatrix(matrix) {
        return matrix.map(
            row => row.map(element => element * -1)
        );
    }
})();
