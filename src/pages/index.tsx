import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Image from "next/image";
import { StyledIntroScreen } from "../components/IntroScreen/introScreen.style";
import { StyledThree } from "../components/three/three.style";
import { StyledGlass } from "../components/glassmorphicCard/glass.style";
import htmlLogo from "../../public/assets/technologies/html.png";
import cssLogo from "../../public/assets/technologies/css.png";
import jsLogo from "../../public/assets/technologies/js.png";
import tsLogo from "../../public/assets/technologies/TS.png";
import reactLogo from "../../public/assets/technologies/react.png";
import nextLogo from "../../public/assets/technologies/next.png";
import reduxLogo from "../../public/assets/technologies/redux.svg";
import scLogo from "../../public/assets/technologies/sc.png";
import twLogo from "../../public/assets/technologies/tailwind.png";
import qlLogo from "../../public/assets/technologies/graphql.png";
import gitLogo from "../../public/assets/technologies/Git_icon.svg.png";
import { StyledProjectCard } from "../components/projectCard/projectCard.style";
import mock from "../../public/assets/pictures/mock.jpg";
import mock1 from "../../public/assets/pictures/mock1.jpg";
import mock2 from "../../public/assets/pictures/mock2.jpg";
import { MdCopyAll } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { MdDone } from "react-icons/md";

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
      <section className="hero">
        {/* intro */}
        {!trigger && <StyledIntroScreen triggerCallback={setTrigger} />}

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
      </section>

      <div className="sections">
        <section className="techs">
          <div className="techTitle">
            <h1>Technologies I use</h1>
          </div>
          <div className="content">
            <div className="tech">
              <Image src={htmlLogo} alt="tech" />
            </div>
            <div className="tech">
              <Image src={cssLogo} alt="tech" />
            </div>
            <div className="tech">
              <Image src={jsLogo} alt="tech" />
            </div>
            <div className="tech">
              <Image src={tsLogo} alt="tech" />
            </div>
            <div className="tech">
              <Image src={reactLogo} alt="tech" />
            </div>
            <div className="tech">
              <Image src={nextLogo} alt="tech" />
            </div>
            <div className="tech">
              <Image src={reduxLogo} alt="tech" />
            </div>
            <div className="tech">
              <Image src={scLogo} alt="tech" />
            </div>
            <div className="tech">
              <Image src={twLogo} alt="tech" />
            </div>
            <div className="tech">
              <Image src={qlLogo} alt="tech" />
            </div>
            <div className="tech">
              <Image src={gitLogo} alt="tech" />
            </div>
          </div>
        </section>

        <section className="projects">
          <div className="projectsSection">
            <StyledProjectCard title="Weatherma" image={mock} />
            <StyledProjectCard title="GlassComm" image={mock1} />
            <StyledProjectCard title="QuickSander" image={mock2} />
          </div>
          <div className="projectsTitle">
            <h1>My TOP Projects</h1>
          </div>
        </section>

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
