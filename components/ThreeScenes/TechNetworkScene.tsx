"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

interface TechNodeProps {
  position: [number, number, number];
  color: string;
  size?: number;
}

function TechNode({ position, color, size = 0.15 }: TechNodeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const timeRef = useRef(0);

  useFrame((state) => {
    if (meshRef.current) {
      timeRef.current += 0.01;
      meshRef.current.position.y = position[1] + Math.sin(timeRef.current + position[0]) * 0.1;
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <octahedronGeometry args={[size, 0]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.8}
        metalness={0.6}
        roughness={0.3}
      />
    </mesh>
  );
}

interface ConnectionLineProps {
  start: [number, number, number];
  end: [number, number, number];
  color: string;
}

function ConnectionLine({ start, end, color }: ConnectionLineProps) {
  const points = [new THREE.Vector3(...start), new THREE.Vector3(...end)];
  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <line geometry={geometry}>
      <lineBasicMaterial color={color} opacity={0.3} transparent />
    </line>
  );
}

function TechNetwork() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
    }
  });

  // Tech nodes with different colors representing different technologies
  const nodes: Array<{ pos: [number, number, number]; color: string }> = [
    { pos: [-1.5, 0, 0], color: "#61dafb" }, // React blue
    { pos: [1.5, 0, 0], color: "#38bdf8" }, // Tailwind cyan
    { pos: [0, 1.5, 0], color: "#ffffff" }, // Next.js white
    { pos: [0, -1.5, 0], color: "#ff2d20" }, // Laravel red
    { pos: [0, 0, 1.5], color: "#f7df1e" }, // JavaScript yellow
    { pos: [0, 0, -1.5], color: "#68a063" }, // Node.js green
    { pos: [-1, 1, 1], color: "#336791" }, // PostgreSQL blue
    { pos: [1, -1, -1], color: "#f29111" }, // MySQL orange
    { pos: [-1, -1, 1], color: "#f05032" }, // Git red
    { pos: [1, 1, -1], color: "#a259ff" }, // Figma purple
  ];

  // Create connections between nearby nodes
  const connections: Array<{ start: [number, number, number]; end: [number, number, number] }> = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dist = Math.sqrt(
        Math.pow(nodes[i].pos[0] - nodes[j].pos[0], 2) +
        Math.pow(nodes[i].pos[1] - nodes[j].pos[1], 2) +
        Math.pow(nodes[i].pos[2] - nodes[j].pos[2], 2)
      );
      if (dist < 2.5) {
        connections.push({ start: nodes[i].pos, end: nodes[j].pos });
      }
    }
  }

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <TechNode key={i} position={node.pos} color={node.color} />
      ))}
      {connections.map((conn, i) => (
        <ConnectionLine
          key={i}
          start={conn.start}
          end={conn.end}
          color="#38bdf8"
        />
      ))}
    </group>
  );
}

export function TechNetworkScene() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Reduce complexity on mobile
  const starCount = isMobile ? 600 : 1500;
  const dpr = isMobile ? [1, 1.5] : [1, 2];

  return (
    <div className="relative h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        className="h-full w-full"
        dpr={dpr}
        performance={{ min: 0.5 }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
        <pointLight position={[-10, -10, -10]} intensity={0.8} />
        <pointLight position={[0, 10, 0]} intensity={0.6} />
        <TechNetwork />
        <Stars radius={100} depth={50} count={starCount} factor={4} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.8}
        />
      </Canvas>
    </div>
  );
}

