export default function (projects: any[], id: string | number) {
  const arrayLength = projects.length;
  const deletedProjectIndex = projects.findIndex(
    (project) => project.id === id
  );

  if (deletedProjectIndex === arrayLength - 1) {
    return projects[deletedProjectIndex - 1];
  }
  return projects[deletedProjectIndex + 1];
}
