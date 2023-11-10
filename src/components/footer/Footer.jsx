import './Footer.css'

function Footer(){
    return(
        <footer className="footer align-items-center" id="contact">
        <div className="address">
            <h4>Agência WGA</h4>
            <p>Serviços Online</p>
            <p className="email">wga.agencia@gmail.com</p>
        </div>
        <div className="social flex-column justify-content-center">
            <a href="/">Políticas de Privacidade</a>
            <p className='cnpj'>CNPJ: 50.796.772/0001-50</p>
        </div>
    </footer>
    );
};

export default Footer