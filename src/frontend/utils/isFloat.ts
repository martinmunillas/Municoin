export const isFloat = (value: string) => {
  return /^\d+(\.\d{0,8})?$/.test(value);
};
