//In this kata you should simply determine, whether a given year is a leap year or not.

function isLeapYear(year) {
   return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

/* Pirates have notorious difficulty with enunciating. They tend to blur all the letters together and scream at people.
At long last, we need a way to unscramble what these pirates are saying.
Write a function that will accept a jumble of letters as well as a dictionary, and output a list of words that the pirate might have meant. */


function grabscrab(anagram, dictionary) {
  let newArr = [];
  let finArr = [];

  anagram = anagram.split('').sort().join('')
  for (let i = 0; i < dictionary.length; i++) {
    if (dictionary[i].length === anagram.length) {
      newArr.push(dictionary[i])
    }
  }
  newArr.forEach((e) => {
    if (e.split('').sort().join('') === anagram) {
      finArr.push(e)
    }
  })
  return finArr
}

/*The following code is not giving the expected results. Can you figure out what the issue is?
The following is an example of data that would be passed in to the function. */
function getNames(data){
  return data.map(item => item.name);
}
