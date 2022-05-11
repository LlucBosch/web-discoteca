export let renderFaqs = () => {

    let faqs = document.querySelectorAll(".faq");
    let answers = document.querySelectorAll(".answer")

    faqs.forEach(faq => {

        faq.addEventListener("click", () => {
            
            answers.forEach(answer => {

                answer.classList.remove("active");

                if(faq.dataset.number == answer.dataset.number) {
                    answer.classList.toggle("active");
                }
                
            });
            
            faqs.forEach(faq => {
                
                faq.classList.remove("active")
                
            });
            
            faq.classList.toggle("active")
            
        });

    });

}