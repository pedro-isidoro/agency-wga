import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import './form.css'

const handleForm = (data) => {
    console.log(data) // aqui vai vir todos os inputs do formulário em um objeto
    //lógica do send mail

    if(data.name === '' || data.email === '' || data.telephone === '' || data.company === '' ||data.instagram === '' || data.opnion === ''){
        return;
    };
    // Pegando as informações para colocar no templateEmail
    const templateParams = {
        from_name: data.name,
        email: data.email,
        telephone: data.telephone,
        company: data.company,
        instagram: data.instagram,
        message: data.opnion,
    };

    const backgroundForm = document.getElementById("background-form")

    // Para enviar as informações do Form por Email
    emailjs.send("service_znurchl", "template_ptf31ne", templateParams, "eQp_3RbaJKsV8kOFU")
    .then((response) => {
        console.log("Email Enviado", response.status, response.text);
        // Defina formSent como true após o envio do formulário para adicionar a class no background
        // setFormSent(true);
        backgroundForm.classList.toggle('formSend');
    }, (err) => {
        console.log("Erro:", err);
    });
}

function Formulary(){
    // Aqui criamos uma forma de useState com o react hook form
    const {
        register, 
        handleSubmit,
        formState: { errors }
    } = useForm({
        // Para messages de erro
        defaultValues: {
            name: "",
            email: "",
            telephone: "",
            company: "",
            opnion: ""
        }
    });
    // console.log(errors);

    return(
        <section className="form flex-column align-items-center justify-content-center" id="form">
            {/* Condicional para adicionar o formSent */}
            <div className="background-form flex-column align-items-center justify-content-center" id="background-form">
                <div className="title-form flex-column align-items-center justify-content-center">
                    <h3>Solicite a sua proposta</h3>
                    <p>WGA - Marketing Digital</p>
                </div>
                {/* Condicional para, se não tiver erros pode enviar o email */}
                <form onSubmit={handleSubmit(handleForm)}>
                    <div className="formulary">
                        <div className="item-formulary flex-column">
                            <label htmlFor="username">Nome <span>*</span></label>
                            <input type="text" name="nome" id="username" placeholder="Digite o seu nome" autoComplete="on" 
                            {...register("name",
                                // Para o Regex e definição de mensagem de erro 
                                {required: 'Este campo é Obrigatório*',
                                pattern: {
                                    value: /[A-Za-z]{3}/, 
                                    message: 'Apenas Letras são válidas!'} 
                                })
                            } onChange={(e) => {setName(e.target.value)}}/>
                            {/* Aqui irá mostrar a mensagem de erro */}
                            <p className='aviso'>{errors.name?.message}</p>
                        </div>

                        <div className="item-formulary flex-column">
                            <label htmlFor="email">Email<span>*</span></label>
                            <input type="email" name="e-mail" id="email" placeholder="Digite o seu email" autoComplete="on" 
                            {...register("email", 
                                {required: 'Este campo é Obrigatório*',
                                pattern: {
                                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, 
                                    message: 'Apenas Emails válidos. Ex: your.Name@gmail.com!'} 
                                })
                            } onChange={(e) => {setEmail(e.target.value)}}/>
                            <p className='aviso'>{errors.email?.message}</p>
                        </div>

                        <div className="item-formulary flex-column">
                            <label htmlFor="telephone">Telefone<span>*</span></label>
                            <input type="tel" name="telephone-number" id="telephone" placeholder="Digite o seu número (+55) 9xxxx-xxxx" autoComplete="on" 
                            {...register("telephone", 
                                {required: 'Este campo é Obrigatório*',
                                pattern: {
                                    value: /^\+\d{1,3}-\d{3,14}$/, 
                                    message: 'Insira um número válido. Ex: +11-970601261!'}
                                })
                            } onChange={(e) => {setTel(e.target.value)}}/>
                            <p className='aviso'>{errors.telephone?.message}</p>
                        </div>

                        <div className="item-formulary flex-column">
                            <label htmlFor="company">Empresa e Nicho<span>*</span></label>
                            <input type="text" name="empresa" id="company" placeholder="Digite o nome da sua empresa" autoComplete="off" {...register("company", {required: 'Este campo é Obrigatório*'})} onChange={(e) => {setCompany(e.target.value)}}/>
                            <p className='aviso'>{errors.company?.message}</p>
                        </div>

                        <div className="item-formulary flex-column">
                            <label htmlFor="instagram">Instagram</label>
                            <input type="text" name="instagram-name" id="instagram" placeholder="Digite o seu instagram" autoComplete="off" {...register("instagram")} onChange={(e) => {setInsta(e.target.value)}}/>
                        </div>

                        <div className="item-formulary flex-column">
                            <label htmlFor="opnion">Qual o tipo de ajuda que você precisa? Conte-nos um pouco do caso que você possui em mãos:<span>*</span></label>
                            <textarea name="opiniao" id="opnion" placeholder="Nos fale sobre você" autoComplete="on" {...register("opnion", {required: 'Este campo é Obrigatório*'})} onChange={(e) => {setOpnion(e.target.value)}}/>
                            <p className='aviso'>{errors.opnion?.message}</p>
                        </div>
                    </div>
                    <div className="register">
                        <button id="btn-send" type="submit">Cadastrar</button>
                    </div>
                </form>
                <div className="footer-form">
                    <p>Prometemos não utilizar suas informações de contato para enviar qualquer tipo de SPAM.</p>
                </div>
                <div className="flex-column align-items-center justify-content-center" id="div-form-send">
                    <h3>Formulário Enviado ✅</h3>
                    <p>Assim que possível, entraremos em contato!!</p>
                </div>
            </div>
        </section>  
    );
};

export default Formulary