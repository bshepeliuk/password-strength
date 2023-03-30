export const containsLettersAndSymbols = (value: string): boolean => {
  return /^[a-zA-Z\d\W]+$/.test(value);
};
