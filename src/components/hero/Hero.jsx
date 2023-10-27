import './Hero.css'

function Hero(){
    return(
        <section className="hero align-items-center">
            <div className="text flex-column">
                <h2>Agência WGA Marketing Digital</h2>
                <div className="item-1">
                    <h3>Você está preparado para levar ao sucesso o seu negócio?</h3>
                    <p>Na WGA-MKT, nós compreendemos a relevância do tráfego pago como uma preciosa ferramenta para impulsionar suas vendas, aumentar sua visibilidade e maximizar seus resultados. Somos especialistas em transformar cliques em clientes e visualizações em receita.</p>
                </div>
                <a href="#form" className="btn-know-more">Saiba mais</a>
            </div>
        </section>
    )
};

export default Hero