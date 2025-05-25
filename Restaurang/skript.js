const body = document.body;
const lightBtn = document.querySelector(".lightmode");
const darkBtn = document.querySelector(".darkmode");
const lightLogo = document.querySelector("#lightlogo");
const darkLogo = document.querySelector("#darklogo");
const burgerMenu = document.getElementById('burger-menu');
const overlay = document.getElementById('small');



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



burgerMenu.addEventListener('click', function() {
  this.classList.toggle("close"); 
  overlay.classList.toggle("overlay"); 
});


overlay.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        burgerMenu.classList.remove("close");
        overlay.classList.remove("overlay");
    });
});