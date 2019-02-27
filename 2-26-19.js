// Get character from ASCII Value
//
// Write a function getChar/GetChar/get_char which takes a number and returns the corresponding ASCII char for that value.

function getChar(c){
  return String.fromCharCode(c);
}


// Given a string and an array of index numbers, return the characters of the string rearranged to be in the order specified by the accompanying array.
//
// Ex:
//
// scramble('abcd', [0,3,1,2]) -> 'acdb'

function scramble(str, arr) {
  let newArr = [];
  arr.map((x,i) => newArr[x] = str[i]);
  return newArr.join('')
};


// Your task is to make function, which returns the sum of a sequence of integers.
//
// The sequence is defined by 3 non-negative values: begin, end, step.
//
// If begin value is greater than the end, function should returns 0

const sequenceSum = (begin, end, step) => {
  if (begin > end) {
    return 0;
  }
  return begin + sequenceSum(begin + step, end, step);
};


// Count the number of occurrences of each character and return it as a list of tuples in order of appearance.

var orderedCount = function (text) {
  letters = text.split("")
  var uniqs = letters.filter((letter, index) => letters.indexOf(letter) == index)
  console.log(uniqs)
  return uniqs.map((letter) => [letter, text.split(letter).length - 1])
}


// You will write a function that receive 2 parameters, 2 different years, to indicate a range of time.
//
// The function will return the number of times a month between those years begin on Sunday, meaning the 1st day of the month is Sunday.
//
// If there is only one year provided, return the number of times a month begin on Sunday on that year.
//
// For instance: between 1901 and 2000, a month began on Sunday 171 times.

function getTotalSundays (yearInit, yearEnd) {
  if(yearEnd == undefined) yearEnd = yearInit
  let sundays = 0;
  for(let i = yearInit; i <= yearEnd; i++){
    for(let m = 0; m < 12; m++){
      if(new Date(i,m,1).getDay() == 0) sundays++
    }
  }
  return sundays;
}


// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

function solution(nums){
 return nums == null ? [] : nums.sort((a,b) => a - b);
}
