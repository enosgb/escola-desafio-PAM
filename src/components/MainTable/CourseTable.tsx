import { Col, Col1, Table, TableHeader, TableRow } from "./style";

interface ITableMainProps {
  table_headers: string[];
  courses: ICoursesProps[];
  setOpenModalDefault: (open: boolean) => void;
  setCourseEdit: (course: ICoursesProps) => void;
}

interface ICoursesProps {
  id: number;
  codigo_curso: string;
  descricao: string;
  nivel: string;
  nivel_name:string;
}

export default function CourseTable({
  table_headers,
  courses,
  setOpenModalDefault,
  setCourseEdit,
}: ITableMainProps) {
  const handleEditCourse = (course: ICoursesProps) => {
    setCourseEdit(course);
    setOpenModalDefault(true);
  };

  return (
    <Table>
      <TableHeader>
        {table_headers.map((header: string, index) => (
          <Col key={index}>
            <Col1>{header}</Col1>
          </Col>
        ))}
      </TableHeader>
      {courses.map((course: ICoursesProps) => (
        <TableRow key={course.id} onClick={() => handleEditCourse(course)}>
          <Col>
            <Col1>{course.codigo_curso}</Col1>
          </Col>
          <Col>
            <Col1>{course.descricao}</Col1>
          </Col>
          <Col>
            <Col1>{course.nivel_name}</Col1>
          </Col>
        </TableRow>
      ))}
    </Table>
  );
}
