import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Image from "next/image";
import { StyledIntroScreen } from "../components/IntroScreen/introScreen.style";
import { StyledThree } from "../components/three/three.style";
import { StyledGlass } from "../components/glassmorphicCard/glass.style";

import { StyledProjectCard } from "../components/projectCard/projectCard.style";

import { MdCopyAll } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { MdDone } from "react-icons/md";

//after
import Hero from "../components/hero/hero";
import TechSection from "../components/techSection/techSection";
import ProjectsSection from "../components/projectsSection/projectsSection";

const Home: NextPage = () => {
  const [trigger, setTrigger] = useState<boolean>(false);
  const [showElement, setShowElement] = useState<boolean>(false);

  const handleOverflow = () => {
    const body = window.document.body;
    trigger && (body.style.overflowY = "auto");
  };

  useEffect(() => {
    setTimeout(() => {
      setShowElement(false);
    }, 1000);
  }, [showElement]);

  return (
    <div className="home">
      <Hero trigger={trigger} setTrigger={setTrigger} />

      <div className="sections">
        <TechSection />
        <ProjectsSection />

        <section className="about">
          <div className="aboutSection">
            <p className="cooperation">
              {" "}
              <i>
                {" "}
                <span>Little thing I want to say...</span>{" "}
              </i>
            </p>
            <p>I always had great attitude about writing software</p>
            <p>But also love connecting with people</p>
            <p>we can build so many things together</p>
            <p>so let&#39;s work together!</p>
          </div>
          <div className="aboutTitle">
            <div className="picture"></div>
            <h1>
              Evolution <br /> made us <br /> cooperative, <br /> not
              competetive
            </h1>
          </div>
        </section>

        {/* contact */}
        <section className="contact">
          <div className="contactTitle">
            <h1>Contact Me</h1>
          </div>
          <div className="contactContent">
            <div className="social">
              <BsLinkedin />
              <BsGithub />
              <BsTwitter />
              <BsYoutube />
            </div>
            <div className="emailme">
              <span>saba4inasaridze@gmail.com</span>
              <MdCopyAll
                onClick={() => {
                  {
                    setShowElement(true);
                    navigator.clipboard.writeText("saba4inasaridze@gmail.com");
                  }
                }}
                className="s"
              />
            </div>
            <MdDone className="done" style={{ opacity: showElement ? 1 : 0 }} />
          </div>
        </section>
      </div>

      {/* <StyledThree trig={trigger} /> */}
      <div className="backgroundCont"></div>
    </div>
  );
};

export default Home;
