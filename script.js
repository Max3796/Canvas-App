/* Iteration 4: Make the Canvas App Functional */
var buttonBackground = document.getElementById("background-colour");
var Background = document.getElementById("background");

buttonBackground.oninput = ()=>{
  Background.style.fill = buttonBackground.value;
}

var buttonface = document.getElementById("face-colour");
var face = document.getElementById("face-plate");

buttonface.oninput = ()=>{
  face.style.fill = buttonface.value;
}

var buttoneyes = document.getElementById("eyes-colour");
var eyes = document.getElementById("eyes");

buttoneyes.oninput = ()=>{
  eyes.style.fill = buttoneyes.value;
}

var buttonhelmet = document.getElementById("helmet-colour");
var helmet = document.getElementById("helmet");

buttonhelmet.oninput = ()=>{
  helmet.style.fill = buttonhelmet.value;
}