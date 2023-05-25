import { styled } from "styled-components";

export const InputControl = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-right: 15px;
`;

export const Label = styled.p`
  font-size: 18px;
  margin-bottom: 0px;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: ${(props) => props.width};
  height: 35px;
  background: #f5f7fb;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 18px 18px 18px 10px;

  font-size: 19px;
  &:hover {
    outline: none;
  }
  &:active {
    outline: none;
  }
  &:focus {
    outline: none;
  }
`;
