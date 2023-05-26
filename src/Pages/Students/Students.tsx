import { useEffect, useState } from "react";
import ButtonDefault from "../../components/ButtonDefault/ButtonDefault";
import TableMain from "../../components/MainTable/StudentsTable";
import { ModalDefault } from "../../components/ModalDefault/ModalDefault";

import Search from "../../components/Search/Search";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Container, Title } from "../../style";
import { TableTools } from "./style";
import { Row } from "../../components/ModalDefault/style";
import InputDefault from "../../components/InputDefault/InputDefault";
import api from "../../services/api";

export default function Students() {
  const table_headers = ["nome", "rg", "cpf", "data de nascimento"];
  const [openModalDefault, setOpenModalDefault] = useState(false);

  const [students, setStudents] = useState([]);

  const getStudents = async () => {
    await api
      .get("/Alunos")
      .then((response) => {
        setStudents(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getStudents();
  }, []);

  const modalBody = (
    <>
      <Row>
        <InputDefault label="Nome:" placeholder="Nome..." width="300px" />
      </Row>
      <Row>
        <InputDefault
          label="Data de Nascimento:"
          type="date"
          width="300px"
          placeholder="Data Nascimento"
        />
      </Row>
      <Row>
        <InputDefault label="RG:" placeholder="RG..." width="300px" />
      </Row>
      <Row>
        <InputDefault label="CPF" placeholder="CPF.." width="300px" />
      </Row>
    </>
  );

  return (
    <>
      <Sidebar />
      <ModalDefault
        open={openModalDefault}
        setOpen={setOpenModalDefault}
        modalTitle="Novo Aluno"
        modalBody={modalBody}
      ></ModalDefault>
      <Container>
        <Title>Alunos</Title>
        <TableTools>
          <Search placeholder="Aluno" />
          <ButtonDefault
            onClick={() => setOpenModalDefault(true)}
            text={"Adicionar Aluno"}
          />
        </TableTools>
        <TableMain table_headers={table_headers} students={students} />
      </Container>
    </>
  );
}
