import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Birthday from "@containers/Birthday";

export default function TemplatePreview() {
  const [height, setHeight] = useState(0);
  const container = useRef(null);

  useEffect(() => {
    setHeight(container.current.clientHeight);
  });

  return (
    <div className="sticky top-[6.35rem] rounded-lg drop-shadow-xl overflow-hidden border border-default">
      <div className="aspect-[9/17] overflow-auto" ref={container}>
        <Birthday height={height} />
      </div>
    </div>
  );
}

TemplatePreview.propTypes = {
  data: PropTypes.object.isRequired,
};
