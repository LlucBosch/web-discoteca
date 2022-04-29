// menu desplegable panel
let burgerButtonPanel = document.getElementById("burgerButtonPanel");
let panelMenu = document.getElementById("panelMenu");

burgerButtonPanel.addEventListener("click", () => {

    burgerButtonPanel.classList.toggle("active");
    panelMenu.classList.toggle("active");

});

// filtros desplegables
let buttonFilters = document.getElementById("buttonFilters");
let filtersList = document.getElementById("filtersList");

buttonFilters.addEventListener("click", () => {

    filtersList.classList.toggle("active");
    buttonFilters.classList.toggle("active");

});