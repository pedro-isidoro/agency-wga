import './Faq.css'
import animationFaq from './Faq.js'

function Faq(){
    return(
        <section className="faq flex-column align-items-center justify-content-center" id="faq">
            <h2>FAQ</h2>
            <ul className="faq-items flex-column align-items-center justify-content-center">
                <li className="faq-item">
                    <h3 className="question">Por que devo anunciar no Google Ads em vez de depender apenas do tráfego orgânico?</h3>
                    <p className="answer">O Google Ads permite alcançar resultados mais rápidos e específicos. Com anúncios pagos, você pode segmentar um público-alvo mais preciso e ter um controle maior sobre a visibilidade do seu site nos resultados de pesquisa.</p>
                </li>
                <li className="faq-item">
                    <h3 className="question">Quais são os principais benefícios de anunciar no Google Ads?</h3>
                    <p className="answer">Os principais benefícios incluem aumento da visibilidade, controle do orçamento e do público-alvo, possibilidade de medir o retorno sobre o investimento (ROI) e a capacidade de ajustar a campanha em tempo real.</p>
                </li>
                <li className="faq-item">
                    <h3 className="question"> Como um bom gestor de tráfego pode impactar minha campanha no Google Ads?</h3>
                    <p className="answer">Um bom gestor de tráfego possui habilidades para otimizar campanhas, criar anúncios eficazes, segmentar corretamente o público-alvo e interpretar os dados para fazer ajustes precisos. Isso resulta em um ROI mais alto e campanhas mais eficazes.</p>
                </li>
                <li className="faq-item">
                    <h3 className="question">Quais são os desafios comuns ao anunciar no Google Ads sem um gestor de tráfego qualificado?</h3>
                    <p className="answer">Sem um gestor de tráfego experiente, é fácil desperdiçar dinheiro em campanhas mal direcionadas, perder oportunidades de otimização e não maximizar o potencial de retorno do investimento.</p>
                </li>
                <li className="faq-item">
                    <h3 className="question">O que é tráfego orgânico e por que é importante para o sucesso online?</h3>
                    <p className="answer"> Tráfego orgânico refere-se ao número de visitantes que chegam ao seu site por meio de resultados de pesquisa não pagos. É importante porque indica que seu site está bem classNameificado nos mecanismos de busca, o que pode gerar tráfego de alta qualidade e sustentável a longo prazo.</p>
                </li>
                <li className="faq-item">
                    <h3 className="question">Por que é essencial ter um especialista em SEO para o site?</h3>
                    <p className="answer">Um especialista em SEO é crucial para otimizar o site, tornando-o mais relevante para os mecanismos de busca. Isso resulta em um melhor posicionamento nos resultados orgânicos, aumentando a visibilidade e a credibilidade do site.</p>
                </li>
                <li className="faq-item">
                    <h3 className="question">O que é GMB (Google My Business) e por que é importante para os negócios locais?</h3>
                    <p className="answer">O GMB é uma plataforma gratuita do Google que permite que empresas gerenciem sua presença online local. É importante porque ajuda os clientes a encontrarem informações essenciais sobre seu negócio, como horário de funcionamento, endereço e avaliações.
                    </p>
                </li>
                <li className="faq-item">
                    <h3 className="question">Como um especialista em GMB pode impulsionar a visibilidade da minha empresa localmente?</h3>
                    <p className="answer">Um especialista em GMB otimiza o perfil da sua empresa, adicionando informações precisas e relevantes. Isso melhora a visibilidade nos resultados de pesquisa locais, o que pode atrair mais clientes para o seu negócio.
                    </p>
                </li>
                <li className="faq-item">
                    <h3 className="question">Existe uma vantagem em combinar estratégias de tráfego pago e orgânico?</h3>
                    <p className="answer">Sim, a combinação de tráfego pago e orgânico pode maximizar a visibilidade online. Enquanto o tráfego pago oferece resultados imediatos, o tráfego orgânico constrói uma presença duradoura e confiável.</p>
                </li>
                <li className="faq-item">
                    <h3 className="question"> Como posso encontrar um bom gestor de tráfego ou especialista em SEO?</h3>
                    <p className="answer">Recomenda-se procurar profissionais com experiência comprovada e referências sólidas. Agências de marketing digital e redes profissionais podem ser ótimos lugares para encontrar especialistas qualificados. Certifique-se de analisar portfólios e realizar entrevistas antes de tomar uma decisão.</p>
                </li>
            </ul>
            <p className="detail"><span>Destaque Especial:</span>Como ex-funcionário do Google, trago uma compreensão aprofundada das práticas recomendadas e estratégias internas da plataforma, proporcionando um diferencial valioso para otimizar suas campanhas no Google Ads. Isso se traduz em resultados mais impactantes e eficazes para sua presença online.</p>
        </section>
    );
};
animationFaq();

export default Faq