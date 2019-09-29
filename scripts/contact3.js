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

for(rowCounter=0; rowCounter < 5; rowCounter++) {
  document.write("<tr>");
    for(columnCounter=0; columnCounter < tourGuides.length; columnCounter++) {
      if (rowCounter === 0) {
        document.write("<td>");
        document.write(tourGuides[columnCounter].name);
        document.write("</td>");
      } else if (rowCounter === 1) {
        document.write("<td>");
        document.write(tourGuides[columnCounter].location);
        document.write("</td>");
      } else if (rowCounter === 4) {
        document.write("<td>");
        document.write("<a href='mailto:");
        document.write(tourGuides[columnCounter].email);
        document.write("?Subject=I want to tour ");
        document.write(tourGuides[columnCounter].location);
        document.write("'>email</a>");
        document.write("</td>");
      } else if (rowCounter === 3) {
        document.write("<td>");
        document.write("(626)555-");
        document.write(tourGuides[columnCounter].phoneNumber);
        document.write("</td>");
      } else if (rowCounter === 2) {
        document.write("<td>");
        document.write("<img src='");
        document.write(tourGuides[columnCounter].flag);
        document.write("'>");
        document.write("</td>");
      }
    }
  document.write("</tr>");
}

document.write("</table>");
