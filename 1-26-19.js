// Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.
//
// @ @@ @ @@ @ @@ @ @@ @ @@ @
//
// Implement count_red_beads(n) (in PHP count_red_beads($n); in Java, Javascript, TypeScript, C, C++ countRedBeads(n)) so that it returns the number of red beads.
// If there are less than 2 blue beads return 0.

function countRedBeads(n) {
  return n < 2 ? 0 : 2 * n - 2;
}


// Complete the function which returns the weekday according to the input number:
//
// 1 returns "Sunday"
// 2 returns "Monday"
// 3 returns "Tuesday"
// 4 returns "Wednesday"
// 5 returns "Thursday"
// 6 returns "Friday"
// 7 returns "Saturday"
// Otherwise returns "Wrong, please enter a number between 1 and 7"
// FUNDAMENTALS


function whatday(num) {
let day = "";
  switch(num){
    case 1:
      day = "Sunday"
      break;
    case 2:
      day = "Monday"
      break;
    case 3:
      day = "Tuesday"
      break;
    case 4:
      day = "Wednesday"
      break;
    case 5:
      day = "Thursday"
      break;
    case 6:
      day = "Friday"
      break;
    case 7:
      day = "Saturday"
      break;
    default:
      day = "Wrong, please enter a number between 1 and 7"
  }
  return day
}

// Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.
// Task Overview:
// You have to write a function that accepts three parameters:
//
// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus.
// wait is the number of people waiting to get on to the bus.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.


function enough(cap, on, wait) {
  if((on + wait) <= cap) return 0;
  else return (on + wait) - cap;

}
