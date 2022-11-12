import * as THREE from 'three'
import React, { useRef } from 'react';
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import './index.css';

function Box() {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.z += 0.002));
  return (
    <mesh ref={mesh}>
      <boxBufferGeometry attach="geometry"/>
      <meshLambertMaterial attach="material" color="#1fd2ff" emissive="0a9ca0" wireframe={true}/>
    </mesh>    
  );
}

function Plane() {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.z += 0.002));
  return (
    <mesh ref={mesh}>
      <planeBufferGeometry args={[5, 5, 5]}/>
      <meshLambertMaterial attach="material" color={"#0c181c"} />
    </mesh>
  );
}

export default function App() {
  return (
  <Canvas>
    <OrbitControls/>
    <ambientLight intensity={0.5}/>
    <spotLight position={[10, 15, 10]} angle={0.3}/>
    <Box/>
    <Plane/>

  </Canvas>
  );
}
