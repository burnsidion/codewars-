//Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
  return x.replace(/\s/g, '')
}


//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//The output should be two capital letters with a dot seperating them.

function abbrevName(name){
  name = name.split(' ')
  return (name[0][0] + '.' + name[1][0]).toUpperCase();
}


/*In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm.

You have to write a function printer_error which given a string will output the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z. */


function printerError(s) {
    if(s.match(/[^a-m]/g) == null) return 0 + '/' + s.length;
    return s.match(/[^a-m]/g).length + '/' + s.length;
}


/*Given an array of numbers, return the difference between the largest and smallest values.

For example:

[23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).

[1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).

The array will contain a minimun of two elements. Input data range guarantees that max-min will cause no integer overflow. */

function betweenExtremes(numbers) {
    let sorted = numbers.sort((a,b) =>  a - b);
    let largest = sorted[sorted.length-1]
    let smallest = sorted[0];
    return largest - smallest;
}
