import { useState } from "react";
import ButtonDefault from "../../components/ButtonDefault/ButtonDefault";
import TableMain from "../../components/MainTable";
import Search from "../../components/Search/Search";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Container, Title } from "../../style";
import { TableTools } from "../Students/style";
import { ModalDefault } from "../../components/ModalDefault/ModalDefault";
import { Row } from "../../components/ModalDefault/style";

import SelectDefault from "../../components/SelectDefault/SelectDefault";

export default function Registration() {
  const table_headers = ["período", "aluno", "curso"];
  const [openModalDefault, setOpenModalDefault] = useState(false);

  const selectOption = (
    <>
      <option value="B">Básico</option>
      <option value="I">Intermediário</option>
      <option value="A">Avançado</option>
    </>
  );

  const modalBody = (
    <>
      <Row>
        <SelectDefault label="Período:" option={selectOption} />
      </Row>
      <Row>
        <SelectDefault label="Aluno:" option={selectOption} />
      </Row>
      <Row>
        <SelectDefault label="Curso:" option={selectOption} />
      </Row>
    </>
  );

  return (
    <>
      <Sidebar />
      <ModalDefault
        open={openModalDefault}
        setOpen={setOpenModalDefault}
        modalTitle="Nova Matrícula"
        modalBody={modalBody}
      ></ModalDefault>
      <Container>
        <Title>Matrículas</Title>
        <TableTools>
          <Search placeholder="Aluno" />
          <ButtonDefault
            text={"Adicionar Matrícula"}
            onClick={() => setOpenModalDefault(true)}
          />
        </TableTools>
        <TableMain table_headers={table_headers} />
      </Container>
    </>
  );
}
