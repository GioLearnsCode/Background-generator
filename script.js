var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("grade");
var random = document.getElementById("randomBtn");
var randomColor = Math.floor(Math.random()*16777215).toString(16);
var randomColor2 = Math.floor(Math.random()*16777215).toString(16);

function colorpick() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";"
}

const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    body.style.background = "linear-gradient(to right, " + "#" + randomColor + ", " + "#" + randomColor2 + ")";
    css.textContent = body.style.background + ";"
  }

color1.onload = colorpick();
color2.onload = colorpick();
css.onload = colorpick();


color1.addEventListener("input", colorpick);
color2.addEventListener("input", colorpick);
random.addEventListener("click", setBg);