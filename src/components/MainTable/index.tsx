import {
  Col,
  Col1,
  Col2,
  Col3,
  Col4,
  Table,
  TableHeader,
  TableRow,
} from "./style";

interface ITableMainProps {
  table_headers: string[];
}

export default function TableMain({ table_headers }: ITableMainProps) {
  return (
    <Table>
      <TableHeader>
        {table_headers.map((header: string, index) => (
          <Col key={index}>
            <Col1>{header}</Col1>
          </Col>
        ))}
      </TableHeader>
      <TableRow>
        <Col>
          <Col1>Enos</Col1>
        </Col>
        <Col>
          <Col2>31.126.842-9</Col2>
        </Col>
        <Col>
          <Col3>189.325.797-50</Col3>
        </Col>
        <Col>
          <Col4>29/07/2000</Col4>
        </Col>
      </TableRow>
    </Table>
  );
}
