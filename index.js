


var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";


var images = document.querySelectorAll("img")[0];

images.setAttribute("src", randomDiceImage);






var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImages = "dice" + randomNumber2 + ".png";


var image = document.querySelectorAll("img")[1];

image.setAttribute("src", randomDiceImages);


var heading = document.querySelector("h1")

if (randomNumber1 === randomNumber2) {
     heading.innerHTML = "DRAW"
} else {
    if (randomNumber1 > randomNumber2) {
        heading.innerHTML = "Player 1 Wins"
    } else {
        heading.innerHTML = "Player 2 Wins"
    }
}
