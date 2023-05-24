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
            <h1 className="text-lg font-semibold">Fazenda Mateiros</h1>
            <div className="flex items-center">
              <CloseIcon />
            </div>
          </div>
          <h2 className="text-sm">Adicione arvores para serem avaliadas</h2>
        </div>
      </div>
      <div className="mt-10 flex flex-row justify-between">
        <div className="flex h-48 w-48 items-center justify-center bg-amber-50">
          <h1 className=" text-xs text-amber-600">
            Adicione a primeira arvore
          </h1>
        </div>
        <div className="flex h-48 w-48 items-center justify-center bg-amber-50">
          <h1 className="flex items-center justify-center text-xs text-amber-600">
            Adicione a primeira arvore
          </h1>
        </div>
        <div className="flex h-48 w-48 items-center justify-center bg-amber-50">
          <h1 className="flex items-center justify-center text-xs text-amber-600">
            Adicione a primeira arvore
          </h1>
        </div>
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
    </main>
  );
}
