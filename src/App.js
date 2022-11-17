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

function Cube() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry"/>
      <meshLambertMaterial attach="material" emissive="0a9ca0" color={"#03e8fc"}/>
    </mesh>
  )
}

const Cell = ({ position, scale }) => (
  <group position={position} scale={scale}>
    <Cube />
  </group>
)

function Snowflake() {
  var x=0.3, y=-0.3, z=0.5;
  const array_shapes = [];
  for (let i=0 ; i<7; i++) {
    array_shapes.push(
      <group>
        <Cell position={[x, y+i*0.02, z*2-0.3]} scale={[2*0.01, 2*0.01, 2*0.01]}/>
        <Cell position={[x+i*0.02, y, z*2-0.3]} scale={[2*0.01, 2*0.01, 2*0.01]}/>
        <Cell position={[x, y-i*0.02, z*2-0.3]} scale={[2*0.01, 2*0.01, 2*0.01]}/>
        <Cell position={[x-i*0.02, y, z*2-0.3]} scale={[2*0.01, 2*0.01, 2*0.01]}/>
        <Cell position={[x, y, z*2-0.3+i*0.02]} scale={[2*0.01, 2*0.01, 2*0.01]}/>
        <Cell position={[x, y, z*2-0.3-i*0.02]} scale={[2*0.01, 2*0.01, 2*0.01]}/>
      </group>
    );
  }
  for (let i=0; i<4; i++) {
    array_shapes.push(
      <group>
        <Cell position={[x+i*0.02, y+i*0.02, z*2-0.3+i*0.02]} scale={[2*0.01, 2*0.01, 2*0.01]}/>
        <Cell position={[x-i*0.02, y+i*0.02, z*2-0.3+i*0.02]} scale={[2*0.01, 2*0.01, 2*0.01]}/>
        <Cell position={[x-i*0.02, y-i*0.02, z*2-0.3+i*0.02]} scale={[2*0.01, 2*0.01, 2*0.01]}/>
        <Cell position={[x-i*0.02, y-i*0.02, z*2-0.3-i*0.02]} scale={[2*0.01, 2*0.01, 2*0.01]}/>
        <Cell position={[x-i*0.02, y+i*0.02, z*2-0.3-i*0.02]} scale={[2*0.01, 2*0.01, 2*0.01]}/>
        <Cell position={[x+i*0.02, y-i*0.02, z*2-0.3-i*0.02]} scale={[2*0.01, 2*0.01, 2*0.01]}/>
        <Cell position={[x+i*0.02, y-i*0.02, z*2-0.3+i*0.02]} scale={[2*0.01, 2*0.01, 2*0.01]}/>
        <Cell position={[x+i*0.02, y+i*0.02, z*2-0.3-i*0.02]} scale={[2*0.01, 2*0.01, 2*0.01]}/>
      </group>
    );
  }
  return(array_shapes);
}

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
  
  let incubator_x = 2, incubator_y = 2, incubator_z = 2;

  return (
  <Canvas>
    <OrbitControls maxDistance={10} minDistance={0.5}/>
    <ambientLight intensity={0.5}/>
    <spotLight position={[10, 15, 10]} angle={0.3}/>
    <Incubator position={[0, 0, 0.5*incubator_z]} scale={[incubator_x, incubator_y, incubator_z]}/>
    <Snowflake/>
    <Table scale={[incubator_x*0.5, incubator_y*0.5, 0]}/>
  </Canvas>
  );
}
