import { Html } from "@react-three/drei";
import React from "react";
import { LoadingWrapper } from "./LoadingScreen.style";
import Image from "next/image";
import logo from "../../../public/assets/pictures/LOGO.jpg";

function LoadingScreen() {
  return (
    <Html prepand center zIndexRange={[100, 0]}>
      <LoadingWrapper>
        <div className="text">
          <Image
            className="logo"
            width={100}
            height={100}
            src={logo}
            alt="a3Logo"
          />
        </div>
        <div className="text">🌟🌟🌟</div>
        <div className="text">Loading</div>
        <small>this might only take up to 5 seconds</small>
      </LoadingWrapper>
    </Html>
  );
}

export default LoadingScreen;
