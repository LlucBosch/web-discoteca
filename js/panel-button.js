export let renderPanelButton = () => {

    let burgerButtonPanel = document.getElementById("burgerButtonPanel");
    let panelMenu = document.getElementById("panelMenu");

    if(burgerButtonPanel){
        burgerButtonPanel.addEventListener("click", () => {

            burgerButtonPanel.classList.toggle("active");
            panelMenu.classList.toggle("active");
    
        });
    }


}