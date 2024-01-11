import { Link } from 'react-router-dom';
import './Footer.css'

function Footer(){
    return(
        <footer className="footer align-items-center" id="contact">
        <div className="address">
            <h4>Agência WGA</h4>
            <p>Serviços Online</p>
            <p className="email">contato@wga-mkt.com.br</p>
            <p className='email'>Tel: +55 11 93741-2887</p>
        </div>
        <div className="social flex-column justify-content-center">
            <a><Link to="/politica-de-privacidade" className='link'>Políticas de Privacidade</Link></a>
            <p className='cnpj'>CNPJ: 48.388.056/0001-91</p>
        </div>
    </footer>
    );
};

export default Footer