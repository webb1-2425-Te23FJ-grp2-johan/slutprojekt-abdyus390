const bokaBtn = document.getElementById("bokabtn");
const bokning = document.getElementById("bokning");
const bokat = document.getElementById("bokat");



bokaBtn.addEventListener("click", () => {
    bokning.style.display = "none"; 
    bokat.style.display = "block"; 
});