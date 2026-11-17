import './About.css';
import Avatar from './Avatar';
import { profile } from '../data/profile';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="about-heading">A little about me.</h2>

        <div className="about-content-wrapper">
          <div className="about-avatar">
            <Avatar size="large" />
          </div>
          <div className="about-content">
            {profile.about.paragraphs.map((paragraph, index) => (
              <p key={index} className="about-paragraph">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="about-philosophy">
          <h3 className="about-philosophy-heading">
            {profile.about.philosophy.heading}
          </h3>
          <ul className="about-philosophy-list">
            {profile.about.philosophy.items.map((item, index) => (
              <li key={index} className="about-philosophy-item">
                <span className="about-philosophy-marker">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
