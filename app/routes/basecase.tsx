import { Dialog } from "@headlessui/react";
import { Button } from "~/components/Button";
import { LogoAddProject } from "~/components/LogoAddProject";
import type { ModalProps } from "~/components/Modal";
import { Modal } from "~/components/Modal";
import { RigthArrow } from "~/components/RigthArrow";

type Props = ModalProps & {
  onSubmit: () => void;
  value: string;
  onChange: (value: string) => void;
};

export const NewProjectModal = ({
  value,
  onChange = () => {},
  isOpen,
  onClose,
  onSubmit,
}: Props) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <div className="flex flex-row">
      <LogoAddProject />
      <div className="ml-4 flex flex-col">
        <Dialog.Title className="text-lg font-semibold">
          Nova Projeto
        </Dialog.Title>

        <Dialog.Description className="text-sm text-gray-600">
          Crie seu projeto, adicione quantas arvores você quiser...
        </Dialog.Description>
      </div>
    </div>
    <h1 className="mt-11 text-sm font-medium">Nome do Projeto</h1>
    <input
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="mt-2 w-full rounded-lg border px-3 py-2"
      type="text"
      placeholder="Fazenda Mateiros"
    />
    <div className="mt-16 flex flex-row justify-end">
      <button
        onClick={onClose}
        className=" mr-3 flex h-11 w-44 items-center justify-center rounded-lg border bg-white font-semibold"
      >
        Cancel
      </button>
      <Button onClick={onSubmit} disabled={!value}>
        Proximo
        <div className="ml-3 flex items-center justify-center">
          <RigthArrow />
        </div>
      </Button>
    </div>
  </Modal>
);
