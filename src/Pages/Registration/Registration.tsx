import { useEffect, useState } from "react";
import ButtonDefault from "../../components/ButtonDefault/ButtonDefault";
import Search from "../../components/Search/Search";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Container, TableTools, Title } from "../../style";
import { ModalDefault } from "../../components/ModalDefault/ModalDefault";
import { Row } from "../../components/ModalDefault/style";

import SelectDefault from "../../components/SelectDefault/SelectDefault";
import RegitrationTable from "../../components/MainTable/RegistrationTable";
import api from "../../services/api";

interface IStudentProps {
  id: number;
  name: string;
  rg: string;
  cpf: string;
  birth_date: string;
}

interface ICourseProps {
  id: number;
  course_code: string;
  description: string;
  level: string;
  level_name: string;
}

interface IRegistrationProps {
  id: number;
  period: string;
  student: string;
  course: string;
  period_name: string;
  student_name: string;
  course_name: string;
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

  const [sidebarVisible, setSidebarvisible] = useState(false);
  const window_size = window.matchMedia("(min-width: 700px)");

  const getCoursesOptions = async () => {
    await api
      .get(`/Courses/?search=${search}`)
      .then((response) => {
        let temp = response.data.map((course: ICourseProps) => ({
          value: course.id,
          option: course.description,
        }));
        setCoursesOptions(temp);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getStudentsOptions = async () => {
    await api
      .get(`/Students/?search=${search}`)
      .then((response) => {
        let temp = response.data.map((student: IStudentProps) => ({
          value: student.id,
          option: student.name,
        }));

        setStudentsOptions(temp);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getRegistrations = async () => {
    await api
      .get(`/Registrations/?search=${search}`)
      .then((response) => {
        setRegistrations(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getRegistrationPeriods = async () => {
    await api
      .get(`/registration/periods/`)
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
          defaultValue={registrationEdit?.period}
          name="period"
          label="Período:"
          options={registrationPeriod}
        />
      </Row>
      <Row>
        <SelectDefault
          defaultValue={registrationEdit?.student}
          name="student"
          label="Aluno:"
          options={studentsOptions}
        />
      </Row>
      <Row>
        <SelectDefault
          defaultValue={registrationEdit?.course}
          name="course"
          label="Curso:"
          options={coursesOptions}
        />
      </Row>
    </>
  );

  return (
    <>
      <Sidebar visibility={sidebarVisible} setVisibility={setSidebarvisible} />
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
            text={window_size.matches ? "Adicionar Matrícula" : "Novo"}
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
