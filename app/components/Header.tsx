import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { SearchInput } from "./SearchInput";
import { Button } from "./Button";

export const Header = ({
  title,
  onNewProject,
}: {
  title: string;
  onNewProject: () => void;
}) => {
  return (
    <div className="my-8 flex items-center justify-between">
      <div className="min-w-0 flex-1">
        <h2 className="text-3xl font-semibold text-gray-900 sm:truncate sm:tracking-tight">
          {title}
        </h2>
        <p className="text-gray-600">Gerencie os seus projetos aqui</p>
      </div>
      <div className="mt-4 flex flex-row items-center justify-center md:ml-4 md:mt-0">
        <Button className="mr-2" onClick={onNewProject}>
          <PlusCircleIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
          Novo Projeto
        </Button>
        <SearchInput />
      </div>
    </div>
  );
};
