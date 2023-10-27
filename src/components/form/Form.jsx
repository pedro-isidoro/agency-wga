import { useState } from 'react';
import './Form.css'

function Formulary(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTel] = useState('');
    const [company, setCompany] = useState('');
    const [instagram, setInsta] = useState('');
    const [opnion, setOpnion] = useState('');

    function sendEmail(e){
        e.preventDefault();
        Alert("Testeeeee")
    };

    return(
        <section className="form flex-column align-items-center justify-content-center" id="form">
        <div className="background-form flex-column align-items-center justify-content-center" id="background-form">
            <div className="title-form flex-column align-items-center justify-content-center">
                <h3>Solicite a sua proposta</h3>
                <p>WGA - Marketing Digital</p>
            </div>
            <form onSubmit={sendEmail}>
                <div className="formulary">
                    <div className="item-formulary flex-column">
                        <label htmlFor="username">Nome <span>*</span></label>
                        <input type="text" name="nome" id="username" placeholder="Digite o seu nome" autoComplete="on" onChange={(e) => setName(e.target.value)} value={name} />
                        <p className="aviso" id="aviso-name"></p>
                    </div>
                    <div className="item-formulary flex-column">
                        <label htmlFor="email">Email<span>*</span></label>
                        <input type="email" name="e-mail" id="email" placeholder="Digite o seu email" autoComplete="on" onChange={(e) => setEmail(e.target.value)} value={email} />
                        <p className="aviso" id="aviso-email"></p>
                    </div>
                    <div className="item-formulary flex-column">
                        <label htmlFor="telephone">Telefone<span>*</span></label>
                        <input type="tel" name="telephone-number" id="telephone" placeholder="Digite o seu número (+55) 9xxxx-xxxx" autoComplete="on"onChange={(e) => setTel(e.target.value)} value={telephone} />
                        <p className="aviso" id="aviso-telephone"></p>
                    </div>
                    <div className="item-formulary flex-column">
                        <label htmlFor="company">Empresa e Nicho<span>*</span></label>
                        <input type="text" name="empresa" id="company" placeholder="Digite o nome da sua empresa" autoComplete="off"onChange={(e) => setCompany(e.target.value)} value={company} />
                        <p className="aviso" id="aviso-telefone"></p>
                    </div>
                    <div className="item-formulary flex-column">
                        <label htmlFor="instagram">Instagram</label>
                        <input type="text" name="instagram-name" id="instagram" placeholder="Digite o seu instagram" autoComplete="off"onChange={(e) => setInsta(e.target.value)} value={instagram} />
                    </div>
                    <div className="item-formulary flex-column">
                        <label htmlFor="opnion">Qual o tipo de ajuda que você precisa? Conte-nos um pouco do caso que você possui em mãos:<span>*</span></label>
                        <textarea name="opiniao" id="opnion" placeholder="Nos fale sobre você" autoComplete="on"onChange={(e) => setOpnion(e.target.value)} value={opnion} />
                        <p className="aviso" id="aviso-opnion"></p>
                    </div>
                </div>
                <div className="register">
                    <button id="btn-send" type="submit">Cadastrar</button>
                </div>
            </form>
            <div className="footer-form">
                <p>Prometemos não utilizar suas informações de contato para enviar qualquer tipo de SPAM.</p>
            </div>
            <div className="div-form-send flex-column align-items-center justify-content-center" id="div-form-send">
                <h3>Formulário Enviado ✅</h3>
                <p>Assim que possível, entraremos em contato!!</p>
            </div>
        </div>
    </section>  
    );
};

export default Formulary