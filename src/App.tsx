import './App.css';

import Hero from './components/Hero';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="app">
      <NavBar />
      <Hero />
      <main className="app-main">
        <div className="container">
          <p>Website coming soon...</p>
        </div>
      </main>
    </div>
  );
}

export default App;
