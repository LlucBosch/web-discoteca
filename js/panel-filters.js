export let renderPanelFilters = () => {
    // filtros desplegables
    let buttonFilters = document.getElementById("buttonFilters");
    let filtersList = document.getElementById("filtersList");

    if(buttonFilters){
        buttonFilters.addEventListener("click", () => {

            filtersList.classList.toggle("active");
            buttonFilters.classList.toggle("active");
    
        });
    }

    
}