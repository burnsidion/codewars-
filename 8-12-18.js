
//Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
 if((number % 2) == 0) return "Even"
   return "Odd"
}


//Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

function greet (name, owner) {
  if(name == owner) return 'Hello boss';
  return 'Hello guest';
}


/*All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals. */


function feast(beast, dish) {
  if(beast.startsWith(dish[0]) && beast.endsWith(dish[dish.length - 1])) return true
    return false
}


//Given an integral number, determine if it's a square number:

var isSquare = function(n){
  return Math.sqrt(n) % 1 === 0;
}
