export const isLessThanMin = (value: string): boolean => {
  const MIN_PASSWORD_VALUE = 8;
  return value.length < MIN_PASSWORD_VALUE;
};
