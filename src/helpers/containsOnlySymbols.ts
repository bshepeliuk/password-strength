export const containsOnlySymbols = (value: string): boolean => {
  return /^[^a-zA-Z\d\s]+$/.test(value);
};
