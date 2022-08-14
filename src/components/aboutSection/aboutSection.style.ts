import styled from "styled-components";
import mee from "../../../public/assets/pictures/me.jpg";

export const StyledAboutSection = styled.section`
  display: flex;
  color: white;
  width: 100vw;
  height: 100vh;

  .aboutSection {
    height: 100%;
    width: 47%;
    color: black;
    padding: 1rem;
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .aboutSection > p {
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
    font-weight: bold;
  }

  .cooperation {
    border: 3px solid rgba(0, 0, 0, 1);
    border-radius: 60px;
    padding: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .aboutTitle {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 53%;
    font-size: 2rem;
    text-shadow: 2px 2px 15px rgba(0, 0, 0, 0.8);
  }

  .aboutTitle h1 {
    position: relative;
    left: -15px;
    font-size: 4rem;
  }

  .picture {
    width: 500px;
    height: 500px;
    background-image: url(${mee.src});
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 50%;
    position: relative;
    right: -100px;
  }
`;
