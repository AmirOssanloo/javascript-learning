const solution = arr => {
  if (!isValidMatrixArr(arr)) {
    return null;
  }

  return 1 + 2;
}

const isValidMatrixArr = arr => {
  var validMatrix = true;

  arr.forEach(el => {
    if (el.length % 2 === 0) {
      validMatrix = false;
    }
  });

  return validMatrix;
}

const execute = arr => {
  const testArr = [[ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ]];
  const inputArr = arr || testArr;

  return solution(inputArr);
}

module.exports = execute;