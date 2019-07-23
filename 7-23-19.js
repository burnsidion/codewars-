// Given a number , Return _The Maximum number _ could be formed from the digits of the number given .

function maxNumber(n){
  return parseInt(n.toString().split('').sort((a,b) => b - a).join(''))

}


//Given an array/list [] of integers , Find the Nth smallest element in this array of integers

function nthSmallest(arr, pos){
  let newArr = arr.sort((a,b) => a - b)
  return newArr[pos-1]

}


// Write a method smash that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
// Smash Words
function smash (words) {
    "use strict";
    if(!words) return ''
    return words.join(' ')
};


//Given an array/list [] of integers , Find the product of the k maximal numbers.

function maxProduct(numbers, size){
  return numbers.sort((cur,next) => next - cur).splice(0,size).reduce((acc,el) => acc * el)
}


// An element is leader if it is greater than The Sum all the elements to its right side.
// Task :
// Given an array/list [] of integers , Find all the LEADERS in the array.

var arrayLeaders = numbers => {
  let ans = []
  for(let i = 0; i < numbers.length; i++){
    let sum = 0;
    for(let j = i + 1; j < numbers.length; j++){
      sum += numbers[j]
    }
    if(numbers[i] > sum){
      ans.push(numbers[i])
    }
  }
  return ans
}


// Given an array/list [] of n integers , Separate The even numbers from the odds , or Separate the men from the boys  !alt !alt
//
// Notes
// Return an array/list where Even numbers come first then odds
//
// Since , Men are stronger than Boys , Then Even numbers in ascending order While odds in descending .
//
// Array/list size is at least *4*** .
//
// Array/list numbers could be a mixture of positives , negatives .
//
// Have no fear , It is guaranteed that no Zeroes will exists . !alt
//
// Repetition of numbers in the array/list could occur , So (duplications are not included when separating).

function menFromBoys(arr){
  let newArr = arr.filter((item,index) => arr.indexOf(item) === index)
  let men = newArr.filter(man => man % 2 ===0).sort((a,b) => a - b)
  let boys = newArr.filter(boy => boy % 2 !==0).sort((a,b) => b - a)
  return men.concat(boys)
}
