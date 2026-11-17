import './Hero.css';
import { profile } from '../data/profile';

export default function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-eyebrow">
            {profile.hero.eyebrow}
          </div>
          <h1 className="hero-heading">
            {profile.hero.heading.split('\n').map((line, i) => (
              <span key={i} className="hero-line">{line}</span>
            ))}
          </h1>
          <p className="hero-description">
            {profile.hero.description}
          </p>
          <div className="hero-buttons">
            <button onClick={scrollToProjects} className="btn-primary">
              View Projects
            </button>
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="tech-card">
            <div className="tech-card-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="tech-card-title">shreyansh@vit-chennai:~</span>
            </div>
            <div className="tech-card-body">
              <p className="code-line"><span className="prompt">$</span> uname -r</p>
              <p className="code-output">linux-arch-omarchy-x86_64</p>
              <p className="code-line"><span className="prompt">$</span> cat ~/status.txt</p>
              <p className="code-output">CSE Cybersecurity @ VIT Chennai (Class of '30)</p>
              <p className="code-line"><span className="prompt">$</span> cat ~/focus.md</p>
              <p className="code-output highlight">[Systems, C/C++, Linux, Kernel, Security]</p>
              <p className="code-line"><span className="prompt">$</span> uptime</p>
              <p className="code-output">up 24/7 building reliable software</p>
            </div>
            <div className="tech-card-footer">
              <span className="status-indicator"></span>
              <span>System operational</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
