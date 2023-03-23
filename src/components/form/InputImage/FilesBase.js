import PropTypes from "prop-types";
import useUploader from "./hooks/useUploader";
import { CloudArrowUpIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { IKImage, IKUpload } from "imagekitio-react";
import { useRef } from "react";
import { Button } from "@material-tailwind/react";

const Files = (props) => {
  const inputRefTest = useRef(null);
  const ikUploadRefTest = useRef(null);
  const {
    label,
    name,
    id,
    onChange,
    className,
    error,
    helperText,
    value: val,
    username,
    type,
    disabled,
  } = props;

  const value = val === null ? undefined : val;

  const {
    onSuccess,
    onDeleteFile,
    loading,
    onUploadProgress,
    onUploadStart,
    onError,
  } = useUploader({
    value,
    onChange,
    username,
    type,
  });

  const previewProps = {
    loading: loading,
    onDelete: onDeleteFile,
    value,
  };

  const buttonUpload = (
    <Button
      className="flex items-center gap-2 justify-center"
      disabled={disabled || value}
      fullWidth
      onClick={() => inputRefTest.current.click()}
    >
      <CloudArrowUpIcon className="h-5 w-5" strokeWidth={2} />
      Upload Gambar
    </Button>
  );

  return (
    <div
      className={clsx(
        "relative w-full border rounded-md p-3 mb-[16px]",
        className,
        error ? "border-red-500" : "border-blue-gray-200"
      )}
    >
      {/* {ikUploadRefTest && (
        <Button onClick={() => ikUploadRefTest.current.abort()}>
          Abort request
        </Button>
      )} */}

      <div className="gap-4 flex flex-row justify-between">
        <div>
          <label className="subtitle-2">{label}</label>
          <p className="text-xs text-default-secondary whitespace-pre-line">
            {helperText}
          </p>
        </div>
        <IKUpload
          accept="image/png,image/jpg,image/jpeg"
          folder="/eidMubarakTest"
          id={id}
          inputRef={inputRefTest}
          name={name}
          onError={onError}
          onSuccess={onSuccess}
          onUploadProgress={onUploadProgress}
          onUploadStart={onUploadStart}
          ref={ikUploadRefTest}
          style={{ display: "none" }}
          tags={[username]}
        />
        <div className="hidden md:block">{buttonUpload}</div>
      </div>
      <ImagePreview {...previewProps} />
      <div className="block md:hidden mt-4">{buttonUpload}</div>
    </div>
  );
};

export default Files;

Files.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  value: PropTypes.object,
};

Files.defaultProps = {
  className: "",
  disabled: false,
  error: false,
  helperText: "",
  id: "",
  label: "",
  value: undefined,
};

const ImagePreview = ({ value, onDelete, loading }) => {
  return (
    <div className="mt-4">
      {!!value?.name ? (
        <div className="relative rounded-md overflow-hidden bg-blue-gray-200">
          {value?.url ? (
            <>
              <IKImage
                alt={value?.name}
                height={400}
                loading="lazy"
                lqip={{ active: true, quality: 20 }}
                path={value?.filePath}
                transformation={[
                  {
                    height: 400,
                    width: 400,
                  },
                ]}
                width={400}
              />
              <button
                className="absolute right-2 top-2  bg-blue-gray-800/50 rounded hover:bg-blue-500 hover:text-white transition-all disabled:bg-gray-400/50  disabled:text-gray-500 text-gray-200"
                disabled={loading}
                onClick={() => onDelete(value.fileId)}
                type="button"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </>
          ) : (
            <div className="aspect-square flex flex-col justify-center p-6">
              <div className="relative h-[6px] w-full rounded-full bg-white">
                <div
                  className="absolute left-0 right-0 h-full rounded-full bg-blue-500 transition-all duration-500"
                  style={{ width: `${value?.progress}%` }}
                />
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="aspect-square rounded-md overflow-hidden flex items-center justify-center border border-default">
          <p className="body-3 text-default-secondary text-center">
            Belum ada Foto
          </p>
        </div>
      )}
    </div>
  );
};

ImagePreview.propTypes = {
  loading: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  value: PropTypes.object.isRequired,
};
