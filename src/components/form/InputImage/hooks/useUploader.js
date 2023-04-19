import usePopupAlert from "@utils/hooks/usePopupAlert";
import { removeImage, updateImage } from "../_repositories/repositories";
import { useState } from "react";

const useUploader = (props) => {
  const [loading, setLoading] = useState(false);
  const { value, onChange, username, type } = props;
  const { setFailedAlert } = usePopupAlert();

  const onUploadStart = (evt) => {
    setLoading(true);
    const file = evt.target.files[0];

    const defaultValue = {
      name: file.name,
      size: file.size,
      filePath: "",
      url: "",
      fileType: "",
      height: undefined,
      width: undefined,
      progress: 1,
    };
    onChange(defaultValue);
  };

  const onUploadProgress = (progress) => {
    let running = Math.round((progress.loaded * 100) / progress.total) || 1;
    if (running % 10 === 0) {
      onChange({ ...value, progress: running });
    }
  };

  const onError = (error) => {
    setLoading(false);
    onChange(undefined);
    setFailedAlert({ message: error.message });
  };

  const onSuccess = async (res) => {
    setLoading(true);
    try {
      const { data } = await updateImage(username, res);
      onChange(data);
    } catch (error) {
      onChange(undefined);
      setFailedAlert({ message: error.message });
    } finally {
      setLoading(false);
    }
  };

  const onDeleteFile = async (fileId) => {
    setLoading(true);
    try {
      const { data } = await removeImage(username, { fileId });
      onChange(data);
    } catch (error) {
      setFailedAlert({ message: error.message });
    } finally {
      setLoading(false);
    }
  };

  const validateFile = (file) => {
    if (file.size > 5000000) {
      setFailedAlert({ message: "Ukuran foto maksimal 5MB" });
      return false;
    }
    return true;
  };

  return {
    onDeleteFile,
    loading,
    onSuccess,
    onUploadProgress,
    onUploadStart,
    onError,
    validateFile,
  };
};

export default useUploader;
