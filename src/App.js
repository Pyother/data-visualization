import React from 'react';
import { Canvas } from "react-three-fiber";
//import { OrbitControls } from "drei";
import './index.css';

function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry"/>
      <meshLambertMaterial attach="material" color="hotpink"/>
    </mesh>    
  );
}

export default function App() {
  return <Canvas>
    <Box/>
  </Canvas>;
}
