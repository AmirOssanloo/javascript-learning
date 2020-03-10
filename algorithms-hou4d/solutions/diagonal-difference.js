const solution = arr => {
  if (!isValidMatrixArr(arr)) {
    return null;
  }

  return 1 + 2;
}

const execute = arr => {
  const defaultArr = [[ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ]];
  const inputArr = arr || defaultArr;

  return solution(inputArr);
}

module.exports = execute;