import './Certifications.css';
import { FaAward, FaCertificate, FaCode, FaLaptopCode, FaMedal, FaTrophy } from 'react-icons/fa';

const Certifications = () => {
  const certList = [
    {
      title: "Google Gemini Student Ambassador (2026)",
      org: "Google",
      icon: <FaAward />
    },
    {
      title: "NPTEL Certification: Soft Skill Development (75%)",
      org: "NPTEL",
      icon: <FaCertificate />
    },
    {
      title: "Winter of Code Social Contributor (2025)",
      org: "Winter of Code",
      icon: <FaMedal />
    },
    {
      title: "Hackathons & Claude AI / Vibe Coding Workshops",
      org: "Various",
      icon: <FaCode />
    },
    {
      title: "Full Stack Development Training (Ongoing)",
      org: "Training Institute",
      icon: <FaLaptopCode />
    },
    {
      title: "Git/GitHub & Responsive Web Design Hands-on Practice",
      org: "Self-Paced",
      icon: <FaTrophy />
    }
  ];

  return (
    <section id="certifications" className="section cert-section">
      <div className="container">
        <h2 className="section-title">Certifications & Achievements</h2>
        
        {/* CSS Grid for Certifications */}
        <div className="cert-grid">
          {certList.map((cert, index) => (
            <div key={index} className="cert-card glass">
              <div className="cert-icon">
                {cert.icon}
              </div>
              <div className="cert-info">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-org">{cert.org}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
