import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { Button } from "./Button";
import { Column } from "./layout/Flex";

export const EmptyState = ({ onNewProject }: { onNewProject: () => void }) => (
  <Column className="items-center">
    <h2 className="font-semibold text-gray-900">Crie seu primeiro projeto</h2>
    <p className="text-sm text-gray-600">
      Você ainda não tem nenhum projeto criado.
    </p>
    <Button className="mt-6" onClick={onNewProject}>
      <PlusCircleIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
      Novo Projeto + Olá
    </Button>
  </Column>
);
