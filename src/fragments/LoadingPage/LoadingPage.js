import PropTypes from "prop-types";
import { Transition } from "@headlessui/react";

export default function LoadingPage({ open }) {
  return (
    <Transition
      leave="ease-in-out duration-500"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      show={open}
    >
      <div className="absolute inset-0 bg-blue-gray-800 flex items-center justify-center">
        <p className="text-white body-1 animate-pulse">Memuat Halaman...</p>
      </div>
    </Transition>
  );
}

LoadingPage.propTypes = {
  open: PropTypes.bool,
};

LoadingPage.defaultProps = {
  open: true,
};
