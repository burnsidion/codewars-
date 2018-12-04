//You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.
//You can assume all values in the array are numbers.


function smallEnough(a, limit){
  let count = 0;
  for(let i = 0; i < a.length; i++){
    if(a[i] > limit) count++
  }
  return count > 0 ? false : true
}

/*You have an array of numbers.
Your task is to sort ascending odd numbers but even numbers must be on their places.

Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it. */

function sortArray(array) {
  let odds = array
     .filter(x => x%2)
     .sort((a,b) => a - b);
  return array
        .map(x => x%2 ? odds.shift() : x)
}
