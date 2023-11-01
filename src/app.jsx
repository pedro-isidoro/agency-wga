import Hero from './components/hero/hero'
import About from './components/about/about'
import SkillTitle from './components/skill-title/skillTitle'
import Skills from './components/skills/skills'
import Services from './components/services/services'
import Formulary from './components/form/form'
import Faq from './components/faq/faq'
import Footer from './components/footer/footer'
import Author from './components/author/author'
import WhatsApp from './components/whatsapp/whatsApp'

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