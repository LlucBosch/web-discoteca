    export let notificationTransition = (seconds) => {


        
        let notification = document.getElementById("notification");

        notification.classList.add("active");

        setTimeout(function(){
            notification.classList.remove("active");
        }, seconds)

    }


