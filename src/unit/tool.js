function getRandomValue(arr) {
  arr.sort(function () { return 0.5 - Math.random(); });
  console.log(arr);
  return arr[0];
}
const allGameArr = [
  [1, 2],
  [3, 4]
]
export {
  getRandomValue,
  allGameArr
}