/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

var rookSolutionCount = {};
var queenSolutionCount = {};

window.findNRooksSolution = function(n) {
  var rookSolution = [];

  var rowN = function(currentArrayofArray, rowNum) {
    //baseCase
    if (rowNum === n - 1) {
      //for loop through n
      for(let i = 0; i < n; i ++) {
        currentArrayofArray[rowNum] = returnArray(i, n);
        var objectBoard = new Board(currentArrayofArray);
        if (!objectBoard.hasAnyColConflicts() && !objectBoard.hasAnyRowConflicts()) {
          rookSolution.push(currentArrayofArray.slice());

        }
      }
      return;
    } else {
      for (let i = 0; i < n; i ++) {
        let row = returnArray(i, n);
        currentArrayofArray[rowNum] = row;
        rowN(currentArrayofArray, rowNum + 1)
    }
    }
    return;
  }
  rowN([], 0);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(rookSolution[0]));
  rookSolutionCount[n] = rookSolution.length;
  return rookSolution[0];
};


window.returnArray = function(indexOneAt, n) {
  var nArray = new Array(n).fill(0);
  if (indexOneAt === -1) {
    return nArray;
  }
  nArray[indexOneAt] = 1;
  return nArray;
};








// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = rookSolutionCount[n]; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};


// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var queenSolution = [];
  if (n === 0) {
    return [];
  }

  if (n === 2 || n === 3) {
     for (let i = 0; i < n; i++) {
      queenSolution.push(returnArray(-1, n));
    }
  queenSolutionCount[n] = 0;
  return queenSolution;
  }


  var rowN = function(currentArrayofArray, rowNum) {
    //baseCase
    if (rowNum === n - 1) {
      //for loop through n
      for(let i = 0; i < n; i ++) {
        currentArrayofArray[rowNum] = returnArray(i, n);
        var objectBoard = new Board(currentArrayofArray);
        if (!objectBoard.hasAnyColConflicts() && !objectBoard.hasAnyRowConflicts()
        && !objectBoard.hasAnyMajorDiagonalConflicts() && !objectBoard.hasAnyMinorDiagonalConflicts()) {
          queenSolution.push(currentArrayofArray.slice());
        }
      }
      return;
    } else {
      for (let i = 0; i < n; i ++) {
        let row = returnArray(i, n);
        currentArrayofArray[rowNum] = row;
        rowN(currentArrayofArray, rowNum + 1)
    }
    }
    return;
  }
  rowN([], 0);
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(queenSolution[0]));
  queenSolutionCount[n] = queenSolution.length;
  return queenSolution[0];
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  if (n === 0) {
    return 1;
  }

  var solutionCount = queenSolutionCount[n];

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
