import { notificationTransition } from "./notification.js";

export let renderForm = () => {

    let buttonSavePanel = document.getElementById("button-save-panel");

    buttonSavePanel.addEventListener("click", () => {

        notificationTransition(5000,"<p>Parametros cambiados correctamente!!!</p>", 'error');

    })

}

