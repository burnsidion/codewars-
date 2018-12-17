//The autocomplete function will take in an input string and a dictionary array and return the values from the dictionary that start with the input string. If there are more than 5 matches, restrict your output to the first 5 results. If there are no matches, return an empty array.

function autocomplete(input, dictionary){
  let newInput = input.replace(/[^A-Za-z]+/g, '')
  let arr = [];
  let size = 5;
  for(let i = 0; i < dictionary.length; i++){
    if(dictionary[i].toLowerCase().startsWith(newInput)){
      arr.push(dictionary[i])
    }
  }
  return arr.slice(0, size)
}


/*ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".*/

function rot13(message){
  return (message+'').replace(/[a-zA-Z]/gi,function(s){
        return String.fromCharCode(s.charCodeAt(0)+(s.toLowerCase()<'n'?13:-13))
    })

}


//Format any integer provided into a string with "," (commas) in the correct places.

var numberFormat = function (number) {
  return number.toLocaleString()
};


/*A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation. */

function isPangram(string){
  return string.match(/([a-z])(?!.*\1)/ig || []).length == 26
}
