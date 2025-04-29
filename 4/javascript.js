var randomNumber1 = Math.floor(Math.random() *6) + 1 ;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6 ) + 1 ;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumer1 > randomNumber2 ) {
    document.querySelectorAll("h1").innerHTML = "🥇Player 1" ;
}  else if (randomNumber2 > randomNumer1 ) {
    document.querySelectorAll("h1").innerHTML = "Player 2 🥇" ;
}  else {
    document.querySelectorAll("h1").innerHTML = "Draw!"
}