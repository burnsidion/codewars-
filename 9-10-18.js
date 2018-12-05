//Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

function sortByLength (array) {
  return array.sort((a,b) => a.length - b.length);
};


/*Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.
If two words have the same last letter, they returned array should show them in the order they appeared in the given string.
All inputs will be valid.*/

function last(x){
  x = x.split(' ')
  return x.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}


/*Write a function that takes a list (in Python) or array (in other languages) of numbers, and makes a copy of it.
Note that you may have troubles if you do not return an actual copy, item by item, just a pointer or an alias for an existing list or array.
If not a list or array is given as a parameter in interpreted languages, the function should raise an error. */

function copyList(l){
  let arr = l.slice();
  return arr
}


//Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once ( ignore duplicates).

function minValue(values){
  let fin = values
           .filter((e, i, arr) => arr.indexOf(e) === i)
           .sort()
           .join('')
     return Number(fin)
}
