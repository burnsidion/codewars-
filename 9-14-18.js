/*Simple enough this one - you will be given an array. The values in the array will either be numbers or strings, or a mix of both. You will not get an empty array, nor a sparse one.

Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type. */


function dbSort(a){
  let strings = a.filter(x => typeof x == 'string').sort();
  let nums = a.filter(x => typeof x == 'number').sort((a,b) => a - b);
  return nums.concat(strings)
}


/*You want to personalise the emails so that the people don't think they are being spammed!
You will be given a string of marketing text called campaign. In the string, there will be personalisable elements like "<NAME>", "<CITY>", "<FAVOURITE PRODUCTS>".
You need to replace these elements with the personal details of the person to whom you are sending the email. You will receive this information in a hash called person, which may contain other information from the database, which you don't need. */

function personalise( campaign, person){
  campaign = campaign.replace(/<NAME>/g, person.name);
  campaign = campaign.replace(/<CITY>/g, person.city);
  campaign = campaign.replace(/<FAVOURITE PRODUCTS>/g, person.favourite_products)
  return campaign
}

//Ask a small girl - "How old are you?". She always says strange things... Lets help her!
//For correct answer program should return int from 0 to 9.

function getAge(inputString){
return parseInt(inputString)
}


//Given an array, return the difference between the count of even numbers and the count of odd numbers. 0 will be considered an even number.

function solve(a){
  a = a.filter(x => typeof x == 'number')
  let evens = 0;
  let odds = 0;
  for(let i = 0; i < a.length; i++){
    if(a[i]% 2 == 0) evens++
    if(a[i]% 2 !== 0) odds++
  }
  return evens - odds;
};
