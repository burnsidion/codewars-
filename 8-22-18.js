/*
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}


/*
Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are apart of the word in this kata.
*/

function reverse(str){
  return str.trim().split(' ').map((a, i) => i%2==0 ? a : a.split('').reverse().join('')).join(' ')
}

/*
Modify the kebabize function so that it converts a camel case string into a kebab case.
*/

function reverse(str){
  return str.trim().split(' ').map((a, i) => i%2==0 ? a : a.split('').reverse().join('')).join(' ')
}


/*
Your task is to write a function, which takes two arguments and returns an array. First argument is an array of values, scecond is multiplier. Function is named "multiplyAndFilter" and it should filter all non-numeric values and multiply the rest by given multiplier.
*/

function multiplyAndFilter(array, multiplier){
 return array.filter(x => typeof x == 'number').map(a => a * multiplier)
}


//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
    str = str.toLowerCase().split('');
    let xCount = 0;
    let oCount = 0;
    for(let i = 0; i < str.length; i++){
      if(str[i] == 'x') xCount++
      if(str[i] == 'o') oCount++
    }
     if(xCount == oCount) return true
     return false

}


/*No Story, No Description , Only by Thinking and Testing , Look at the result of testcase, guess the code!*/

function testIt(a,b){
  a = a.toString().split('').map(Number).reduce((x, y) => x + y);
  b = b.toString().split('').map(Number).reduce((x, y) => x + y);
  return a * b;
}
