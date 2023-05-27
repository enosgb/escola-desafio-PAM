import { SearchInput } from "./style";

interface ISearchProps {
  placeholder: string;
  setSearch: (search: string) => void;
}

export default function Search({ placeholder, setSearch }: ISearchProps) {
  return (
    <SearchInput
      onChange={(e: React.FormEvent) =>
        setSearch((e.target as HTMLInputElement).value)
      }
      placeholder={`🔍      ${placeholder}...`}
    />
  );
}
