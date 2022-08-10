import { Suspense, useEffect, useRef } from "react";
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
// import * as THREE from ''
// import React, { useRef } from 'react'
// import { useGLTF } from '@react-three/drei'
// import all from

function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/Atrinity.glb");

  return (
    <group ref={group} {...props} dispose={null}>
      {/* Atrinity star */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3D_Text_-_*_-_baked"].geometry}
        // material={materials["Plastic Textured"]}
        position={[0, -100, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[7, 7, 7]}
      />

      {/* doughnut */}
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
    // console.log(Rig);
  }, []);

  return (
    <Canvas camera={{ position: [-100, -100, 20] }}>
      <Stars />
      <Suspense fallback={null}>
        <Model />
        <OrbitControls />
        {/* <Environment preset="sunset" background /> */}
      </Suspense>

      {/* <mesh scale={[100, 0, 100]}>
        <planeGeometry />
      </mesh> */}

      <ambientLight intensity={0.5} />
      <spotLight position={[100, 500, 100]} angle={0.9} />
      {/* <OrbitControls /> */}
      {/* <Rig /> */}
    </Canvas>
  );
};

//what should we do

//we know the starting position of the camera
//the starting text should appear and also: "right click to continue"
//there also should be counter about how much text is left
//on second text "click to continue" isn't needed anymore

//after all of the text is read, change the positon of the camera
//and hide all the text components and display another component after
//camera is done moving

//now lock the three.js canvas and allow the webpage to be scrolled
//

//also the gradient should be animated

export default Animation;
