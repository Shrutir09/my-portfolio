import './About.css';

const About = () => {
  const skills = [
    "React", "Tailwind CSS", "Java", "C++", "SQL",
    "DBMS", "Git/GitHub", "PHP", "Bootstrap", "UI Design",
    "HTML", "JavaScript", "Python(Basic)", "DSA"
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text glass">
            <p>
              I am a motivated Computer Science and Engineering student at Dr. APJ Abdul Kalam Women’s Institute of Technology, Darbhanga (Expected 2027). I am passionate about Java Full Stack Development, Responsive Web Design, and Problem Solving.
            </p>
            <p>
              With a strong interest in building scalable digital solutions, I actively participate in open-source programs and lead collaborative initiatives.
            </p>
          </div>
          <div className="about-skills">
            <h3 className="skills-title">My Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-chip">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
