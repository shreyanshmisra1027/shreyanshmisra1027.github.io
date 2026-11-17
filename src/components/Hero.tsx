import './Hero.css';
import { profile } from '../data/profile';

export default function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
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
            <button
              onClick={scrollToProjects}
              className="btn-primary"
            >
              Explore Projects
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
          <div className="canvas-container placeholder-3d">
            <div className="placeholder-content">
              <div className="placeholder-icon">⚙️</div>
              <p>3D Processor Model</p>
              <p className="placeholder-hint">Loading...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}