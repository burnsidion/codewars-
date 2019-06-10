// Complete the square sum function so that it squares each number passed into it and then sums the results together.
//
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){
 return numbers.length === 0 ? 0 : numbers.map(x => Math.pow(x,2)).reduce((a,b) => a + b);
}


// Given a non-empty array of integers, return the result of multiplying the values together in order.

function grow(x){
  return x.reduce((a,b) => a * b)
}

// Create a function called args_count that returns the number of arguments provided

function args_count(){
  return arguments.length;
}
