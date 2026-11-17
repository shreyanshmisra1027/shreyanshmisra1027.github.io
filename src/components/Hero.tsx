import './Hero.css';
import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import ProcessorModel from './ProcessorModel';
import { profile } from '../data/profile';

export default function Hero() {

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
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
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
          <div className="canvas-container">
            <Canvas
              camera={{ position: [0, 0, 8], fov: 45 }}
              dpr={[1, 2]}
            >
              <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
                <ProcessorModel />
              </Float>
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                minDistance={6}
                maxDistance={12}
                rotateSpeed={0.3}
              />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
}
