"use client";

import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Html, Stars } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";

function Workbench() {
  return (
    <group scale={1.25}>
      <Float
        speed={1.2}
        rotationIntensity={0.5}
        floatIntensity={1.5}
        floatingRange={[0.1, 0.25]}
      >
        {/* Main desk surface */}
        <mesh castShadow position={[0, 0.2, 0]}>
          <boxGeometry args={[2.4, 0.08, 1.5]} />
          <meshStandardMaterial
            color="#e5e7eb" // light desk
            roughness={0.4}
            metalness={0.2}
          />
        </mesh>

        {/* Primary screen */}
        <mesh castShadow position={[-0.4, 0.55, 0]}>
          <boxGeometry args={[1.2, 0.8, 0.04]} />
          <meshStandardMaterial
            color="#0f172a"
            emissive="#22d3ee"
            emissiveIntensity={1.5}
          />
        </mesh>

        {/* Secondary panel */}
        <mesh castShadow position={[0.8, 0.4, 0.18]}>
          <boxGeometry args={[0.7, 0.5, 0.04]} />
          <meshStandardMaterial
            color="#111827"
            emissive="#fb923c"
            emissiveIntensity={1.4}
          />
        </mesh>

        {/* Keyboard */}
        <mesh castShadow position={[0.15, 0.255, 0.55]} rotation={[-0.08, 0.12, 0]}>
          <boxGeometry args={[1.1, 0.04, 0.35]} />
          <meshStandardMaterial
            color="#111827"
            emissive="#0ea5e9"
            emissiveIntensity={0.35}
            roughness={0.4}
            metalness={0.25}
          />
        </mesh>

        {/* Keyboard glow strip */}
        <mesh castShadow position={[0.15, 0.28, 0.7]} rotation={[-0.08, 0.12, 0]}>
          <boxGeometry args={[1.05, 0.01, 0.04]} />
          <meshStandardMaterial
            color="#22c55e"
            emissive="#22c55e"
            emissiveIntensity={1.2}
          />
        </mesh>

        {/* Mouse */}
        <mesh castShadow position={[1.0, 0.26, 0.4]}>
          <sphereGeometry args={[0.13, 24, 24]} />
          <meshStandardMaterial
            color="#020617"
            emissive="#f97316"
            emissiveIntensity={0.9}
            roughness={0.3}
            metalness={0.4}
          />
        </mesh>

        {/* Desk base shadow plate */}
        <mesh position={[0, -0.06, 0]}>
          <boxGeometry args={[2.8, 0.03, 1.9]} />
          <meshStandardMaterial
            color="#020617"
            emissive="#0b1120"
            emissiveIntensity={0.9}
          />
        </mesh>
      </Float>

      <hemisphereLight
        intensity={0.55}
        groundColor="#020617"
        color="#e5f2ff"
      />
      <pointLight
        position={[2.5, 2.5, 2]}
        intensity={2}
        color="#00e5ff"
      />
      <pointLight position={[-2, 2, -2]} intensity={1.6} color="#ff46a6" />
      <spotLight
        position={[0, 4, 4]}
        angle={0.45}
        penumbra={0.6}
        intensity={1.8}
        color="#ffffff"
      />
    </group>
  );
}

export function FloatingWorkbenchScene() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Reduce complexity on mobile
  const starCount = isMobile ? 800 : 2200;
  const dpr = isMobile ? [1, 1.5] : [1, 2];

  return (
    <div className="h-[260px] w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/90 via-slate-950 to-black shadow-[0_40px_90px_rgba(0,0,0,0.8)] md:h-[320px]">
      <Canvas
        dpr={dpr}
        camera={{ position: [3, 2.4, 4], fov: 45 }}
        shadows={!isMobile}
        performance={{ min: 0.5 }}
      >
        <color attach="background" args={["#020617"]} />
        <ambientLight intensity={0.7} />
        <Stars
          radius={24}
          depth={32}
          count={starCount}
          factor={2.4}
          saturation={0}
          fade
          speed={0.35}
        />
        <Suspense
          fallback={
            <Html center>
              <div className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-slate-300">
                Initializing workspace…
              </div>
            </Html>
          }
        >
          <Workbench />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.8}
          maxPolarAngle={Math.PI / 2.1}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}


