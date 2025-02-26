export const maskNumber = (number: string): string => {
  return number
    .slice(-4)
    .padStart(number.length, "*")
    .replace(/(.{4})/g, "$1 ");
};
