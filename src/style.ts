import { styled } from "styled-components";

export const TableTools = styled.div`
  margin: 100px 0 20px 0;
  display: flex;
  justify-content: space-between;
`;


export const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: start;

  min-height: calc(100vh - 110px);
  margin-bottom: 43px !important;
  @media only screen and (max-width: 600px) {
    margin: 0 auto;
  }

  /* /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    margin: 0 auto;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    margin: 0 auto;
  }
  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    margin: 0 auto;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    margin: 0 auto;
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

export const Content = styled.div``;
