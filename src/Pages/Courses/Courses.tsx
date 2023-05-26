import { useEffect, useState } from "react";
import ButtonDefault from "../../components/ButtonDefault/ButtonDefault";
import TableMain from "../../components/MainTable/StudentsTable";
import { ModalDefault } from "../../components/ModalDefault/ModalDefault";
import Search from "../../components/Search/Search";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Container, Title } from "../../style";
import { TableTools } from "../Students/style";
import InputDefault from "../../components/InputDefault/InputDefault";
import { Row } from "../../components/ModalDefault/style";
import SelectDefault from "../../components/SelectDefault/SelectDefault";
import api from "../../services/api";
import CourseTable from "../../components/MainTable/CourseTable";

export default function Cousers() {
  const table_headers = ["código", "descrição", "nivel"];
  const [openModalDefault, setOpenModalDefault] = useState(false);

  const [courses, setCourses] = useState([]);

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
        <InputDefault
          label="Código do curso:"
          placeholder="Crie um código para curso..."
          width="300px"
        />
      </Row>
      <Row>
        <InputDefault
          label="Descrição:"
          width="300px"
          placeholder="Descrição..."
        />
      </Row>
      <Row>
        <SelectDefault label="Nível:" option={selectOption} />
      </Row>
    </>
  );

  const getCourses = async () => {
    await api
      .get("/Cursos")
      .then((response) => {
        setCourses(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <>
      <Sidebar />
      <ModalDefault
        open={openModalDefault}
        setOpen={setOpenModalDefault}
        modalTitle="Novo Curso"
        modalBody={modalBody}
      ></ModalDefault>
      <Container>
        <Title>Cursos</Title>
        <TableTools>
          <Search placeholder="Descrição" />
          <ButtonDefault
            onClick={() => setOpenModalDefault(true)}
            text={"Adicionar Curso"}
          />
        </TableTools>
        <CourseTable table_headers={table_headers} courses={courses} />
      </Container>
    </>
  );
}
