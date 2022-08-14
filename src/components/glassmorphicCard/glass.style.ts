import styled from "styled-components";
import Glass from "./glass";

export const StyledGlass = styled(Glass)`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 40px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 2rem;
  margin: 1rem;
  font-size: 1.5rem;
  color: white;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);
  /* width: 80%; */
  /* aspect-ratio: 16 / 9; */

  h1 {
    line-height: 30px;
    font-size: 3rem;
  }

  h2 {
    /* line-height: 30px; */
    font-size: 2.5rem;
  }

  p {
    line-height: 60px;
    font-size: 2rem;
    margin-top: 4rem;
  }
`;
