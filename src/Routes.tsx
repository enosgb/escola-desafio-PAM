import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Students from "./Pages/Students/Students";
import Registration from "./Pages/Registration/Registration";
import Cousers from "./Pages/Courses/Courses";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Students />} />
        <Route path="/Alunos" element={<Students />} />
        <Route path="/Cursos" element={<Cousers />} />
        <Route path="/Matriculas" element={<Registration />} />
      </Routes>
    </Router>
  );
}
