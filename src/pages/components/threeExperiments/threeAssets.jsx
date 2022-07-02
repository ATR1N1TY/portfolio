import { React, Suspense, useEffect, useRef } from "react";
//R3F
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Stars, Environment } from "@react-three/drei";
// import { AmbientLight } from "three";
// import wfa from '../../../public/logoModel.glb'
//libraires for importing logo model
// import { useLoader } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useGLTF } from "@react-three/drei";

import * as THREE from "three";
// import React, { useRef } from 'react'
// import { useGLTF } from '@react-three/drei'

function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/Project Name(2).glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3D_Text_-_*_-_baked"].geometry}
        material={materials["Plastic Textured"]}
        position={[0, -100, 1]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[7, 7, 7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Tube_-_baked"].geometry}
        // material={materials.Concrete}
        position={[21, 50, 0]}
        rotation={[0, 0, 0]}
        scale={[7, 7, 7]}
      />
    </group>
  );
}

function Rig() {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();
  return useFrame(() =>
    camera.position.lerp(
      vec.set(mouse.x * 50, mouse.y * 50, camera.position.z),
      0.02
    )
  );
}

const Animation = (props) => {
  useEffect(() => {
    console.log("rerender");
  }, []);
  return (
    <Canvas camera={{ position: [50, -50, 300] }}>
      <Stars />
      <Suspense fallback={null}>
        <Model />
        <OrbitControls />
        {/* <Environment preset="sunset" background /> */}
      </Suspense>
      <ambientLight intensity={0.5} />
      <spotLight position={[100, 500, 100]} angle={0.9} />
      {/* <OrbitControls /> */}
      <Rig />
    </Canvas>
  );
};

export default Animation;
