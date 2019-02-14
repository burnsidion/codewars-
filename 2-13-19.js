// Split an array of objects into 2 arrays based on truthiness of a provided property. The return value should be an array whose first element is an array of the truthy values, and whose second element is an array of the falsey values.
//
// Javascript example:
//
// var obj1 = { prop: true },
//     obj2 = { prop: false };
//
// split([obj1, obj2], 'prop');
// // [[obj1], [obj2]]
// CoffeeScript example:
//
// obj1 = { prop: true }
// obj2 = { prop: false }
//
// split [obj1, obj2], 'prop'
// # [[obj1], [obj2]]

function split(arr, prop) {
  return [
    arr.filter(a => a[prop]),
    arr.filter(a => !a[prop])
  ]
}


// Complete the function that determines if a given number is a power of two.
//
// a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.
//
// https://en.wikipedia.org/wiki/Power_of_two
//
// Examples
// isPowerOfTwo(1024) // -> true
// isPowerOfTwo(4096) // -> true
// isPowerOfTwo(333)  // -> false

function isPowerOfTwo(n){
  return Math.log2(n) % 1 === 0;
}


// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,
//
// each taken only once - coming from s1 or s2. #Examples: ``` a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz" longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
  let s3 = s1 + s2;
  let s4 = s3.split("");
  s4 = s4.sort().filter((element, index, array) => element !== array[index - 1]);
  return s4.join("");
}
