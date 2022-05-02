export let renderTabsTicket = () => {

    // tab descripcion, caracteristicas opiniones
    let tabs = document.querySelectorAll(".tab");
    let tabRelateds = document.querySelectorAll(".tab-related")

    tabs.forEach(tab => {

        tab.addEventListener("click", () => {
            
            tabRelateds.forEach(tabRelated => {

                tabRelated.classList.remove("active");

                if(tab.dataset.number == tabRelated.dataset.number) {
                    tabRelated.classList.add("active");
                }
                
            });
            
            tabs.forEach(tab => {
                
                tab.classList.remove("active")
                
            });

            tab.classList.add("active")
        });

    });

}