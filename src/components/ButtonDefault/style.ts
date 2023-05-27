import { styled } from "styled-components";

export const ButtonD: any = styled.button`
  display: flex;
  align-items: center;  
  justify-content: center;
  padding: 18px 18px 18px 10px;
  width: ${(props: any) => (props.width ? props.width : "220px")};
  height: 35px;
  font-size: 18px;
  background: ${(props: any) =>
    props.background ? props.background : "#5b7cfe"};
  color: white;

  &:hover {
    transition: 0.5s;
    opacity: 0.5;
  }
`;
