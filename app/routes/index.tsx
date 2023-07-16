import { useState } from "react";
import { Column } from "~/components/layout/Flex";
import type { LoaderFunction } from "@remix-run/server-runtime";
import { useLoaderData } from "@remix-run/react";
import { Header } from "~/components/Header";
import { CreateProjectModal } from "../components/dialog/CreateProjectModal";
import { ProjectDetailsModal } from "../components/dialog/ProjectDetailsModal";
import { TreeImagesModal } from "../components/dialog/TreeImagesModal";
import { ProjectList } from "~/components/ProjectList";
import { TopNavbar } from "~/components/TopNavbar";
import { EmptyState } from "~/components/ProjectListEmptyState";

export const loader: LoaderFunction = () => {
  return { projects: [] };
};

export default function Projects() {
  const { projects } = useLoaderData();
  const [showNewProjectModal, setShowNewProjectModal] = useState(false);
  const [showProjectDetailsModal, setShowProjectDetailsModal] = useState(false);
  const [showImageAddModal, setShowImageAddModal] = useState(false);
  const [projectName, setProjectName] = useState("");

  return (
    <div className="h-full">
      <TopNavbar />

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

          <CreateProjectModal
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
              setShowProjectDetailsModal(true);
            }}
          />

          <ProjectDetailsModal
            projectName={projectName}
            onNewTree={() => {
              setShowProjectDetailsModal(false);
              setShowImageAddModal(true);
            }}
            isOpen={showProjectDetailsModal}
            onClose={() => setShowProjectDetailsModal(false)}
            onSubmit={() => {
              setShowProjectDetailsModal(false);
              setShowImageAddModal(true);
            }}
          />

          <TreeImagesModal
            isOpen={showImageAddModal}
            onClose={() => {
              setShowImageAddModal(false);
              setShowProjectDetailsModal(true);
            }}
            onSubmit={() => {
              setShowProjectDetailsModal(false);
              setShowImageAddModal(true);
            }}
          />
        </main>
      </Column>
    </div>
  );
}
