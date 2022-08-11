import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { StyledIntroScreen } from "../components/IntroScreen/introScreen.style";
import { StyledThree } from "../components/three/three.style";
import { StyledGlass } from "../components/glassmorphicCard/glass.style";
import { StyledProjectsPage } from "../components/projectsPage/projects.style";
import styles from "./styles/Home.module.css";
import elephant from "../../public/assets/svgs/e1.svg";
import elephant1 from "../../public/assets/svgs/e2.svg";
import elephant2 from "../../public/assets/svgs/e3.svg";
import elephant3 from "../../public/assets/svgs/e4.svg";
import eFull from "../../public/assets/svgs/e4.svg";
import etester from "../../public/assets/svgs/etester.svg";

const Home: NextPage = () => {
  const [trigger, setTrigger] = useState<boolean>(false);

  const handleOverflow = () => {
    const body = window.document.body;
    trigger && (body.style.overflowY = "auto");
  };

  useEffect(() => {
    console.log(trigger);
    handleOverflow();
  }, [trigger]);

  return (
    <div className="home">
      <section className="hero">
        {/* introScreen 1 */}
        {!trigger && <StyledIntroScreen triggerCallback={setTrigger} />}

        {/* introScreen */}
        {/* <StyledIntroScreen>
        <h1>
          but, <br /> great <span>user experience</span> requires great frontend
          development
        </h1>
      </StyledIntroScreen> */}

        {trigger && (
          <div className="wrapper">
            <StyledGlass>
              <h1>Hi, I&#39;m Saba, Frontend Engineer</h1>
              <h2>based in Tbilisi, Georgia</h2>
              <p>
                and I&#39;m eager to implement your UI/UX into maintainable code
                with zest and determination to see your visions and dreams come
                to fruition
              </p>
            </StyledGlass>
          </div>
        )}

        {/* <div className="bg"> */}
        {/* </div> */}

        {/* contact */}
      </section>

      <div className="sections">
        {/* <Image className="bg" src={etester} alt="el" /> */}
        <section className="techs"></section>

        <section className="projects"></section>

        <section className="about"></section>

        <section className="contact"></section>
      </div>

      {/* projects */}
      {/* <StyledProjectsPage /> */}
      {/* <StyledThree trig={trigger} /> */}
    </div>
  );
};

export default Home;
