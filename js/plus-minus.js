export let renderPlusMinus = () => {

    // sumar y restar numero de ticket que quieres comprar
    let minusButtons = document.querySelectorAll(".minus");
    let plusButtons = document.querySelectorAll(".plus");


    plusButtons.forEach(plusButton => {

        plusButton.addEventListener('click', () => {

            // plusButton es el boton que hemos presionado de los plusButtons, al hacerle un closet se guardará
            // en la variable el elemento padre en concreto de ese boton que tiene la clase .plus-minus-input
            // despues seleccionaremos el input de ese elemento en concreto con el querySelector
            let buttonPlusMinusInput = plusButton.closest(".plus-minus-button").querySelector('.plus-minus-input');

            buttonPlusMinusInput.value = (parseInt(buttonPlusMinusInput.value) + 1)

        })

    });


    minusButtons.forEach(minusButton => {

        minusButton.addEventListener('click', () => {

            let buttonPlusMinusInput = minusButton.closest(".plus-minus-button").querySelector('.plus-minus-input');

            if (buttonPlusMinusInput.value > 1) {

                buttonPlusMinusInput.value = (parseInt(buttonPlusMinusInput.value) - 1)

            }

        })

    });

}