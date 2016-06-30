

var display = document.querySelector(".quoteDisplay");
var codeBtn = document.querySelector(".codeBtn");
var norrisBtn = document.querySelector(".norrisBtn");
var gotBtn = document.querySelector(".gotBtn");
var quote = document.querySelector(".fa");

//CODING QUOTES
codeBtn.addEventListener("click",function(){
	$.ajax({
		url: "https://jsonp.afeld.me/?url=http://quotes.stormconsultancy.co.uk/random.json",
		method: "GET",
		dataType: 'json',
		success : function (data) {
			display.innerHTML = (data["quote"] + " - " + data["author"]);
		}
	})
});


//GAME OF THRONE QUOTES
gotBtn.addEventListener("click",function(){
	$.ajax({
		url: "https://got-quotes.herokuapp.com/quotes",
		method: "GET",
		data: 'json',
		success : function (data) {
			display.innerHTML = (data["quote"] + " - " + data["character"]);
		}
	})
});



// CHUCK NORRIS JOKES
norrisBtn.addEventListener("click",function(){
	$.ajax({
		url: "https://api.icndb.com/jokes/random",
		method: "GET",
		dataTYPE: 'json',
		success : function (data) {
			display.innerHTML = (data["value"]["joke"]);
		}
	})
});






