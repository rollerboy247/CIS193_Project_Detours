var reviews = [
	["Margaret E.","This is fantastic! Thanks so much guys!"],
	["Fred S.","Detours is amazing. I've been using it to create lots of super fun trips."],
	["Sarah W.","Thanks so much for making these tours available to us!"],
];

function setUpTable(){
	
	for(var i=0; i<reviews.length;i++){
		 var table = document.getElementById("reviewtable");
		 var row = document.createElement("tr");
		 table.appendChild(row);
		 var td = document.createElement("td");
		 row.appendChild(td);
		 var div = document.createElement("div");
		 td.appendChild(div);
		 var img = document.createElement("img");
		 div.appendChild(img);
		 var h4 = document.createElement("h4");
		 div.appendChild(h4);
		 
		 div.setAttribute("class","testimonial-item mx-auto mb-5 mb-lg-0");
		 img.setAttribute("class","img-fluid rounded-circle mb-3");
		 img.setAttribute("alt","");
		 h4.setAttribute("id","peopleName"+i)
		 
		 
		 switch (i){
			 case 0:
				img.setAttribute("src","../img/testimonials-1.jpg");
				break;
			 case 1:
				img.setAttribute("src","../img/testimonials-2.jpg");
				break;
			 case 2:
				img.setAttribute("src","../img/testimonials-3.jpg");
				break;
			 default:
				img.setAttribute("src","https://www.pphfoundation.ca/wp-content/uploads/2018/05/default-avatar.png");
			}
		 
		 var td2 = document.createElement("td");
		 row.appendChild(td2);
		 var p = document.createElement("p");
		 td2.appendChild(p);
		 var div2 = document.createElement("div");
		 td2.appendChild(div2);
		 
		 		 
		 var list0 = document.createElement("i");
		 var list1 = document.createElement("i");
		 var list2 = document.createElement("i");
		 var list3 = document.createElement("i");
		 var list4 = document.createElement("i");
		 div2.appendChild(list0);
		 div2.appendChild(list1);
		 div2.appendChild(list2);
		 div2.appendChild(list3);
		 div2.appendChild(list4);
		 
	
		 
		 td2.setAttribute("id","p"+i);
		 p.setAttribute("class","font-weight-light mb-0");
		 div2.setAttribute("class","gold-text");
		 list0.setAttribute("class","fas fa-star");
		 list1.setAttribute("class","fas fa-star");
		 list2.setAttribute("class","fas fa-star");
		 list3.setAttribute("class","fas fa-star");
		 list4.setAttribute("class","fas fa-star");
	}
}
function addReviews(){
	var paragraphs="";
	for(var i =0; i<reviews.length;i++){
		document.getElementById("peopleName"+i).innerHTML = reviews[i][0];
		
	}
	for(var x =0; reviews.length;x++){
		var str;
		var tableCell = document.getElementById("p" + x);
		paragraphs = tableCell.getElementsByTagName("p");
		str=reviews[x][1];
		paragraphs[0].innerHTML =str.fontsize(4.5);
	}
}

function appendReviews(){
	var userName = document.getElementById('form34').value;
	var userReview = document.getElementById('form8').value;
	var verifiedRev = true;
	try{
		if(userReview===""&&userName===""){
			throw "Please fill out both fields.";
		}
		if(userName===""){
			throw "Please enter a name.";
		}
		if(userReview===""){
			throw "Please write a review.";
		}
	}
	catch(message){
		window.alert(message);
		document.getElementById('form34').value="";
		document.getElementById('form8').value="";
		verifiedRev=false;
	}
	finally{
		if(verifiedRev){
			reviews.push([userName,userReview]);
			var table = document.getElementById("reviewtable");
		
			for(var i = 0; i < table.rows.length;){   
				table.deleteRow(i);
			}
		
			document.getElementById('form34').value="";
			document.getElementById('form8').value="";
			setUpPage();
		}
	}
}

function setUpPage() {
setUpTable();
addReviews();

}
//Event Lister for modal submit button
document.getElementById("submitForm").addEventListener("click", appendReviews, false);

if (window.addEventListener) {
	window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
	window.attachEvent("onload", setUpPage);
}

