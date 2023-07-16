const ProjectCard = ({ project }: { project: any }) => <></>;

export const ProjectList = ({ projects }: { projects: [] }) => (
  <>
    {projects.map((project: any) => (
      <ProjectCard key={project.id} project={project} />
    ))}
  </>
);
