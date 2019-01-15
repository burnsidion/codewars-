//In this Kata, you will be given a lower case string and your task will be to remove k characters from that string using the following rule:
// first remove all letter 'a', followed by letter 'b', then 'c', etc...
//  remove the leftmost character first.

function solve(s, k) {
  console.log(s, s.split("").sort().slice(0, k))
  let r = s.split("").sort().slice(0, k)
  for (let i = 0; i < r.length; i++)
    s = s.replace(r[i], "");
  return s;
}

// Very simple, given a number, find its opposite.
//
// Examples:
//
// 1: -1
// 14: -14
// -34: 34
// But can you do it in 1 line of code and without any conditionals?

function opposite(number) {
  return number * (-1);
}

// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.
//
// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);
//
// This function should return a number (final grade). There are four types of final grades:
//
// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases

function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10)
    return 100;
  if (exam > 75 && projects >= 5)
    return 90;
  if (exam > 50 && projects >= 2)
    return 75;
  return 0
}

//Given a number, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep..."

var countSheep = function(num) {
  let sent = "";
  for (let i = 1; i <= num; i++) {
    sent += `${i} sheep...`;
  }
  return sent
}


// Complete function ```howManydays```, function accept 1  parameters:```month```, means the month of year, different month has different days (refer to the following table), return a number that how many days in this month(month is always greater than 0, less than or equal to 12).

function howManydays(month){
  switch (month){
    case 4: case 6: case 9: case 11: return 30;
    case 2: return 28;
  }
  return 31;
}
