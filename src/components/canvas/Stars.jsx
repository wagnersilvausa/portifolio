"use client";

import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

function Stars(props) {
  const ref = useRef();

  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(9000), { radius: 1.35 })
  );

  useFrame((state, delta) => {
    if (!ref.current) return;
    // rotação bem visível (pra você perceber que está vivo)
    ref.current.rotation.x -= delta / 8;
    ref.current.rotation.y -= delta / 12;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          opacity={0.9}
          color="#22d3ee"
          size={0.0036}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function StarsCanvas() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <Canvas
        frameloop="always"
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 2]}
        gl={{ alpha: false, antialias: true }}
      >
        {/* fundo real do canvas */}
        <color attach="background" args={["#05070d"]} />

        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
}
