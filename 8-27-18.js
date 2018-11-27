//Complete the solution so that the function will break up camel casing, using a space between words.
function solution(string) {
    return string.replace(/([A-Z])/g, ' $1')
}


//Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
var uniqueInOrder=function(iterable){
  let doubles = [];
  let last = '';
  for(let i = 0; i < iterable.length; i++){
    if(iterable[i] != last){
      console.log(iterable)
      last = iterable[i]
      doubles.push(last)
    }
  }
  return doubles
}


/*In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.

For the purposes of this Kata, you may assume that all inputs are valid, i.e. non-empty arrays containing only integers.

Note that an array of 1 integer is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value. An empty list is considered a degenerate case and therefore will not be tested in this Kata - feel free to raise an Issue if you see such a list being tested.
*/

function inAscOrder(arr) {
  return arr.join('') === arr.sort((a,b) => a - b).join('') ? true : false;
}
