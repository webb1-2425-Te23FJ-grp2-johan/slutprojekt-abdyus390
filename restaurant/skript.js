console.log("JS laddades på startsidan");

const btnLight = document.querySelector("#lightmode");
const btnDark = document.querySelector("#darkmode");
const lightIcon = document.querySelector("#lightlogo");
const darkIcon = document.querySelector("#darklogo");

// document.body.classList.remove("light-theme");
// btnLight.style.display = "inline";
// btnDark.style.display = "none";
// lightIcon.style.display = "none";
// darkIcon.style.display = "inline";

btnLight.addEventListener("click", function () {
  document.body.classList.add("light-theme");
  btnLight.style.display = "none";
  btnDark.style.display = "inline";
  lightIcon.style.display = "inline";
  darkIcon.style.display = "none";
});

btnDark.addEventListener("click", function () {
  document.body.classList.remove("light-theme");
  btnDark.style.display = "none";
  btnLight.style.display = "inline";
  lightIcon.style.display = "none";
  darkIcon.style.display = "inline";
});
