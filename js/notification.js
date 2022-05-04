    export let notificationTransition = (seconds, text, validate) => {

        document.getElementById("notification").innerHTML = text;

        let notification = document.getElementById("notification");

        if (validate == 'succes') {

            notification.classList.add("succes");

            setTimeout(function(){
                notification.classList.remove("succes");
            }, seconds)

        } else if (validate == 'error') {

            notification.classList.add("error");

            setTimeout(function(){
                notification.classList.remove("error");
            }, seconds)
            
        }

    }


