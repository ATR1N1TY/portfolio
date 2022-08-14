import styled from "styled-components";

export const StyledTechSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & > * {
    height: 100%;
    color: white;
  }

  .techTitle {
    width: 35%;
    /* border: 1px solid green; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 3rem;
    text-overflow: clip;
  }

  .content {
    width: 55%;
    /* border: 1px solid violet; */
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 0.5rem;
    justify-items: center;
    /* align-content: center; */
    align-items: center;
  }

  .content > .tech {
    width: 200px;
    height: 200px;
    transition: all 0.1s;
  }

  .content > .tech:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;