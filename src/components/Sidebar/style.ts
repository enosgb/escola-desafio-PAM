import { styled } from "styled-components";

export const SidebarFixed = styled.div`
  height: 92%;
  width: 200px;
  position: absolute;
  left: 0;
  top: 5px;
  padding-top: 40px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #5b7cfe;

  div {
    padding: 8px;
    font-size: 24px;
    display: block;
  }
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
