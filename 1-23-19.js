// Write a simple function that takes as a parameter a date object and returns a boolean value representing whether the date is today or not.
//
// Make sure that your function does not return a false positive by just checking just the day.

function isToday(date) {
  return date.toDateString() === new Date().toDateString();
}


// You have to create a function which receives 3 arguments: 2 numbers, and the result of an unknown operation performed on them (also a number).Based on those 3 values you have to return a string, that describes which operation was used to get the given result. The possible return strings are: "addition", "subtraction", "multiplication", "division".
// Example:
// calcType(1, 2, 3) -->   1 ? 2 = 3   --> "addition"

function calcType(a, b, res) {
  if((a + b) == res) return "addition";
  else if((a - b) == res) return "subtraction";
  else if((a * b) == res) return "multiplication";
  return "division"
}


// Given a credit card number we can determine who the issuer/vendor is with a few basic knowns.
//
// Complete the function getIssuer() that will use the values shown below to determine the card issuer for a given card number. If the number cannot be matched then the function should return the string Unknown.
//
// | Card Type  | Begins With          | Number Length |
// |------------|----------------------|---------------|
// | AMEX       | 34 or 37             | 15            |
// | Discover   | 6011                 | 16            |
// | Mastercard | 51, 52, 53, 54 or 55 | 16            |
// | VISA       | 4                    | 13 or 16      |

function getIssuer(number) {
   var s = number.toString();
  if (/^3[4|7]\d{13}$/.test(s)) return "AMEX";
  if (/^6011\d{12}$/.test(s)) return "Discover";
  if (/^5[1-5]\d{14}$/.test(s)) return "Mastercard";
  if (/^4(\d{12}|\d{15})$/.test(s)) return "VISA";
  return "Unknown";
}
