import { Suspense, useEffect, useRef } from "react";
import gsap from "gsap";
import LoadingScreen from "../loadingScreen/LoadingScreen";
//R3F
import { Canvas, useThree } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

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
  const { camera } = useThree();

  gsap.to(camera.position, {
    x: -50,
    y: 20,
    z: 300,
    onUpdate: function () {
      camera.lookAt(0, 0, 0);
    },
    ease: "circ.out",
    duration: 2,
  });

  gsap.to(camera.position, {
    x: 150,
    y: 100,
    z: 300,
    onUpdate: function () {
      camera.lookAt(0, 0, 0);
    },
    ease: "linear",
    duration: 60,
    repeat: -1,
    yoyo: true,
    delay: 2,
  });
}

const Animation = ({ trig, className }) => {
  //camera starting position: [80, 80, 25]
  //end positon without orbit controls or some fancy shits:  [-50, 20, 300]

  return (
    <div className={className}>
      <Canvas camera={{ position: [80, 80, 25] }}>
        <Suspense fallback={<LoadingScreen />}>
          <Model />
          <Stars />
          {/* <OrbitControls /> */}
          {/* <Environment preset="sunset" background /> */}
          {/* <ambientLight intensity={0.5} /> */}
          {/* <spotLight position={[100, 500, 100]} angle={0.9} /> */}
        </Suspense>

        {/* <mesh scale={[100, 0, 100]}>
        <planeGeometry />
      </mesh> */}

        {/* <OrbitControls /> */}
        {trig && <Rig />}
      </Canvas>
    </div>
  );
};

export default Animation;
