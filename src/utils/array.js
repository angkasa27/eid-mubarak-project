export const array = (array, params) => {
  if (Array.isArray(array)) {
    return params?.value || array;
  }
  return params?.else || [];
};
