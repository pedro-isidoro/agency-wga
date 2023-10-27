function animationFaq (i){
    const faqItens = document.querySelectorAll(".faq-item");
    
    // faqItens.forEach(function(item) {
    //     item.addEventListener("click", () =>{
    //         const active = item.classList
    //         if(active.contains("active")){
    //             item.classList.remove("active");
    //         }else{
    //             item.classList.add("active");
    //         }
    //     })
    // });
    const active = faqItens[i].classList
    if(active.contains("active")){
        faqItens[i].classList.remove("active");
    }else{
        faqItens[i].classList.add("active");
    }
    
};

export default animationFaq