import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function ProcessorModel() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Processor Substrate */}
      <mesh position={[0, -0.05, 0]}>
        <boxGeometry args={[2.2, 0.1, 2.2]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.8} metalness={0.2} />
      </mesh>

      {/* Heat Spreader (IHS) */}
      <mesh position={[0, 0.1, 0]}>
        <boxGeometry args={[1.8, 0.15, 1.8]} />
        <meshStandardMaterial color="#333333" roughness={0.3} metalness={0.8} />
      </mesh>

      {/* Silicon Die Accent / Core */}
      <mesh position={[0, 0.2, 0]}>
        <boxGeometry args={[0.8, 0.06, 0.8]} />
        <meshStandardMaterial color="#00D6C5" roughness={0.1} metalness={0.9} emissive="#00D6C5" emissiveIntensity={0.6} />
      </mesh>

      {/* Outer Golden Pins / Circuit Pattern */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const x = Math.cos(angle) * 1.0;
        const z = Math.sin(angle) * 1.0;
        return (
          <mesh key={`trace-${i}`} position={[x, 0.02, z]} rotation={[0, -angle, 0]}>
            <boxGeometry args={[0.2, 0.04, 0.04]} />
            <meshStandardMaterial color="#00D6C5" emissive="#00D6C5" emissiveIntensity={0.8} />
          </mesh>
        );
      })}

      {/* SMD Capacitors around the die */}
      {[-0.6, 0.6].map((x) =>
        [-0.6, 0.6].map((z) => (
          <mesh key={`cap-${x}-${z}`} position={[x, 0.19, z]}>
            <boxGeometry args={[0.15, 0.05, 0.08]} />
            <meshStandardMaterial color="#888888" roughness={0.5} metalness={0.5} />
          </mesh>
        ))
      )}

      {/* Floating Circuit Traces / Bits */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const radius = 1.4;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        return (
          <mesh key={`orbit-${i}`} position={[x, Math.sin(i) * 0.2, z]}>
            <boxGeometry args={[0.08, 0.08, 0.08]} />
            <meshStandardMaterial color="#00D6C5" emissive="#00D6C5" emissiveIntensity={1} />
          </mesh>
        );
      })}

      {/* Subtle Lighting inside the model */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 5]} intensity={1.5} />
      <pointLight position={[0, 0.5, 0]} color="#00D6C5" intensity={2} distance={3} />
      <pointLight position={[-2, -1, -2]} color="#ffffff" intensity={0.5} />
    </group>
  );
}
