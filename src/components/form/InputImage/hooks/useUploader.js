import { Upload } from "upload-js";
import usePopupAlert from "@utils/hooks/usePopupAlert";
import { removeImage, updateImage } from "../_repositories/repositories";
import { generateUniqId } from "@utils/generator";
import { useState } from "react";
import { array } from "@utils/array";

const API_KEY = "public_FW25b5A9EF5je2kHvqrcXRixkTwP";

// const upload = Upload({ apiKey: API_KEY });

const useUploader = (props) => {
  const [loading, setLoading] = useState(false);
  const { value, onChange, link, type } = props;
  const { setFailedAlert } = usePopupAlert();

  // const onFileSelected = async (event) => {
  //   try {
  //     const file = event.target.files[0];
  //     const formData = new FormData();
  //     formData.append("images", file);

  //     const options = {
  //       method: "PUT",
  //       data: formData,
  //       url: "http://localhost:5000/image/testset",
  //       headers: {
  //         Authorization: getAccessToken(),
  //       },
  //     };

  //     const result = await fetch(options);
  //     console.log(result);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const updateValue = (obj) => {
    const newVal = [...value.filter((v) => v.id !== obj.id), obj];
    onChange(newVal);
  };

  const onFileSelected = async (event) => {
    setLoading(true);
    try {
      const file = event.target.files[0];
      if (!file?.name) return;
      const defaultValue = {
        fileName: file.name,
        fileUrl: "",
        filePath: "",
        size: file.size,
        mime: file.type,
        lastModified: file.lastModified,
        progress: 1,
        id: generateUniqId(),
        type,
      };
      updateValue(defaultValue);
      // const result = await upload.uploadFile(event.target.files[0], {
      //   onProgress: ({ progress }) =>
      //     updateValue({ ...defaultValue, progress }),

      //   path: {
      //     folderPath: `/uploads/suratbahagia/${link}`,
      //   },
      // });

      // const payload = {
      //   images: [
      //     ...value.filter((v) => !v?.progress),
      //     {
      //       ...defaultValue,
      //       lastModified: result.lastModified,
      //       fileUrl: result.fileUrl,
      //       filePath: result.filePath,
      //       progress: false,
      //     },
      //   ],
      // };
      // const { data } = await updateImage(link, payload);

      // onChange(data);
    } catch (error) {
      onChange([...value.filter((v) => v.progress)]);
      setFailedAlert({ message: error.message });
    } finally {
      setLoading(false);
    }
  };

  const onDeleteFile = async (filePath) => {
    setLoading(true);
    try {
      const { data } = await removeImage(link, filePath);
      onChange(data);
    } catch (error) {
      setFailedAlert({ message: error.message });
    } finally {
      setLoading(false);
    }
  };

  const visibleValue = array(value).filter((v) => v.type === type);
  return { onFileSelected, onDeleteFile, loading, visibleValue };
};

export default useUploader;
