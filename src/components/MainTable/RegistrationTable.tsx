import { Col, Col1, Table, TableHeader, TableRow } from "./style";

interface ITableMainProps {
  table_headers: string[];
  registrations: IRegistrationProps[];
  setOpenModalDefault: (open: boolean) => void;
  setRegistrationEdit: (resgistration: IRegistrationProps) => void;
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

export default function RegitrationTable({
  table_headers,
  registrations,
  setOpenModalDefault,
  setRegistrationEdit,
}: ITableMainProps) {
  const handleEditRegistration = (registration: IRegistrationProps) => {
    setRegistrationEdit(registration);
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
      {registrations.map((registration: IRegistrationProps) => (
        <TableRow
          key={registration.id}
          onClick={() => handleEditRegistration(registration)}
        >
          <Col>
            <Col1>{registration.period_name}</Col1>
          </Col>
          <Col>
            <Col1>{registration.student_name}</Col1>
          </Col>
          <Col>
            <Col1>{registration.course_name}</Col1>
          </Col>
        </TableRow>
      ))}
    </Table>
  );
}
