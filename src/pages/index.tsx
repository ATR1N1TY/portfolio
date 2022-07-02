import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { StyledIntroScreen } from "./components/IntroScreen/introScreen.style";
import { StyledThree } from "./components/threeExperiments/three.style";

import styles from "./styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="home">
      {/* introScreen 1 */}
      {/* <StyledIntroScreen>
        <h1>
          Sites with superior <span>User Experience</span> can have{" "}
          <span>400%</span> higher conversion rates.(Source)
        </h1>
      </StyledIntroScreen> */}

      {/* introScreen 2 */}
      {/* <StyledIntroScreen>
        <h1>
          but, <br /> great <span>user experience</span> requires great frontend
          development
        </h1>
      </StyledIntroScreen> */}

      <StyledThree />

      {/* main */}
      {/* projects */}
      {/* contact */}
    </div>
  );
};

export default Home;
