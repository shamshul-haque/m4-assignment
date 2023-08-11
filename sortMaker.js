function sortMaker(arr) {
  if (arr.length < 2 || arr.length > 2) {
    return "Please put exact two element.";
  } else {
    const sorting = [];
    for (let element of arr) {
      if (element < 0) {
        return "Invalid Input";
      } else {
        sorting.push(element);
      }
    }
    if (sorting[0] === sorting[1]) {
      return "equal";
    } else {
      if (sorting[0] < sorting[1]) {
        const temp = sorting[0];
        sorting[0] = sorting[1];
        sorting[1] = temp;
        return sorting;
      } else {
        return sorting;
      }
    }
  }
}
const array = [0, 1];
const result = sortMaker(array);
console.log(result);
