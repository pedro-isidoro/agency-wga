import React from 'react';
import ReactDOM from 'react-dom/client';

import Hero from './components/hero/Hero.jsx';
import About from './components/about/About.jsx';
import SkillTitle from './components/skill-title/SkillTitle.jsx';
import Skills from './components/skills/Skills.jsx';
import Services from './components/services/Services.jsx';
import Formulary from './components/form/Form.jsx';
import Faq from './components/faq/Faq.jsx';
import Footer from './components/footer/Footer.jsx';
import Author from './components/author/Author.jsx';
import WhatsApp from './components/whatsapp/WhatsApp.jsx';

import './css/variable.css';
import './css/reset.css';
import './css/index.css';
import './css/responsive.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
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
  </React.StrictMode>,
);