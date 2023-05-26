import { styled } from "styled-components";

export const Modal = styled.div`
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 400px;
  border-radius: 10px;
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
`;

export const ModalFooter = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;
