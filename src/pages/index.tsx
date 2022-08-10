import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { StyledIntroScreen } from "../components/IntroScreen/introScreen.style";
import { StyledThree } from "../components/three/three.style";
import { StyledGlass } from "../components/glassmorphicCard/glass.style";
import { StyledProjectsPage } from "../components/projectsPage/projects.style";
import styles from "./styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="home">
      {/* introScreen 1 */}
      <StyledIntroScreen style={{ display: "none" }} />

      {/* introScreen 2 */}
      {/* <StyledIntroScreen>
        <h1>
          but, <br /> great <span>user experience</span> requires great frontend
          development
        </h1>
      </StyledIntroScreen> */}

      {/* <div className="wrapper">
        <StyledGlass>
          <h1>
            Hi, I&#39;m Saba,{" "}
            <span className="gradient-violet">Frontend Engineer</span>
          </h1>

          <h2>based in Tbilisi, Georgia</h2>

          <p>
            and I&#39;m eager to implement your UI/UX into maintainable code
            with zest and determination to see your visions and dreams come to
            fruition
          </p>
        </StyledGlass>
      </div> */}

      {/* <StyledProjectsPage /> */}

      {/* <div className="bg"> */}
      {/* <StyledThree /> */}
      {/* </div> */}

      {/* main */}
      {/* projects */}
      {/* contact */}
    </div>
  );
};

export default Home;
