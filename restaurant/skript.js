const btnLight = document.querySelector("#lightmode");
const btnDark = document.querySelector("#darkmode");
const root = document.documentElement;
const lightIcon = document.querySelector("#lightlogo");
const darkIcon = document.querySelector("#darklogo");

btnLight.addEventListener("click", function () {
  btnLight.style.display = "none";
  btnDark.style.display = "inline";

  lightIcon.style.display = "inline";
  darkIcon.style.display = "none";

  root.style.setProperty('--bg-primary', '#eeeeee');
  root.style.setProperty('--text-primary', '#222222');
});

btnDark.addEventListener("click", function () {
  btnDark.style.display = "none";
  btnLight.style.display = "inline";

  lightIcon.style.display = "none";
  darkIcon.style.display = "inline";

  root.style.setProperty('--bg-primary', '#333333');
  root.style.setProperty('--text-primary', '#f5f5dc');
});
