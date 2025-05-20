const lightBtn = document.querySelectorAll(".lightmode"); // Hämta alla lightmode-knappar
const darkBtn = document.querySelectorAll(".darkmode"); // Hämta alla darkmode-knappar
const body = document.body;
const lightLogo = document.querySelector("#lightlogo");
const darkLogo = document.querySelector("#darklogo");
const lightMenu = document.querySelector("#lightmenu");
const darkMenu = document.querySelector("#darkmenu");

lightBtn.forEach(Btn => {
    Btn.addEventListener("click", () => { 
        body.classList.add("light-theme");
        Btn.style.display = "none"; 
        darkBtn.forEach(button => {
            button.style.display = "inline"; 
        });
        lightLogo.style.display = "inline";
        darkLogo.style.display = "none"; 
        lightMenu.style.display = "inline"; 
        darkMenu.style.display = "none"; 
    });
});

darkBtn.forEach(Btn => {
    Btn.addEventListener("click", () => { 
        body.classList.remove("light-theme");
        Btn.style.display = "none";
        lightBtn.forEach(button => {
            button.style.display = "inline";
        });
        lightLogo.style.display = "none";
        darkLogo.style.display = "inline";
        lightMenu.style.display = "none";
        darkMenu.style.display = "inline";
    });
});
