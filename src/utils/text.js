export const capitalize = (a) => {
  let b = a.toLowerCase();
  let split = b.split("_");

  if (split.length > 0) {
    let res = split.map((v) => {
      return v.charAt(0).toUpperCase() + v.slice(1);
    });

    res = res.join(" ");
    return res
      .split(" ")
      .map((v) => v.charAt(0).toUpperCase() + v.slice(1))
      .join(" ");
  }

  return b.charAt(0).toUpperCase() + b.slice(1);
};

export const getFirstWord = (val) => {
  if (typeof val === "string") {
    let str = val?.split(" ");
    return str[0];
  }
  return "";
};
