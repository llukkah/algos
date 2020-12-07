///////////////////////////////////////////////////////////
/////Create a function which accepts two /////////////////
///////////////////[square matrices]//////////////////////
///////// as arguments (`matrix1` and `matrix2`)//////////
//////// represented by 2 dimensional arrays,////////////
////////////and returns the [matrix product]/////////////
///////////////////////////////////////////////////////////

const matrixProduct = (A, B) => {
  let result = new Array(A.length)
    .fill(0)
    .map((row) => new Array(B[0].length).fill(0));
  return result.map((row, i) => {
    return row.map((val, j) => {
      return A[i].reduce((sum, elm, k) => {
        return sum + elm * B[k][j];
      }, 0);
    });
  });
};

// _i.e.:_
// input
([
  [1, 2],
  [3, 2],
],
[
  [3, 2],
  [1, 1],
])[
  // output
  ([5, 4], [11, 8])
];
