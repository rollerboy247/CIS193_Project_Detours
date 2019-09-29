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
var flagsArray = ["../img/usa.png", "../img/usa.png", "../img/uk.png", "../img/canada.png", "../img/japan.png", "../img/hongkong.png", "../img/uganda.png", ]
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

//fill in a table using data from the tour guide objects
document.write("<table align='center'>");

//define the unpopulated table with dimensions 7-high by 5-wide
for(rowCounter=0; rowCounter < tourGuides.length; rowCounter++) {
  document.write("<tr>");
    for(columnCounter=0; columnCounter < 5; columnCounter++) {
      document.write("<td style='font-size:20px' id='column" + columnCounter + "row" + rowCounter + "'></td>");
    }
  document.write("</tr>");
}

//populate each <td> of the table using the ids defined above in the form of column#row#
for(rowCounter=0; rowCounter < tourGuides.length; rowCounter++) {
  document.getElementById("column2" + "row"+ rowCounter).innerHTML = tourGuides[rowCounter].name;
  document.getElementById("column1" + "row"+ rowCounter).innerHTML = tourGuides[rowCounter].location;
  document.getElementById("column3" + "row"+ rowCounter).innerHTML = "<a href='mailto:" + tourGuides[rowCounter].email + "?Subject=I want to tour " + tourGuides[rowCounter].location + "'>email</a>";
  document.getElementById("column0" + "row"+ rowCounter).innerHTML = "<img src='" + tourGuides[rowCounter].flag + "'>";
  document.getElementById("column4" + "row"+ rowCounter).innerHTML = "(626)555-" + tourGuides[rowCounter].phoneNumber;
}

document.write("</table>");
