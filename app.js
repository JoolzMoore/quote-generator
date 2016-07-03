

var display = document.querySelector(".quoteDisplay");
var codeBtn = document.querySelector(".codeBtn");
var norrisBtn = document.querySelector(".norrisBtn");
var gotBtn = document.querySelector(".gotBtn");
var quote = document.querySelector(".fa");
var currentQuote = '';


//CODING QUOTES
codeBtn.addEventListener("click",function(){
	$.ajax({
		url: "https://jsonp.afeld.me/?url=http://quotes.stormconsultancy.co.uk/random.json",
		method: "GET",
		dataType: 'json',
		success : function (data) {
			currentQuote = data["quote"] + " - " + data["author"]
			display.innerHTML = currentQuote;
			$('.tweet').attr('href', 'https://twitter.com/intent/tweet?text='+ currentQuote).attr('target', '_blank');
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
			currentQuote = data["quote"] + " - " + data["character"];
			display.innerHTML = currentQuote;
			$('.tweet').attr('href', 'https://twitter.com/intent/tweet?text='+ currentQuote).attr('target', '_blank');
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
			currentQuote = (data["value"]["joke"]);
			display.innerHTML = currentQuote;
			$('.tweet').attr('href', 'https://twitter.com/intent/tweet?text='+ currentQuote).attr('target', '_blank');

		}
	})
});

//twitter intents
	$('.tweet').attr('href', 'https://twitter.com/intent/tweet?text='+"Quote Generator  - By Julia and Erwin").attr('target', '_blank');


