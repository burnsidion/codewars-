// Create a function isDivisible(n, x, y) that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.
//
// Example:
// isDivisible(3,1,3)--> true because 3 is divisible by 1 and 3
// isDivisible(12,2,6)--> true because 12 is divisible by 2 and 6
// isDivisible(100,5,3)--> false because 100 is not divisible by 3
// isDivisible(12,7,5)--> false because 12 is neither divisible by 7 nor 5

function isDivisible(n, x, y) {
  return (n % x == 0) && (n % y == 0) ? true : false;
}


// Create a function that returns the values of an object which are numbers, and the keys of objects which have methods as values.
//
// array should return numbers first then all the method names in the order they are in the object
// strings, booleans, arrays should be ignored.
// if the object is empty, then the array should return the following string: The Object is Empty
// Example:
//
// returnSpecifics({a:1,b:'str',c:2,d:true,e:function(a){return a;},f:3})
// This would return [1,2,3,'e']

function returnSpecifics(obj) {
  var keys = Object.keys(obj)
  if (keys.length < 1) {
    return ['The Object is Empty']
  }

  var numbers = []
  var strings = []

  for (var i = 0, key; key = keys[i]; i++) {
    var value = obj[key]
    var type = typeof value
    if (type === 'number') {
      numbers.push(value)
    } else if (type === 'function') {
      strings.push(key)
    }
  }

  return numbers.concat(strings)
}
