export const containsAll = (value: string): boolean => {
  return /^(?=.*[a-zA-Z])(?=.*[\d])(?=.*[^\w\s]).+$/.test(value);
};
