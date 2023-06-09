const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const gradientBtn = document.querySelector("#gradientBtn");
const body = document.querySelector("body");

function setGradient() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
}

gradientBtn.addEventListener("click", setGradient);