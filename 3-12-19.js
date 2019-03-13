// In this Kata, you will learn how to remove all empty items in an Array.
//
// In JavaScript, empty items in arrays can be declared by [1, 2,,,3, 4] (Multiple commas without a value in that index)
//
// The values that are not given a value are empty items, and usually add up with others to form <# empty items>; In the example, <2 empty items>
//
// [1, 2, <2 empty items>, 3, 4] should be cleared such that it should be [1, 2, 3, 4]


function clean(arr) {
  return arr.filter(x => true);
}

// "love!".toLoverCase()="EVOL!"
//     "l" is 11th(start with 0) in lower case letters
//     abcdefghijklmnopqrstuvwxyz
//                |
//     0...      11----------------->11th letter
//     We use this number mod 4------> 11 % 4 = 3
//
//     the 3rd(also start with 0) letter of "LOVE" is "E"
//     LOVE
//        |
//        3--------->3rd letter
//
//     so convert "l" to "E".
//
//     and so on..
//
//     "o" convert to "V", "v" convert to "O", "e" convert to "L"
//
//     last "!" remain unchanged, because it's not a letter.


String.prototype.toLoverCase = function(){
  return this.replace(/[a-z]/gi, ch => "ELOV"[ch.charCodeAt(0)%4])
}

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
//
// Example:
//
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"


function highAndLow(numbers){
  numbers = numbers.split(' ');
  let high = Math.max(...numbers);
  let low = Math.min(...numbers);
  return `${high} ${low}`
}
