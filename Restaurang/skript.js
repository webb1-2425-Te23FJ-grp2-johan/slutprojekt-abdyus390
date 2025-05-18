const lightBtn = document.getElementById("lightmode");
const darkBtn = document.getElementById("darkmode");
const body = document.body;
const lightLogo = document.getElementById("lightlogo");
const darkLogo = document.getElementById("darklogo");
const lightMenu = document.getElementById("lightmenu");
const darkMenu = document.getElementById("darkmenu");
const bokaBtn = document.getElementById("bokabtn");
const bokning = document.getElementById("bokning");
const bokat = document.getElementById("bokat");

lightBtn.addEventListener("click", () => {
    body.classList.add("light-theme");
    lightBtn.style.display = "none";
    darkBtn.style.display = "inline";
    lightLogo.style.display = "inline";
    darkLogo.style.display = "none";
    lightMenu.style.display = "inline";
    darkMenu.style.display = "none";
});

darkBtn.addEventListener("click", () => {
    body.classList.remove("light-theme");
    darkBtn.style.display = "none";
    lightBtn.style.display = "inline";
    lightLogo.style.display = "none";
    darkLogo.style.display = "inline";
    lightMenu.style.display = "none";
    darkMenu.style.display = "inline";
});

bokaBtn.addEventListener("click", () => {
    bokning.style.display = "none";
    bokat.style.display = "inline"
});