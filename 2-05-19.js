
//Question 1
let dates = ['Oct 7, 2009', 'Nov 10, 2009', 'Jan 10, 2009', 'Oct 22, 2009', 'Feb 12, 2009', 'Dec 13, 2009'];

function orderDates(dates){
  let dateObj = {
    'Jan':1,
    'Feb':2,
    'Mar':3,
    'Apr':4,
    'May':5,
    'Jun':6,
    'Jul':7,
    'Aug':8,
    'Sep':9,
    'Oct':10,
    'Nov':11,
    'Dec':12
  };
  let finDate = [];
  let months = [];
  let days = [];
  for(let i = 0; i < dates.length; i++){
      dates[i] = dates[i].split(' ');
      let newDate = [dates[i][2],dateObj[dates[i][0]],dates[i][1]];
      finDate.push(newDate);
  }
  //loop through finDate array to pull out months and days and sort descending
  for(let j = 0; j < finDate.length; j++){
      months.push(finDate[j][1]);
      days.push(parseInt(finDate[j][2]))
    }
    console.log("MONTHS = " ,months.sort((a,b) => b - a))
    console.log("DAYS = ", days.sort((a,b) => b - a))
  }



console.log(orderDates(dates));

//Question 2
