import styled from "styled-components";
import ProgressPoints from "./progressPoints";

export const StyledProgressPoints = styled(ProgressPoints)`
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  .step {
    width: 25px;
    height: 25px;
    margin: 0.4rem;
    border-radius: 50%;
  }

  .step.still {
    filter: opacity(0.5);
  }
`;
