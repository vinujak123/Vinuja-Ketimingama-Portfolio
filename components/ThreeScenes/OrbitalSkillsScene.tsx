"use client";

import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Html } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";

const skills = [
  { label: "React", color: "#22c55e", position: [1.4, 0.2, 0.4] },
  { label: "Next.js", color: "#60a5fa", position: [-1.5, -0.1, -0.2] },
  { label: "TypeScript", color: "#38bdf8", position: [0.3, 0.9, -1.2] },
  { label: "Node.js", color: "#facc15", position: [-0.4, -0.9, 1.1] },
  { label: "Laravel", color: "#ff2d20", position: [0.9, -0.3, -1.6] },
];

function BadgeSphere({
  label,
  color,
  position,
}: {
  label: string;
  color: string;
  position: [number, number, number];
}) {
  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={1.2}
      floatingRange={[0.05, 0.25]}
    >
      <group position={position}>
        <mesh>
          <sphereGeometry args={[0.34, 32, 32]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.4}
            roughness={0.2}
            metalness={0.3}
          />
        </mesh>
        <Html center distanceFactor={8}>
          <div className="rounded-full bg-slate-950/80 px-3 py-1 text-[11px] font-medium text-slate-50 shadow-[0_10px_30px_rgba(0,0,0,0.85)] backdrop-blur-md">
            {label}
          </div>
        </Html>
      </group>
    </Float>
  );
}

function OrbitCluster() {
  return (
    <group>
      <mesh>
        <torusGeometry args={[1.4, 0.02, 16, 80]} />
        <meshStandardMaterial
          color="#0ea5e9"
          emissive="#38bdf8"
          emissiveIntensity={0.3}
        />
      </mesh>
      <mesh rotation={[Math.PI / 3, 0, 0.4]}>
        <torusGeometry args={[1.75, 0.02, 16, 80]} />
        <meshStandardMaterial
          color="#ec4899"
          emissive="#fb7185"
          emissiveIntensity={0.28}
        />
      </mesh>
      <mesh rotation={[-Math.PI / 4, 0, -0.6]}>
        <torusGeometry args={[2.1, 0.018, 16, 80]} />
        <meshStandardMaterial
          color="#f97316"
          emissive="#fed7aa"
          emissiveIntensity={0.32}
        />
      </mesh>
      {skills.map((skill) => (
        <BadgeSphere
          key={skill.label}
          label={skill.label}
          color={skill.color}
          position={skill.position as [number, number, number]}
        />
      ))}
    </group>
  );
}

export function OrbitalSkillsScene() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Reduce complexity on mobile
  const dpr = isMobile ? [1, 1.5] : [1, 1.75];

  return (
    <div className="h-[220px] w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/80 via-slate-950 to-black shadow-[0_32px_80px_rgba(0,0,0,0.85)] md:h-[260px]">
      <Canvas dpr={dpr} camera={{ position: [0, 0.6, 4.2], fov: 45 }} performance={{ min: 0.5 }}>
        <color attach="background" args={["#020617"]} />
        <ambientLight intensity={0.45} />
        <spotLight
          position={[3, 3, 3]}
          angle={0.5}
          penumbra={0.7}
          intensity={2}
          color="#f9fafb"
        />
        <Suspense
          fallback={
            <Html center>
              <div className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-slate-300">
                Loading skill orbits…
              </div>
            </Html>
          }
        >
          <OrbitCluster />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.9}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}




