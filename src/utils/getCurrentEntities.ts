export default function (array: any[], id: string) {
  const arrayLength = array.length;
  const deletedProjectIndex = array.findIndex((item) => item.id === id);

  if (deletedProjectIndex === arrayLength - 1) {
    return array[deletedProjectIndex - 1];
  }
  return array[deletedProjectIndex + 1];
}
