import ButtonDefault from "../../components/ButtonDefault/ButtonDefault";
import TableMain from "../../components/MainTable";
import Search from "../../components/Search/Search";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Container, Title } from "../../style";
import { TableTools } from "../Students/style";

export default function Cousers() {
  const table_headers = ["código", "descrição", "nivel"];
  return (
    <>
      <Sidebar />
      <Container>
        <Title>Cursos</Title>
        <TableTools>
          <Search placeholder="Descrição" />
          <ButtonDefault text={"Adicionar Curso"} />
        </TableTools>
        <TableMain table_headers={table_headers} />
      </Container>
    </>
  );
}
