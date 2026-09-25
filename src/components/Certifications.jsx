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
      title: "Hackathons & Vibe Coding Workshops",
      org: "Various",
      icon: <FaCode />
    },
    {
      title: "Full Stack Development Training ",
      org: "Training Institute",
      icon: <FaLaptopCode />
    },
    {
      title: " 2nd Best Presenter Award In AI Tech Talk",
      org: "College",
      icon: <FaAward />
    },
    {
      title: "1st Place in SQL Code Master Challenge",
      org: "College",
      icon: <FaCertificate />
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
