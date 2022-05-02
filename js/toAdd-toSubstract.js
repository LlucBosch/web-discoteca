export let renderToAddToSubstract = () => {

    // sumar y restar numero de ticket que quieres comprar
    let toSubstracts = document.querySelectorAll(".toSubstract");
    let toAdds = document.querySelectorAll(".toAdd");


    toAdds.forEach(toAdd => {

        toAdds.addEventListner("click", () => {

            inputTicket.value = (parseInt(inputTicket.value) + 1)

        });

    });

    toSubstracts.forEach(toSubstract => {
        
        if (inputTicket.value > 1) {

            toSubstracts.addEventListner("click", () => {

            inputTicket.value = (parseInt(inputTicket.value) - 1)

        });

        }

    });

}