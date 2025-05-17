export const FormatNumber = (value: string) => {
  const number = parseInt(value.replace(/[^0-9]/g, ""), 10);
  return isNaN(number) ? "0" : number.toLocaleString();
};
