import { InputControl, Label, Select } from "./style";

interface ISelectProps {
  label: string;
  option:React.JSX.Element
}

export default function SelectDefault({ label,option }: ISelectProps) {
  return (
    <InputControl>
      <Label>{label}</Label>
      <Select>
        {option}
      </Select>
    </InputControl>
  );
}
