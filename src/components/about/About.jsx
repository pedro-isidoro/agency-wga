import './About.css'
import Image from '/src/images/data-studying.jpeg'

function About(){
    return(
       <section className="about align-items-center justify-content-center" id="about">
            <div className="image">
                <img src={Image} alt="Imagem de estudos"/>
            </div>
            <div className="item flex-column justify-content-center">
                <h3>Quem Somos</h3>
                <h4>WGA-MKT Sua Parceira em Tráfego Pago de Alto Impacto! 🚀</h4>
                <p>Somos uma agência de marketing digital especializada em criar, efetivar e potencializar estratégias de marketing online para contribuir com a sua empresa a conquistar seus objetivos de negócios, por meio da presença na internet. Nosso foco principal é utilizar plataformas e técnicas digitais para alcançar a 'persona' específica do segmento de sua empresa, expandir a visibilidade da sua marca, gerar leads e auxiliar a aumentar suas vendas</p>
                <a href="#form" className="btn-know-more">Saiba mais</a>
            </div>
        </section> 
    )
};

export default About