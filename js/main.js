let burgerButton = document.getElementById("burgerButton");
let mobileMenu = document.getElementById("mobileMenu");
let panelMenu = document.getElementById("panelMenu");


burgerButton.addEventListener("click", () => {
    
    panelMenu.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    burgerButton.classList.toggle("active");

});



