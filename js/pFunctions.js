var back = document.getElementById("backHome");
back.addEventListener("click", goBack);

function goBack(){
	open("index.html", "_top");
}

//INTRODUCTION TO ARRAYS AND LOOPS
/*  
function go() {
	alert('hi');
}

var myList = ['apples', 'oranges', 'loco', 'bum', 'cat', 'mouse'];
myList[3] = 'Willy';

//Removes first item in array and passes to whatever variable is
//at the other end of function
var booger = myList.shift();

//Remove last item in array
var jiggy = myList.pop();

console.log(jiggy);

//Iterate through array
//Not all browsers have this
myList.forEach(function(value, index){
	console.log(value, index);
});


//While do For loops

//While
var time = 0;
while(time<10){
	//console.log('tried it', time);
	time++;
};

//Do loop
var times = 0;
do{
	//console.log('tried it', times);
	times++;
} while(times<10);


//For Loop
for(var i=0; i<myList.length; i++){
	console.log("you suck " + myList[i]);
};

*/



//JAVASCRIPT EVENTS
/*
var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");

numTwo.addEventListener("input", add);
numOne.addEventListener("input", add);

function add() {
	var one = parseFloat(numOne.value) || 0;
	var two = parseFloat(numTwo.value) || 0;
	console.log(one, two);
	var sum = one+two;
	addSum.innerHTML = "Your sum is:  " + sum;
}
*/



//JAVASCRIPT SELECTORS
/*	
var simon = document.getElementById("simon");
var me = document.getElementById("me");
var you = document.getElementById("you");
var simonpic = document.getElementById("simon-pic");
var mepic = document.getElementById("me-pic");
var youpic = document.getElementById("you-pic");

simon.addEventListener("click", picLink);
you.addEventListener("click", picLink);
me.addEventListener("click", picLink);



function picLink(){
	var allImages = document.querySelectorAll("img");
	for(var i=0; i<allImages.length; i++){
		allImages[i].className = "hide";
	}

	var picId = this.attributes["data-img"].value;
	var pic = document.getElementById(picId);
	if(pic.className === "hide"){
		pic.className = "";
	} 
	else{
		pic.className = "hide";
	}
}
*/

//JAVASCRIPT EVENTS
var checklist = document.getElementById("checklist");

var items = checklist.querySelectorAll("li");
var inputs = checklist.querySelectorAll("input");

for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("click", editItem);
  inputs[i].addEventListener("blur", updateItem);
  inputs[i].addEventListener("keypress", itemKeypress);
}

function editItem() {
  this.className = "edit";
  var input = this.querySelector("input");
  input.focus();
  input.setSelectionRange(0, input.value.length);
}

function updateItem() {
  this.previousElementSibling.innerHTML = this.value;
  this.parentNode.className = "";
}

function itemKeypress(event) {
  if (event.which === 13) {
    updateItem.call(this);
  }
}

