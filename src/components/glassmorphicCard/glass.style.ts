import styled from "styled-components";
import Glass from "./glass";

export const StyledGlass = styled(Glass)`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 2rem;
  margin: 1rem;
  font-size: 1.5rem;
  color: white;
  text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.7);

  h1 {
    line-height: 20px;
  }

  h2 {
    line-height: 30px;
    /* font-size: 1.3rem; */
  }

  p {
    line-height: 40px;
  }
`;
