import { InputControl, Label, Select } from "./style";

interface ICourseLevels {
  value: string;
  option: string;
}

interface ISelectProps {
  label: string;
  options: ICourseLevels[];
  name: string;
  defaultValue?: string;
}

export default function SelectDefault({
  label,
  options,
  name,
  defaultValue,
}: ISelectProps) {
  return (
    <InputControl>
      <Label>{label}</Label>
      <Select defaultValue={defaultValue} name={name}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.option}
          </option>
        ))}
      </Select>
    </InputControl>
  );
}
