"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, Sparkles } from "@react-three/drei";
import { Component, useEffect, useRef, useState, type ReactNode } from "react";
import * as THREE from "three";

class SceneBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? this.props.fallback : this.props.children; }
}

function Orbit({ rotation, color, scale = 1 }: { rotation: [number, number, number]; color: string; scale?: number }) {
  const points = Array.from({ length: 65 }, (_, index) => {
    const angle = (index / 64) * Math.PI * 2;
    return new THREE.Vector3(Math.cos(angle) * 2.05 * scale, Math.sin(angle) * .76 * scale, 0);
  });
  return <group rotation={rotation}>
    <Line points={points} color={color} lineWidth={.8} transparent opacity={.52} />
    <mesh position={[2.05 * scale, 0, 0]}><sphereGeometry args={[.072, 12, 12]} /><meshStandardMaterial color={color} emissive={color} emissiveIntensity={.55} /></mesh>
  </group>;
}

function Sculpture({ reduced }: { reduced: boolean }) {
  const group = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    if (!group.current || reduced) return;
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const progress = window.scrollY / maxScroll;
    group.current.rotation.y += delta * .035;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, progress * Math.PI * 3 + state.pointer.x * .12, .04);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, progress * .8 + state.pointer.y * .12, .04);
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, -state.pointer.x * .08 - progress * .25, .035);
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, -progress * .8, .04);
    group.current.position.z = THREE.MathUtils.lerp(group.current.position.z, Math.sin(progress * Math.PI * 2) * .4, .04);
  });
  return <group ref={group} rotation={[.08, -.3, -.08]}>
    <Float speed={reduced ? 0 : 1.15} rotationIntensity={reduced ? 0 : .12} floatIntensity={reduced ? 0 : .2}>
      <mesh><icosahedronGeometry args={[1.05, 2]} /><meshPhysicalMaterial color="#0b716b" roughness={.24} metalness={.28} clearcoat={.7} /></mesh>
      <mesh scale={1.07}><icosahedronGeometry args={[1.05, 1]} /><meshBasicMaterial color="#c9f24b" wireframe transparent opacity={.24} /></mesh>
      <Orbit rotation={[Math.PI / 2.7, 0, .25]} color="#c9f24b" />
      <Orbit rotation={[-.45, .6, Math.PI / 2]} color="#d8a93d" scale={1.08} />
      <Orbit rotation={[.3, -.55, -Math.PI / 3]} color="#62d5c8" scale={.92} />
      <mesh position={[1.42, 1.25, -.28]} rotation={[.4, .35, .2]}><octahedronGeometry args={[.27]} /><meshStandardMaterial color="#d8a93d" metalness={.65} roughness={.28} /></mesh>
      <mesh position={[-1.5, -.95, .25]} rotation={[.2, .4, 0]}><dodecahedronGeometry args={[.24]} /><meshStandardMaterial color="#c9f24b" metalness={.2} roughness={.36} /></mesh>
      <mesh position={[-1.45, 1.02, -.5]} rotation={[.3, 0, .5]}><tetrahedronGeometry args={[.23]} /><meshStandardMaterial color="#123f61" metalness={.5} roughness={.3} /></mesh>
    </Float>
  </group>;
}

function canUseWebGL() {
  try { const canvas = document.createElement("canvas"); return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl")); } catch { return false; }
}

export default function EducationScene() {
  const [webgl] = useState(() => typeof document !== "undefined" && canUseWebGL());
  const [reduced, setReduced] = useState(() => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  const fallback = <div className="scene-fallback" aria-hidden="true"><span /><span /><i /></div>;
  if (webgl !== true) return fallback;
  return <SceneBoundary fallback={fallback}><Canvas className="education-canvas" dpr={[1, 1.5]} camera={{ position: [0, 0, 6.1], fov: 42 }} gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }} frameloop={reduced ? "demand" : "always"} aria-label="Sculpture pendidikan tiga dimensi: orbit atom, globe, dan bentuk matematika">
    <ambientLight intensity={.75} />
    <hemisphereLight color="#dfffea" groundColor="#071b2f" intensity={1.1} />
    <directionalLight position={[4, 5, 5]} intensity={3.2} color="#fff4d0" />
    <pointLight position={[-4, -2, 3]} intensity={18} color="#18a89c" distance={9} />
    <Sculpture reduced={reduced} />
    {!reduced && <Sparkles count={10} scale={[5, 4, 2]} size={.85} speed={.08} color="#c9f24b" opacity={.18} />}
  </Canvas></SceneBoundary>;
}
