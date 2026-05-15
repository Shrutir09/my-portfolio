import { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Hi, I'm Shruti Riya";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="section hero-section">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <div className="hero-text">
            <h1 className="hero-title">
              {text}<span className="cursor">|</span>
            </h1>
            <h2 className="hero-subtitle">
              Computer Science Engineering Student | Full Stack Developer| Google Campus Ambassador 2026 | UI/UX and AI Enthusiast
            </h2>
            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="/assets/new_resume.pdf" download="new_resume.pdf" className="btn btn-outline">Download Resume</a>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-image-glow"></div>

            <img src="/assets/profile.jpeg" alt="Shruti Riya" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
