export let renderTabsTicket = () => {

    // for desktop
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


    // for mobile
    let selectTicket = document.querySelector(".select-ticket")

    selectTicket.addEventListener("change", () => {

        tabRelateds.forEach(tabRelated => {

            tabRelated.classList.remove("active");

            if(selectTicket.value == tabRelated.dataset.number) {
                tabRelated.classList.add("active");
            }
            
        });

    })

}