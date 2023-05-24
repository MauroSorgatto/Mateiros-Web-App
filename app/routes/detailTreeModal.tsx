import { CloseIcon } from "~/components/CloseIcon";
import { RigthArrow } from "~/components/RigthArrow";
import { TreeCircleIcon } from "~/components/TreeIconCircle";

export default function ModalTreeDetails() {
  return (
    <main className="px-6 py-6">
      <div className="flex flex-row">
        <TreeCircleIcon />
        <div className="ml-4 flex flex-col">
          <div className="flex flex-row justify-between">
            <h1 className="text-lg font-semibold">Arvore 1</h1>
            <div className="flex items-center">
              <CloseIcon />
            </div>
          </div>
          <h2 className="text-sm">Adicione as informações sobre a arvore</h2>
        </div>
      </div>
      <div className="mt-10">
        <p>Altura da Arvore</p>
        <input
          className="mt-2 w-full rounded-lg border"
          type="text"
          placeholder="2,50 metros"
        />
        <p className="mt-3">Diametro da Arvore</p>
        <input
          className="mt-2 w-full rounded-lg border"
          type="text"
          placeholder="140cm"
        />
        <p className="mt-3">Saúde da Arvore</p>
        <input
          className="mt-2 w-full rounded-lg border"
          type="text"
          placeholder="Observação sobre a saúde da arvore"
        />
        <p className="mt-3">Ponto de Referencia</p>
        <input
          className="mt-2 w-full rounded-lg border"
          type="text"
          placeholder="Ao lado da arvore x"
        />
        <p className="mt-3">Observação</p>
        <input
          className="mt-2 w-full rounded-lg border"
          type="text"
          placeholder="..."
        />
      </div>
      <div className="mt-16 flex flex-row justify-end">
        <button className=" mr-3 flex h-11 w-44 items-center justify-center rounded-lg border bg-white">
          {"<"}- Cancel
        </button>
        <button className="flex h-11 w-44 items-center justify-center rounded-lg bg-amber-500 font-semibold text-white">
          Salvar
          <div className="ml-3 flex items-center justify-center">
            <RigthArrow />
          </div>
        </button>
      </div>
    </main>
  );
}
