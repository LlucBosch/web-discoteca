export let renderMenuButton = () => {

    // declaramos las variables
    let burgerButton = document.getElementById("burgerButton");
    let mobileMenu = document.getElementById("mobileMenu");

    
    if(burgerButton) {

        // le damos un evento de tipo click al boton de la hamburguesa
        burgerButton.addEventListener("click", () => {
            
            // cuando demos clic seañadira la clase active a mobileMenu y burgerButton
            mobileMenu.classList.toggle("active");
            burgerButton.classList.toggle("active");

        });

    }
    


}