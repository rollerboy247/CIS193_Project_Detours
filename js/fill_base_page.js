var agentIndex = 0;
var jw = data[agentIndex];
var avatars = avatarsData[0]['agentId'];
var avatarImages = avatarsData[0]['images'];

var tempId = jw['agentId'];
var tempAgent = jw['agentName'];

var mainLocation = jw['mainLocation'];
var tempImg = jw['imgLocations'];
var tempSublocation = jw['sublocations'];
var tempStories = jw['stories'];
var agentFolder = tempId.slice(0,-1);
var tempFolder = "../img/base_page/" + agentFolder + "/";


function fillArticles() {
    var tempId = jw['agentId'];
    var tempImg = jw['imgLocations'];
    var tempSublocation = jw['sublocations'];
    var tempStories = jw['stories'];
    var agentFolder = tempId.slice(0,-1);
    var tempFolder = "../img/base_page/" + agentFolder + "/";
    for (var i in tempImg) { // creates article objects in full one at a time
        var newArticle = document.createElement('article');
        var newAnchor = document.createElement('a');
        newAnchor.className = "thumbnail thumbnailPlaces";
        newAnchor.setAttribute('id', tempId);
        newAnchor.setAttribute('href', tempFolder + tempImg[i]);
        newAnchor.setAttribute('onclick', "changeMap(this.id)")
        var newImage = document.createElement('img');
        // replace below with string concat with 'i' for image source
        newImage.setAttribute('src', tempFolder + tempImg[i]);
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
    var tempAgent = jw['agentName'];
    var mainLocation = jw['mainLocation'];
    for (var i in data) {
        var newAnchor = document.createElement('a');
        newAnchor.className = "thumbnail thumbnailImage";
        newAnchor.id = avatars[i];
        newAnchor.setAttribute('href', "#");
        newAnchor.setAttribute('onclick', "changePage(this.id);changeMap(this.id)");
        var newImage = document.createElement('img');
        newImage.setAttribute('src', "../img/base_page/avatars/" + avatarImages[i]);
        newImage.setAttribute('alt', "");
        newAnchor.appendChild(newImage);
        document.getElementsByTagName('h1')[0].appendChild(newAnchor);
        document.getElementsByTagName('h4')[0].innerText = tempAgent;
        document.getElementsByTagName('p')[0].innerText = mainLocation;
    }
}

function fillIcons() {
    if (jw['facebook'] != "") {
        var newList = document.createElement('li');
        var newAnchor = document.createElement('a');
        newAnchor.setAttribute('href', jw['facebook']);
        newAnchor.className = "icon brands fa-facebook";
        var newSpan = document.createElement('span');
        newSpan.className = "label";
        newSpan.innerText = "Facebook";
        newAnchor.appendChild(newSpan);
        newList.appendChild(newAnchor);
        document.getElementsByClassName("icons")[0].appendChild(newList);
    }
    if (jw['linkedIn'] != "") {
        var newList = document.createElement('li');
        var newAnchor = document.createElement('a');
        newAnchor.setAttribute('href', jw['linkedIn']);
        newAnchor.className = "icon brands fa-linkedin";
        var newSpan = document.createElement('span');
        newSpan.className = "label";
        newSpan.innerText = "LinkedIn";
        newAnchor.appendChild(newSpan);
        newList.appendChild(newAnchor);
        document.getElementsByClassName("icons")[0].appendChild(newList);
    }
    if (jw['github'] != "") {
        var newList = document.createElement('li');
        var newAnchor = document.createElement('a');
        newAnchor.setAttribute('href', jw['github']);
        newAnchor.className = "icon brands fa-github";
        var newSpan = document.createElement('span');
        newSpan.className = "label";
        newSpan.innerText = "Github";
        newAnchor.appendChild(newSpan);
        newList.appendChild(newAnchor);
        document.getElementsByClassName("icons")[0].appendChild(newList);
    }
    if (jw['email'] != "") {
        var newList = document.createElement('li');
        var newAnchor = document.createElement('a');
        newAnchor.setAttribute('href', jw['email']);
        newAnchor.className = "icon fa-envelope";
        var newSpan = document.createElement('span');
        newSpan.className = "label";
        newSpan.innerText = "Email";
        newAnchor.appendChild(newSpan);
        newList.appendChild(newAnchor);
        document.getElementsByClassName("icons")[0].appendChild(newList);
    }
}

function changeArticles(tempId) {
    // Erase thumbnails section to call function to fill again, number of pictures may be different for agents
    document.getElementById('thumbnails').innerHTML="";
    // Then, fillPage again with new folder with images
    fillArticles();
}

function changeHeader() {
    var tempAgent = jw['agentName'];
    var mainLocation = jw['mainLocation'];
    document.getElementsByTagName('h4')[0].innerText = tempAgent;
    document.getElementsByTagName('p')[3].innerText = mainLocation;
}

function clickFirstThumbnail() {
    document.getElementsByClassName("thumbnailPlaces")[0].click()
}



function changePage(tempId) {
    agentIndex = tempId.slice(-1);
    jw = data[agentIndex];
    changeArticles(tempId);
    changeHeader();
    // base_page_main.js
    main.initViewer();
    main.initEvents();
    clickFirstThumbnail();
    document.getElementsByClassName("icons")[0].innerHTML = "";
    fillIcons();
}

function fillPage() {
    var url_string = window.location;
    var url = new URL(url_string);
    var x = url.searchParams.get("x") || 0; // defaults index of 0 if x not passed (base_page.html)
    jw = data[x];
    fillArticles();
    fillHeader();
    fillIcons();
}

document.addEventListener("DOMContentLoaded", fillPage(), false);