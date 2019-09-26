var revNames = ["Margaret E.","Fred S.","Sarah W."];
var revCom = ["This is fantastic! Thanks so much guys!","Detours is amazing. I've been using it to create lots of super fun trips.","Thanks so much for making these tours available to us!"];

function addNames(){
	var i = 0;
	
	do {
		document.getElementsByTagName("h4")[i].innerHTML = revNames[i];
		i++;
	}while (i < revNames.length);
}
function addComments(){
	var paragraphs="";
	for(var i = 0;i<revCom.length;i++){
		var tableCell = document.getElementById("p" + i);
		paragraphs = tableCell.getElementsByTagName("p");
		paragraphs[0].innerHTML =revCom[i];
		
	}
}

function setUpPage() {
addNames();
addComments();
}
if (window.addEventListener) {
	window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
	window.attachEvent("onload", setUpPage);
}