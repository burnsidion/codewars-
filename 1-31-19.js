// Complete the function/method so that it returns the url with anything after the anchor (#) removed.
//
// Examples:
//
// // returns 'www.codewars.com'
// removeUrlAnchor('www.codewars.com#about')
//
// // returns 'www.codewars.com?page=1'
// removeUrlAnchor('www.codewars.com?page=1')

function removeUrlAnchor(url){
  return url.replace(/#.*$/,'');
}

// Write a function named sumEvenNumbers, taking an array of integers as single parameter. Your function must return the sum of the even values of this array.
//
// For example, considering this input value : [4,3,1,2,5,10,6,7,9,8], then your function should return 30 (because 4 + 2 + 10 + 6 + 8 = 30).

function sumEvenNumbers(input) {
   let count = 0;
   for(let i = 0; i < input.length; i++){
     if(input[i] % 2 == 0) count += input[i]
   }
   return count;
}
