import './Footer.css'

function Footer(){
    return(
        <footer className="footer align-items-center" id="contact">
        <div className="address">
            <h4>Agência WGA</h4>
            <p>Serviços Online</p>
        </div>
        <div className="social flex-column justify-content-center">
            <p className="email">wga.agencia@gmail.com</p>
            <a href="/">Políticas de Privacidade</a>
        </div>
    </footer>
    );
};

export default Footer