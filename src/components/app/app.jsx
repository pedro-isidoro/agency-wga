import Hero from '../hero/hero.jsx';
import About from '../about/about.jsx';
import SkillTitle from '../skill-title/skillTitle.jsx';
import Skills from '../skills/skills.jsx';
import Services from '../services/services.jsx';
import Formulary from '../form/form.jsx';
import Faq from '../faq/faq.jsx';
import Footer from '../footer/footer.jsx';
import Author from '../author/author.jsx';
import WhatsApp from '../whatsapp/whatsApp.jsx';

function App(){
    return(
        <>
            <Hero />
            <main className="panel">
                <About /> 
                <SkillTitle />
                <Skills />
                <Services />
                <Formulary />
                <Faq />
            </main>
            <Footer />
            <Author />
            <WhatsApp />
        </>
    )
}

export default App