//Question 1
let dates = [
  'Oct 7, 2009',
  'Nov 10, 2009',
  'Jan 10, 2009',
  'Oct 22, 2005',
  'Feb 12, 2006',
  'Dec 13, 2006'
];

function orderDates(dates) {
  let dateObj = {
    'Jan': 1,
    'Feb': 2,
    'Mar': 3,
    'Apr': 4,
    'May': 5,
    'Jun': 6,
    'Jul': 7,
    'Aug': 8,
    'Sep': 9,
    'Oct': 10,
    'Nov': 11,
    'Dec': 12
  };
  let finDate = [];
  let months = [];
  let days = [];
  let theEnd = [];
  for(let i = 0; i < dates.length; i++) {
    dates[i] = dates[i].split(' ');
    let newDate = [
      dates[i][2],
      dateObj[dates[i][0]],
      dates[i][1].replace(/,/g, '')
    ];
    finDate.push(newDate);
  }
    finDate.sort((a, b) => b[0] - a[0])
  for(let j = 0; j < finDate.length; j++){
      months.push(finDate[j][1])

      days.push(finDate[j][2])
  }

}

console.log(orderDates(dates));

//Question 2
