import React from 'react';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <div className="app">
      <NavBar />
      <header className="app-header">
        <div className="container">
          <h1>Simple Web Co</h1>
        </div>
      </header>
      <main className="app-main">
        <div className="container">
          <p>Website coming soon...</p>
        </div>
      </main>
    </div>
  );
}

export default App;
