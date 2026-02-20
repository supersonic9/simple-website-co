import './App.css';

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
      </main>
    </div>
  );
}

export default App;
