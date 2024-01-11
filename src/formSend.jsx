import { Link } from 'react-router-dom';
import './css/formSend.css'

function FormSend(){
    return(
        <>
            <main className="panel-3">
                <h2>Seu e-mail foi enviado com sucesso! ✅</h2>
                <p>Assim que possível entraremos em contato!</p>
                <h3>Muito Obrigado!</h3>
                <a><Link to="/" className='link'>Página Inicial</Link></a>
            </main>
        </>
    )
}

export default FormSend