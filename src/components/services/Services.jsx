import './Services.css'

function Services(){
    return(
        <section className="services flex-column justify-content-center" id="services">
            <div className="question">
                <h2>💡 Por que escolher a WGA-MKT?</h2>
            </div>
            <div className="reasons align-items-center justify-content-center">
                <div className="service-1 align-items-center justify-content-center">
                    <div className="service-info flex-column justify-content-center">
                        <h3>Estratégias Personalizadas</h3>
                        <p>Reconhecemos que cada negócio é único. Desenvolvemos estratégias sob medida que se alinham às suas metas, público-alvo e orçamento, garantindo resultados excepcionais.</p>
                    </div>
                </div>
                <div className="service-2 align-items-center v">
                    <div className="service-info flex-column justify-content-center">
                        <h3>Acompanhamento e Relatórios </h3>
                        <h3>Transparentes</h3>
                        <p>Mantê-lo informado é nossa
                            prioridade. Fornecemos relatórios detalhados e insights sobre o desempenho de
                            suas campanhas, para que você esteja sempre no controle.</p>
                    </div>
                </div>
                <div className="service-3 align-items-center justify-content-center">
                    <div className="service-info flex-column justify-content-center">
                        <h3>Parceria de Sucesso</h3>
                        <p>Consideramos nossos clientes como parceiros. Seu sucesso é nosso sucesso. Trabalhamos lado a lado com você, ajustando estratégias conforme necessário para garantir resultados contínuos e duradouros.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services