import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: start;
  min-height: calc(100vh - 120px);
  margin-bottom: 43px !important;
  @media only screen and (max-width: 600px) {
    margin: 0;
  }

  /* /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    margin: 0;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    margin: 0;
  }
  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    margin: 0 200px;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    margin: 0 200px;
  }
`;

export const Title = styled.h2`
  top: 5px;
  font-size: 50px;
  margin: 20px 0;
  text-align: center;
  small {
    font-size: 0.5em;
  }
`;
