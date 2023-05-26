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
}

interface IStudentProps {
  id: number;
  nome: string;
  rg: string;
  cpf: string;
  data_nascimento: string;
}

export function ModalDefault({
  modalTitle,
  open,
  setOpen,
  modalBody,
}: IModalDefaultProps) {
  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    const responseBody = {} as any;
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    formData.forEach((value, property) => (responseBody[property] = value));
    console.log("asdasd", responseBody);
    addStudent(responseBody);
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

  return (
    <>
      {open ? (
        <Modal>
          <form onSubmit={(e) => handleSubmitForm(e)}>
            <ModalContent>
              <CloseIcon onClick={() => setOpen(false)}>&times;</CloseIcon>
              <ModalHeader>
                <ModalTitle> {modalTitle}</ModalTitle>
              </ModalHeader>
              {modalBody}
              <ModalFooter>
                <ButtonDefault type="submit" text="Salvar" />
              </ModalFooter>
            </ModalContent>
          </form>
        </Modal>
      ) : null}
    </>
  );
}
