import { Col, Col1, Table, TableHeader, TableRow } from "./style";

interface ITableMainProps {
  table_headers: string[];
  registrations: IRegistrationProps[];
}

interface IRegistrationProps {
  id: number;
  periodo: string;
  aluno: string;
  curso: string;
}

export default function RegitrationTable({
  table_headers,
  registrations,
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
      {registrations.map((registration: IRegistrationProps) => (
        <TableRow key={registration.id}>
          <Col>
            <Col1>{registration.periodo}</Col1>
          </Col>
          <Col>
            <Col1>{registration.aluno}</Col1>
          </Col>
          <Col>
            <Col1>{registration.curso}</Col1>
          </Col>
        </TableRow>
      ))}
    </Table>
  );
}
