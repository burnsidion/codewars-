// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
//
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
//
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {
  let sorted = numbers.sort((a,b) => a - b)
  return sorted[0] + sorted[1]
}


// You are given array of integers, your task will be to count all pairs in that array and return their count.
//
// Notes:
//
// Array can be empty or contain only one value; in this case return 0
// If there are more pairs of a certain number, count each pair only once. E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)
// Random tests: maximum array length is 1000, range of values in array is between 0 and 1000

function duplicates(array){
  let count = 0;
  console.log(array)
  let sorted = array.sort((a,b) => a - b)
  for(let i = 0; i < array.length; i++){
    if(sorted[i] === sorted[i + 1]){
      count++
      i++
    }
  }
  return count
}


// In this Kata, we will check if a string contains consecutive letters as they appear in the English alphabet and if each letter occurs only once.
//
// For example:
// solve("abc") = True, because it contains a,b,c
// solve("abd") = False, because a, b, d are not consecutive.
// solve("dabc") = True, because it contains a, b, c, d
// solve("abbc") = False, because b does not occur once.
// solve("v") = True

function solve(s){
    console.log(s)
    let sorted = s.split('').sort().join('')
    for(let i = 1; i < sorted.length; i++){
      if(sorted.charCodeAt(i) - sorted.charCodeAt(i - 1) !==1){
        return false
      }
    }
    return true
}


// You are given an array with several "even" words, one "odd" word, and some numbers mixed in.
//
// Determine if any of the numbers in the array is the index of the "odd" word. If so, return true, otherwise false.

function oddBall(arr){
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === arr.indexOf("odd")) return true
    }
    return false
} //OR THIS

function oddBall(arr){
    return arr.includes(arr.indexOf("odd"));
}


// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
//
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

const binaryArrayToNumber = arr => {
  return parseInt(arr.join(''),2)
};
