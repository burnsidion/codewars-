// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?
//
// At the end of the first year there will be:
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants
//
// At the end of the 2nd year there will be:
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (number of inhabitants is an integer)
//
// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213
//
// It will need 3 entire years.
// More generally given parameters:
//
// p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)
//
// the function nb_year should return n number of entire years needed to get a population greater or equal to p.
//
// aug is an integer, percent a positive or null number, p0 and p are positive integers (> 0)

function nbYear(p0, percent, aug, p) {
  let years = 0;
  while(p0 < p){
    p0 += p0 * percent/100 + aug;
    years ++;
  }
  return years
}


// Given a sequence of items and a specific item in that sequence, return the item immediately following the item specified. If the item occurs more than once in a sequence, return the item after the first occurence. This should work for a sequence of any type.
//
// When the item isn't present or nothing follows it, the function should return nil in Clojure and Elixir, Nothing in Haskell, undefined in JavaScript, None in Python.
//
// nextItem([1, 2, 3, 4, 5, 6, 7], 3) # 4
// nextItem("testing", "t") # "e"

function nextItem(xs, item) {
  var found = false;
  for (var x of xs) {
    if (found) return x;
    if (x == item) found = true;
  }
  return undefined;
}
