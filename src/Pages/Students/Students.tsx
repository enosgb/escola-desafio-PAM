import { useState } from "react";
import ButtonDefault from "../../components/ButtonDefault/ButtonDefault";
import TableMain from "../../components/MainTable";
import { ModalDefault } from "../../components/ModalDefault/ModalDefault";

import Search from "../../components/Search/Search";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Container, Title } from "../../style";
import { TableTools } from "./style";

export default function Students() {
  const table_headers = ["nome", "rg", "cpf", "data de nascimento"];
  const [openModalDefault, setOpenModalDefault] = useState(false);

  return (
    <>
      <Sidebar />
      <ModalDefault open={openModalDefault} setOpen={setOpenModalDefault}></ModalDefault>
      <Container>
        <Title>Alunos</Title>
        <TableTools>
          <Search placeholder="Aluno" />
          <ButtonDefault
            onClick={() => setOpenModalDefault(true)}
            text={"Adicionar Aluno"}
          />
        </TableTools>
        <TableMain table_headers={table_headers} />
      </Container>
    </>
  );
}
