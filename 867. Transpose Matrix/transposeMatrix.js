/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
  let res = [];
  for (let i = 0; i < A[0].length; i++) {
      res[i] = [];
      for (let j = 0; j < A.length; j++) {
          res[i][j] = A[j][i];
      }
  }
  return res;
};