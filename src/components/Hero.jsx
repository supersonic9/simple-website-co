import React from 'react';
import { scrollToSection } from '../utils/scrollToSection';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>We build websites that small businesses love</h1>
            <p className="hero-subtitle">
              Professional web development for Porto's growing businesses
            </p>
            <div className="hero-cta">
              <button
                className="cta-primary"
                onClick={() => scrollToSection('contact')}
              >
                Contact Us
              </button>
              <button
                className="cta-secondary"
                onClick={() => scrollToSection('what-we-do')}
              >
                Our Work
              </button>
            </div>
          </div>
          <div className="hero-image">
            <img src="/hero1.png" alt="Professional business owner" className="hero-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
