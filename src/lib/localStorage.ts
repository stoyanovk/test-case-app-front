export const setLocalData = (
  key: string = "x-access-token",
  value: string
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
