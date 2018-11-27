//Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

function spinWords(str){
  return str.split(' ').map(word => word.length < 5 ? word : word.split('').reverse().join('')).join(' ')
}


//Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result. It should remove all values from list a, which are present in list b.

function array_diff(a, b) {
  return a.filter(x => !b.includes(x))
}


/*In this kata you are required to, given a string, replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it.
"a" = 1, "b" = 2, etc.
*/

function alphabetPosition(text) {
  return text.toLowerCase().split('')
             .filter(c => c >= 'a' & c <= 'z')
             .map( c => c.charCodeAt(0) - 'a'.charCodeAt(0) + 1)
             .join(' ')
}
