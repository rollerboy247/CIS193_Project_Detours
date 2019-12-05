//////////////////////////
//		FUNCTIONS		//
//////////////////////////

function getTotalDays(month, year) {
	var daysInMonth = new Date(month + " 01, " + year);
	daysInMonth.setDate(32)
	var dayId = daysInMonth.getDate();
	switch (dayId) {
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
	return totalDays;
}

function getFirstCalId() {
	var tourMonth = new Date(monthsOfYear[monthNum] + " 01, " + currentYear);
	var firstCalId = tourMonth.getDay() + 1;
	return firstCalId;
}

function generateSchedule(location) {
	var tourList = [];
	tourList.unshift(location);
	var yearToProcess = currentYear;
	var monthToProcess = monthsOfYear[monthNum];
	var monthNumToProcess = monthNum;
	var calMonth = monthNumToProcess + 1;
	for (i = 0; i < bookingAhead; i++) {

		// get current month info
		var totalDays = getTotalDays(monthToProcess, yearToProcess);
		// console.log(location);
		// console.log('Scheduling for: ' + monthToProcess + "(" + calMonth + ") " + yearToProcess + " with " + totalDays + " days");
		if (calMonth < 10) {calMonth = "0" + calMonth;}

		// generate 10 tours in current month
		var x = 0;
		var randomDayList = [];
		while (x < toursPerMonth) {
			var randomDay = Math.floor(Math.random() * totalDays) + 1;
			if (randomDay < 10) {
				randomDay = "0" + randomDay;
			} else {
				randomDay = randomDay.toString();
			}
			if (randomDayList.includes(randomDay)) {
				continue;
			} else {
				randomDayList.push(randomDay);
				x++;
			}
		}
		for (c = 0; c < toursPerMonth; c++) {
			var randomTime = Math.floor(Math.random() * (15 - 9 + 1)) + 9;
			if (randomTime > 12) {
				randomTime = "0" + (randomTime - 12) + "PM";
			} else if (randomTime === 12) {
				randomTime += "PM";
			} else if (randomTime < 10) {
				randomTime = "0" + randomTime + "AM";
			} else {
				randomTime += "AM";
			}
			tourList.push("" + yearToProcess + calMonth + randomDayList[c] + randomTime);
		}

		// iterate before finishing loop
		switch (monthNumToProcess) {
			case 11:
				monthNumToProcess = 0;
				++yearToProcess;
				break;
			default:
				++monthNumToProcess;
				break;
		}
		monthToProcess = monthsOfYear[monthNumToProcess];
		calMonth = monthNumToProcess + 1;
	}
	return tourList.sort();
}

function eraseTours() {
	var n = 6;
	while (n > 0){
		var weekRow = document.getElementById('week' + n);
		if (weekRow.style.display === "block") {
			for (i = 7; i >= 1; i--) {
				document.getElementById('r' + n + 'd' + i).getElementsByTagName('div')[1].innerHTML = "";
				document.getElementById('r' + n + 'd' + i).getElementsByTagName('div')[1].removeAttribute("class");
			}
		}
		n--;
	}
}

// show tour dates and times in displayed month
function displayTour(tourSched) {
	// erase displayed tours
	eraseTours();

	var tourTitle = tourSched[tourSched.length - 1];
	console.log('Showing ' + tourTitle + " tours");
	var thisMonthTours = [];

	// find first div ID in current month
	var firstDayId = getFirstCalId();

	// populate calendar with tour times
	for (i = 0; i < tourSched.length - 1; i++) {
		var yearTest = parseInt(tourSched[i].slice(0, 4));
		var monthTest = parseInt(tourSched[i].slice(4, 6));
		if (yearTest === currentYear && monthTest === monthNum + 1) {
			thisMonthTours.push(tourSched[i]);
		}
	}
	console.log('Tours this month:');
	for (i=0; i < thisMonthTours.length; i++) {
		var yearSlice = parseInt(thisMonthTours[i].slice(0, 4));
		var monthSlice = parseInt(thisMonthTours[i].slice(4, 6));
		var daySlice = parseInt(thisMonthTours[i].slice(6, 8));
		var timeSlice = parseInt(thisMonthTours[i].slice(8, 10));
		var ampmSlice = thisMonthTours[i].slice(10);
		var thisDay = firstDayId;
		var thisWeek = 1;
		console.log(monthSlice + "/" + daySlice + " @ " + (timeSlice + ampmSlice));
		for (x = 1; x <= daySlice; x++) {
			if (thisDay <= 7) {
				if (x === daySlice) {
					document.getElementById('r' + thisWeek + 'd' + thisDay).getElementsByTagName('div')[1].innerHTML = timeSlice + ampmSlice;
					document.getElementById('r' + thisWeek + 'd' + thisDay).getElementsByTagName('div')[1].setAttribute("class", "tour-time");
				}
				thisDay++;
			} else {
				thisDay = 1;
				thisWeek++;
				if (x === daySlice) {
					document.getElementById('r' + thisWeek + 'd' + thisDay).getElementsByTagName('div')[1].innerHTML = timeSlice + ampmSlice;
					document.getElementById('r' + thisWeek + 'd' + thisDay).getElementsByTagName('div')[1].setAttribute("class", "tour-time");
				}
				thisDay++;
			}
		}
	}
}

function highlightLocation(loc) {
	var currentDiv = document.getElementById(selectedTour + '-overlay');
	var highlightDiv = document.getElementById(loc + '-overlay');
	if (selectedTour !== loc) {
		currentDiv.style.display = "none";
		highlightDiv.style.display = "block";
		selectedTour = loc;
	} else {
		highlightDiv.style.display = "block";
	}
}

function setUpTour(tourName) {
	var tourLocations = ["korea", "germany", "japan", "sanfrancisco", "cambridge", "washingtondc", "vancouver"];
	if (selectedTour === "") {selectedTour = tourName;}
	switch (tourLocations.indexOf(tourName)) {
		case 0:
			highlightLocation(tourName);
			displayTour(koreaTourSched);
			break;
		case 1:
			highlightLocation(tourName);
			displayTour(germanyTourSched);
			break;
		case 2:
			highlightLocation(tourName);
			displayTour(japanTourSched);
			break;
		case 3:
			highlightLocation(tourName);
			displayTour(sanfranciscoTourSched);
			break;
		case 4:
			highlightLocation(tourName);
			displayTour(cambridgeTourSched);
			break;
		case 5:
			highlightLocation(tourName);
			displayTour(washingtondcTourSched);
			break;
		case 6:
			highlightLocation(tourName);
			displayTour(vancouverTourSched);
			break;
	}
}

function createEventListeners() {
	var koreaShowTours = document.getElementById('cal-korea');
	var germanyShowTours = document.getElementById('cal-germany');
	var japanShowTours = document.getElementById('cal-japan');
	var sanfranciscoShowTours = document.getElementById('cal-sanfrancisco');
	var cambridgeShowTours = document.getElementById('cal-cambridge');
	var washingtondcShowTours = document.getElementById('cal-washingtondc');
	var vancouverShowTours = document.getElementById('cal-vancouver');
	if (koreaShowTours.addEventListener) {
		koreaShowTours.addEventListener('click', function() {setUpTour("korea");}, false);
		germanyShowTours.addEventListener('click', function() {setUpTour("germany");}, false);
		japanShowTours.addEventListener('click', function() {setUpTour("japan");}, false);
		sanfranciscoShowTours.addEventListener('click', function() {setUpTour("sanfrancisco");}, false);
		cambridgeShowTours.addEventListener('click', function() {setUpTour("cambridge");}, false);
		washingtondcShowTours.addEventListener('click', function() {setUpTour("washingtondc");}, false);
		vancouverShowTours.addEventListener('click', function() {setUpTour("vancouver");}, false);
	} else if (koreaShowTours.attachEvent) {
		koreaShowTours.attachEvent('onclick', function() {setUpTour("korea");});
		germanyShowTours.attachEvent('onclick', function() {setUpTour("germany");});
		japanShowTours.attachEvent('onclick', function() {setUpTour("japan");});
		sanfranciscoShowTours.attachEvent('onclick', function() {setUpTour("sanfrancisco");});
		cambridgeShowTours.attachEvent('onclick', function() {setUpTour("cambridge");});
		washingtondcShowTours.attachEvent('onclick', function() {setUpTour("washingtondc");});
		vancouverShowTours.attachEvent('onclick', function() {setUpTour("vancouver");});
	}
}

//////////////////////////
//		CODE BODY		//
//////////////////////////

// global variables
var bookingAhead = 6;
var toursPerMonth = 9;
var selectedTour = "";

// create tour schedules for each Location
var koreaTourSched = generateSchedule("korea");
var germanyTourSched = generateSchedule("germany");
var japanTourSched = generateSchedule("japan");
var sanfranciscoTourSched = generateSchedule("sanfrancisco");
var cambridgeTourSched = generateSchedule("cambridge");
var washingtondcTourSched = generateSchedule("washingtondc");
var vancouverTourSched = generateSchedule("vancouver");

// execute functions on page load
if (window.addEventListener) {
	window.addEventListener('load', createEventListeners, false);
} else if (window.attachEvent) {
	window.attachEvent('onload', createEventListeners);
}
