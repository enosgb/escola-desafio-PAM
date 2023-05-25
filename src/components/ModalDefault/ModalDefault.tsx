import InputDefault from "../InputDefault/InputDefault";
import {
  CloseIcon,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalTitle,
} from "./style";

interface IModalDefaultProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function ModalDefault({ open, setOpen }: IModalDefaultProps) {
  return (
    <>
      {open ? (
        <Modal>
          <ModalContent>
            <CloseIcon onClick={() => setOpen(false)}>&times;</CloseIcon>
            <ModalHeader>
              <ModalTitle> Novo Aluno</ModalTitle>
            </ModalHeader>
            <ModalBody>
              <InputDefault label="Nome:" placeholder="Nome..." />
              <InputDefault
                label="Data de Nascimento:"
                type="date"
                width="200px"
                placeholder="Data Nascimento"
              />
             
            </ModalBody>
          </ModalContent>
        </Modal>
      ) : null}
    </>
  );
}
