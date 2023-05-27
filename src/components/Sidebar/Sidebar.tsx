import {
  CloseIcon,
  ImgPam,
  Icons,
  MenuLink,
  Navlink,
  SidebarCollapse,
  SidebarContent,
  SidebarFixed,
  MenuIcon,
} from "./style";
import LogoPam from "../../assets/pam-logo-gray.png";
import { useLocation, useNavigate } from "react-router-dom";
import arrowLeft from "../../assets/arrow-left.png";
import studentIcon from "../../assets/student.png";
import courseIcon from "../../assets/agenda.png";
import registrationIcon from "../../assets/contact-book.png";

interface ISidebarProps {
  visibility: boolean;
  setVisibility: (visibility: boolean) => void;
}

export default function Sidebar({ visibility, setVisibility }: ISidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const setRoute = (route: string) => {
    navigate(route);
  };

  const window_size = window.matchMedia("(min-width: 700px)");

  return (
    <>
      <SidebarCollapse open={!visibility}>
        {
          <MenuIcon>
            <Icons onClick={() => setVisibility(true)} src={arrowLeft} />
          </MenuIcon>
        }
        {window_size.matches ? (
          <MenuIcon open={location.pathname == "/Alunos"}>
            <Icons onClick={() => navigate("/Alunos")} src={studentIcon} />
          </MenuIcon>
        ) : null}
        {window_size.matches ? (
          <MenuIcon open={location.pathname == "/Cursos"}>
            <Icons onClick={() => navigate("/Cursos")} src={courseIcon} />
          </MenuIcon>
        ) : null}
        {window_size.matches ? (
          <MenuIcon open={location.pathname == "/Matriculas"}>
            <Icons
              onClick={() => navigate("/Matriculas")}
              src={registrationIcon}
            />
          </MenuIcon>
        ) : null}
      </SidebarCollapse>
      <SidebarFixed open={visibility}>
        <CloseIcon onClick={() => setVisibility(false)}>X</CloseIcon>
        <SidebarContent>
          <ImgPam src={LogoPam} />
          <MenuLink>
            <Navlink onClick={() => setRoute("/Alunos")}>Alunos</Navlink>
            <Navlink onClick={() => setRoute("/Cursos")}>Cursos</Navlink>
            <Navlink onClick={() => setRoute("/Matriculas")}>
              Martrículas
            </Navlink>
          </MenuLink>
        </SidebarContent>
      </SidebarFixed>
    </>
  );
}
