import useTemplate from "@utils/hooks/useTemplate";
import clsx from "clsx";
import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import { detailCard } from "@containers/Birthday/Dashboard/_repositories/repositories";
import { useRouter } from "next/router";
import usePopupAlert from "@utils/hooks/usePopupAlert";
import LoadingPage from "src/fragments/LoadingPage";

export default function Preview({ containers }) {
  const [height, setHeight] = useState(0);
  const [loading, setLoading] = useState(true);
  const container = useRef(null);
  const Containers = containers;
  const { templateData, setTemplate } = useTemplate();
  const { setFailedAlert } = usePopupAlert();

  const {
    query: { link },
  } = useRouter();

  useEffect(() => {
    if (link) fetchDetail();
    setHeight(container.current.clientHeight);
  }, [link]);

  const fetchDetail = async () => {
    setLoading(true);
    try {
      const { data } = await detailCard(link);
      setTemplate(data);
    } catch (error) {
      setFailedAlert({ message: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className={clsx(
          "h-screen overflow-y-scroll",
          templateData?.config?.baseColor
        )}
      >
        <div className="h-full max-w-screen-sm mx-auto" ref={container}>
          <Containers height={height} />
        </div>
      </div>
      <LoadingPage open={loading} />
    </>
  );
}

Preview.propTypes = {
  containers: PropTypes.func.isRequired,
};
