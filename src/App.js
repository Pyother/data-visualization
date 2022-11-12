import * as THREE from 'three'
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls, RoundedBox } from "@react-three/drei";
import './index.css';

function Box() {
  const mesh = useRef(null);
  const edges = new THREE.EdgesGeometry();
  useFrame(() => (mesh.current.rotation.z += 0.002));
  return (
    <mesh ref={mesh}>
      <boxBufferGeometry attach="geometry"/>
      <meshLambertMaterial attach="material" emissive="0a9ca0" wireframe={true} opacity={0.5} transparent/>
    </mesh>
  );
}

const Incubator = ({ position, scale }) => (
  <group position={position} scale={scale}>
    <Box/>
  </group>
);

const Cube = ({ position, scale }) => (
  <group position={position} scale={scale}>
    <Box />
  </group>
)

function Plane() {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.z += 0.002));
  return (
    <mesh ref={mesh}>
      <planeBufferGeometry args={[5, 5, 5]}/>
      <meshLambertMaterial attach="material" color={"#0c181c"} side={THREE.DoubleSide}/>
    </mesh>
  );
}

const Table = ({ scale }) => (
  <group scale={scale}>
    <Plane />
  </group>
);

export default function App() {
  
  let incubator_x = 1, incubator_y = 1, incubator_z = 1;

  return (
  <Canvas>
    <OrbitControls maxDistance={10} minDistance={2}/>
    <ambientLight intensity={0.5}/>
    <spotLight position={[10, 15, 10]} angle={0.3}/>
    <Incubator position={[0, 0, 0.5*incubator_z]} scale={[incubator_x, incubator_y, incubator_z]}/>
    <Cube position={[0, 0, 0.5*incubator_z]} scale={[incubator_x*0.05, incubator_y*0.05, incubator_z*0.05]}/>
    <Table scale={[incubator_x*0.5, incubator_y*0.5, 0]}/>
  </Canvas>
  
  );
}
