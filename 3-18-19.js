let arr = [
  {
    first: "Amanda",
    last: "Byron",
    group: "Sales"
  }, {
    first: "Ye",
    last: "Xia",
    group: "Receiving",
    nameOrder: "reverse"
  }, {
    first: "Miltiades",
    last: "Crescens",
    group: "Sales"
  }
]
// need to make each array an array of objects
let obj = {};
let key;
for (let i = 0; i < arr.length; i++) {
  let fullName = `${arr[i].first} ${arr[i].last}`;
  key = arr[i].group;
  if (arr[i].nameOrder && arr[i].nameOrder.toLowerCase() === 'reverse') {
    fullName = `${arr[i].last} ${arr[i].first}`;
  }
  if (obj[key]) {
    obj[key].push({name: fullName})
  } else {
    obj[key] = [
      {
        name: fullName
      }
    ]
  }
}
return obj;
