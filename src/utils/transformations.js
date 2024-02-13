export const capitalize = (string) => {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
};

export const formatPhoneNumber = (string) => {
  let string1 = string
    .split("")
    .filter((char) => !isNaN(char))
    .join("");
  let numArray = [
    string1.slice(0, 2),
    string1.slice(2, 4),
    string1.slice(4, 6),
    string1.slice(6),
  ];
  return numArray.join("-");
};
