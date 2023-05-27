import { Input, InputControl, Label } from "./style";

interface IInputProps {
  label: string;
  width?: string;
  placeholder: string;
  type?: string;
  name?: string | undefined;
  defaultValue?: string;
}

export default function InputDefault({
  label,
  width = "400px",
  type = "text",
  placeholder,
  name,
  defaultValue,
}: IInputProps) {
  return (
    <InputControl>
      <Label>{label}</Label>
      <Input
        defaultValue={defaultValue}
        name={name}
        width={width}
        type={type}
        placeholder={placeholder}
      />
    </InputControl>
  );
}
