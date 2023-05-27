import { useEffect, useState } from "react";
import ButtonDefault from "../../components/ButtonDefault/ButtonDefault";
import Search from "../../components/Search/Search";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Container, Title } from "../../style";
import { TableTools } from "../Students/style";
import { ModalDefault } from "../../components/ModalDefault/ModalDefault";
import { Row } from "../../components/ModalDefault/style";

import SelectDefault from "../../components/SelectDefault/SelectDefault";
import RegitrationTable from "../../components/MainTable/RegistrationTable";
import api from "../../services/api";

interface IStudentProps {
  id: number;
  nome: string;
  rg: string;
  cpf: string;
  data_nascimento: string;
}

interface ICourseProps {
  id: number;
  codigo_curso: string;
  descricao: string;
  nivel: string;
  nivel_name: string;
}

interface IRegistrationProps {
  id: number;
  periodo: string;
  aluno: string;
  curso: string;
  periodo_nome: string;
  aluno_nome: string;
  curso_nome: string;
}

export default function Registration() {
  const table_headers = ["período", "aluno", "curso"];
  const [openModalDefault, setOpenModalDefault] = useState(false);

  const [registrations, setRegistrations] = useState([]);
  const [search, setSearch] = useState("");
  const [registrationPeriod, setRegistrationsPeridod] = useState([]);
  const [studentsOptions, setStudentsOptions] = useState([]);
  const [coursesOptions, setCoursesOptions] = useState([]);
  const [registrationEdit, setRegistrationEdit] =
    useState<IRegistrationProps>();

  const getCoursesOptions = async () => {
    await api
      .get(`/Cursos/?search=${search}`)
      .then((response) => {
        let temp = response.data.map((course: ICourseProps) => ({
          value: course.id,
          option: course.descricao,
        }));
        setCoursesOptions(temp);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getStudentsOptions = async () => {
    await api
      .get(`/Alunos/?search=${search}`)
      .then((response) => {
        let temp = response.data.map((student: IStudentProps) => ({
          value: student.id,
          option: student.nome,
        }));

        setStudentsOptions(temp);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getRegistrations = async () => {
    await api
      .get(`/Matriculas/?search=${search}`)
      .then((response) => {
        setRegistrations(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getRegistrationPeriods = async () => {
    await api
      .get(`/matricula/periods/`)
      .then((response) => {
        setRegistrationsPeridod(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (!openModalDefault) {
      getRegistrations();
      getRegistrationPeriods();
      getStudentsOptions();
      getCoursesOptions();
    }
  }, [openModalDefault, search]);

  const modalBody = (
    <>
      <Row>
        <SelectDefault
          defaultValue={registrationEdit?.periodo}
          name="periodo"
          label="Período:"
          options={registrationPeriod}
        />
      </Row>
      <Row>
        <SelectDefault
          defaultValue={registrationEdit?.aluno}
          name="aluno"
          label="Aluno:"
          options={studentsOptions}
        />
      </Row>
      <Row>
        <SelectDefault
          defaultValue={registrationEdit?.curso}
          name="curso"
          label="Curso:"
          options={coursesOptions}
        />
      </Row>
    </>
  );

  return (
    <>
      <Sidebar />
      <ModalDefault
        route="registrations"
        open={openModalDefault}
        setOpen={setOpenModalDefault}
        modalTitle="Nova Matrícula"
        modalBody={modalBody}
        dataEdit={registrationEdit}
      ></ModalDefault>
      <Container>
        <Title>Matrículas</Title>
        <TableTools>
          <Search placeholder="Aluno" setSearch={setSearch} />
          <ButtonDefault
            text={"Adicionar Matrícula"}
            onClick={() => {
              setRegistrationEdit(undefined);
              setOpenModalDefault(true);
            }}
          />
        </TableTools>
        <RegitrationTable
          table_headers={table_headers}
          registrations={registrations}
          setOpenModalDefault={setOpenModalDefault}
          setRegistrationEdit={setRegistrationEdit}
        />
      </Container>
    </>
  );
}
