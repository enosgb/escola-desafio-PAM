import { styled } from "styled-components";

export const SidebarFixed = styled.div`
  height: 100%;
  width: 240px;
  position: absolute;
  left: 0;
  top: 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #5b7cfe;

  div {
    padding: 8px;
    font-size: 24px;
    display: block;
  }

  @media only screen and (max-width: 600px) {
    visibility: hidden;
  }

  /* /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    visibility: hidden;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    visibility: hidden;
  }
  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    visibility: visible;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    visibility: visible;
  }
`;
export const SidebarContent = styled.div`
  margin-top: 20px;
`;

export const ImgPam = styled.img`
  width: 150px;
`;

export const Navlink = styled.div`
  color: white;

  cursor: pointer;
  &:hover {
    color: orange;
  }
`;
