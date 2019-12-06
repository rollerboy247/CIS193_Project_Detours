//uses objects, arrays, and loops

/*
San Francisco, CA (Todd Brotze)
Washington D.C. (Thomas Zumberge)
Cambridge, U.K. (Karen Ha)
Vancouver, B.C. (John Li)
Kyoto, Japan (Jason Wu)
Hong Kong (Anthony Trau)
Uganda (John Hosmillo)
*/

//create a global variable to store info entered in the contact form
var contactInfo = [];

//create eventListener for country input
var listener;

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
  document.getElementById("contactForm").style.backgroundColor = "#f8f9fa";
  for(i=0; i < tourGuides.length; i++) {
    document.getElementById(i).style.backgroundColor = "#f8f9fa";
  }
}

function messageReceived() {
  var message = document.getElementById("right");
  var messageString = "<h2>Message Received!</h2>"
  messageString += "<h3>Here's what we have:<h3>"
  messageString += "<label>Destination:</label><br>";
  messageString += contactInfo[0] + "<br><br>";
  messageString += "<label>Your name:</label><br>";
  messageString += contactInfo[1] + "<br><br>";
  messageString += "<label>Your email:</label><br>";
  messageString += contactInfo[2] + "<br><br>";
  messageString += "<label>Your phone number:</label><br>";
  messageString += "+" + contactInfo[3] + contactInfo[4] + "<br><br>";
  if (contactInfo[5] != "") {
    messageString += "<label>Your message:</label><br>";
    messageString += contactInfo[5] + "<br><br>";
  }
  message.innerHTML = messageString;

  contactInfo = [];
}

function contactValidation() {
  var error = false;
  var destination = document.getElementById("destination");
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var country = document.getElementById("country");
  var code = document.getElementById("code");
  var phone = document.getElementById("phone");
  var message = document.getElementById("message");

  //restore defaults
  destination.style.background = "#f8f9fa";
  name.style.background = "#f8f9fa";
  email.style.background = "#f8f9fa";
  country.style.background = "#f8f9fa";
  code.style.background = "#f8f9fa";
  phone.style.background = "#f8f9fa";
  message.style.background = "#f8f9fa";
  document.getElementById("heading").innerHTML = "Fields with * are required!";

  //validate destination
  try {
    if (!locationsArray.includes(destination.value)) {
      error = true;
      throw "<br>Please enter a valid destination"
    }
  } catch(msg) {
    // display error message
    document.getElementById("heading").innerHTML += msg;
    // change input style
    destination.style.background = "rgb(255,233,233)";
  }

  //validate name
  try {
    if (name.value === "") {
      error = true;
      throw "<br>Please enter your name";
    }
  } catch(msg) {
    // display error message
    document.getElementById("heading").innerHTML += msg;
    // change input style
    name.style.background = "rgb(255,233,233)";
  }

  //validate email
  var emailCheck = /^[_\w\-]+(\.[_\w\-]+)*@[\w\-]+(\.[\w\-]+)*(\.[\D]{2,6})$/;
  try {
    if (emailCheck.test(email.value) === false) {
      error = true;
      throw "<br>Please provide a valid email address";
    }
  } catch(msg) {
     // display error message
     document.getElementById("heading").innerHTML += msg;
     // change input style
     email.style.background = "rgb(255,233,233)";
  }

  //validate country
  countryOfOrigin = "";
  try {
    for (i = 0; i < countryCodes.length; i++) {
      if (countryCodes[i]["Name"] === country.value) {
        countryOfOrigin = country.value;
        break;
      }
    }
    if (countryOfOrigin === "") {
      throw "<br>Please select a valid country";
    }
  } catch(msg) {
     // display error message
     document.getElementById("heading").innerHTML += msg;
     // change input style
     country.style.background = "rgb(255,233,233)";
  }


  //validate phone number
  //remove parentheses, periods, spaces, and dashes from phone number
  var parsedPhone = phone.value;
  parsedPhone = parsedPhone.replace(/[\(\)\.\-\ ]/g, "");
/*  while (parsedPhone.includes("(")) {
    parsedPhone = parsedPhone.replace("(", "");
  }

  while (parsedPhone.includes(")")) {
    parsedPhone = parsedPhone.replace(")", "");
  }

  while (parsedPhone.includes(".")) {
    parsedPhone = parsedPhone.replace(".", "");
  }

  while (parsedPhone.includes("-")) {
    parsedPhone = parsedPhone.replace("-", "");
  }

  while (parsedPhone.includes(" ")) {
    parsedPhone = parsedPhone.replace(" ", "");
  }
*/
  var phoneCheck = /^\d{7,15}$/; //10 digits
  try {
    if (phoneCheck.test(parsedPhone) === false) {
      error = true;
      throw "<br>Please provide a valid phone number";
    }
  } catch(msg) {
    // display error message
    document.getElementById("heading").innerHTML += msg;
    // change input style
    phone.style.background = "rgb(255,233,233)";
  }
  //validate message
  /*
  try {
    if (message.value === "") {
      error = true;
      throw "<br>Please enter a message";
    }
  } catch(msg) {
    // display error message
    document.getElementById("heading").innerHTML += msg;
    // change input style
    message.style.background = "rgb(255,233,233)";
  }
  */
  //if all entries are valid, load the message received panel
  if (error === false) {
    contactInfo.push(destination.value, name.value, email.value, code.value, parsedPhone, message.value);
    messageReceived();
  }

}

