import { SearchInput } from "./style";

interface ISearchProps {
  placeholder: string;
}

export default function Search({ placeholder }: ISearchProps) {
  return <SearchInput placeholder={`🔍      ${placeholder}...`} />;
}
