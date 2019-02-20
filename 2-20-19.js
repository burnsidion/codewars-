// Your goal is to create a function dative() (Dative() in C#) which returns the valid form of a valid Hungarian word w in dative case i. e. append the correct suffix nek or nak to the word w based on vowel harmony rules.
//
// Vowel Harmony Rules (simplified)
// When the last vowel in the word is
//
// a front vowel (e, é, i, í, ö, ő, ü, ű) the suffix is -nek
// a back vowel (a, á, o, ó, u, ú) the suffix is -nak
// Examples:
// dative("ablak") == "ablaknak"
// dative("szék") == "széknek"
// dative("otthon") == "otthonnak"

function dative(word) {
  return (/[aáoóuú]/.test(word))
    ? word + "nak"
    : word + "nek";
}

// Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.
//
// Find the number of Friday 13th in the given year.
//
// Input: Year as an integer.
//
// Output: Number of Black Fridays in the year as an integer.
//
// Examples:
//
// unluckyDays(2015) == 3
// unluckyDays(1986) == 1

function unluckyDays(year) {
  let count = 0;
  for (let i = 0; i < 12; i++) {
    let day = new Date(year, i, 13);
    if (day.getDay() == 5)
      count++
  }
  return count;
}

// Mr. Square is going on a holiday. He wants to bring 2 of his favorite squares with him, so he put them in his rectangle suitcase.
//
// Write a function that, given the size of the squares and the suitcase, return whether the squares can fit inside the suitcase.
//
// fit_in(a,b,m,n)
// a,b are the sizes of the squares
// m,n are the sizes of the suitcase

function fit_in(a, b, m, n) {
  return (a + b <= m && a <= n && b <= n || a + b <= n && a <= m && b <= m);
}
