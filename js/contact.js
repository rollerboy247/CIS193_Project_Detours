//uses objects and arrays; 90-degree shift of table from contact3

//uses objects and arrays

/*
San Francisco, CA (Todd Brotze)
Washington D.C. (Thomas Zumberge)
Cambridge, U.K. (Karen Ha)
Vancouver, B.C. (John Li)
Kyoto, Japan (Jason Wu)
Hong Kong (Anthony Trau)
Uganda (John Hosmillo)
*/

//hard-code data which will be input into objects representing each tour guide
var namesArray = ["Todd Brotze", "Thomas Zumberge", "Karen Ha", "John Li", "Jason Wu", "Anthony Trau", "John Hosmillo"];
var locationsArray = ["San Francisco, California", "Washington, D.C.", "Cambridge, United Kingdom", "Vancouver, Canada", "Kyoto, Japan", "Hong Kong, China", "Uganda"];
var emailsArray = ["tbrotze@detours.com", "tzumberge@detours.com", "kha@detours.com", "jli@detours.com", "jwu@detours.com", "atrau@detours.com", "jhosmillo@detours.com"]
var flagsArray = ["../img/flags/usa.png", "../img/flags/usa.png", "../img/flags/uk.png", "../img/flags/canada.png", "../img/flags/japan.png", "../img/flags/hongkong.png", "../img/flags/uganda.png", ]
var phoneNumber = 1000;

//fill an array of tour guide objects with data from the above arrays
var tourGuides = [];
for(i=0; i < namesArray.length; i++) {
  tourGuides[i] = new Object();
  tourGuides[i].name = namesArray[i];
  tourGuides[i].location = locationsArray[i];
  tourGuides[i].email = emailsArray[i];
  tourGuides[i].flag = flagsArray[i];
  tourGuides[i].phoneNumber = phoneNumber++;
}

function returnInfo(index) {
  document.getElementById("right").innerHTML = tourGuides[index].name + "<br>"
    + tourGuides[index].location + "<br>"
    + "<a href='mailto:" + tourGuides[index].email + "?Subject=I want to tour " + tourGuides[index].location + "'>" + tourGuides[index].email + "</a>" + "<br>"
    + "(626)555-" + tourGuides[index].phoneNumber + "<br>";
}

function makeGrey(index) {
  clickedFlag = document.getElementById(index);
  clickedFlag.style.backgroundColor = "lightgrey";
}

function makeWhite() {
  for(i=0; i < tourGuides.length; i++) {
    document.getElementById(i).style.backgroundColor = "#f8f9fa";
  }
}

function handleClick(i) {
  returnInfo(i);
  makeWhite();
  makeGrey(i);
}

for(i=0; i < tourGuides.length; i++) {
	document.write("<div id='" + i + "' onclick='handleClick(" + i + ")'>");
  document.write("<br>");
  document.write("<img src='" + tourGuides[i].flag + "'/>");
  document.write(tourGuides[i].location)
  document.write("<br><br>");
  document.write("</div>");
}
