import api from "../../services/api";
import ButtonDefault from "../ButtonDefault/ButtonDefault";
import {
  CloseIcon,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "./style";

interface IModalDefaultProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  modalTitle: string;
  modalBody: React.JSX.Element;
  dataEdit?: any;
  route: string;
}

interface IStudentProps {
  id: number;
  nome: string;
  rg: string;
  cpf: string;
  data_nascimento: string;
}

interface ICourseProps {
  id: number;
  codigo_curso: string;
  descricao: string;
  nivel: string;
}

export function ModalDefault({
  route,
  modalTitle,
  open,
  setOpen,
  modalBody,
  dataEdit,
}: IModalDefaultProps) {
  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    const responseBody = {} as any;
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    formData.forEach((value, property) => (responseBody[property] = value));

    if (route === "students") {
      if (dataEdit) {
        updateStudent(responseBody);
      } else {
        addStudent(responseBody);
      }
    } else if (route == "courses") {
      if (dataEdit) {
        updateCourse(responseBody);
      } else {
        addCourse(responseBody);
      }
    } else if (route == "registrations") {
      if (dataEdit) {
        updateRegistration(responseBody);
      } else {
        addRegistration(responseBody);
      }
    }
  };

  const addStudent = async (data: IStudentProps) => {
    const headers = { "Content-Type": "application/json" };
    await api
      .post("/Alunos/", data, { headers: headers })
      .then(() => {
        setOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateStudent = async (data: IStudentProps) => {
    const headers = { "Content-Type": "application/json" };
    await api
      .put(`/Alunos/${dataEdit?.id}/`, data, { headers: headers })
      .then(() => {
        setOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteStudent = async () => {
    await api
      .delete(`/Alunos/${dataEdit?.id}/`)
      .then(() => {
        setOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addCourse = async (data: ICourseProps) => {
    const headers = { "Content-Type": "application/json" };
    await api
      .post("/Cursos/", data, { headers: headers })
      .then(() => {
        setOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateCourse = async (data: ICourseProps) => {
    const headers = { "Content-Type": "application/json" };
    await api
      .put(`/Cursos/${dataEdit?.id}/`, data, { headers: headers })
      .then(() => {
        setOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteCourse = async () => {
    await api
      .delete(`/Cursos/${dataEdit?.id}/`)
      .then(() => {
        setOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addRegistration = async (data: ICourseProps) => {
    const headers = { "Content-Type": "application/json" };
    await api
      .post("/Matriculas/", data, { headers: headers })
      .then(() => {
        setOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateRegistration = async (data: ICourseProps) => {
    const headers = { "Content-Type": "application/json" };
    await api
      .put(`/Matriculas/${dataEdit?.id}/`, data, { headers: headers })
      .then(() => {
        setOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteRegistration = async () => {
    await api
      .delete(`/Matriculas/${dataEdit?.id}/`)
      .then(() => {
        setOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteData = (route: string) => {
    if (route === "students") {
      deleteStudent();
    } else if (route == "courses") {
      deleteCourse();
    } else if (route == "registrations") {
      deleteRegistration();
    }
  };

  return (
    <>
      <Modal open={open}>
        <form onSubmit={(e) => handleSubmitForm(e)}>
          <ModalContent>
            <CloseIcon onClick={() => setOpen(false)}>&times;</CloseIcon>
            <ModalHeader>
              <ModalTitle> {modalTitle}</ModalTitle>
            </ModalHeader>
            {open ? modalBody : null}
            <ModalFooter>
              {dataEdit ? (
                <ButtonDefault
                  onClick={() => deleteData(route)}
                  background="#d9544d"
                  type="button"
                  text="Excluir"
                />
              ) : null}

              <ButtonDefault type="submit" text="Salvar" />
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
}
