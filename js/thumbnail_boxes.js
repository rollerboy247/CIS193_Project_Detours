var tempImg = ["01.jpg", "02.jpg", "03.jpg", "04.jpg"]
var tempSublocation = ["sl1", "sl2", "sl3", "sl4"]
var tempStories = ["story1", "story2", "story3", "story4"]

function createArticles() {
    for (var i in tempImg) { // creates article objects in full one at a time
        var newArticle = document.createElement('article');
        var newAnchor = document.createElement('a');
        newAnchor.className = "thumbnail";
        newAnchor.setAttribute('href', "../img/base_page/" + tempImg[i]);
        var newImage = document.createElement('img');
        // replace below with string concat with 'i' for image source
        newImage.setAttribute('src', "../img/base_page/" + tempImg[i]);
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

document.addEventListener("DOMContentLoaded", createArticles(), false);