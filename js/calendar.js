//////////////////////////
//		FUNCTIONS		//
//////////////////////////

function nextMonth() {
	eraseCalendar();
	switch (monthNum) {
		case 11:
			monthNum = 0;
			++currentYear;
			break;
		default:
			++monthNum;
			break;
	}
	currentMonth = monthsOfYear[monthNum]
	fillCalendar();
	if (selectedTour !== "") {setUpTour(selectedTour);}
}

function lastMonth() {
	eraseCalendar();
	switch (monthNum) {
		case 0:
			monthNum = 11;
			--currentYear;
			break;
		default:
			--monthNum;
			break;
	}
	currentMonth = monthsOfYear[monthNum];
	fillCalendar();
	if (selectedTour !== "") {setUpTour(selectedTour);}
}

function eraseCalendar() {
	var n = 6;
	while (n > 0){
		var weekRow = document.getElementById('week' + n);
		if (weekRow.style.display === "block") {
			for (i = 7; i >= 1; i--) {
				document.getElementById('r' + n + 'd' + i).getElementsByTagName('div')[0].innerHTML = "";
				document.getElementById('r' + n + 'd' + i).getElementsByTagName('div')[1].innerHTML = "";
				document.getElementById('r' + n + 'd' + i).getElementsByTagName('div')[1].removeAttribute("class");
			}
			weekRow.style.display = 'none';
		}
		n--;
	}
}

function fillCalendar() {

	// determine beginning of current month
	console.log('Getting info for: ' + currentMonth + " 01, " + currentYear);
	var thisMonth = new Date(currentMonth + " 01, " + currentYear);

	// write current month & year above calendar
	document.getElementById('monthEntry').innerHTML = monthsOfYear[thisMonth.getMonth()] + " " + thisMonth.getFullYear();

	// set the day index of the first day of the current month
	var dayOneIs = thisMonth.getDay();
	console.log('First day position is: ' + dayOneIs);

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

	// fill in calendar
	var i = 1;
	var thisDay = dayOneIs;
	var monthDate = 1;
	while (monthDate <= totalDays) {
	    document.getElementById('week' + i).style.display = "block";
	    while (thisDay < 7 && monthDate <= totalDays) {
	        document.getElementById('r' + i + 'd' + (thisDay+1)).getElementsByTagName('div')[0].innerHTML = '<p class="date-number">' + monthDate + '</p>';
	        thisDay++;
	        monthDate++;
	    }
	    thisDay = 0;
	    i++;
	}
}

//////////////////////////
//		CODE BODY		//
//////////////////////////

// set month & day arrays
var monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// get current month info & set variables
var currentDate = new Date();
console.log(currentDate);
var monthNum = currentDate.getMonth(); // getMonth() provides number 0-11 for month of the year
var currentMonth = monthsOfYear[monthNum];
var currentYear = currentDate.getFullYear(); // getFullYear() returns the 4-digit year
fillCalendar();
