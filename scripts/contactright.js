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
