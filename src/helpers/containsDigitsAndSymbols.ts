export const containsDigitsAndSymbols = (value: string): boolean => {
  return /^[\d\W]+$/.test(value);
};
