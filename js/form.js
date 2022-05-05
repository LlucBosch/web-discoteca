export let renderForm = () => {

    let sendButton = document.getElementById("button-save-panel");

    if (sendButton) {

        sendButton.addEventListener("click", () => {

            document.dispatchEvent(new CustomEvent('message', {
                detail: {
                    text: 'Por favor, rellene el formulario',
                    type: 'success'
                }
            }));

        });
    }

}

