let random1 = Math.floor(Math.random()*6+1)
let random2 = Math.floor(Math.random()*6+1)

let randomImage1 = "/images/dice"+random1+".png";
let randomImage2 = "/images/dice"+random2+".png";

let changeRandom1 = document.querySelector(".img1").setAttribute("src", randomImage1);
let changeRandom2 = document.querySelector(".img2").setAttribute("src", randomImage2);

if (random1 > random2){
    document.querySelector("h1").innerHTML = "Player 1 win"
}else if (random1 < random2){
    document.querySelector("h1").innerHTML = "Player 2 win"   
}else{
    document.querySelector("h1").innerHTML = "Drow"
}