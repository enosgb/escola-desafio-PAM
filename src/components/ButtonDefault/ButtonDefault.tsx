import React from "react";
import { ButtonD } from "./style";

export interface IButtonProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function ButtonDefault({ text, onClick }: IButtonProps) {
  return <ButtonD onClick={onClick}>{text}</ButtonD>;
}