function createContactForm() {
  contactForm = document.getElementById("right");
  contactFormString = "<h2 id='heading'>Fields with * are required</h2><br>";
  contactFormString += "<form id='contact-form'>";
  contactFormString += "<label>*Select a destination:</label><br>";
  contactFormString += "<input id='destination' list='destinations' placeholder='Select one'>";
  contactFormString += "<datalist id='destinations'>";
  for (i = 0; i < locationsArray.length; i++) {
    contactFormString += "<option value='" + locationsArray[i] + "'>";
  }
  contactFormString += "</datalist><br><br>";
  contactFormString += "<label>*Name:</label><br>";
  contactFormString += "<input id='name' type='text'>" + "<br><br>";
  contactFormString += "<label>*Email Address:</label><br>";
  contactFormString += "<input id='email' type='text'>" + "<br><br>";
  contactFormString += "<label>*Phone Number:</label><br>";
  contactFormString += "Country code followed by number<br>";
  contactFormString += "First select your country<br>";
  contactFormString += "<input id='country' list='countries' placeholder='Select country'>" + "<br>";
  contactFormString += "<datalist id='countries'>";
  for (i = 0; i < countryCodes.length; i++) {
    contactFormString += "<option value='" + countryCodes[i]["Name"] + "'>";
  }
  contactFormString += "</datalist><br>";
  contactFormString += "+ <input id='code' disabled>  ";
  contactFormString += "<input id='phone' type='text'>" + "<br><br>";
  contactFormString += "<label>Message:</label><br>";
  contactFormString += "<textarea id='message' form='contact-form' rows='7' cols='50' placeholder='If you would like more information about a tour or a destination, leave us a message here.'></textarea>";
  contactFormString += "</form>";
  contactFormString += "<button id='submitButton' onclick='contactValidation()'>Submit</button>";
  contactForm.innerHTML = contactFormString;
}

function listen() {
  var country = document.getElementById("country");
  var code = document.getElementById("code");
  //add event listener on country
  country.addEventListener("input", function() {
    //insert country code when user selects country from datalist
    var index = -1;
    for (i = 0; i < countryCodes.length; i++) {
      if (countryCodes[i]["Name"] === country.value) {
        index = i;
      }
    }

    if (country.addEventListener) {
      country.addEventListener("change", function() {
        if (index >= 0) {
          code.value = countryCodes[index]["Code"]
        } else {
          code.value = "";
        }}, false);
    } else if (country.attachEvent) {
        country.attachEvent("onchange", function() {
          if (index >= 0) {
            code.value = countryCodes[index]["Code"]
          } else {
            code.value = "";
          }});
    }
  });
}

function handleClick(i) {
  returnInfo(i);
  makeWhite();
  makeGrey(i);
}

function handleContactClick() {
  makeWhite();
  makeGrey("contactForm");
  createContactForm();
  listen();
}

//create clickable Contact Us on the left
document.write("<div id='contactForm' onclick='handleContactClick()'>");
document.write("<br>");
document.write("<img src='../img/contact-form.png'>");
document.write("Contact Form");
document.write("<br><br>");
document.write("</div>");

for(i=0; i < tourGuides.length; i++) { //create clickable flags on the left
	document.write("<div id='" + i + "' onclick='handleClick(" + i + ")'>");
  document.write("<br>");
  document.write("<img src='" + tourGuides[i].flag + "'/>");
  document.write(tourGuides[i].location)
  document.write("<br><br>");
  document.write("</div>");
}
