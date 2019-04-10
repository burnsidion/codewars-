function shiftLeft(s, t){
  let count = 0;
  while (s != t){
    s.length > t.length ? s = s.slice(1) : t = t.slice(1);
    count++
  }
  return count
}

function stray(numbers) {
  return numbers.reduce((a,b) => a ^ b);
}


// Make the sum() function return the sum of the values in the passed in array. Your solution must use the reduce() function of the built-in javascript Array object. If you're not familiar with reduce(), reading over the documentation may help.

function sum(array) {
  return array.reduce((a,b) => a + b);
}
