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

export function ModalDefault({
  modalTitle,
  open,
  setOpen,
  modalBody,
}: IModalDefaultProps) {
  return (
    <>
      {open ? (
        <Modal>
          <ModalContent>
            <CloseIcon onClick={() => setOpen(false)}>&times;</CloseIcon>
            <ModalHeader>
              <ModalTitle> {modalTitle}</ModalTitle>
            </ModalHeader>
            {modalBody}
            <ModalFooter>
              <ButtonDefault text="Salvar" />
            </ModalFooter>
          </ModalContent>
        </Modal>
      ) : null}
    </>
  );
}
