function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "Please provide a string.";
  } else {
    return string1.includes(string2);
  }
}
const input1 = "Peter Parker";
const input2 = "pet";
const result = matchFinder(input1, input2);
console.log(result);
