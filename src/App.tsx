import './App.css';

import { useState } from 'react';

import About from './components/About';
import ContactModal from './components/ContactModal';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Services from './components/Services';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="app">
      <NavBar onContactClick={() => setIsContactModalOpen(true)} />
      <Hero />
      <main>
        <Services />
        <About />
      </main>
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  );
}

export default App;
