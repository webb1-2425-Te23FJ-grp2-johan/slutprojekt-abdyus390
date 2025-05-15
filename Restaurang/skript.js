// console.log("JS laddades på startsidan");

const lightBtn = document.getElementById("lightmode");
const darkBtn = document.getElementById("darkmode");
const body = document.body;
const lightLogo = document.getElementById("lightlogo");
const darkLogo = document.getElementById("darklogo");
const bokaBtn = document.getElementById("bokabtn");
const input = document.getElementsByClassName("input");


lightBtn.addEventListener("click", () => {
  body.classList.add("light-theme");
  lightBtn.style.display = "none";
  darkBtn.style.display = "inline";
  lightLogo.style.display = "inline";
  darkLogo.style.display = "none";
});

darkBtn.addEventListener("click", () => {
  body.classList.remove("light-theme");
  darkBtn.style.display = "none";
  lightBtn.style.display = "inline";
  lightLogo.style.display = "none";
  darkLogo.style.display = "inline";
});

bokaBtn.addEventListener("click", () => {
  input.value = "";
});
