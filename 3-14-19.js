// Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.
//
// Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
// Each part will be in a string
// Elements of a pair must be in the same order as in the original array.


function partlist(arr) {
  let retArray=[];
  for( var i=1; i<arr.length; i++){
    let newArr = [];
    newArr.push(arr.slice(0,i).join(" "));
    newArr.push(arr.slice(i).join(" "));
    retArray.push(newArr);

    }

    return retArray;
}

// The Club Doorman will give you a word. To enter the Club you need to provide the right number according to provided the word.
//
// Every given word has a doubled letter, like 'tt' in lettuce.
//
// To answer the right number you need to find the doubled letter's position of the given word in the alphabet and multiply this number per 3.
//
// It will be given only words with one doubled letter.


function passTheDoorMan (word){
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let letter = '';
for (let i = 0; i < word.length; i++) {
  if (word[i] === word[i + 1]) {
    letter = word[i];
  }
}
return (alphabet.indexOf(letter) + 1) * 3

}

// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].
//
// The order of the numbers passed in could be any order. The array will always include at least 2 items.


function twoOldestAges(ages){
  let sorted = ages.sort((a,b) => b - a);
  return [sorted[1], sorted[0]];
}

// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.
//
// The solution would work like the following:
//
// getEvenNumbers([2,4,5,6]) // should == [2,4,6]


function getEvenNumbers(numArr){
  return numArr.filter(x => x % 2 === 0);
}

// Write a function that takes an integer and returns an array [A, B, C], where A is the number of multiples of 3 (but not 5) below the given integer, B is the number of multiples of 5 (but not 3) below the given integer and C is the number of multiples of 3 and 5 below the given integer.
//
// For example, solution(20) should return [5, 2, 1]


function solution(number){
  let arr = [], A = 0, B = 0, C = 0;
  for(let i = 1; i < number; i++){
    if(i % 3 == 0 && i % 5 == 0) C++;
    else if(i % 3 == 0 && i % 5 !== 0) A++;
    else if(i % 5 == 0 && i % 3 !== 0) B++;
  }
  return [A,B,C];
}
