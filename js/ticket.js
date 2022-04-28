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