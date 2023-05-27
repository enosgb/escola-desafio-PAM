import { css, styled } from "styled-components";


export const Modal:any = styled.div`
  visibility: hidden;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height:  100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;
  ${(props: any) =>
    props.open &&
    css`
    opacity: 1;
      visibility: visible;
    `}
`;

export const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 400px;
  border-radius: 10px;
  @media only screen and (max-width: 600px) {
    width:300px;
  }

  /* /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    width:400px;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    width:400px;
  }
  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    width:400px;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    width:400px;
  }
`;

export const CloseIcon = styled.div`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;

  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const ModalTitle = styled.h2`
  font-size: 24px;
`;

export const ModalHeader = styled.div``;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 30px;
`;

export const ModalFooter = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  column-gap: 10px;
`;
