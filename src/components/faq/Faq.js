function animationFaq (){
    const faqItens = document.querySelectorAll(".faq-item");
    
    faqItens.forEach(function(item) {
        item.addEventListener("click", () =>{
            const active = item.classList
            if(active.contains("active")){
                item.classList.remove("active");
            }else{
                item.classList.add("active");
            }
        })
    });
};

export default animationFaq