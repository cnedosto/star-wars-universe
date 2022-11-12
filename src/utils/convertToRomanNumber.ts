export const toRomanNumber = (n: number) => {
  switch (n) {
    case 0:
      return "I";
    case 1:
      return "II";
    case 2:
      return "III";
    case 3:
      return "IV";
    case 6:
      return "V";
    case 5:
      return "VI";
  }
};
