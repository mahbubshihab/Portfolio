"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

function ParticleField() {
  const ref = useRef<any>(null);
  
  // Generate random points in a sphere - reduced count for maximum rendering performance
  const [sphere] = useState(() => {
    const points = new Float32Array(1500); // 500 particles (3 coordinates each)
    for (let i = 0; i < points.length; i += 3) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 1.5;
      
      points[i] = r * Math.sin(phi) * Math.cos(theta);
      points[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      points[i + 2] = r * Math.cos(phi);
    }
    return points;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      // Gentle rotation
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 30;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={true}>
        <PointMaterial
          transparent
          color="#06b6d4"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.35}
        />
      </Points>
    </group>
  );
}

export default function FloatingParticles3D() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 -z-20 pointer-events-none opacity-40">
      {/* Cap devicePixelRatio to 1.5 max to avoid layout lag on 4K/retina displays */}
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 1] }}>
        <React.Suspense fallback={null}>
          <ParticleField />
        </React.Suspense>
      </Canvas>
    </div>
  );
}
