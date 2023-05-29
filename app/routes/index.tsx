import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { Column } from "~/components/layout/Flex";
import type { LoaderFunction } from "@remix-run/server-runtime";
import { NavLink, useLoaderData } from "@remix-run/react";
import { Logo } from "~/components/Logo";
import { Header } from "~/components/Header";
import { Button } from "~/components/Button";
import { NewProjectModal } from "./basecase";
import { FazendaModal } from "./caseimageproject";
import { ImageAddModal } from "./imageAddmodal";

const ProjectCard = ({ project }: { project: any }) => <></>;

const ProjectList = ({ projects }: { projects: [] }) => (
  <>
    {projects.map((project: any) => (
      <ProjectCard key={project.id} project={project} />
    ))}
  </>
);

const EmptyState = ({ onNewProject }: { onNewProject: () => void }) => (
  <Column className="items-center">
    <h2 className="font-semibold text-gray-900">Crie seu primeiro projeto</h2>
    <p className="text-sm text-gray-600">
      Você ainda não tem nenhum projeto criado.
    </p>
    <Button className="mt-6" onClick={onNewProject}>
      <PlusCircleIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
      Novo Projeto
    </Button>
  </Column>
);

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl: "https://placehold.co/256x256@3x.png",
};

const navigation = [
  { name: "Projetos", href: "projects", current: true },
  { name: "Relatórios", href: "reports", current: false },
];

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const loader: LoaderFunction = () => {
  return { projects: [] };
};

export default function Projects() {
  const { projects } = useLoaderData();
  const [showNewProjectModal, setShowNewProjectModal] = useState(false);
  const [showFazendaMateiroModal, setShowFazendaMateiroModal] = useState(false);
  const [showImageAddModal, setShowImageAddModal] = useState(false);

  const [projectName, setProjectName] = useState("");

  return (
    <div className="h-full">
      <Disclosure as="nav" className="border-b border-gray-200 bg-white">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 justify-between">
                <div className="flex">
                  <div className="flex flex-shrink-0 items-center">
                    <Logo />
                  </div>
                  <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "border-indigo-500 text-gray-900"
                            : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                          "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:items-center">
                  <button
                    type="button"
                    className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src={user.imageUrl}
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <NavLink
                                to={item.href}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                {item.name}
                              </NavLink>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
                <div className="-mr-2 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as={NavLink}
                    to={item.href}
                    className={classNames(
                      item.current
                        ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                        : "border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800",
                      "block border-l-4 py-2 pl-3 pr-4 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
              <div className="border-t border-gray-200 pb-3 pt-4">
                <div className="flex items-center px-4">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={user.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">
                      {user.name}
                    </div>
                    <div className="text-sm font-medium text-gray-500">
                      {user.email}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-3 space-y-1">
                  {userNavigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as={NavLink}
                      to={item.href}
                      className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Column className="mx-auto h-full max-w-7xl sm:px-6 lg:px-8">
        <Header
          title="Projetos"
          onNewProject={() => setShowNewProjectModal(true)}
        />
        <main className="h-full">
          <Column className="flex h-full flex-col items-center justify-center">
            {projects.length > 0 ? (
              <ProjectList projects={projects} />
            ) : (
              <EmptyState onNewProject={() => setShowNewProjectModal(true)} />
            )}
          </Column>

          <NewProjectModal
            value={projectName}
            onChange={setProjectName}
            isOpen={showNewProjectModal}
            onClose={() => setShowNewProjectModal(false)}
            onSubmit={(event) => {
              event.preventDefault();
              const target = event.target as typeof event.target & {
                projectName: { value: string };
              };

              setProjectName(target.projectName.value);

              setShowNewProjectModal(false);
              setShowFazendaMateiroModal(true);
            }}
          />

          <FazendaModal
            projectName={projectName}
            onNewTree={() => {
              setShowFazendaMateiroModal(false);
              setShowImageAddModal(true);
            }}
            isOpen={showFazendaMateiroModal}
            onClose={() => setShowFazendaMateiroModal(false)}
            onSubmit={() => {
              setShowFazendaMateiroModal(false);
              setShowImageAddModal(true);
            }}
          />

          <ImageAddModal
            isOpen={showImageAddModal}
            onClose={() => {
              setShowImageAddModal(false);
              setShowFazendaMateiroModal(true);
            }}
            onSubmit={() => {
              setShowFazendaMateiroModal(false);
              setShowImageAddModal(true);
            }}
          />
        </main>
      </Column>
    </div>
  );
}
