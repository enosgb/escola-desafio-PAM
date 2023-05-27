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
  background,
}: IButtonProps) {
  const window_size = window.matchMedia("(min-width: 700px)");

  return (
    <ButtonD
      width={window_size.matches ? undefined : "80px"}
      background={background}
      type={type}
      onClick={onClick}
    >
      {text}
    </ButtonD>
  );
}
