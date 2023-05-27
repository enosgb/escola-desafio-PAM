import { css, styled } from "styled-components";

export const SidebarCollapse: any = styled.div`
  width: 230px;
  border-radius: 10px;
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;

  transition: visibility 0s, width 1s, height 1s;
  ${(props: any) =>
    props.open &&
    css`
      height: 0;
      box-shadow: none;
      width: 70px;
    `};
`;

export const SidebarFixed: any = styled.div`
  visibility: hidden;
  height: 100vh;
  width: 80px;
  position: absolute;
  left: 0;
  top: 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  transition: visibility 0s, width 1s;
  div {
    padding: 8px;
    font-size: 24px;
    display: block;
  }

  ${(props: any) =>
    props.open &&
    css`
      width: 240px;
      visibility: visible;
    `}
`;
export const SidebarContent = styled.div`
  margin-top: 50px;
`;

export const ImgPam = styled.img`
  width: 150px;
`;

export const MenuLink = styled.div`
  margin-top: 50px;
`;

export const Navlink = styled.div`
  color: black;
  border-radius: 10px;
  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
  margin-bottom: 5px;
  cursor: pointer;
  &:hover {
    outline: auto;
    color: orange;
  }
`;

export const CloseIcon = styled.div`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;

  cursor: pointer;
`;

export const MenuIcon: any = styled.div`
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 5px;
  border: none;
  &:hover {
    transform: scale(1.05);
  }
  ${(props: any) =>
    props.open &&
    css`
      border: 2px solid orange;
    `}
`;

export const Icons = styled.img`
  cursor: pointer;
  margin-top: 10px;
  width: 50px;
  margin-bottom: 10px;
`;
