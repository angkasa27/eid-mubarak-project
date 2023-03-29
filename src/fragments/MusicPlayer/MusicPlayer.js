import ReactPlayer from "react-player/youtube";
import { MusicalNoteIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

export default function MusicPlayer({ className }) {
  const [play, setPlay] = useState(true);

  return (
    <>
      <ReactPlayer
        loop={true}
        playing={play}
        style={{ display: "none" }}
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
      />
      <div className="fixed bottom-0 w-full max-w-screen-sm z-50">
        <div className="relative">
          <button
            className={clsx(
              "absolute bottom-6 right-6 p-2 rounded-full z-50",
              className
            )}
            onClick={() => setPlay(!play)}
          >
            <MusicalNoteIcon className="w-6 h-6 text-blue-gray-800" />
          </button>
          {play && (
            <div className="absolute bottom-6 right-6 bg-white rounded-full animate-ping w-10 h-10" />
          )}
        </div>
      </div>
    </>
  );
}

MusicPlayer.propTypes = {
  className: PropTypes.string,
};

MusicPlayer.defaultProps = {
  className: "bg-white",
};
