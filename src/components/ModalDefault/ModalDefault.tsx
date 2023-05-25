import { CloseIcon, Modal, ModalContent } from "./style";

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

            <p>TESTEASSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS</p>
          </ModalContent>
        </Modal>
      ) : null}
    </>
  );
}
