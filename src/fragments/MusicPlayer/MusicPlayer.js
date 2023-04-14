import ReactPlayer from "react-player/youtube";
import { MusicalNoteIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

export default function MusicPlayer({ className, music }) {
  const [play, setPlay] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setPlay(!play);
    setClicked(true);
  };
  return (
    <>
      <ReactPlayer
        loop={true}
        playing={play}
        style={{ display: "none" }}
        url={music}
      />
      <div className="fixed bottom-0 w-full max-w-screen-sm z-50">
        <div className="relative">
          <button
            className={clsx(
              "absolute bottom-6 right-6 p-2 rounded-full z-50",
              className
            )}
            onClick={() => handleClick()}
          >
            <MusicalNoteIcon className="w-6 h-6 text-blue-gray-800" />
          </button>
          <div
            className={clsx(
              "absolute bottom-6 right-6 rounded-full animate-ping w-10 h-10",
              play ? className : !clicked && "bg-light-blue-400"
            )}
          />
        </div>
      </div>
    </>
  );
}

MusicPlayer.propTypes = {
  className: PropTypes.string,
  music: PropTypes.string,
};

MusicPlayer.defaultProps = {
  className: "bg-white",
  music: "",
};
