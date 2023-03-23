export const imageKitLoader = ({ src, width, quality }, custom) => {
  if (src[0] === "/") src = src.slice(1);
  const params = [`w-${width}`];
  if (quality) {
    params.push(`q-${quality}`);
  }
  if (custom) {
    params.push(custom);
  }
  const paramsString = params.join(",");
  let urlEndpoint = "https://ik.imagekit.io/sd3osdoco/";
  if (urlEndpoint[urlEndpoint.length - 1] === "/")
    urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1);
  return `${urlEndpoint}/${src}?tr=${paramsString}`;
};
