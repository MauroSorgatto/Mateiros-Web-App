import { Dialog } from "@headlessui/react";
import { ImageDropzone } from "~/components/ImageDropzone";
import { LogoAddProject } from "~/components/LogoAddProject";
import type { ModalProps } from "~/components/Modal";
import { Modal } from "~/components/Modal";
import { RigthArrow } from "~/components/RigthArrow";

type Props = ModalProps;

export const ModalInput = ({ isOpen, onClose }: Props) => (
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
      <button className=" mr-3 flex h-11 w-44 items-center justify-center rounded-lg border bg-white">
        Cancel
      </button>
      <button className="flex h-11 w-44 items-center justify-center rounded-lg bg-amber-500 font-semibold text-white">
        Proximo
        <div className="ml-3 flex items-center justify-center">
          <RigthArrow />
        </div>
      </button>
    </div>
  </Modal>
);
