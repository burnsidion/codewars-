// implified number to money converter.
//
// Note:
//
// truncate to 2 decimal places
// don't keep trailing zeros
// input will be a positive number with at least two trailing digits
// Examples:
//
// 2546.2562 --> '2,546.25'
//
// 1500.342626 --> '1,500.34'
//
// 100.2134 --> '100.21'


var numberToMoney = function(n) {
  return (Math.floor(n * 100) / 100).toString().replace(/\d+(?=\d{3})/, '$&,');
};


// You get an array of numbers, return the sum of all of the positives ones.
//
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
//
// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  let count = 0;
  arr.map(x => x > 0 ? count += x : x = 0);
  return count;
}
