function canPay(changeArray, totalDue) {
  if (changeArray.length === 0) {
    return "This is an empty array";
  } else {
    let total = 0;
    for (let element of changeArray) {
      total += element;
    }
    return total >= totalDue ? true : false;
  }
}
const array = [1, 5, 5];
const number = 10;
const result = canPay(array, number);
console.log(result);
