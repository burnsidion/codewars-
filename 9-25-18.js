//Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation. The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise.

function setAlarm(employed, vacation){
  return(employed && !vacation) ? true : false
}


//Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even. For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF'].

function capitalize(s){
  let finString = '';
  let finString1 = '';
  for(let i = 0; i < s.length; i++){
    if(i % 2 == 0){
      finString += s[i].toUpperCase()
      finString1 += s[i].toLowerCase()
    } else {
      finString += s[i].toLowerCase()
      finString1 += s[i].toUpperCase()
    }
  }
  return [finString, finString1]
};


//Given a string, return true if the first instance of "x" in the string is immediately followed by the string "xx".

function tripleX(str){
   return str.indexOf('x') === str.indexOf('xxx') && str.indexOf('xxx') !== -1
}
