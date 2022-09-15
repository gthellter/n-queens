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



window.findNRooksSolution = function(n) {
  var solution; //fixme

  var rowN = function(currentArrayofArray, rowNum, indexToChange) {
    //baseCase
    if (rowNum === n - 1) {
      currentArrayofArray[rowNum] = returnArray(indexToChange, n);
      var objectBoard = new Board(currentArrayofArray);
      if (!objectBoard.hasAnyColConflicts() && !objectBoard.hasAnyRowConflicts()) {
        solution = objectBoard;
        //return??
      } else if (rowNum < n - 1) {
        //
        rowN(currentArrayofArray, rowNum + 1, indexToChange)
      }

    }
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

window.returnArray = function(indexOneAt, n) {
  var nArray = new Array(n).fill(0);
  nArray[indexOneAt] = 1;
  return nArray;
};








// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
