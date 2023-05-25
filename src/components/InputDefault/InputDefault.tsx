import { Input, InputControl, Label } from "./style";

interface IInputProps {
  label:string;
  width?: string;
  placeholder: string;
  type?: string;
}

export default function InputDefault({
  label,
  width="400px",
  type="text",
  placeholder,
}: IInputProps) {
 


  return (
    <InputControl>
    <Label>{label}</Label>
      <Input width={width} type={type} placeholder={placeholder} />
    </InputControl>
  );
}
