var randomNumber1;
var randomNumber2;

// Random images stored in array : 
var randomImage = [
    "images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"
]; 

// Random number generation : 
randomNumber1 = Math.floor((Math.random()*randomImage.length));
randomNumber2 = Math.floor((Math.random()*randomImage.length));
// console.log(randomNumber1);

// Changing the HTML Tree : 
document.querySelector(".img1").setAttribute("src", randomImage[randomNumber1]);
document.querySelector(".img2").setAttribute("src", randomImage[randomNumber2]);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩PLayer 1 WINS";
} else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "PLayer 2 WINS🚩";   
}
else {
    document.querySelector("h1").innerHTML = "Refresh again"; 
}