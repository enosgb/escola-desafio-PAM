import { Col, Col1, Table, TableHeader, TableRow } from "./style";

interface ITableMainProps {
  table_headers: string[];
  courses: ICoursesProps[];
  setOpenModalDefault: (open: boolean) => void;
  setCourseEdit: (course: ICoursesProps) => void;
}

interface ICoursesProps {
  id: number;
  course_code: string;
  description: string;
  level: string;
  level_name:string;
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
            <Col1>{course.course_code}</Col1>
          </Col>
          <Col>
            <Col1>{course.description}</Col1>
          </Col>
          <Col>
            <Col1>{course.level_name}</Col1>
          </Col>
        </TableRow>
      ))}
    </Table>
  );
}
