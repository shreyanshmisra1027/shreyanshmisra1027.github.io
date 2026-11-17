import './Hero.css';
import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import ProcessorScene from './ProcessorScene';
import { profile } from '../data/profile';
import { isWebGLAvailable } from '../utils/webgl';

function SceneLoader() {
  return (
    <div className="scene-loader">
      <div className="loader-spinner"></div>
      <p>Loading 3D scene...</p>
    </div>
  );
}

function SceneFallback() {
  return (
    <div className="scene-fallback">
      <div className="fallback-icon">⚙️</div>
      <p className="fallback-text">3D scene unavailable</p>
    </div>
  );
}

export default function Hero() {
  const [hasWebGL] = useState(() => isWebGLAvailable());

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
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
            {hasWebGL ? (
              <Canvas
                camera={{ position: [0, 0, 4], fov: 50 }}
                dpr={Math.min(window.devicePixelRatio, 2)}
                performance={{ current: 1 }}
              >
                <PerspectiveCamera makeDefault position={[0, 0, 4]} />
                <Suspense fallback={<SceneLoader />}>
                  <ProcessorScene />
                </Suspense>
                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  autoRotate
                  autoRotateSpeed={4}
                  rotateSpeed={0.3}
                />
              </Canvas>
            ) : (
              <SceneFallback />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
