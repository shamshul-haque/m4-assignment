function findAddress(obj) {
  const keys = ["street", "house", "society"];
  const values = [];
  for (let element of keys) {
    const value = obj[element] || "__";
    values.push(value);
  }
  return values.join(",");
}
const objects = { street: 10 };
const result = findAddress(objects);
console.log(result);
