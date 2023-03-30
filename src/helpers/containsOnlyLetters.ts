export const containsOnlyLetters = (value: string): boolean => {
  return /^[a-zA-Z]+$/.test(value);
};
