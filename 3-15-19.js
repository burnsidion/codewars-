// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty (length0).


function solution(a, b){
  return (a.length < b.length) ? `${a}${b}${a}` : `${b}${a}${b}`;
}

// The following code could use a bit of object oriented artistry. While its a simple method and works just fine as it is, in a larger system its best to organize methods into classes/objects. Refactor the following code so that it belongs to a Person class/object. Each Person instance will have a greet method. The Person instance should be instantiated with a name so that it no longer has to be passed into each greet method call.


let Person = function greet(name){
  this.name = name;

  this.greet = function(peep){
    return `Hello ${peep}, my name is ${this.name}`
  }
}

// Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.


function keysAndValues(data){
   let arr1 = Object.keys(data);
   let arr2 = Object.values(data);
   return [arr1,arr2]
}

//Complete the solution so that it reverses the string value passed into it.


function solution(str){
  return str.split('').reverse().join('');
}

// Inspired by the development team at Vooza, write the function howManyLightsabersDoYouOwn that
//
// accepts the name of a programmer, and
// returns the number of lightsabers owned by that person.
// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.
//
// No starting help here -- you'll need to know how to write a function that accepts a parameter and returns a value based on that parameter.


function howManyLightsabersDoYouOwn(name){
  return name == "Zach" ? 18 : 0;
}

// Fellow code warrior, we need your help! We seem to have lost one of our array elements, and we need your help to retrieve it! Our array, superImportantArray, was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.
//
// Write a function called getMissingElement that accepts an array of unique integers between 0 and 9 (inclusive), and returns the missing element.


function getMissingElement(sia){
  for(let i = 0; i < 10; i++){
    if(sia.indexOf(i) == -1) return i
  }
}
