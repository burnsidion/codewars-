//There exist two zeroes: +0 (or just 0) and -0.
//
// Write a function that returns true if the input number is -0 and false otherwise (True and False for Python).
//
// In JavaScript / TypeScript / Coffeescript the input will be a number.


//Learned something new today!!!
function isNegativeZero(n) {
  return Object.is(n, -0);
}


// Count how often sign changes in array.
//
// result
// number from 0 to ... . Empty array returns 0
//
// example
// const arr = [1, -3, -4, 0, 5]
//
// | elem | count |
// |------|-------|
// |  1   |  0    |
// | -3   |  1    |
// | -4   |  1    |
// |  0   |  2    |
// |  5   |  2    |
//
// return 2;

function catchSignChange(arr){
    let count=0;
    for(let i = 0; i < arr.length; i++){
    if((arr[i] < 0 && arr[i + 1] >=0) || (arr[i]>=0 && arr[i + 1] < 0)) count++;
  }
  return count;
};
