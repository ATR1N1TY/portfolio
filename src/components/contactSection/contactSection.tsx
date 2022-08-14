import React, { useState, useEffect } from "react";
import { StyledContactSection } from "./contactSection.style";
import { MdCopyAll } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { MdDone } from "react-icons/md";

const ContactSection = () => {
  const [showElement, setShowElement] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setShowElement(false);
    }, 1000);
  }, [showElement]);

  return (
    <StyledContactSection className="contact">
      <div className="contactTitle">
        <h1>Contact Me</h1>
      </div>

      <div className="contactContent">
        <div className="social">
          <a
            href="https://www.linkedin.com/in/saba-i-069924138/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/ATR1N1TY"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
          <a
            href="https://twitter.com/atrinitos"
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter />
          </a>
          <a
            href="https://www.youtube.com/indiespace"
            target="_blank"
            rel="noreferrer"
          >
            <BsYoutube />
          </a>
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
    </StyledContactSection>
  );
};

export default ContactSection;
