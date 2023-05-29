import { Dialog } from "@headlessui/react";
import { Button } from "~/components/Button";
import type { ModalProps } from "~/components/Modal";
import { Modal } from "~/components/Modal";
import { RigthArrow } from "~/components/RigthArrow";
import { TreeCircleIcon } from "~/components/TreeIconCircle";
import { UploadImage } from "~/components/UploadImage";

type Props = ModalProps & {
  onSubmit: () => void;
};

export const ImageAddModal = ({ isOpen, onClose, onSubmit }: Props) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <div className="flex flex-row">
      <TreeCircleIcon />
      <div className="ml-4 flex flex-col">
        <Dialog.Title className="text-lg font-semibold">Arvore 1</Dialog.Title>

        <Dialog.Description className="text-sm text-gray-600">
          Adicione as fotos das arvores
        </Dialog.Description>
      </div>
    </div>
    <UploadImage />

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
