import { Dialog } from "@headlessui/react";
import { Button } from "~/components/Button";
import { ImageDropzone } from "~/components/ImageDropzone";
import { LogoAddProject } from "~/components/LogoAddProject";
import type { ModalProps } from "~/components/Modal";
import { Modal } from "~/components/Modal";
import { RigthArrow } from "~/components/RigthArrow";

type Props = ModalProps & {
  onSubmit: () => void;
};

export const FazendaModal = ({ isOpen, onClose, onSubmit }: Props) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <div className="flex flex-row">
      <LogoAddProject />
      <div className="ml-4 flex flex-col">
        <Dialog.Title className="text-lg font-semibold">
          Fazenda Mateiros
        </Dialog.Title>
        <Dialog.Description className="text-sm">
          Adicione arvores para serem avaliadas
        </Dialog.Description>
      </div>
    </div>
    <div className="mt-10 flex flex-row justify-between">
      <ImageDropzone />
      <ImageDropzone disabled />
      <ImageDropzone disabled />
    </div>
    <div className="mt-16 flex flex-row justify-end">
      <button
        onClick={onClose}
        className=" mr-3 flex h-11 w-44 items-center justify-center rounded-lg border bg-white font-semibold"
      >
        Cancel
      </button>
      <Button onClick={onSubmit}>
        Proximo
        <div className="ml-3 flex items-center justify-center">
          <RigthArrow />
        </div>
      </Button>
    </div>
  </Modal>
);
