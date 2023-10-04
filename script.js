function fibsRec(num, returnArr = [0, 1]) {
  if (returnArr.length >= num) {
    return returnArr.slice(0, num);
  }

  const newNumber = returnArr.at(-1) + returnArr.at(-2);
  returnArr.push(newNumber);
  return fibsRec(num, returnArr);
}

console.log(fibsRec(8));
