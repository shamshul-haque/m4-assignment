function cubeNumber(number) {
  if (typeof number !== "number") {
    return "Please provide a number.";
  } else {
    return Math.pow(number, 3);
  }
}
const positiveInput = 3;
const result = cubeNumber(positiveInput);
console.log(result);
