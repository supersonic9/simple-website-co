import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import './App.css';

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
