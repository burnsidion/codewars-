// We need a function that can transform a string into a number. What ways of achieving this do you know?

var stringToNumber = function(str){
  return parseInt(str)
}


// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
// You got an array with your colleges' points. Now calculate the average to your points!
//
// Return True if you're better, else False!

function betterThanAverage(classPoints, yourPoints) {
//   let average = classPoints.reduce((x,i) => x + i) / classPoints.length;
//   if(average < yourPoints) return true;
//   return false;

  return (classPoints.reduce((x,i) => x + i)) / classPoints.length < yourPoints ? true : false;
}
