import React from 'react';
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import './index.css';

function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry"/>
      <meshLambertMaterial attach="material" color="hotpink"/>
    </mesh>    
  );
}

function Space() {
  return (0);
}

export default function App() {
  return <Canvas>
    <OrbitControls/>
    <ambientLight intensity={0.5}/>
    <Box/>
  </Canvas>;
}
