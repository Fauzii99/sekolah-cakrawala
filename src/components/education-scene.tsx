"use client";
/* eslint-disable react-hooks/immutability, react-hooks/refs -- R3F scene graph mutates refs each animation frame by design. */

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Line, Sparkles } from "@react-three/drei";
import { Component, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import type { MotionValue } from "motion/react";
import * as THREE from "three";

class SceneBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? this.props.fallback : this.props.children; }
}

const clamp = (n: number) => THREE.MathUtils.clamp(n, 0, 1);
const windowed = (p: number, center: number) => clamp(1 - Math.abs(p - center) / .34);

function Orbit({ rotation, color, radius = 2 }: { rotation: [number, number, number]; color: string; radius?: number }) {
  const points = useMemo(() => Array.from({ length: 49 }, (_, i) => {
    const a = i / 48 * Math.PI * 2;
    return new THREE.Vector3(Math.cos(a) * radius, Math.sin(a) * radius * .42, 0);
  }), [radius]);
  return <group rotation={rotation}><Line points={points} color={color} lineWidth={1} transparent opacity={.7}/><mesh position={[radius, 0, 0]}><sphereGeometry args={[.08, 10, 10]}/><meshStandardMaterial color={color} emissive={color}/></mesh></group>;
}

function Atom() {
  return <group><mesh><icosahedronGeometry args={[1.08, 2]}/><meshPhysicalMaterial color="#0b716b" metalness={.35} roughness={.18} clearcoat={1}/></mesh><mesh scale={1.06}><icosahedronGeometry args={[1.08, 1]}/><meshBasicMaterial color="#c9f24b" wireframe transparent opacity={.3}/></mesh><Orbit rotation={[1.1, 0, .2]} color="#c9f24b"/><Orbit rotation={[-.4, .8, 1.5]} color="#d8a93d" radius={2.15}/><Orbit rotation={[.3, -.6, -1]} color="#62d5c8" radius={1.9}/></group>;
}

function Globe() {
  return <group><mesh><sphereGeometry args={[1.62, 32, 24]}/><meshPhysicalMaterial color="#0a8178" metalness={.18} roughness={.3} clearcoat={.8}/></mesh><mesh scale={1.012}><sphereGeometry args={[1.62, 18, 12]}/><meshBasicMaterial color="#e9f2d4" wireframe transparent opacity={.35}/></mesh>{[-.85,-.35,.2,.75].map((y,i)=><mesh key={i} position={[0,y,0]} rotation={[Math.PI/2,0,0]}><torusGeometry args={[Math.sqrt(Math.max(.1,2.62-y*y)),.012,6,48]}/><meshBasicMaterial color="#c9f24b" transparent opacity={.55}/></mesh>)}<mesh rotation={[0,0,.18]}><torusGeometry args={[2.05,.035,8,72]}/><meshStandardMaterial color="#d8a93d" metalness={.7}/></mesh></group>;
}

function Geometry() {
  return <group><mesh rotation={[.25,.3,0]}><icosahedronGeometry args={[1.55,1]}/><meshPhysicalMaterial color="#d8a93d" metalness={.65} roughness={.2} clearcoat={.8}/></mesh><mesh scale={1.04}><icosahedronGeometry args={[1.55,1]}/><meshBasicMaterial color="#fff9df" wireframe transparent opacity={.7}/></mesh><mesh position={[-1.8,-.8,.1]} rotation={[.3,.3,.2]}><torusKnotGeometry args={[.52,.13,80,8,2,3]}/><meshStandardMaterial color="#c9f24b" emissive="#4b5917"/></mesh><mesh position={[1.75,.85,-.2]} rotation={[.2,.6,.4]}><octahedronGeometry args={[.65]}/><meshStandardMaterial color="#62d5c8" metalness={.5}/></mesh></group>;
}

function Journey({ progress, reduced }: { progress: MotionValue<number>; reduced: boolean }) {
  const root = useRef<THREE.Group>(null);
  const chapters = [useRef<THREE.Group>(null), useRef<THREE.Group>(null), useRef<THREE.Group>(null)];
  const { camera, scene } = useThree();
  const bg = useMemo(() => new THREE.Color("#071b2f"), []);
  useFrame((_, delta) => {
    const p = reduced ? .08 : clamp(progress.get());
    const damp = 1 - Math.exp(-delta * 5);
    const centers = [.12,.5,.86];
    chapters.forEach((ref,i) => { if (!ref.current) return; const v=windowed(p,centers[i]); ref.current.scale.lerp(new THREE.Vector3(.55+v*.55,.55+v*.55,.55+v*.55),damp); ref.current.position.x=THREE.MathUtils.lerp(ref.current.position.x,(i-(p<.33?0:p<.67?1:2))*5,damp); ref.current.rotation.y=THREE.MathUtils.lerp(ref.current.rotation.y,p*Math.PI*(1.2+i*.35),damp); });
    if (root.current) { root.current.rotation.x=THREE.MathUtils.lerp(root.current.rotation.x,.05+p*.42,damp); root.current.rotation.z=THREE.MathUtils.lerp(root.current.rotation.z,-.08+p*.18,damp); }
    const angle=-.18+p*.9;
    camera.position.lerp(new THREE.Vector3(Math.sin(angle)*(5.5-p),1.25*p,Math.cos(angle)*(5.5-p)),damp);
    camera.lookAt(0,p*.15,0);
    bg.lerp(new THREE.Color(p<.34?"#071b2f":p<.68?"#063f46":"#172b31"),damp);
    scene.background=bg;
  });
  return <><group ref={root}><group ref={chapters[0]}><Atom/></group><group ref={chapters[1]} position={[5,0,0]}><Globe/></group><group ref={chapters[2]} position={[10,0,0]}><Geometry/></group></group><ambientLight intensity={.65}/><hemisphereLight color="#ecffe8" groundColor="#020c17" intensity={1.4}/><directionalLight position={[4,6,5]} intensity={4} color="#fff3cc"/><pointLight position={[-4,-2,3]} intensity={25} color="#16b7aa" distance={10}/>{!reduced&&<Sparkles count={18} scale={[7,5,3]} size={1} speed={.12} color="#c9f24b" opacity={.22}/>}</>;
}

function canUseWebGL(){try{const c=document.createElement("canvas");return Boolean(c.getContext("webgl2")||c.getContext("webgl"));}catch{return false;}}
export default function EducationScene({ progress }: { progress: MotionValue<number> }) {
  const [webgl]=useState(()=>typeof document!=="undefined"&&canUseWebGL());
  const [reduced,setReduced]=useState(()=>typeof window!=="undefined"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  useEffect(()=>{const q=window.matchMedia("(prefers-reduced-motion: reduce)");const update=()=>setReduced(q.matches);q.addEventListener("change",update);return()=>q.removeEventListener("change",update);},[]);
  const fallback=<div className="scene-fallback" aria-hidden="true"><span/><span/><i/></div>;
  if(!webgl)return fallback;
  return <SceneBoundary fallback={fallback}><Canvas className="education-canvas" dpr={[1,1.5]} camera={{position:[0,0,5.5],fov:43}} gl={{antialias:true,powerPreference:"high-performance"}} frameloop={reduced?"demand":"always"} aria-label="Perjalanan tiga dimensi jurusan IPA, IPS, dan Matematika"><Journey progress={progress} reduced={reduced}/></Canvas></SceneBoundary>;
}
