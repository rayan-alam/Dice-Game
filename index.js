var randomNumber1 = Math.floor(Math.random() * 6) + 1; // gives a random number between 1-6

// var randomDice = "dice" + randomNumber1 +  ".png"; // dice1.png to dice2.png

var randomImageSource = "images/dice" + randomNumber1 + ".png"; // images/dice1.png to images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

// Results:
if (randomNumber1 > randomNumber2){
    document.querySelector(".refresh_me").innerHTML = "Player 1 Wins!";   
}
else if (randomNumber2 > randomNumber1){
    document.querySelector(".refresh_me").innerHTML = "Player 2 Wins!";
}
else{
    document.querySelector(".refresh_me").innerHTML = "Draw";
}

