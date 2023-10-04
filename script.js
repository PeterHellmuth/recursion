function fibsRec(num, returnArr = [0, 1]) {
  if (returnArr.length >= num) {
    return returnArr.slice(0, num);
  }

  const newNumber = returnArr.at(-1) + returnArr.at(-2);
  returnArr.push(newNumber);
  return fibsRec(num, returnArr);
}

console.log(fibsRec(8));

function mergeSortRec(arr) {
  if (arr.length === 1) {
    return arr;
  } else {
    let mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, arr.length);
    return merge(mergeSortRec(left), mergeSortRec(right));
  }
}

function merge(leftArr, rightArr) {
  const result = [];

  let leftCurrentElem = 0;
  let rightCurrentElem = 0;

  while (
    leftCurrentElem < leftArr.length &&
    rightCurrentElem < rightArr.length
  ) {
    if (leftArr[leftCurrentElem] < rightArr[rightCurrentElem]) {
      result.push(leftArr[leftCurrentElem]);
      leftCurrentElem++;
    } else {
      result.push(rightArr[rightCurrentElem]);
      rightCurrentElem++;
    }
  }

  while (leftCurrentElem < leftArr.length) {
    result.push(leftArr[leftCurrentElem]);
    leftCurrentElem++;
  }

  while (rightCurrentElem < rightArr.length) {
    result.push(rightArr[rightCurrentElem]);
    rightCurrentElem++;
  }

  return result;
}

console.log(
  mergeSortRec([7, 6, 5, 2, 7, 4, 2, 4, 6, 4, 2, 3, 4, 0, 9, 8, 5, 3, 2, 5])
);
