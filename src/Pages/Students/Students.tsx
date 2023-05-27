import { useEffect, useState } from "react";
import ButtonDefault from "../../components/ButtonDefault/ButtonDefault";
import { ModalDefault } from "../../components/ModalDefault/ModalDefault";

import Search from "../../components/Search/Search";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Container, Title } from "../../style";
import { TableTools } from "./style";
import { Row } from "../../components/ModalDefault/style";
import InputDefault from "../../components/InputDefault/InputDefault";
import api from "../../services/api";
import StudentsTable from "../../components/MainTable/StudentsTable";

interface IStudentProps {
  id: number;
  nome: string;
  rg: string;
  cpf: string;
  data_nascimento: string;
}

export default function Students() {
  const table_headers = ["nome", "rg", "cpf", "data de nascimento"];
  const [openModalDefault, setOpenModalDefault] = useState(false);

  const [students, setStudents] = useState([]);
  const [studentEdit, setStudentEdit] = useState<IStudentProps>();
  const [search, setSearch] = useState("");

  const getStudents = async () => {
    await api
      .get(`/Alunos/?search=${search}`)
      .then((response) => {
        setStudents(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (!openModalDefault) {
      getStudents();
    }
  }, [openModalDefault, search]);

  const modalBody = (
    <>
      <Row>
        <InputDefault
          defaultValue={studentEdit?.nome ?? ""}
          name="nome"
          label="Nome:"
          placeholder="Nome..."
          width="300px"
        />
      </Row>
      <Row>
        <InputDefault
          name="data_nascimento"
          label="Data de Nascimento:"
          type="date"
          width="300px"
          placeholder="Data Nascimento"
          defaultValue={studentEdit?.data_nascimento ?? ""}
        />
      </Row>
      <Row>
        <InputDefault
          defaultValue={studentEdit?.rg ?? ""}
          name="rg"
          label="RG:"
          placeholder="RG..."
          width="300px"
        />
      </Row>
      <Row>
        <InputDefault
          name="cpf"
          label="CPF"
          placeholder="CPF.."
          width="300px"
          defaultValue={studentEdit?.cpf ?? ""}
        />
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
        dataEdit={studentEdit}
        route="students"
      ></ModalDefault>
      <Container>
        <Title>Alunos</Title>
        <TableTools>
          <Search setSearch={setSearch} placeholder="Aluno" />
          <ButtonDefault
            onClick={() => {
              setStudentEdit(undefined);
              setOpenModalDefault(true);
            }}
            text={"Adicionar Aluno"}
          />
        </TableTools>
        <StudentsTable
          table_headers={table_headers}
          students={students}
          setOpenModalDefault={setOpenModalDefault}
          setStudentEdit={setStudentEdit}
        />
      </Container>
    </>
  );
}
