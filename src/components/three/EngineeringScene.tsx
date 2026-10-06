import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Icosahedron, Line, Html } from '@react-three/drei';
import * as THREE from 'three';

const NODE_DATA = [
  { label: 'React', position: [0, 3, 0] as [number, number, number] },
  { label: 'Express', position: [-3.5, 1.5, 0.5] as [number, number, number] },
  { label: 'API', position: [3.5, 1.5, 0.5] as [number, number, number] },
  { label: 'Services', position: [0, -0.5, -0.5] as [number, number, number] },
  { label: 'Database', position: [0, -3, 0] as [number, number, number] },
  { label: 'JWT', position: [-3, -1.5, 1.5] as [number, number, number] },
  { label: 'First API', position: [3, -1.5, 1.5] as [number, number, number] },
  { label: 'Modules', position: [2.5, 2.8, -1] as [number, number, number] },
];

const CONNECTIONS: [number, number][] = [
  [0, 1],
  [0, 2],
  [0, 7],
  [1, 3],
  [2, 3],
  [3, 4],
  [3, 5],
  [3, 6],
];

function CoreNode() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.2;
      ringRef.current.rotation.x = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group>
      <Icosahedron ref={meshRef} args={[1, 1]}>
        <meshStandardMaterial
          color="#5eead4"
          emissive="#14b8a6"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.8}
          wireframe
        />
      </Icosahedron>
      <mesh ref={ringRef}>
        <torusGeometry args={[1.6, 0.015, 16, 100]} />
        <meshStandardMaterial
          color="#5eead4"
          emissive="#5eead4"
          emissiveIntensity={1.2}
          transparent
          opacity={0.4}
        />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.2, 0.01, 16, 100]} />
        <meshStandardMaterial
          color="#5eead4"
          emissive="#5eead4"
          emissiveIntensity={0.8}
          transparent
          opacity={0.2}
        />
      </mesh>
      <pointLight position={[0, 0, 0]} intensity={3} color="#5eead4" distance={8} />
    </group>
  );
}

function FloatingNode({
  label,
  position,
  index,
}: {
  label: string;
  position: [number, number, number];
  index: number;
}) {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.elapsedTime + index * 0.5;
      ref.current.position.y = position[1] + Math.sin(t * 0.8) * 0.15;
      ref.current.position.x = position[0] + Math.cos(t * 0.5) * 0.08;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={ref} position={position}>
        <mesh>
          <octahedronGeometry args={[0.35, 0]} />
          <meshStandardMaterial
            color="#1a1a1e"
            emissive="#5eead4"
            emissiveIntensity={0.25}
            roughness={0.3}
            metalness={0.7}
          />
        </mesh>
        <mesh scale={1.05}>
          <octahedronGeometry args={[0.35, 0]} />
          <meshStandardMaterial
            color="#5eead4"
            emissive="#5eead4"
            emissiveIntensity={0.3}
            wireframe
            transparent
            opacity={0.3}
          />
        </mesh>
        <Html
          center
          distanceFactor={8}
          position={[0, 0.6, 0]}
          style={{
            pointerEvents: 'none',
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '13px',
            fontWeight: 600,
            color: '#a1a1aa',
            whiteSpace: 'nowrap',
            textShadow: '0 0 10px rgba(94,234,212,0.3)',
          }}
        >
          {label}
        </Html>
      </group>
    </Float>
  );
}

function ConnectionLines() {
  const lines = useMemo(() => {
    return CONNECTIONS.map(([from, to]) => {
      const fromPos = new THREE.Vector3(...NODE_DATA[from].position);
      const toPos = new THREE.Vector3(...NODE_DATA[to].position);
      return [fromPos, toPos];
    });
  }, []);

  return (
    <>
      {lines.map((points, i) => (
        <Line
          key={i}
          points={points}
          color="#5eead4"
          lineWidth={0.8}
          transparent
          opacity={0.15}
        />
      ))}
    </>
  );
}

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const count = 80;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 6 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = radius * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#5eead4"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

function MouseParallax() {
  const { camera } = useThree();

  useFrame((state) => {
    const x = state.pointer.x * 0.3;
    const y = state.pointer.y * 0.3;
    camera.position.x += (x - camera.position.x) * 0.05;
    camera.position.y += (y - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

interface EngineeringSceneProps {
  reducedMotion?: boolean;
}

function SceneContent({ reducedMotion }: EngineeringSceneProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current && !reducedMotion) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} color="#ffffff" />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#5eead4" />
      <group ref={groupRef}>
        <CoreNode />
        <ConnectionLines />
        {NODE_DATA.map((node, i) => (
          <FloatingNode
            key={node.label}
            label={node.label}
            position={node.position}
            index={i}
          />
        ))}
      </group>
      <ParticleField />
      {!reducedMotion && <MouseParallax />}
    </>
  );
}

export default function EngineeringScene({ reducedMotion = false }: EngineeringSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ width: '100%', height: '100%' }}
    >
      <Suspense fallback={null}>
        <SceneContent reducedMotion={reducedMotion} />
      </Suspense>
    </Canvas>
  );
}
