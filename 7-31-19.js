//Complete the solution so that it reverses all of the words within the string passed in.

function reverseWords(str){
 return str.split(' ').reverse().join(' ');
}


//Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

function adjacentElementsProduct(array) {
  let arr = []
  for(let i = 0; i < array.length-1; i++){
    arr.push(array[i] * array[i + 1])
  }
  return Math.max(...arr)
}


// Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n){
  return parseInt(n.toString().split('').sort((a,b) => b - a).join(''));
}
