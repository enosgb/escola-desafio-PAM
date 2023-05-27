import { useEffect, useState } from "react";
import ButtonDefault from "../../components/ButtonDefault/ButtonDefault";
import { ModalDefault } from "../../components/ModalDefault/ModalDefault";
import Search from "../../components/Search/Search";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Container, TableTools, Title } from "../../style";
import InputDefault from "../../components/InputDefault/InputDefault";
import { Row } from "../../components/ModalDefault/style";
import SelectDefault from "../../components/SelectDefault/SelectDefault";
import api from "../../services/api";
import CourseTable from "../../components/MainTable/CourseTable";

interface ICourseProps {
  id: number;
  codigo_curso: string;
  descricao: string;
  nivel: string;
  nivel_name: string;
}

interface courseLevelProps {
  value: string;
  option: string;
}

export default function Cousers() {
  const table_headers = ["código", "descrição", "nivel"];
  const [openModalDefault, setOpenModalDefault] = useState(false);

  const [courses, setCourses] = useState([]);
  const [courseLevels, setCourseLevels] = useState([]);
  const [search, setSearch] = useState("");
  const [courseEdit, setCourseEdit] = useState<ICourseProps>();
  const [sidebarVisible, setSidebarvisible] = useState(false);
  const window_size = window.matchMedia("(min-width: 700px)");

  const modalBody = (
    <>
      <Row>
        <InputDefault
          name="codigo_curso"
          label="Código do curso:"
          placeholder="Crie um código para curso..."
          width="300px"
          defaultValue={courseEdit?.codigo_curso}
        />
      </Row>
      <Row>
        <InputDefault
          name="descricao"
          label="Descrição:"
          width="300px"
          placeholder="Descrição..."
          defaultValue={courseEdit?.descricao}
        />
      </Row>
      <Row>
        <SelectDefault
          defaultValue={courseEdit?.nivel}
          name="nivel"
          label="Nível:"
          options={courseLevels}
        />
      </Row>
    </>
  );

  const getCourses = async () => {
    await api
      .get(`/Cursos/?search=${search}`)
      .then((response) => {
        setCourses(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCourseLevels = async () => {
    await api
      .get(`/curso/levels/`)
      .then((response) => {
        let temp = response.data.map((level: courseLevelProps) => ({
          value: level.value,
          option: level.option,
        }));
        setCourseLevels(temp);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (!openModalDefault) {
      getCourses();
      getCourseLevels();
    }
  }, [openModalDefault, search]);

  return (
    <>
      <Sidebar visibility={sidebarVisible} setVisibility={setSidebarvisible} />
      <ModalDefault
        route="courses"
        open={openModalDefault}
        setOpen={setOpenModalDefault}
        modalTitle="Novo Curso"
        modalBody={modalBody}
        dataEdit={courseEdit}
      ></ModalDefault>
      <Container>
        <Title>Cursos</Title>
        <TableTools>
          <Search setSearch={setSearch} placeholder="Descrição" />
          <ButtonDefault
            onClick={() => {
              setCourseEdit(undefined);
              setOpenModalDefault(true);
            }}
            text={window_size.matches ? "Adicionar Curso" : "Novo"}
          />
        </TableTools>
        <CourseTable
          table_headers={table_headers}
          courses={courses}
          setOpenModalDefault={setOpenModalDefault}
          setCourseEdit={setCourseEdit}
        />
      </Container>
    </>
  );
}
