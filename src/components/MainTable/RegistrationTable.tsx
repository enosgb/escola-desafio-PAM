import { Col, Col1, Table, TableHeader, TableRow } from "./style";

interface ITableMainProps {
  table_headers: string[];
  registrations: IRegistrationProps[];
  setOpenModalDefault: (open: boolean) => void;
  setRegistrationEdit: (resgistration: IRegistrationProps) => void;
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
            <Col1>{registration.periodo_nome}</Col1>
          </Col>
          <Col>
            <Col1>{registration.aluno_nome}</Col1>
          </Col>
          <Col>
            <Col1>{registration.curso_nome}</Col1>
          </Col>
        </TableRow>
      ))}
    </Table>
  );
}
