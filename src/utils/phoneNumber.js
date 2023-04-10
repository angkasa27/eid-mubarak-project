export const normalizePhoneNumber = (text = "") => {
  let globNum = text.startsWith("+62");
  let globNumb = text.startsWith("08");
  let localNum = text.startsWith("8");
  let etc = text.startsWith("062");

  if (globNum) {
    return text.replace(text.slice(0, 3), "62");
  }
  if (globNumb) {
    return text.replace(text.slice(0, 1), "62");
  }
  if (localNum) {
    return text.replace(text.slice(0, 1), "628");
  }
  if (etc) {
    return text.replace(text.slice(0, 3), "62");
  }

  return text;
};
