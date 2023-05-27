import React from "react";
import { ButtonD } from "./style";

export interface IButtonProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset" | undefined;
  background?: string;
}

export default function ButtonDefault({
  text,
  onClick,
  type = "button",
  background
}: IButtonProps) {
  return (
    <ButtonD background={background} type={type} onClick={onClick}>
      {text}
    </ButtonD>
  );
}
