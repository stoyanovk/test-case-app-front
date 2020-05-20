export const setLocalData = (key: string, value: string): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalData = (key: string): string | "" => {
  const result = localStorage.getItem(key);
  if (result) {
    return JSON.parse(result);
  }
  return "";
};

export const deleteSessionData = () => {
    localStorage.clear();
};
