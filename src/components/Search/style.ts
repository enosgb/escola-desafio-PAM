import { styled } from "styled-components";

export const SearchInput = styled.input`
  box-sizing: border-box;
  width: 250px;
  height: 35px;
  background: #f5f7fb;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 18px 18px 18px 10px;
  
  font-size: 19px;
  &:hover{
    outline: none;
  }
  &:active{
    outline: none;
  }
  &:focus{
    outline: none;
  }
`;
