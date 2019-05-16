//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

function sumMix(x){
  return x.map(i => i !== 'number' ? i = parseInt(i) : i = i).reduce((a,b) => a + b);
}


//Complete the function which converts a binary number (given as a string) to a decimal number.

function binToDec(bin){
  return parseInt(bin,2);
}


// Your task is to write function findSum.
// Upto and including n, this function will return the sum of all multiples of 3 and 5.
// For example:
// findSum(5) should return 8 (3 + 5)
// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

function findSum(n) {
  let sum = 0;
  for(let i = 1; i <= n; i++){
    if(i % 3 === 0 || i % 5 === 0) sum += i
  }
  return sum
}
