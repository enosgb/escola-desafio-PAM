import { Col, Col1, Table, TableHeader, TableRow } from "./style";

interface ITableMainProps {
  table_headers: string[];
  courses: ICoursesProps[];
}

interface ICoursesProps {
  id: number;
  codigo_curso: string;
  descricao: string;
  nivel: string;
}

export default function CourseTable({
  table_headers,
  courses,
}: ITableMainProps) {
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
        <TableRow key={course.id}>
          <Col>
            <Col1>{course.codigo_curso}</Col1>
          </Col>
          <Col>
            <Col1>{course.descricao}</Col1>
          </Col>
          <Col>
            <Col1>{course.nivel}</Col1>
          </Col>
        </TableRow>
      ))}
    </Table>
  );
}
