
//
// GATHER DATE INFO USING DATE OBJECT
//

// determine beginning of current month
var monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var currentDate = new Date();
console.log(currentDate);
var currentMonth = monthsOfYear[currentDate.getMonth()]; // getMonth() provides number 0-11 for month of the year
var currentYear = currentDate.getFullYear(); // getFullYear() returns the 4-digit year
var thisMonth = new Date(currentMonth + " 01, " + currentYear);

// write current month & year above calendar
document.getElementById('monthEntry').innerHTML = monthsOfYear[thisMonth.getMonth()] + " " + thisMonth.getFullYear();

// set the day index of the first day of the current month
var dayOneIs = thisMonth.getDay();
console.log(thisMonth + " First day position is: " + dayOneIs);

// determine how many days are in the current month
thisMonth.setDate(32)
var dayNum = thisMonth.getDate();
switch (dayNum) {
    case 1:
        var totalDays = 31;
        break;
    case 2:
        var totalDays = 30;
        break;
    case 3:
        var totalDays = 29;
        break;
    case 4:
        var totalDays = 28;
        break;
}

//
// FILL IN CALENDAR
//

var i = 0;
var thisDay = dayOneIs;
var monthDate = 1;
while (monthDate <= totalDays) {
    var showWeek = document.getElementById('week' + (i+1));
    showWeek.style.display = "table-row";
    while (thisDay < 7 && monthDate <= totalDays) {
        var enterDate = document.getElementById('r' + (i+1) + 'd' + (thisDay+1));
        enterDate.innerHTML = '<span class="date-number">' + monthDate + '</span>';
        thisDay++;
        monthDate++;
    }
    thisDay = 0;
    i++;
}
