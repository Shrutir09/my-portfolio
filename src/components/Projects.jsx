import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: "PhotoVerse",
      desc: "Interactive web platform for photosynthesis and environment simulation.",
      img: "/assets/photoverse_mockup_1778780773566.png",
      link: "https://photoverse-delta.vercel.app"
    },
    {
      title: "College Website",
      desc: "Responsive college website showcasing departments and student info.",
      img: "/assets/college_website_mockup_1778780018685.png",
      link: "https://github.com/Shrutir09/College-Website"
    },
    {
      title: "Quick Bite",
      desc: "Food ordering interface for the college canteen to skip the queue.",
      img: "/assets/quick_bite_mockup_1778780046111.png",
      link: "https://quick-bite-topaz.vercel.app/"
    },
    {
      title: "CareConnect",
      desc: "Healthcare support platform focused on user-friendly interaction.",
      img: "/assets/careconnect_mockup_1778780068363.png",
      link: "https://care-connect-rho-eight.vercel.app/"
    },
    {
      title: "GrievanceIQ",
      desc: "Grievance management interface to streamline complaint submission.",
      img: "/assets/grievanceiq_mockup_1778780084200.png",
      link: "https://grievanceiq.vercel.app/"
    },
    {
      title: "ToolifyAI",
      desc: "AI tools showcase platform with organized tool listings.",
      img: "/assets/toolifyai_mockup_1778780101927.png",
      link: "https://github.com/Shrutir09/ToolifyAI"
    },
    {
      title: "Anon Alert",
      desc: "Platform concept for anonymous reporting and alert management.",
      img: "/assets/anonalert_mockup_1778780124204.png",
      link: "https://anon-alert.vercel.app/"
    },
    {
      title: "Portfolio Website",
      desc: "A dynamic, responsive personal portfolio built with React.",
      img: "/assets/hero.png",
      link: "https://github.com/Shrutir09/portfolio"
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projectList.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card glass"
            >
              <div className="project-img-wrapper">
                {/* REPLACE the src below with your actual image paths, e.g., '/assets/photoverse.jpg' */}
                <img src={project.img} alt={project.title} className="project-img" />
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-link-text">
                  <span>View Project</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
