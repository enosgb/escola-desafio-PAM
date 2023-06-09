import { Col, Col1, Table, TableHeader, TableRow } from "./style";

interface ITableMainProps {
  table_headers: string[];
  students: IStudentProps[];
  setOpenModalDefault: (open: boolean) => void;
  setStudentEdit: (student: IStudentProps) => void;
}

interface IStudentProps {
  id: number;
  name: string;
  rg: string;
  cpf: string;
  birth_date: string;
}

export default function StudentsTable({
  table_headers,
  students,
  setOpenModalDefault,
  setStudentEdit,
}: ITableMainProps) {
  const handleEditStudent = (student: IStudentProps) => {
    setStudentEdit(student);
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
      {students.map((student: IStudentProps) => (
        <TableRow onClick={() => handleEditStudent(student)} key={student.id}>
          <Col>
            <Col1>{student.name}</Col1>
          </Col>
          <Col>
            <Col1>{student.rg}</Col1>
          </Col>
          <Col>
            <Col1>{student.cpf}</Col1>
          </Col>
          <Col>
            <Col1>
              {new Date(student.birth_date).toLocaleString().slice(0, 10)}
            </Col1>
          </Col>
        </TableRow>
      ))}
    </Table>
  );
}
