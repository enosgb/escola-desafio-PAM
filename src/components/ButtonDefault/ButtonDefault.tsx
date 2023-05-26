import React from "react";
import { ButtonD } from "./style";

export interface IButtonProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset" | undefined;
}

export default function ButtonDefault({ text, onClick, type="button" }: IButtonProps) {
  return (
    <ButtonD type={type} onClick={onClick}>
      {text}
    </ButtonD>
  );
}
