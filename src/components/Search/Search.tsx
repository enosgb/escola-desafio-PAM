import { SearchInput } from "./style";

interface ISearchProps {
  placeholder: string;
  setSearch: (search: string) => void;
}

export default function Search({ placeholder, setSearch }: ISearchProps) {
  const window_size = window.matchMedia("(min-width: 700px)");
  return (
    <SearchInput
      width={window_size.matches ? undefined : "150px"}
      onChange={(e: React.FormEvent) =>
        setSearch((e.target as HTMLInputElement).value)
      }
      placeholder={`🔍    ${placeholder}...`}
    />
  );
}
