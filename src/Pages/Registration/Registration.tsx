import ButtonDefault from "../../components/ButtonDefault/ButtonDefault";
import TableMain from "../../components/MainTable";
import Search from "../../components/Search/Search";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Container, Title } from "../../style";
import { TableTools } from "../Students/style";

export default function Registration() {
    const table_headers = ["período","aluno","curso"]
  return (
    <>
      <Sidebar />
      <Container>
        <Title>Matrículas</Title>
        <TableTools>
          <Search placeholder="Aluno" />
          <ButtonDefault text={"Adicionar Matrícula"} />
        </TableTools>
        <TableMain table_headers={table_headers} />
      </Container>
    </>
  );
}
