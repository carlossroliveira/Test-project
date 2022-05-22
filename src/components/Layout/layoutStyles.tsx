import styled from "styled-components";

export const ContainerSC = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  height: 100vh;
  /* padding: 3rem; */

  box-sizing: border-box;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-template-rows: 100px 1fr 100px;
  grid-template-areas:
    "headerSC"
    "mainSC"
    "footerSC";
  background-color: #2b3d54;
`;

export const DivFirstSC = styled.div`
  /* height: 100vh;
  gap: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #2B3D54; */
`;

export const DivSecondSC = styled.div`
  /* height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4AA9DA; */
`;
