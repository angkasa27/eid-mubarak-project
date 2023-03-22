import { useContext } from "react";
import PopupAlertContext from "src/contexts/PopupAlert";

const usePopupAlert = () => {
  const { data: alertData, setData } = useContext(PopupAlertContext);

  const _onClose = (customClose) => () => {
    if (customClose) {
      customClose();
    }

    setData({
      message: "",
      color: "blue",
    });
  };

  const setSuccessAlert = (property) => {
    const { message, onClose, icon, autoClose } = property;

    setData({
      icon,
      message,
      onClose: _onClose(onClose),
      color: "green",
      autoClose,
    });
  };

  const setFailedAlert = (property) => {
    const { message, onClose, icon, autoClose } = property;

    setData({
      icon,
      message,
      onClose: _onClose(onClose),
      color: "red",
      autoClose,
    });
  };

  const setAlert = (property) => {
    const {
      message = "Please Wait",
      onClose,
      icon,
      autoClose,
    } = property || {};

    setData({
      icon,
      message,
      onClose: _onClose(onClose),
      color: "blue",
      autoClose,
    });
  };

  return {
    setFailedAlert,
    setAlert,
    setSuccessAlert,
    alertData,
  };
};

export default usePopupAlert;
