// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the array.
//
// For example: ["3:1", "2:2", "0:1", ...]
//
// Write a function that takes such list and counts the points of our team in the championship. Rules for counting points for each match:
//
// if x>y - 3 points
// if x<y - 0 point
// if x=y - 1 point

function points(games) {
  let points = 0;
  for(let i = 0; i < games.length; i++){
    if(games[i][0] > games[i][2]) points += 3;
    else if(games[i][0] < games[i][2]) points = points;
    else if(games[i][0] == games[i][2]) points += 1;
  }
  return points;
}

// Given an array of digitals numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.
//
// For example:
//
// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]


function evenNumbers(array, number) {
  let evens = [];
  for(let i = 0; i <= array.length; i++){
    if(array[i] % 2 === 0) evens.push(array[i]);
  }
  return evens.splice(evens.length - number, number)
}


// In this Kata, you will remove the left-most duplicates from a array/list of integers and return the result.
//
// // Remove the 3's at indices 0 and 3
// // followed by removing a 4 at index 1
// solve([3, 4, 4, 3, 6, 3]); // => [4, 6, 3]

function solve(arr){
  return arr.filter((el, i) => arr.lastIndexOf(el) == i);

}
