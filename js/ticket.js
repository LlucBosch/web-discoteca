// sumar y restar numero de ticket que quieres comprar
let inputTicket = document.getElementById("inputTicket");
let restarTicket = document.getElementById("restarTicket");
let sumarTicket = document.getElementById("sumarTicket");

sumarTicket.addEventListener("click", () => {

    inputTicket.value = (parseInt(inputTicket.value) + 1)

});

restarTicket.addEventListener("click", () => {

    if (inputTicket.value > 1) {
        inputTicket.value = (parseInt(inputTicket.value) - 1)
    }
    
});

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







