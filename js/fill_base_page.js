var jw = { 'agent': 'Agent Name', 
'imgAvatar': 'avatar1.png', 
'imgLocations': ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg'],
'sublocations': ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8','s9','s10'], 
'stories': ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
"Aliquet porttitor lacus luctus accumsan tortor posuere ac.",
"Sit amet purus gravida quis blandit turpis.",
"Leo urna molestie at elementum eu facilisis sed. Nibh venenatis cras sed felis eget.",
"Lacus laoreet non curabitur gravida arcu ac tortor dignissim.",
"Velit euismod in pellentesque massa placerat. Magna etiam tempor orci eu lobortis.",
"Sollicitudin aliquam ultrices sagittis orci a. In metus vulputate eu scelerisque felis.",
"In egestas erat imperdiet sed euismod nisi.",
"Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam."]};

var tempAgent = jw['agent'];
var tempAvatarImage = jw['imgAvatar'];
var tempImg = jw['imgLocations'];
var tempSublocation = jw['sublocations'];
var tempStories = jw['stories'];



function fillArticles() {
    for (var i in tempImg) { // creates article objects in full one at a time
        var newArticle = document.createElement('article');
        var newAnchor = document.createElement('a');
        newAnchor.className = "thumbnail";
        newAnchor.setAttribute('href', "../img/base_page/jw/" + tempImg[i]);
        var newImage = document.createElement('img');
        // replace below with string concat with 'i' for image source
        newImage.setAttribute('src', "../img/base_page/jw/" + tempImg[i]);
        newImage.setAttribute('alt', "");
        var newH2 = document.createElement('h2');
        newH2.innerText = tempSublocation[i];
        var newP = document.createElement('p');
        newP.innerText = tempStories[i];
        // Creating articles
        newAnchor.appendChild(newImage);
        newArticle.appendChild(newAnchor);
        newArticle.appendChild(newH2);
        newArticle.appendChild(newP);
        document.getElementById('thumbnails').appendChild(newArticle);
    }
}

function fillHeader() {
    var newAnchor = document.createElement('a');
    newAnchor.className = "image avatar";
    newAnchor.setAttribute('href', '#');
    var newImage = document.createElement('img');
    newImage.setAttribute('src', "../img/base_page/jw/" + tempAvatarImage);
    newImage.setAttribute('alt', "");
    document.getElementsByTagName('h1')[0].appendChild(newImage);
    document.getElementsByTagName('h4')[0].innerText = tempAgent;

}

function fillPage() {
    fillArticles();
    fillHeader();
}

document.addEventListener("DOMContentLoaded", fillPage(), false);