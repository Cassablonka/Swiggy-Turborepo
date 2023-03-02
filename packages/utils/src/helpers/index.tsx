export const fetchAPI = async (url: string) => {
  const result = await fetch(url);
  return result.json();
};
