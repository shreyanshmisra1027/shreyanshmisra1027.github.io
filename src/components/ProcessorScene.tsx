import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function ProcessorScene() {
  const groupRef = useRef<THREE.Group>(null);
  const circuitsRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Create processor geometry
  const processorGeometry = useMemo(() => {
    const shapes = {
      // Central processor die
      die: new THREE.BoxGeometry(2, 0.2, 2),
      // Silicon core
      core: new THREE.BoxGeometry(1, 0.22, 1),
      // Heat spreader
      spreader: new THREE.BoxGeometry(2.4, 0.15, 2.4),
      // SMD capacitors
      capacitor: new THREE.BoxGeometry(0.15, 0.1, 0.08),
    };
    return shapes;
  }, []);

  // Create circuit trace particles
  const particlesGeometry = useMemo(() => {
    const count = 100;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const radius = 1.5 + Math.random() * 0.5;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 0.3;
      positions[i * 3 + 2] = Math.sin(angle) * radius;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

  // Animation loop
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }

    if (circuitsRef.current) {
      circuitsRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Heat Spreader Base */}
      <mesh position={[0, -0.1, 0]} castShadow>
        <primitive object={processorGeometry.spreader} />
        <meshStandardMaterial
          color="#1a1a1a"
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Processor Die */}
      <mesh position={[0, 0, 0]} castShadow>
        <primitive object={processorGeometry.die} />
        <meshStandardMaterial
          color="#2a2a2a"
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>

      {/* Silicon Core with turquoise accent */}
      <mesh position={[0, 0.11, 0]} castShadow>
        <primitive object={processorGeometry.core} />
        <meshStandardMaterial
          color="#00D6C5"
          emissive="#00D6C5"
          emissiveIntensity={0.4}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* Circuit traces */}
      <group ref={circuitsRef}>
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          const x = Math.cos(angle) * 1.1;
          const z = Math.sin(angle) * 1.1;

          return (
            <mesh key={i} position={[x, 0.11, z]} rotation={[0, -angle, 0]}>
              <boxGeometry args={[0.3, 0.02, 0.02]} />
              <meshStandardMaterial
                color="#00D6C5"
                emissive="#00D6C5"
                emissiveIntensity={0.6}
              />
            </mesh>
          );
        })}
      </group>

      {/* SMD Capacitors */}
      {[-0.7, 0.7].map((x) =>
        [-0.7, 0.7].map((z) => (
          <mesh key={`${x}-${z}`} position={[x, 0.15, z]} castShadow>
            <primitive object={processorGeometry.capacitor} />
            <meshStandardMaterial
              color="#404040"
              roughness={0.4}
              metalness={0.6}
            />
          </mesh>
        ))
      )}

      {/* Floating circuit particles */}
      <points ref={particlesRef}>
        <primitive object={particlesGeometry} />
        <pointsMaterial
          size={0.02}
          color="#00D6C5"
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>

      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.8}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight position={[0, 2, 0]} intensity={0.5} color="#00D6C5" />
      <pointLight position={[-2, 1, -2]} intensity={0.3} color="#00D6C5" />
      <spotLight
        position={[0, 3, 0]}
        angle={0.6}
        penumbra={0.5}
        intensity={0.5}
        color="#00D6C5"
      />
    </group>
  );
}
