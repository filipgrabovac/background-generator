var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomize = document.querySelector("button");

css.textContent = "linear-gradient(to right, rgb(0, 0, 0), rgb(255, 0, 0));";

color1.addEventListener("input", changeBackgroundColor);
color2.addEventListener("input",changeBackgroundColor);

function changeBackgroundColor(event){
    randomColor();
    css.textContent = body.style.background + ";"; 
}

randomize.addEventListener("click", function(event){
    color1.value = "#"+Math.floor(Math.random()*16777215).toString(16);
    color2.value = "#"+Math.floor(Math.random()*16777215).toString(16);
    randomColor();
})
function randomColor(){
    body.style.background ="linear-gradient(to right, "+color1.value + ", "+color2.value +")";
}