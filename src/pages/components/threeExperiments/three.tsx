import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import ThreeAssets from "./threeAssets";

const Three = (props: { className?: string }) => {
  const { className } = props;
  return (
    <Canvas className={className} shadows>
      <Suspense fallback={null}>
        <ThreeAssets />
      </Suspense>
    </Canvas>
  );
};

export default Three;
