export const setLocalData = (
  value: string,
  key: string = "x-access-token"
): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalData = (key: string = "x-access-token"): string | "" => {
  const result = localStorage.getItem(key);
  if (result) {
    return JSON.parse(result);
  }
  return "";
};

export const deleteSessionData = () => {
  localStorage.clear();
};
