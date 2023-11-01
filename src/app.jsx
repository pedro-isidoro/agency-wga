import Hero from './components/hero/hero.jsx';
import About from './components/about/about.jsx';
import SkillTitle from './components/skill-title/skillTitle.jsx';
import Skills from './components/skills/skills.jsx';
import Services from './components/services/services.jsx';
import Formulary from './components/form/form.jsx';
import Faq from './components/faq/faq.jsx';
import Footer from './components/footer/footer.jsx';
import Author from './components/author/author.jsx';
import WhatsApp from './components/whatsapp/whatsApp.jsx';

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