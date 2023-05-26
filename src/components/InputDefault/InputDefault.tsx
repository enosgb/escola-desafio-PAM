import { Input, InputControl, Label } from "./style";

interface IInputProps {
  label: string;
  width?: string;
  placeholder: string;
  type?: string;
  name?: string | undefined;
}

export default function InputDefault({
  label,
  width = "400px",
  type = "text",
  placeholder,
  name,
}: IInputProps) {
  return (
    <InputControl>
      <Label>{label}</Label>
      <Input name={name} width={width} type={type} placeholder={placeholder} />
    </InputControl>
  );
}
