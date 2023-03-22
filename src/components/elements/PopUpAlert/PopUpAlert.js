import { Alert } from "@material-tailwind/react";
import usePopupAlert from "@utils/hooks/usePopupAlert";
import { useEffect } from "react";

export default function PopUpAlert() {
  const { alertData, o } = usePopupAlert();
  const {
    icon,
    message,
    onClose = () => {},
    color,
    autoClose = 5000,
  } = alertData;

  useEffect(() => {
    if (!!message && autoClose > 0) {
      setTimeout(() => {
        onClose();
      }, autoClose);
    }
  }, [message]);

  return (
    <div className="fixed top-0 z-50 w-full">
      <div className="relative">
        <div className="absolute top-24 w-full">
          <div className="container px-4">
            <Alert
              animate={{
                mount: { y: 0 },
                unmount: { y: 100 },
              }}
              color={color}
              dismissible={{
                onClose,
              }}
              icon={icon}
              show={!!message}
            >
              {message}
            </Alert>
          </div>
        </div>
      </div>
    </div>
  );
}
