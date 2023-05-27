import { ImgPam, Navlink, SidebarContent, SidebarFixed } from "./style";
import LogoPam from "../../assets/pam-logo-gray.png";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const setRoute = (route: string) => {
    navigate(route);
  };

  return (
    <>
      <SidebarFixed>
        <SidebarContent>
          <ImgPam src={LogoPam} />

          <Navlink onClick={() => setRoute("/Alunos")}>Alunos</Navlink>
          <Navlink onClick={() => setRoute("/Cursos")}>Cursos</Navlink>
          <Navlink onClick={() => setRoute("/Matriculas")}>Martrículas</Navlink>
        </SidebarContent>
      </SidebarFixed>
    </>
  );
}
