import { Col, Col1, Table, TableHeader, TableRow } from "./style";

interface ITableMainProps {
  table_headers: string[];
  students: IStudentProps[];
}

interface IStudentProps {
  id: number;
  nome: string;
  rg: string;
  cpf: string;
  data_nascimento: string;
}

export default function StudentsTable({
  table_headers,
  students,
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
      {students.map((student: IStudentProps) => (
        <TableRow key={student.id}>
          <Col>
            <Col1>{student.nome}</Col1>
          </Col>
          <Col>
            <Col1>{student.rg}</Col1>
          </Col>
          <Col>
            <Col1>{student.cpf}</Col1>
          </Col>
          <Col>
            <Col1>
              {new Date(student.data_nascimento).toLocaleString().slice(0, 10)}
            </Col1>
          </Col>
        </TableRow>
      ))}
    </Table>
  );
}
