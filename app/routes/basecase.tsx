import { CloseIcon } from "~/components/CloseIcon";
import { LogoAddProject } from "~/components/LogoAddProject";
import { RigthArrow } from "~/components/RigthArrow";

export default function ModalInput() {
  return (
    <main className="px-6 py-6">
      <div className="flex flex-row">
        <LogoAddProject />
        <div className="ml-4 flex flex-col">
          <div className="flex flex-row justify-between">
            <h1 className="text-lg font-semibold">Nova Projeto</h1>
            <div className="flex items-center">
              <CloseIcon />
            </div>
          </div>

          <h2 className="text-sm">
            Crie seu projeto, adicione quantas arvores você quiser...
          </h2>
        </div>
      </div>
      <h1 className="mt-11 text-sm font-medium">Nome do Projeto</h1>
      <input
        className="mt-2 w-full rounded-lg border"
        type="text"
        placeholder="Fazenda Mateiros"
      />
      <div className="mt-16 flex flex-row justify-end">
        <button className=" mr-3 flex h-11 w-44 items-center justify-center rounded-lg border bg-white font-semibold">
          Cancel
        </button>
        <button className="flex h-11 w-44 items-center justify-center rounded-lg bg-amber-500 font-semibold text-white">
          Proximo
          <div className="ml-3 flex items-center justify-center">
            <RigthArrow />
          </div>
        </button>
      </div>
    </main>
  );
}
