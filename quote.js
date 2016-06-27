var array = ["1","2","3","4","5","6","7","8","9","10"];
var button = document.querySelector("button");
var quoteDisplay = document.querySelector(".quoteDisplay");
/*console.log(button);
console.log(quoteDisplay);*/

function randomQuote( ){
var randomNumber = Math.floor(Math.random()*array.length)
return randomNumber;
}
randomQuote()

button.addEventListener("click",function(){
  quoteDisplay.innerHTML = array[randomQuote()]
});
