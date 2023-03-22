import { Upload } from "upload-js";
const upload = Upload({ apiKey: "public_FW25b5A9EF5je2kHvqrcXRixkTwP" }); // Your real API key.

export const thumbnail = (filePath, square = true) => {
  const transformation = square ? "thumbnail-square" : "thumbnail";
  const fileUrl = upload.url(filePath, { transformation });
  return fileUrl;
};
