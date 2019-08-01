/**
 * lnagb.js
 *
 * Linear Algebra operations implemented in JavaScript.
 * @author Nguyen Hoang Duong (@you-create)
 * @license https://unlicense.org/
 */
(function() {
    "use strict";

    console.clear();

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
    function getNumberOfElements(matrix) {
        return matrix.reduce(function(numberOfElements, row) {
            return numberOfElements + row.length;
        }, 0);
    }


    /**
    * Check if the given matrices are equal in dimensions. Any number of
    * matrices can be given.
    *
    * @return {boolean} true if matrixA and matrixB have the same dimension,
    * false otherwise.
    */
    function equalDimension() {
    }


    /**
    * Given 2 matrices matrixA and matrixB, add them if they are of equal
    * dimensions. Otherwise return matrixA.
    *
    * @param {object} matrixA A matrix
    * @param {object} matrixB Another matrix of the same size as matrixA
    * @return {object} matrixA + matrixB, but if the two matrices aren't equal
    * in dimension, then matrixA
    */
    function addTwoMatrices(matrixA, matrixB) {

        if (equalDimension(matrixA, matrixB)) {
            var resultMatrix = [];

            // Use matrixA as a reference
            var numberOfRows = matrixA.length;
            var numberOfColumns = matrixA[0].length;

            // Do the math
            for (var rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
                var emptyRow = [];
                for (var colIndex = 0; colIndex < numberOfColumns; colIndex++) {
                    emptyRow.push(
                        matrixA[rowIndex][colIndex] + matrixB[rowIndex][colIndex]
                    );
                }

                resultMatrix.push(emptyRow);
            }

            return resultMatrix;
        }
        else {
            return matrixA;
        }
    }


    function addMatrices() {

    }
})();
