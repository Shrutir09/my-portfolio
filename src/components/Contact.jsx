import './Contact.css';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-form-container glass">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Your message here..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
            </form>
          </div>
          
          <div className="contact-info">
            <h3 className="contact-info-title">Let's Connect</h3>
            <p className="contact-info-desc">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            <div className="social-links">
              <a href="mailto:riyashruti68@gmail.com" className="social-icon" title="Email" target="_blank" rel="noopener noreferrer">
                <FaEnvelope />
              </a>
              <a href="tel:+919771354001" className="social-icon" title="Phone" target="_blank" rel="noopener noreferrer">
                <FaPhone />
              </a>
              <a href="https://www.linkedin.com/in/shruti-riya-525149306/" className="social-icon" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Shrutir09" className="social-icon" title="GitHub" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="footer">
        <p>Designed & Built by Shruti Riya &copy; 2026</p>
      </footer>
    </section>
  );
};

export default Contact;
