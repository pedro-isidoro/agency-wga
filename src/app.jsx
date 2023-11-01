import Hero from './components/hero/Hero'
import About from './components/about/About'
import SkillTitle from './components/skill-title/SkillTitle'
import Skills from './components/skills/Skills'
import Services from './components/services/Services'
import Formulary from './components/form/Form'
import Faq from './components/faq/Faq'
import Footer from './components/footer/Footer'
import Author from './components/author/Author'
import WhatsApp from './components/whatsapp/WhatsApp'

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