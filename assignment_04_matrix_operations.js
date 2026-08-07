// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');

const readlineSync = require('readline-sync');

function readMatrix(name) {
  const rows = readlineSync.questionInt(`Enter number of rows for Matrix ${name}: `);
  const cols = readlineSync.questionInt(`Enter number of columns for Matrix ${name}: `);

  const matrix = [];
  for (let i = 0; i < rows; i++) {
    const line = readlineSync.question(`Enter row ${i + 1}: `);
    const row = line.trim().split(/\s+/).map(Number);
    matrix.push(row);
  }

  return matrix;
}

function printMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let line = "";
    for (let j = 0; j < matrix[i].length; j++) {
      line += matrix[i][j] + "\t";
    }
    console.log(line.trim());
  }
}

function transposeMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const result = [];
  for (let j = 0; j < cols; j++) {
    const newRow = [];
    for (let i = 0; i < rows; i++) {
      newRow.push(matrix[i][j]);
    }
    result.push(newRow);
  }

  return result;
}

function addMatrices(matrixA, matrixB) {
  const rows = matrixA.length;
  const cols = matrixA[0].length;

  const result = [];
  for (let i = 0; i < rows; i++) {
    const newRow = [];
    for (let j = 0; j < cols; j++) {
      newRow.push(matrixA[i][j] + matrixB[i][j]);
    }
    result.push(newRow);
  }

  return result;
}

function multiplyMatrices(matrixA, matrixB) {
  const rowsA = matrixA.length;
  const colsA = matrixA[0].length;
  const colsB = matrixB[0].length;

  const result = [];
  for (let i = 0; i < rowsA; i++) {
    const newRow = [];
    for (let j = 0; j < colsB; j++) {
      let sum = 0;
      for (let k = 0; k < colsA; k++) {
        sum += matrixA[i][k] * matrixB[k][j];
      }
      newRow.push(sum);
    }
    result.push(newRow);
  }

  return result;
}

function runTranspose() {
  const matrix = readMatrix("A");

  console.log("\nOriginal Matrix:");
  printMatrix(matrix);

  const transposed = transposeMatrix(matrix);

  console.log("\nTransposed Matrix:");
  printMatrix(transposed);
}

function runAddition() {
  console.log("\nEnter first matrix:");
  const matrixA = readMatrix("A");

  console.log("\nEnter second matrix (must be the same size):");
  const matrixB = readMatrix("B");

  if (matrixA.length !== matrixB.length || matrixA[0].length !== matrixB[0].length) {
    console.log("Error: Matrices must be the same size to add.");
    return;
  }

  const result = addMatrices(matrixA, matrixB);

  console.log("\nSum of Matrices:");
  printMatrix(result);
}

function runMultiplication() {
  console.log("\nEnter Matrix A (size M x N):");
  const matrixA = readMatrix("A");

  console.log("\nEnter Matrix B (size N x P):");
  const matrixB = readMatrix("B");

  if (matrixA[0].length !== matrixB.length) {
    console.log("Error: Number of columns in A must equal number of rows in B.");
    return;
  }

  const result = multiplyMatrices(matrixA, matrixB);

  console.log("\nProduct of Matrices:");
  printMatrix(result);
}

function main() {
  console.log("Matrix Operations");
  console.log("1. Transpose a Matrix");
  console.log("2. Add Two Matrices");
  console.log("3. Multiply Two Matrices");

  const choice = readlineSync.questionInt("Choose an operation (1-3): ");

  if (choice === 1) {
    runTranspose();
  } else if (choice === 2) {
    runAddition();
  } else if (choice === 3) {
    runMultiplication();
  } else {
    console.log("Error: Invalid choice.");
  }
}

main();