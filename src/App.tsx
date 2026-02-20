import './App.css';

import About from './components/About';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Services from './components/Services';

function App() {
  return (
    <div className="app">
      <NavBar />
      <Hero />
      <main>
        <Services />
        <About />
      </main>
    </div>
  );
}

export default App;
