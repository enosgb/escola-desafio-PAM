import { styled } from "styled-components";

export const Container = styled.div`
 display: flex;
  flex-direction: column;
  margin: 0 200px;
  min-height: calc(100vh - 100px);
  margin-bottom: 43px !important;
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
